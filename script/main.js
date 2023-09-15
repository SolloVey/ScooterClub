const swiper = new Swiper('.swiper', {
	// Optional parameters
	// loop: true,

	// If we need pagination
	// pagination: {
	// 	el: '.swiper-pagination',
	// },

	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

	// And if we need scrollbar
	// scrollbar: {
	// 	el: '.swiper-scrollbar',
	// },
});

// const wheelInner = document.querySelectorAll('.wheel__inner');
// const wheelContent = document.querySelectorAll('.wheel__content');

// console.log(wheelInner);

// function rotateText(value) {
// 	let deg = -34;
// 	for (let item of wheelInner) {
// 		item.style.transform = `rotate(${deg}deg)`;
// 		deg += value;
// 	}
// 	return value;
// }

// function letterSpacing(value) {
// 	{
// 		let deg = -34;
// 		for (let item of wheelContent) {
// 			item.style.transform = `rotate(${deg}deg)`;
// 			deg += value;
// 		}
// 	}
// }

// rotateText(30);
// letterSpacing(35);
