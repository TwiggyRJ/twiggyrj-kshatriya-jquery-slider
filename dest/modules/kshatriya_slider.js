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
        this.autoplay = opts.autoplay | false;
        this.autoplayCancel = opts.autoplayCancel | true;
        this.autoplaySpeed = opts.autoplaySpeed | 3000;
        this.speed = opts.speed | 350;
        this.slideCount = this.slides.length;
        this.index = 0;
        this.next = opts.next;
        this.prev = opts.prev;

        this.setSliderWidth();
        this.setSliderSpeed();
        this.setSlideIndexs();
        this.setSlideWidths();
        this.sliderControls(this);
        this.autoplaySlider(this);
    }

    //this is for setting the width of the slider to the width of all the items combined


    _createClass(Slider, [{
        key: 'setSliderWidth',
        value: function setSliderWidth() {
            var sliderWidth = this.slideCount * 100;
            this.slidertrack.css('width', sliderWidth + '%');
        }

        // we set the speed of the transitions on the slider items

    }, {
        key: 'setSliderSpeed',
        value: function setSliderSpeed() {
            var sliderSpeed = this.speed / 1000 % 60;
            this.slidertrack.css('transition', 'transform ' + sliderSpeed + 's cubic-bezier(0.645, 0.045, 0.355, 1)');
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
                _this.goTo(1, 1, -1, _this);
            });
            this.prev.on('click', function (e) {
                _this.goTo(1, -1, -1, _this);
            });
        }

        //autoplay slider if autoplay == true

    }, {
        key: 'autoplaySlider',
        value: function autoplaySlider(_this) {
            if (this.autoplay == true) {
                setTimeout(function () {
                    _this.goTo(1, 1, 1, _this);
                }, this.autoplaySpeed);
            }
        }

        //This moves the slider track along to the correct place

    }, {
        key: 'goTo',
        value: function goTo(index, direction, autoplay, _this) {
            var offset = 0;

            if (this.autoplayCancel == true && autoplay == -1) {
                this.autoplay = false;
            }

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

            if (autoplay === 1 && this.autoplay == true) {
                _this.autoplaySlider(_this);
            }
        }
    }]);

    return Slider;
}();

exports.default = Slider;