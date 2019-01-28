

$(function () {
    new WOW().init();
})

// home slider
$(function () {
    $(".slider-content").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        nav:true,
        autoplayHoverPause: true,

    });
});
//$(function(){
//    $(".slider-content").mouseenter(function(){
//    $(".owl-prev").show();
//});
//     $(".slider-content").mouseout(function(){
//    $(".owl-prev").hide();
//});
//    $(".slider-content").mouseenter(function(){
//    $(".owl-next").show();
//});
//     $(".slider-content").mouseout(function(){
//    $(".owl-next").hide();
//});
//})

//work

$(function () {
    $(".works-carousel").owlCarousel({
        items: 4,
         autoplay: true,
        smartSpeed: 700,
        loop: true,
        nav:true,
        responsive: {
            0: {
                items: 1
            },

            480: {
                items: 2
            },


            768: {
                items: 3
            },

            992: {
                items: 4
            }
        }
    });
});

//team

$(function () {
    $(".team-members").owlCarousel({
        items: 4,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        nav:true,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            },

            768: {
                items: 3
            },
            992: {
                items: 4
            }
        }
    });
});

//testimonials

$(function () {
    $(".testimonials").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true
    });
});

//navigator

$(function () {
    $(window).scroll(function () {
        
        if ($(this).scrollTop() < 80) {
            // hide nav
            $("nav").removeClass("corporate-top-nav");
            $("#back-to-top").fadeOut();
        } else {
            // show nav
            $("nav").addClass("corporate-top-nav");
            $("#back-to-top").fadeIn();
        }
    });
    $('#back-to-top').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 3000);
        return false;
    });
});


$(function () {
    $(".navbar-collapse ul li a").on("click touch", function () {
        $(".navbar-toggle").click();
    });
});

//smooth scroll

$(function () {
    $("a.smooth-scroll").click(function (event) {
        event.prevetDefault();
        var section = $(this).attr("href");
        $('html, body').animate({
            //ScrollTop Property
            scrollTop: $(section).offset().top - 64
        }, 2000, "easeInOutExpo"); 
    });
});
