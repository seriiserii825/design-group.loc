$(function(){
    /*
        https://www.jqueryscript.net/animation/Smooth-Mouse-Wheel-Scrolling-Plugin-With-jQuery-easeScroll.html
        ===========================*/
    $("html").easeScroll({
        frameRate: 60,
        animationTime: 1000,
        stepSize: 90,
        pulseAlgorithm: 1,
        pulseScale: 8,
        pulseNormalize: 1,
        accelerationDelta: 20,
        accelerationMax: 1,
        keyboardSupport: true,
        arrowScroll: 50,
        touchpadSupport: true,
        fixedBackground: true
    });

    /* show menu
    ====================================================*/
    $('#js-show-menu').on('click', function(){
        $('#js-main-menu').slideToggle(1000);
    });

    /* slider
    ====================================================*/
    $('#js-slider').slick({
        dots: true,
        infinite: true,
        speed: 1500,
        autoplay: true,
        autoplaySpeed: 2500,
        fade: true,
        cssEase: 'linear',
        pauseOnHover: false
    });

    /* smooth scroll to up
    ====================================================*/
    $('#js-btn-up').on('click', function(){
        $('html, body').animate({
            scrollTop: 0
        }, 2600);

        let audio = addAudio();

        if($(document).scrollTop() > 0){
            $('body').append(audio);
        }

    });

    function addAudio(){
        let audio = document.createElement('audio');
        audio.setAttribute('autoplay', 'autoplay');
        let source = document.createElement('source');
        source.setAttribute('src', 'assets/audio/up.mp3');
        source.setAttribute('type', 'audio/mpeg');

        audio.appendChild(source);

        return audio;
    }

    let documentHeight = $(document).height();

    $(document).on('scroll', function(){

        if($(this).scrollTop() < documentHeight/3){
            $('#js-btn-up').addClass('disabled');
        }else {
            $('#js-btn-up').removeClass('disabled');
        }

        if($(this).scrollTop() === 0){
            $('audio').remove();
        }
    });

});