import TweenMax from 'TweenMax'

import ScrollMagic from 'ScrollMagic'
import 'animation.gsap'

const $ = q => document.querySelector(q)
const $$ = q => document.querySelectorAll(q)
const Navbar = function(){}

Navbar.titleChangeD = ()=>{
  var title = $('.serif')
  var name = $('.white')
  var nav = $('.country-list')
  var appear = {opacity: 1, ease:Linear.easeNone}

  var controller = new ScrollMagic.Controller();
  // build scene
  var scene = new ScrollMagic.Scene({triggerElement: $('.header'), triggerHook: 'onLeave', duration: $('.header').offsetHeight})
    .on('end', function(e){
      var dir = e.scrollDirection
      if (dir == 'FORWARD') {
        title.style.display = 'block'
        name.style.display = 'none'
        nav.style.display = 'block'
        TweenMax.fromTo(title, 0.25, {opacity:0}, appear)
        TweenMax.fromTo(nav, 0.25, {opacity:0}, appear)

      } else {
        title.style.display = 'none'
        name.style.display = 'block'
        nav.style.display = 'none'
        TweenMax.fromTo(name, 0.25, {opacity:0}, appear)

      }
    })
    .addTo(controller)

  return controller
}

Navbar.countryControllerD = () => {
	const anchors = $$('.chapter-anchor')
  const country = $$('.country-list li a')
	const controller = new ScrollMagic.Controller()

	anchors.forEach((anchor, i)=> {
		const scene = new ScrollMagic.Scene({triggerElement: anchor, duration: anchor.offsetHeight})
											.addTo(controller)

											.on('enter', function(e){
                          country[i].classList.add("active")
											})
                      .on('leave', function(e){
                          country[i].classList.remove("active")
											})
	})
}


export default Navbar
