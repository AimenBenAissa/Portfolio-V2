$(document).ready(function(){
  smoothScrool(1000);
  galleryScroll();
  //more button shake
  setInterval(function(){
  $('.gallery .more').velocity('callout.shake');
  }, 10000);
  galleryToggle();
  blogScroll();
  $("#contact h1").fitText(1.5, { minFontSize: '10px', maxFontSize: '60px' });
  $(".animated-text").fitText(1.5, { minFontSize: '35px', maxFontSize: '50px' });
  $(".intro-text").fitText(1.5, { minFontSize: '50px', maxFontSize: '80px' });
});



//smooth scrolling method
function smoothScrool (duration){
  $('a[href^="#"]').on('click', function(event){
    var target = $( $(this).attr('href'));
    if(target.length){
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, duration)
    }
  });
}

//gallery scroll
function galleryScroll(){

$('nav a').click(function(){

  if( $(this).hasClass('street')){
    $('.notShowing').hide("fast");
    $('nav a').removeClass('active');
    $('.street').addClass('active');
    $('.belt').animate({"left": "-100%"}, 700);
  }else if ($(this).hasClass('fineart')) {
    $('.notShowing').hide("fast");
    $('nav a').removeClass('active');
    $('.fineart').addClass('active');
    $('.belt').animate({"left": "-200%"}, 700);
  }else if ($(this).hasClass('other')) {
    $('.notShowing').hide("fast");
    $('nav a').removeClass('active');
    $('.other').addClass('active');
    $('.belt').animate({"left": "-300%"}, 700);
  }else if ($(this).hasClass('events')){
    $('.notShowing').hide("fast");
    $('nav a').removeClass('active');
    $('.events').addClass('active');
    $('.belt').animate({"left": "0%"}, 700);
  }

});
}

function blogScroll(){
  $('.full-content-wrap').hide();

  $('.allposts').click(function(){
    $('.blog-belt').animate({"left":"-100%"}, 700);
    $('.full-content-wrap').show("slow");

  });
  $('.return').click(function(){
    $('.blog-belt').animate({"left":"0%"}, 700);
    $('.full-content-wrap').hide("slow");

  });
}

//expand gallery
function galleryToggle() {
$('.notShowing').hide();
$('.expandless').hide();
$('#more-gallery img').click(function(){
  $('.notShowing').slideToggle("slow");
  $('.expandless').toggle("fast");
  $('.expandmore').toggle("fast");
});
}


//fittext
(function( $ ){

  $.fn.fitText = function( kompressor, options ) {

    // Setup options
    var compressor = kompressor || 1,
        settings = $.extend({
          'minFontSize' : Number.NEGATIVE_INFINITY,
          'maxFontSize' : Number.POSITIVE_INFINITY
        }, options);

    return this.each(function(){

      // Store the object
      var $this = $(this);

      // Resizer() resizes items based on the object width divided by the compressor * 10
      var resizer = function () {
        $this.css('font-size', Math.max(Math.min($this.width() / (compressor*10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)));
      };

      // Call once to set.
      resizer();

      // Call on resize. Opera debounces their resize by default.
      $(window).on('resize.fittext orientationchange.fittext', resizer);

    });

  };

})( jQuery );
