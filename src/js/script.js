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



