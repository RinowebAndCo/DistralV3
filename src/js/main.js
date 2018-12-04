$(document).ready(function () {


        "use strict";
        Slider();
        Sandwich();
});

function Slider() {
    $('.slider').vegas({

        slides: [{ src: 'images/slider/ariane.jpg' },
        { src: 'images/slider/cloture.jpg' },
        { src: 'images/slider/portail.jpg' },
        { src: 'images/slider/premium.jpg' },
        { src: 'images/slider/volet.jpg' }],
        firstTransition: 'zoomOut',
        firstTransitionDuration: '3000',
        transition: 'fade',
        animation: 'random',
        timer: false,
        shuffle: true,
        preload: true,
        overlay: 'images/slider/overlay.png',
    }, $('.vegas-container').removeAttr('style'));
}

function Sandwich() {
    $('.sandwich').click(function () {
        $(this).toggleClass('change');
        $('.menu').toggleClass('open');

    });
}