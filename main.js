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


let vw = window.innerWidth >= 1920 ? 1920 : window.innerWidth;

// slider event
const slider_left = document.querySelector('.slider__left');
const slider_right = document.querySelector('.slider__right');
const slider_container = document.querySelector('.slider__img__container');
const slider_info = document.querySelectorAll('.slider__img__info');
let curr_page = 1;

// slider auto
const slider_auto = setInterval(next_slide, 4500);

function next_slide() {
	delay_click_event();
	slider_info[curr_page].classList.remove('active');
	if (curr_page === 6) {
		// page '6' : teleport to page '1' 
		curr_page = 1;
		slider_container.style.transition = `none`;
		slider_container.style.transform = `translate(calc(-${vw}px*${curr_page}))`;
		setTimeout(() => {
			// magic slide page '1' to 2'
			slider_container.style.transition = `transform 1300ms`;
			slider_container.style.transform = `translate(calc(-${vw}px*${++curr_page}))`;
			setTimeout(() => {
				slider_info[curr_page].classList.add('active');
			}, 1200)
		}, 30)
	} else {
		// next page '1' ~ '6'  /  ['6': clone page '1']
		slider_container.style.transform = `translate(calc(-${vw}px*${++curr_page}))`;
		setTimeout(() => {
			slider_info[curr_page].classList.add('active');
		}, 1200)
	}
}
function delay_click_event() {
	// 클릭이벤트 딜레이
	slider_right.style.pointerEvents = "none";
	slider_left.style.pointerEvents = "none";
	setTimeout(() => {
		slider_right.style.pointerEvents = "auto";
		slider_left.style.pointerEvents = "auto"
	}, 1400);

}
slider_right.addEventListener('click', () => {
	next_slide();
})
slider_left.addEventListener('click', () => {
	delay_click_event();
	slider_info[curr_page].classList.remove("active");
	if (curr_page === 0) {
		curr_page = 5;
		slider_container.style.transition = "none";
		slider_container.style.transform = `translate(calc(-${vw}px*${curr_page}))`
		setTimeout(() => {
			slider_container.style.transition = "transform 1300ms";
			slider_container.style.transform = `translate(calc(-${vw}px*${--curr_page}))`;
			setTimeout(() => {
				slider_info[curr_page].classList.add('active');
			}, 1200)
		}, 30)
	} else {
		slider_container.style.transform = `translate(calc(-${vw}px*${--curr_page}))`;
		setTimeout(() => {
			slider_info[curr_page].classList.add('active');
		}, 1200)
	}
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