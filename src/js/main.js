jQuery(document).ready(function ($) {
    try {
        window.menu_slider = new Swiper('.menu__slider', {
            slidesPerView: 1,
            spaceBetween: 20,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            breakpoints: {
                1199: {
                    slidesPerView: 4,
                },
                1024: {
                    slidesPerView: 3,
                },
                620: {
                    slidesPerView: 2,
                }
            }
        })
    } catch (err) {
        window.menu_slider = false;
        
    }
})