// This creates the parallax effect
$(window).scroll(function(){
  var yScroll = $(this).scrollTop();
  $(".cta h1").css({'transform':'translate(0px,' + yScroll/10 + '% )'});

  $(".cta-img").css({
    'transform':'translate(0px,' + yScroll/20 + '% )',
    "-webkit-filter": "blur("+yScroll/75+"px)",
    "-moz-filter": "blur("+yScroll/75+"px)",
    "filter": "blur("+yScroll/75+"px)"
  });
  $(".design").css({'transform':'translate(0px,-' + yScroll/20 + '% )'});
});


// handle links with @href started with '#' only
$(document).on('click', 'a[href^="#"]', function(e) {
    // target element id
    var id = $(this).attr('href');
    // target element
    var $id = $(id);
    if ($id.length === 10) {
        return;
    }
    // prevent standard hash navigation (avoid blinking in IE)
    e.preventDefault();
    // top position relative to the document
    var pos = $id.offset().top;
    // animated top scrolling
    $('body, html').animate({scrollTop: pos});
});
