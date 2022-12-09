let header__burger = document.querySelectorAll('.header__burger,.header__link');
let header_menu = document.querySelector('.header__menu');
let back = document.querySelector('body');

header__burger.forEach(function (item) {
	item.onclick = function () {
		item.classList.toggle('active');
		header_menu.classList.toggle('active');
		back.classList.toggle('lock');
	}
});



//Slider 

$(document).ready(function () {
	$('.slider').slick({
		arrows: false, //Отображение стрелок
		dots: false, //Отображение точек
		slidesToScroll: 1,
		slidesToShow: 3, //Количество одновременно отображаемый слайдов
		autoplay: true, //Автопроигрование слайдов
		speed: 1000, //Скорость анимации автопроигрования
		autoplaySpeed: 1500, //Частота смены слайдов
		appendArrows: $('.content'),
		responsive: [ //Медиазапросы
			{
				breakpoint: 769,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 550,
				settings: {
					slidesToShow: 1
				}
			}
		],
		mobileFirst: false //Чтоб max-width в брейкпоинтах заменить на min-width
	});
});
