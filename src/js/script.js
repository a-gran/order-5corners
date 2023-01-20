// счетчик символов textarea
window.addEventListener('DOMContentLoaded', () => {
	const textarea = document.querySelector(".contacts-comment__input")
	const count = document.querySelector(".contacts-comment__count")

	function countLetters() {
		const text = textarea.value
		const textlength = textarea.value.length
		count.innerText = `${textlength}`
	}

	textarea.addEventListener('keyup', countLetters)
})

// яндекс-карта
let center = [55.727142, 37.469345]

function init() {
	let map = new ymaps.Map('map', {
		center: center,
		zoom: 10
	})

	map.controls.remove('typeSelector'); // удаляем тип
	map.controls.remove('zoomControl'); // удаляем контрол зуммирования
	map.controls.remove('rulerControl'); // удаляем контрол правил

	let placemark = new ymaps.Placemark(center, {}, {
		iconLayout: 'default#image',
		iconImageHref: 'build/img/mark.png',
		iconImageSize: [40, 40],
		iconImageOffset: [0, 0]
	})

	map.geoObjects.add(placemark)
}

ymaps.ready(init)



