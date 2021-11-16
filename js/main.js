/*Запуск слайдера*/
$('.topslider .topslider__list.owl-carousel').owlCarousel({
    loop: true,
    margin: 0,
    autoHeight: false,
    mouseDrag: true,
    nav: false,
    dots: true,
    lazyLoad: true,
    items: 4,
    autoplay: true,
    smartSpeed: 900,
    autoplayTimeout: 3000
  })


  $('.hits .owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    autoHeight: true,
    mouseDrag: true,
    nav:false,
    dots:true,
    lazyLoad: true,
    autoplay: false,
    nav: false,
    smartSpeed: 900,
    autoplayTimeout: 1000,
    responsive: {
      0:{items:2,margin: 30},
      768:{items:3,margin: 30},
      991:{items:4,margin: 30},
    },
    nav: true, 
})

  
  // Наверх
  $(document).ready(function() {
    $(".toTop").hide();
    $(window).scroll(function() {
      if ($(this).scrollTop() > 100) {
        $('.toTop').fadeIn();
      } else {
        $('.toTop').fadeOut();
      }
    });
    $('.toTop').click(function() {
      $('html').animate({
        scrollTop: 0
      }, 800);
      return false;
    });
  });

  $(document).ready(function() {
    $(".menuToggle").click(function() {
      $(this).toggleClass("active");
      $('.menu').slideToggle(300, function(){
        if($(this).css('display') === "none"){
          $(this).removeAttr('style');
        }
      });
    });
  });

 
  
  