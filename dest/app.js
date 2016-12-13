'use strict';

var _kshatriya_slider = require('./modules/kshatriya_slider');

var _kshatriya_slider2 = _interopRequireDefault(_kshatriya_slider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

$(document).ready(function () {
    var slider = new _kshatriya_slider2.default({
        el: $('.js-kshatriya-slider'),
        sliderTrack: $('.slider-track'),
        next: $('.js-slider-next'),
        prev: $('.js-slider-prev'),
        interval: 300
    });
});