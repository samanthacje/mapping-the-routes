const Subscribe = {}
const data = {
	isOverlayShown: false,
	isEmailSaved: false
}

const $ = q => document.querySelector(q)
const $$ = q => document.querySelectorAll(q)

Subscribe.initBookmark = () => {
	const $bookmarkBtns = $$('.bookmark')
	const $overlay = $('#overlay')

	$bookmarkBtns.forEach(btn=>{
		btn.addEventListener('click', (evt)=>{
			$overlay.style.display = data.isOverlayShown? 'none' : 'flex'
			data.isOverlayShown = !data.isOverlayShown
		})
	})

	$overlay.addEventListener('click', (evt)=>{
			$overlay.style.display = 'none'
			data.isOverlayShown = false
	})

	//submit email for sending read reminder
	const $submit = $('#submit-reminder')
	const $input = $('input#email')
	const message = $('#submit-message')
	const validateEmail = ()=>{
		const email =$input.value
		const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(email).toLowerCase());
	}

	$input.addEventListener('click', evt=>{
		evt.stopPropagation()
	})

	$submit.addEventListener('click', evt=>{
		evt.stopPropagation()
		if (validateEmail()) {
			data.isEmailSaved = true
			$input.disabled = true
			$submit.disabled = true
			message.innerHTML = 'Your email has been received!'
		} else {
			message.innerHTML = 'Invalid Email!'
		}
	})
}

export default Subscribe