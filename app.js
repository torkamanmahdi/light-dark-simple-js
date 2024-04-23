const body = document.getElementsByTagName('body')[0]
const scheme = document.querySelector('.switch input')

scheme.addEventListener('change', function(e) {
	const thisElement = e.target
	if(thisElement.checked) {
		body.classList.add('dark-mode')
	} else {
		body.classList.remove('dark-mode')
	}
})