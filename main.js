'use strict';

let fixed_notice_list_page = 0;
const fixed_notice_slider = setInterval(fixed_notice_slider_func, 4000);

function fixed_notice_slider_func() {
	const fixed_notice_list = document.querySelectorAll('.fixed__inner__top__left__list li');
	const curr_notice = fixed_notice_list[(fixed_notice_list_page) % 3];
	const next_notice = fixed_notice_list[(++fixed_notice_list_page) % 3];
	curr_notice.classList.remove('auto__slide');
	next_notice.classList.add('auto__slide');
}

// slider auto
const auto_slider = setInterval(auto_slider_func, 4000);

function auto_slider_func() {
	const slider_container = document.querySelector('.slider__img__container');
	slider_container.style.transform = `translate(calc(-1920px*${++curr_page % 5}))`;
}
// slider event
let curr_page = 0;
const slider_left = document.querySelector('.slider__left');
const slider_right = document.querySelector('.slider__right');
slider_right.addEventListener('click', () => {
	const slider_container = document.querySelector('.slider__img__container');
	slider_container.style.transform = `translate(calc(-1920px*${++curr_page % 5}))`;
})
slider_left.addEventListener('click', () => {
	const slider_container = document.querySelector('.slider__img__container');
	if (curr_page === 0) {
		curr_page = 5;
	}
	slider_container.style.transform = `translate(calc(-1920px*${--curr_page % 5}))`;
})
