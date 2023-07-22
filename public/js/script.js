const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    // loop: true,
    breakpoints: {
      300: {
        slidesPerView: 1,
        // spaceBetween: 200,
      },
      428: {
        slidesPerView: 1,
        spaceBetween: 150,
      },
      768:{
        slidesPerView: 3,
        spaceBetween: 120,
        centeredSlides: true,
      },
      820:{
        slidesPerView: 3,
        spaceBetween: 120,
        centeredSlides: true,
      },
      1024: {
        slidesPerView: 3,
        centeredSlides: true,
        spaceBetween: 20,
      },
    },
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    // And if we need scrollbar
    scrollbar: {
      enabled: false
    },
  });