/*
* Greedy Navigation
*
* http://codepen.io/lukejacksonn/pen/PwmwWV
*
*/

var $nav = $('#site-nav');
var $btn = $('#site-nav-btn');
var $vlinks = $('#site-nav .visible-links');
var $hlinks = $('#site-nav-hidden');

var breaks = [];

function updateNav() {

  var availableSpace = $nav.width();

  if($vlinks.width() > availableSpace) {

    breaks.push($vlinks.width());

    $vlinks.children().last().prependTo($hlinks);

    if($btn.hasClass('hidden')) {
      $btn.removeClass('hidden');
    }

  } else {

    if(availableSpace > breaks[breaks.length-1]) {

      $hlinks.children().first().appendTo($vlinks);
      breaks.pop();
    }

    if(breaks.length < 1) {
      $btn.addClass('hidden');
      $hlinks.addClass('hidden');
    }
  }

  $btn.attr("count", breaks.length);

  if($vlinks.width() > availableSpace) {
    updateNav();
  }

}

$(window).resize(function() {
  updateNav();
});

$btn.on('click', function() {
  $hlinks.toggleClass('hidden');
  $(this).toggleClass('close');
});

updateNav();