window.HELP_IMPROVE_VIDEOJS = false;


$(document).ready(function() {
    // Check for click events on the navbar burger icon

    var options = {
		slidesToScroll: 1,
		slidesToShow: 1,
		loop: true,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 5000,
    }

	// Initialize all div with carousel class
    var carousels = bulmaCarousel.attach('.carousel', options);
	
    bulmaSlider.attach();

    // Custom carousel for reward hacking cases
    let currentCase = 0;
    const totalCases = 5;
    let isAnimating = false;
    
    function slideToCase(newCase, direction = 'next') {
        if (isAnimating || newCase === currentCase) return;
        
        isAnimating = true;
        const $items = $('#hack-cases-carousel .carousel-item');
        const $currentItem = $items.eq(currentCase);
        const $newItem = $items.eq(newCase);
        
        // Remove all animation classes
        $items.removeClass('is-active slide-out-left slide-in-right');
        
        // Set up the new item for animation
        if (direction === 'next') {
            $newItem.addClass('slide-in-right');
        } else {
            $newItem.css('transform', 'translateX(-100%)');
        }
        
        // Force reflow
        $newItem[0].offsetHeight;
        
        // Start animation
        if (direction === 'next') {
            $currentItem.addClass('slide-out-left');
            $newItem.addClass('is-active').removeClass('slide-in-right');
        } else {
            $currentItem.css('transform', 'translateX(100%)');
            $newItem.addClass('is-active').css('transform', 'translateX(0)');
        }
        
        // Update current case and UI
        currentCase = newCase;
        updateUI();
        
        // Reset animation state after transition
        setTimeout(() => {
            isAnimating = false;
            $items.removeClass('slide-out-left slide-in-right');
            $items.not('.is-active').css('transform', '').css('opacity', '');
        }, 600);
    }
    
    function updateUI() {
        // Update counter
        $('#case-counter').text(`${currentCase + 1} / ${totalCases}`);
        
        // Update button states
        $('#prev-case').prop('disabled', currentCase === 0);
        $('#next-case').prop('disabled', currentCase === totalCases - 1);
    }
    
    function updateCaseDisplay() {
        console.log('Updating case display, currentCase:', currentCase);
        
        // Hide all carousel items in the hack cases carousel specifically
        $('#hack-cases-carousel .carousel-item').removeClass('is-active slide-out-left slide-in-right');
        console.log('Found carousel items:', $('#hack-cases-carousel .carousel-item').length);
        
        // Show current item
        $('#hack-cases-carousel .carousel-item').eq(currentCase).addClass('is-active');
        console.log('Activated item:', currentCase);
        
        updateUI();
    }
    
    // Wait for DOM to be fully loaded before initializing
    setTimeout(function() {
        console.log('Initializing carousel...');
        updateCaseDisplay();
    }, 100);
    
    // Previous button click
    $('#prev-case').click(function() {
        console.log('Previous button clicked');
        if (!isAnimating && currentCase > 0) {
            slideToCase(currentCase - 1, 'prev');
        }
    });
    
    // Next button click
    $('#next-case').click(function() {
        console.log('Next button clicked');
        if (!isAnimating && currentCase < totalCases - 1) {
            slideToCase(currentCase + 1, 'next');
        }
    });
    
    // Add keyboard navigation
    $(document).keydown(function(e) {
        if ($('#hack-cases-carousel').is(':visible') && !isAnimating) {
            if (e.keyCode === 37 && currentCase > 0) { // Left arrow
                slideToCase(currentCase - 1, 'prev');
            } else if (e.keyCode === 39 && currentCase < totalCases - 1) { // Right arrow
                slideToCase(currentCase + 1, 'next');
            }
        }
    });

})
