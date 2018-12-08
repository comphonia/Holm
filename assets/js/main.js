
$(window).on('load',function(){
 $('.loader .spinner').delay(500).fadeOut(1000, function(){
    $('.loader').fadeOut(750);
 });
});

$(document).ready(function () {

    // Animate mouse to position
    $('a.scroll-link').click(function (e) {
        e.preventDefault();
        $id = $(this).attr('href');
        $('body,html').animate({
            scrollTop: $($id).offset().top
        }, 750);
        $('.header-area').toggle();
    });

    //Initialize Superslides
    $('#slides').superslides({
        animation: 'fade',
        play: 5000,
        pagination: false
    });

    //Initialize Typed
    var typed = new Typed('.typed', {
        strings: ["Game Developer.", "Web Developer.", "Database Administrator."],
        typeSpeed: 160,
        loop: true,
        startDelay: 1000,
        showCursor: false
    });

    //Initialize Owl Carousel
    $('.owl-carousel').owlCarousel({
        loop: true,
        items: 4,
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
            938: {
                items: 4
            }
        }
    });

    //Initialize Easy pie Chart
    var skillsTopOffset = $(".skillsSection").offset().top;
    var statsTopOffset = $(".statsSection").offset().top;
    var countUpFinished = false;

    // Start animating pie chart and counter only when they're visible
    $(window).scroll(function () {
        if (window.pageYOffset > skillsTopOffset - $(window).height() + 200) {
            $('.chart').easyPieChart({
                easing: "easeInOut",
                barColor: "#fff",
                trackColor: false,
                scaleColor: false,
                lineWidth: 4,
                size: 152,
                onStep: function (from, to, percent) {
                    $(this.el).find('.percent').text(Math.round(percent));
                }
            });
        }
        if (!countUpFinished && window.pageYOffset > statsTopOffset - $(window).height() + 200) {

            //Initialize count up
            //    $(".counter").countup(200);
            $('.counter').each(function () {
                var element = $(this);
                var endVal = parseInt(element.text());
                element.countup(endVal);
            });
            countUpFinished = true;

        }
    });

    const nav = $('#navigation');

    const navTop = nav.offset().top;

    $(window).on('scroll', stickyNavigation);

    function stickyNavigation() {
        var body = $('body');

        if ($(window).scrollTop() >= navTop) {
            body.css('padding-top', nav.outerHeight() + "px");
            body.addClass('fixedNav');
        } else{
            body.css('padding-top', 0 + "px");
            body.removeClass('fixedNav');
        }
    }
    
 $('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
    return false;
});


});
