$(document).ready(function () {
    // product Section Silder
    $('#product-carousel').owlCarousel({
        loop: true,
        margin: 0,
        responsiveClass: true,
        autoplay: true,
        nav: true,
        dots: false,
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 4,
            }
        }
    });

})