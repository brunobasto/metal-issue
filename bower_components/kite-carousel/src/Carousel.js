'use strict';

import core from 'bower:metal/src/core';
import CarouselBase from './Carousel.soy.js';

/**
 * Carousel component.
 */
class Carousel extends CarouselBase {
	constructor(opt_config) {
		super(opt_config);

		this.on('selectedIndexChanged', this._onSelectedIndexChanged);
	}

	/**
	 * @inheritDoc
	 */
	attached() {
		this._resetInterval();
	}

	/**
	 * Navigates to the desired slide.
	 */
	navigate(index) {
		this.selectedIndex = index;
	}

	/**
	 * Shows next slide.
	 */
	next() {
		let maxIndex = this.items.length - 1;

		if (this.circular && this.selectedIndex === maxIndex) {
			this.selectedIndex = 0;
		}
		else {
			this.selectedIndex = Math.min(this.selectedIndex + 1, maxIndex);
		}
	}

	/**
	 * Shows previous slide.
	 */
	prev() {
		if (this.circular && this.selectedIndex === 0) {
			this.selectedIndex = this.items.length - 1;
		}
		else {
			this.selectedIndex = Math.max(0, this.selectedIndex - 1);
		}
	}

	_onClickIndicator(event) {
		let index,
			items = this.element.querySelectorAll('.carousel-indicators > li');

		for (index = 0; index < items.length; index++) {
			if (items[index] === event.delegateTarget) {
				break;
			}
		}

		this.navigate(index);
	}

	_onSelectedIndexChanged(event) {
		this._resetInterval();
	}

	_resetInterval() {
		if (this.autoScroll) {
			clearInterval(this.interval);

			this.interval = setInterval(this.next.bind(this), this.delay);
		}
	}
}

/**
 * Default carousel elementClasses.
 * @default carousel
 * @type {string}
 * @static
 */
Carousel.ELEMENT_CLASSES = 'carousel';

/**
 * Carousel attributes definition.
 * @type {Array}
 * @static
 */
Carousel.ATTRS = {
	/**
	 * Periodically scroll between carousel items.
	 * @type {boolean}
	 */
	autoScroll: {
		validator: core.isBoolean,
		value: true
	},

	/**
	 * If the carousel round-robins.
	 * @type {boolean}
	 */
	circular: {
		validator: core.isBoolean,
		value: true
	},

	/**
	 * Time in miliseconds between automatic transitions.
	 * @type {boolean}
	 */
	delay: {
		validator: core.isNumber,
		value: 3000
	},

	/**
	 * The height of the carousel.
	 * @type {string}
	 */
	height: {
		validator: core.isString,
		value: 'auto'
	},

	/**
	 * The items shown on the carousel.
	 * @type {Array}
	 */
	items: {
		validator: core.isArray,
		value: [
			{
				body: 'Kites in great shape and close to you!',
				headline: 'Kiteboarding Kites',
				src: 'http://shop.watersportswest.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/c/o/contra_action.jpg'
			},
			{
				body: 'Find the best equipement in bars and lines.',
				headline: 'Bars and Lines',
				src: 'http://www.thekiteboarder.com/wordpress/wp-content/uploads/2015/01/CABRINHA-CONTRA-BAR-2015-GEAR-REVIEW-04.jpg'
			}
		]
	},

	/**
	 * The currently selected item index.
	 * @type {Number}
	 */
	selectedIndex: {
		validator: core.isNumber,
		value: 0
	}
};

CarouselBase.setImpl(Carousel);

export default Carousel;