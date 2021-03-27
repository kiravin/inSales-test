$(document).ready(function() {
  // rating init 
  $(".rating").rateYo({
    rating: 4.5,
    starWidth: "12px",
    spacing   : "1px",

    onInit: function (rating) {
      $('.current-rating').text(rating);
    },
    onSet: function (rating) {
      $('.current-rating').text(rating);
    },
    
    starSvg: '<svg width="14" height="13" viewBox="0 0 14 13" fill="#000000" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" clip-rule="evenodd" d="M6.99996 10.5017L3.25056 12.4728L3.96663 8.29781L0.933298 5.34104L5.12526 4.73191L6.99996 0.93335L8.87467 4.73191L13.0666 5.34104L10.0333 8.29781L10.7494 12.4728L6.99996 10.5017Z"/> </svg>',
    normalFill: "#bfc1c3",
    ratedFill: "#ffa34d"
  });  

  // galleryThumbs init 
  var galleryThumbs = new Swiper('.gallery-thumbs', {
    spaceBetween: 4,
    slidesPerView: 5,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
  });


  // swiper init 
  const swiper = new Swiper('.gallery-top', {
    // Default parameters
    slidesPerView: 1,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    // Responsive breakpoints
    breakpoints: {      
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true
        },
      },
      // when window width is >= 767px
      767: {
        slidesPerView: 1,
        spaceBetween: 0
      }      
    },
    thumbs: {
        swiper: galleryThumbs
      }
  });    

});