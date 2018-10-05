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
