$(document).ready(function(){

    // OPEN HEADER
    window.onscroll = function HeaderFixed(){
  
      var header = document.querySelector('.nav-float');
      var sectionMain = document.querySelector('.section_main');

  
      if (window.pageYOffset > 80) {
        sectionMain.classList.add('mt-75px')
        header.classList.add('open');

      }else{
        sectionMain.classList.remove('mt-75px')
        header.classList.remove('open');
      }
  
  };



  $('.toggle').on('click', function() {
    $('.mobile-menu').toggleClass('mobile_nav_active');
    $('.toggle').toggleClass('opened');

  });

  $('.toggle-popup').on('click', function() {
    $('.popup-wrapper').toggleClass('popup-opened');
  });

  
});