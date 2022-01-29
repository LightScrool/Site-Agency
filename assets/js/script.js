$(document).ready(function(){

    // Slider
    function firstLastArrow() {
        let k = 0;
        let active_num;
        $('.testimonials-slide').each(function () {
            let $this = $(this);
            k++; 
            if ($this.attr('aria-hidden') == 'false'){
                active_num = +($this.attr('data-slick-index'));
            }
            
        });

        $('.testimonials-block__arrow.next').removeClass('inactive');
        $('.testimonials-block__arrow.prev').removeClass('inactive');

        if (active_num == 0){
            $('.testimonials-block__arrow.prev').addClass('inactive');
        }
        if (active_num == k-1){
            $('.testimonials-block__arrow.next').addClass('inactive');
        }
    }

    $('.testimonials-block__slider').slick({
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,

        arrows: true,
        prevArrow: $('#prev_arrow'),
        nextArrow: $('#next_arrow'),
    });

    firstLastArrow();

    $('.testimonials-block__arrow').on('click', function() {firstLastArrow()})

    // Stars
    $('.testimonials-slide__stars').each(function(index, el){
        let raiting = parseInt($(el).data('raiting'));
        $(el).children().each(function(index, el){
            if (index < raiting){
                $(el).addClass('_active');
            }

        })
    })

    // Navigation
    $('[data-scroll]').on('click', function() {
        event.preventDefault();
        let element = $(this).data('scroll');
        let blockOffset = $(element).offset().top;

        if (element != '#intro') blockOffset += 1;

        $('html, body').animate({
            scrollTop: blockOffset
        })
    })

    // Popup
    $('#popup-open').on('click', function() {
        $('#popup').removeClass('hidden');
    })

    $('#popup-close').on('click', function() {
        $('#popup').addClass('hidden');
    })
});
