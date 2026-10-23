(() => {
  const compactNumber = new Intl.NumberFormat('en-US', {
    notation: 'compact',
    maximumSignificantDigits: 3,
  });

  document.querySelectorAll('.badge-downloads').forEach(async (link) => {
    const image = link.querySelector('img');
    try {
      const model = new URL(link.href);
      if (model.origin !== 'https://huggingface.co') return;
      const models = (link.dataset.hfModels || model.pathname.slice(1)).split(',');
      const counts = await Promise.all(models.map(async (id) => {
        const api = new URL('/api/models/' + id, model.origin);
        api.searchParams.set('expand[]', 'downloadsAllTime');
        const response = await fetch(api, {
          credentials: 'omit',
          signal: AbortSignal.timeout(8000),
        });
        if (!response.ok) throw new Error('Model statistics unavailable');
        const { downloadsAllTime: count } = await response.json();
        if (!Number.isSafeInteger(count) || count < 0) {
          throw new Error('Invalid model download count');
        }
        return count;
      }));
      const count = counts.reduce((sum, value) => sum + value, 0);
      if (!Number.isSafeInteger(count) || count < 0) return;

      const compact = compactNumber.format(count).replace('K', 'k');
      const label = link.dataset.downloadsLabel || 'HF total downloads';
      const badge = 'https://img.shields.io/badge/'
        + encodeURIComponent(label) + '-'
        + encodeURIComponent(compact) + '-blue?style=social';
      const breakdown = models.map((id, i) => id + ': ' + counts[i].toLocaleString('en-US'));
      const exactTitle = (link.dataset.downloadsTitle || link.title)
        + ': ' + count.toLocaleString('en-US')
        + (models.length > 1 ? ' (' + breakdown.join('; ') + ')' : '');
      const preview = new Image();
      preview.onload = () => {
        image.src = badge;
        image.alt = label + ': ' + compact;
        link.title = exactTitle;
        link.setAttribute('aria-label', exactTitle);
        link.dataset.downloadsAllTime = String(count);
        link.dataset.downloadsCompact = compact;
      };
      preview.src = badge;
    } catch (_) {
      // Keep the existing live numeric badge if fetching or formatting fails.
    }
  });
})();
