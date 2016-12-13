export default class Slider {
    constructor(opts) {
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
    setSliderWidth() {
        let sliderWidth = this.slideCount * 100;
        this.slidertrack.css('width', `${sliderWidth}%`);
    }

    //this is for diagnostic purposes only
    setSlideIndexs() {
        this.slidertrack.children().each(function (index) {
            $(this).attr("data-kslider-index", index);
        });
    }

    //This is for setting the item widths
    setSlideWidths() {
        let itemWidths = 100 / this.slideCount;
        this.slidertrack.children().css('width', itemWidths + "%");
    }

    //set the item controls
    sliderControls(_this) {
        this.next.on('click', function (e) {
            _this.goTo(1, 1);
        });
        this.prev.on('click', function (e) {
            _this.goTo(1, -1);
        });
    }

    goTo(index, direction) {
        let offset = 0;

        if (direction === 1) {
            //we set the next one to the first item of the slider if it is the last item
            index = this.index + index;

            if (index > this.slideCount - 1) {
                index = 0;
            }

            offset = index * 100 / this.slideCount;
            this.index = index;

            this.slidertrack.css({
                transform: `translate3d(-${offset}%, 0, 0)`
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
                transform: `translate3d(-${offset}%, 0, 0)`
            });
        }
    }
}
