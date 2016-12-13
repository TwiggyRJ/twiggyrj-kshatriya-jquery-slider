'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Slider = function () {
    function Slider(opts) {
        _classCallCheck(this, Slider);

        this.slider = opts.el;
        this.slidertrack = opts.sliderTrack;
        this.slideEl = '.slide';
        this.slides = this.slider.find(this.slideEl);
        this.interval = opts.interval;
        this.slideCount = this.slides.length;
        this.index = 0;
        this.next = opts.next;
        this.prev = opts.prev;

        this.setSliderWidth();
        this.setSlideIndexs();
        this.setSlideWidths();
        this.sliderControls(this);
    }

    //this is for setting the width of the slider to the width of all the items combined


    _createClass(Slider, [{
        key: 'setSliderWidth',
        value: function setSliderWidth() {
            var sliderWidth = this.slideCount * 100;
            this.slidertrack.css('width', sliderWidth + '%');
        }

        //this is for diagnostic purposes only

    }, {
        key: 'setSlideIndexs',
        value: function setSlideIndexs() {
            this.slidertrack.children().each(function (index) {
                $(this).attr("data-kslider-index", index);
            });
        }

        //This is for setting the item widths

    }, {
        key: 'setSlideWidths',
        value: function setSlideWidths() {
            var itemWidths = 100 / this.slideCount;
            this.slidertrack.children().css('width', itemWidths + "%");
        }

        //set the item controls

    }, {
        key: 'sliderControls',
        value: function sliderControls(_this) {
            this.next.on('click', function (e) {
                _this.goTo(1, 1);
            });
            this.prev.on('click', function (e) {
                _this.goTo(1, -1);
            });
        }
    }, {
        key: 'goTo',
        value: function goTo(index, direction) {
            var offset = 0;

            if (direction === 1) {
                //we set the next one to the first item of the slider if it is the last item
                index = this.index + index;

                if (index > this.slideCount - 1) {
                    index = 0;
                }

                offset = index * 100 / this.slideCount;
                this.index = index;

                this.slidertrack.css({
                    transform: 'translate3d(-' + offset + '%, 0, 0)'
                });
            } else if (direction === -1) {
                //we set the next one to the last item of the slider if it is the first item
                console.log(index);
                if (this.index == 0) {
                    index = this.slideCount - 1;
                } else {
                    index = this.index - index;
                }
                offset = index * 100 / this.slideCount;
                this.index = index;

                this.slidertrack.css({
                    transform: 'translate3d(-' + offset + '%, 0, 0)'
                });
            }
        }
    }]);

    return Slider;
}();

exports.default = Slider;