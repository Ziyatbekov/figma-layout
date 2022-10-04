$('.my-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
})
$(".review-carousel").owlCarousel({
    loop: true,
    nav: false,
    margin: 10,
    responsive:{
        0: {
            items:1
        },
        600:{
            items:2.7
        }
    }
})