//window.addEventListener('DOMContentLoaded', () => {
const goodCards = document.querySelectorAll('.good-card')

goodCards.forEach((item) => {
	const decrement = item.querySelector('.decrement')
	const increment = item.querySelector('.increment')
	let costOne = +item.querySelector('.good-cost__final-for-one').innerText
	let costAll = +item.querySelector('.good-cost__final-for-all').innerText

	const quontityBox = item.querySelector('.quontity')
	let quontity = +quontityBox.value

	increment.addEventListener('click', () => {
		if (quontity < 99) {
			quontity++
			quontityBox.setAttribute('value', quontity)
		}
	})

	decrement.addEventListener('click', () => {
		if (quontity > 0) {
			quontity--
			quontityBox.setAttribute('value', quontity)
		}
	})

	costAll = costOne + quontity

	// счетчик символов textarea
	const textarea = document.querySelector('.contacts-comment__input')
	const count = document.querySelector('.contacts-comment__count')

	function countLetters() {
		const text = textarea.value
		const textlength = textarea.value.length
		count.innerText = `${textlength}`
	}

	textarea.addEventListener('keyup', countLetters)
})

// яндекс-карта
let init = () => {
	let center = [55.727142, 37.469345]
	let place

	let map = new ymaps.Map('map', {
		center,
		zoom: 11
	})

	// адресная строка
	let placeInput = document.querySelector('#address')

	// создадим экземпляр элемента управления «поиск по карте»
	// с установленной опцией провайдера данных для поиска по организациям
	let searchControl = new ymaps.control.SearchControl({
		options: {
			provider: 'yandex#search'
		}
	})

	placeInput.addEventListener('keydown', e => {
		if (e.code === 'Enter' && place != '') {
			place = placeInput.value

			searchControl.search(`${place}`)

			// инициализация метки для карты
			let placemark = new ymaps.Placemark(map.getCenter(`${place}`), {}, {
				iconLayout: 'default#image',
				iconImageHref: 'build/img/mark.png',
				iconImageSize: [30, 30],
				iconImageOffset: [0, 0]
			})

			// добавим метку на карту
			map.geoObjects.add(placemark)
		}
	})

	map.controls.add(searchControl)

	// удаляем различные исходные элементы карты
	map.controls.remove('typeSelector') // удаляем тип
	map.controls.remove('zoomControl')  // удаляем контрол зуммирования
	map.controls.remove('geolocationControl') // удаляем геолокацию
	map.controls.remove('trafficControl') // удаляем контроль трафика
	map.controls.remove('fullscreenControl') // удаляем кнопку перехода в полноэкранный режим
	map.controls.remove('rulerControl'); // удаляем контрол правил
}

ymaps.ready(init)

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
//})



