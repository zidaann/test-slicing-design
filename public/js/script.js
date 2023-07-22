const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    breakpoints: {
      300: {
        slidesPerView: 1,
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
    pagination: {
      el: '.swiper-pagination',
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    scrollbar: {
      enabled: false
    },
  });