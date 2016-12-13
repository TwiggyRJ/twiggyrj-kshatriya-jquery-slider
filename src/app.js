import Slider from './modules/kshatriya_slider';

$( document ).ready(function() {
    let slider = new Slider({
        el: $('.js-kshatriya-slider'),
        sliderTrack: $('.slider-track'),
        next: $('.js-slider-next'),
        prev: $('.js-slider-prev'),
        autoplay: true,
        autoplayCancel: true,
        autoplaySpeed: 3000,
        speed: 750
    });
});
