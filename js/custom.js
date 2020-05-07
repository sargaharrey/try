

$(function() {



 

 // scroll-plugin
  $('body').niceScroll({
    cursorwidth: "15px",
    cursorcolor: "#4A4023",
     zindex:'10000000000000000000000',
  });

  // background-image

var pageSection = $('section, .bg-img')
pageSection.each(function(index){
  if($(this).attr('data-background')){
    $(this).css('background-image','url(' + $(this).data('background') + ')')
  }
})
// smooth-scroll
$.scrollIt({
  upKey: 38,                // key code to navigate to the next section
  downKey: 40,              // key code to navigate to the previous section
  easing: 'swing',          // the easing function for animation
  scrollTime: 600,          // how long (in ms) the animation takes
  activeClass: 'active',    // class given to the active nav element
  onPageChange: null,       // function(pageIndex) that is called when page is changed
  topOffset: 0            // offste (in px) for fixed top navigation
});

})


$(document).ready(function(){
 


  $('.nav-item a').click(function () {
    $('.nav-link').removeClass("active");
    $(this).addClass("active");
  });



  $('.nav-link').click(function (e) {
    e.preventDefault();

    $('html, body').animate({
      scrollTop: $('.' + $(this).data('scroll')).offset().top
    }, 500)

  })


  // gallery-popup
  $('.Gallery').magnificPopup({
    delegate: '.popimg',
    zoom: {
      enabled: true
    },
    type: 'image',
    gallery: {
      enabled: true
    }
  });

  $.scrollIt({
    upKey: 38,                // key code to navigate to the next section
    downKey: 40,              // key code to navigate to the previous section
    easing: 'swing',          // the easing function for animation
    scrollTime: 600,          // how long (in ms) the animation takes
    activeClass: 'active',    // class given to the active nav element
    onPageChange: null,       // function(pageIndex) that is called when page is changed
    topOffset: 0            // offste (in px) for fixed top navigation
  });


  // $(window).scroll(function (i) {
  //   if ($(document).scrollTop() > $('.About').offset().top) {
  //     $('.nav-link').removeClass('active')
  //     $('.nav-link:eq(1)').addClass('active')
  //   }
  //   else{
  //     $('.nav-link:eq(0)').addClass('active')
  //     $('.nav-link:eq(1)').removeClass('active')
  //   }
  // })

// gallery-popup
  $('.gallery').magnificPopup({
      delegate: '.popimg',
      zoom:{
        enabled:true
      },
      type: 'image',
      gallery: {
          enabled: true
      }
  });

// carousel-slider
  $('.header .owl-carousel').owlCarousel({

    items: 1,
    loop:true,
    margin: 0,
    autoplay:true,
    autoplayTimeout:6000,
    autoplayHoverPause:false,
    smartSpeed:700,
    dots:false,
    nav: true,
    navText: ['<span class="fas fa-chevron-left fa-2x"></span>', '<span class="fas fa-chevron-right fa-2x"></span>'],
   
    
});

// owl carousel
$('.says .owl-carousel').owlCarousel({
    
    loop:true,
    items:1
})


})



$(document).scroll(function(){




   if($(window).scrollTop() > 80) {
     $('.nav-custom').addClass('nav-scroll');
       $('.navbar-nav .nav-link').css({'color': '#000'})
   }
   else{
     $('.nav-custom').removeClass('nav-scroll');
       $('.navbar-nav .nav-link').css({'color': 'white'})
   }





})
