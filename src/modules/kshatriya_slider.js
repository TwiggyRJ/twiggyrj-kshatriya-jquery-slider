export default class Slider {
    constructor(opts) {
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
        this.sliderControls();
        this.autoplaySlider();
    }

    //this is for setting the width of the slider to the width of all the items combined
    setSliderWidth() {
        let sliderWidth = this.slideCount * 100;
        this.slidertrack.css('width', `${sliderWidth}%`);
    }

    // we set the speed of the transitions on the slider items
    setSliderSpeed() {
        let sliderSpeed = (this.speed / 1000)%60;
        this.slidertrack.css('transition', `transform ${sliderSpeed}s cubic-bezier(0.645, 0.045, 0.355, 1)`);
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
    sliderControls() {
        //Arrow functions bind context to the outserscope, so in this case, the class
        this.next.on('click', (e) => {
            this.goTo(1, -1);
        });

        this.prev.on('click', (e) => {
            this.goTo(-1, -1);
        });
    }

    //autoplay slider if autoplay == true
    autoplaySlider() {
        if(this.autoplay == true) {
            this.autoPlayInterval = setTimeout(() => {
                this.goTo(this.index + 1, 1)
            }, this.autoplaySpeed);
        }
    }

    //This moves the slider track along to the correct place
    goTo(index, autoplay) {
        let offset = 0;

        if(this.autoplayCancel == true && autoplay == -1) {
            this.autoplay = false;
        }

        //our new index is the current index +/- the index from the controls
        index = this.index + index;

        // we check if its the first or last item of the slider

        //we set the next one to the first item of the slider if it is the last item
        if (index > this.slideCount - 1) {
            index = 0;
        }

        //we set the index to the last item if its the first item going back
        if (index < 0) {
            index = this.slideCount -1;
        }

        offset = index * 100 / this.slideCount;
        this.index = index;

        this.slidertrack.css({
            transform: `translate3d(-${offset}%, 0, 0)`
        });

        if(autoplay === 1 && this.autoplay == true) {
            this.autoplaySlider();
        }
    }
}
