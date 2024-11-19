
let documentActions = (e) => {
	const targetElement = e.target

	if (targetElement.closest('.button__icon')) {
		document.documentElement.classList.toggle('open-menu')
	}
}

document.addEventListener('click', documentActions)
