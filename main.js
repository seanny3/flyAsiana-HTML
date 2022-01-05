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
function auto_slider_func() {
	const slider_container = document.querySelector('.slider__img__container');

}
// slider event
const slider_left = document.querySelector('.slider__left');
const slider_right = document.querySelector('.slider__right');
let curr_page = 1;
slider_right.addEventListener('click', () => {
	const slider_container = document.querySelector('.slider__img__container');
	if (curr_page === 6) {
		slider_container.style.transition = "none";
		slider_container.style.transform = `translate(calc(-1920px*1))`
		setTimeout(() => {
			slider_container.style.transition = "all 1000ms";
			slider_container.style.transform = `translate(calc(-1920px*2))`;
		}, 30)
		curr_page = 0;
	}
	slider_container.style.transform = `translate(calc(-1920px*${++curr_page}))`;
	clicked = true;
})
slider_left.addEventListener('click', () => {
	const slider_container = document.querySelector('.slider__img__container');
	if (curr_page === 0) {
		slider_container.style.transition = "none";
		slider_container.style.transform = `translate(calc(-1920px*6))`
		setTimeout(() => {
			slider_container.style.transition = "all 1000ms";
			slider_container.style.transform = `translate(calc(-1920px*5))`;
		}, 30)
		curr_page = 6;
	}
	slider_container.style.transform = `translate(calc(-1920px*${--curr_page}))`;
})










// contents mileage
const mileage_btn = document.querySelector('.mileage__slider');
mileage_btn.addEventListener('click', () => {
	const before = document.querySelector('.mileage__slider__before');
	before.classList.toggle('mileage__on');
	mileage_btn.classList.toggle('mileage__on');
})






// special area slide event
clone_speArea_slider_img();

function clone_speArea_slider_img() {
	const li = document.querySelectorAll('.specialArea__slider__img');
	for (let i = 0; i < li.length; i++) {
		const clone = li[i].cloneNode(true);
		clone.classList.add('clone');
		li[0].before(clone);
	}
	for (let i = 9; i >= 0; i--) {
		const clone = li[i].cloneNode(true);
		clone.classList.add('clone');
		li[9].after(clone);
	}
}

const speArea_left = document.querySelector('.specialArea__slider__left');
const speArea_right = document.querySelector('.specialArea__slider__right');
let speArea_curr_page = 10;
speArea_right.addEventListener('click', () => {
	const slider_container = document.querySelector('.specialArea__slider__img__inner');
	if (speArea_curr_page === 20) {
		slider_container.style.transition = "none";
		slider_container.style.transform = `translate(calc(-312px*10))`
		setTimeout(() => {
			slider_container.style.transition = "all 300ms";
			slider_container.style.transform = `translate(calc(-312px*11))`;
		}, 30)
		speArea_curr_page = 9;
	}
	slider_container.style.transform = `translate(calc(-312px*${++speArea_curr_page}))`;
})
speArea_left.addEventListener('click', () => {
	const slider_container = document.querySelector('.specialArea__slider__img__inner');
	if (speArea_curr_page === 5) {
		slider_container.style.transition = "none";
		slider_container.style.transform = `translate(calc(-312px*16))`
		setTimeout(() => {
			slider_container.style.transition = "all 300ms";
			slider_container.style.transform = `translate(calc(-312px*15))`;
		}, 30)
		speArea_curr_page = 16;
	}
	slider_container.style.transform = `translate(calc(-312px*${--speArea_curr_page}))`;
})