window.addEventListener('DOMContentLoaded', () => {
	const goodCards = document.querySelectorAll('.good-card')

	goodCards.forEach((item) => {
		const decrement = item.querySelector('.decrement')
		console.log(decrement)
	})

	// счетчик символов textarea
	const textarea = document.querySelector('.contacts-comment__input')
	const count = document.querySelector('.contacts-comment__count')

	function countLetters() {
		const text = textarea.value
		const textlength = textarea.value.length
		count.innerText = `${textlength}`
	}

	textarea.addEventListener('keyup', countLetters)

	// яндекс-карта

	let center = [55.727142, 37.469345]

	function init() {
		let map = new ymaps.Map('map', {
			center,
			zoom: 10
		})

		//let suggestView1 = new ymaps.SuggestView('suggest');

		map.controls.remove('typeSelector') // удаляем тип
		map.controls.remove('zoomControl') // удаляем контрол зуммирования
		map.controls.remove('rulerControl') // удаляем контрол правил

		let placemark = new ymaps.Placemark(center, {}, {
			iconLayout: 'default#image',
			iconImageHref: 'build/img/mark.png',
			iconImageSize: [40, 40],
			iconImageOffset: [0, 0]
		})

		map.geoObjects.add(placemark)
	}

	ymaps.ready(init)



})

// dadata
const token = '54c558e0a89f381ec441eec29c6cd14318d16c6f'

$('#address').suggestions({
	token,
	type: 'ADDRESS'
})

$('#email').suggestions({
	token,
	type: 'EMAIL'
})

$('#name').suggestions({
	token,
	type: 'NAME'
})

$('#surname').suggestions({
	token,
	type: 'NAME'
})





