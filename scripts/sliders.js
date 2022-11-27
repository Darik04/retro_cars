$(document).ready(function(){
  
  $('.section_main').slick({
    dots: false,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 10000,
    slidesToScroll: 1,
    fade: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
        }
      },
      {
        breakpoint: 1000,
        settings: {
        }
      },
      {
        breakpoint: 700,
        settings: {
        }
      }
    ]
  });






  $('.news_slider').slick({
    dots: false,
    speed: 500,
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });


});