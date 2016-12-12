/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _kshatriya_slider = __webpack_require__(1);

	var _kshatriya_slider2 = _interopRequireDefault(_kshatriya_slider);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	$(document).ready(function () {
	    _kshatriya_slider2.default.init();
	});

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function init() {
	    var slider = new Slider({
	        el: $('.js-kshatriya-slider'),
	        sliderTrack: $('.slider-track'),
	        interval: 300
	    });

	    $('.js-slider-next').on('click', function (e) {
	        slider.goTo(1, 1);
	    });
	    $('.js-slider-prev').on('click', function (e) {
	        slider.goTo(1, -1);
	    });
	}

	//Paul's take on making a slider, It's more OOP

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

	        this.slider_width();
	        this.set_item_indexs();
	        this.set_item_widths();
	    }

	    //var _self = this;

	    //global stuff

	    /*
	    this.goTo = function(index) {
	        //_self.index = index;
	    }*/

	    _createClass(Slider, [{
	        key: 'slider_width',
	        value: function slider_width() {
	            var sliderWidth = this.slideCount * 100;
	            this.slidertrack.css('width', sliderWidth + '%');
	        }
	    }, {
	        key: 'set_item_indexs',
	        value: function set_item_indexs() {
	            var baseOffset = 100;
	            var offset = 0;
	            this.slidertrack.children().each(function (index) {
	                if (index == 0) {
	                    offset = 0;
	                } else {
	                    offset = baseOffset * index;
	                }
	                $(this).attr("data-kslider-index", index);
	                $(this).attr("data-kslider-offset", offset);
	            });
	        }
	    }, {
	        key: 'set_item_widths',
	        value: function set_item_widths() {
	            var itemWidths = 100 / this.slideCount;
	            this.slidertrack.children().css('width', itemWidths + "%");
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

	module.exports = {
	    init: init
	};

/***/ }
/******/ ]);