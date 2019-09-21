import TweenMax from 'TweenMax'
import ScrollMagic from 'ScrollMagic'
import 'animation.gsap'

const $ = q => document.querySelector(q)

const Indonesia = {}

Indonesia.MapCtrl1 = () => {
	var map = $('#indonesia-routes-1'),
	    visiable_opt = {opacity: 1, ease:Linear.easeNone},
      hidden_opt = {opacity: 0, ease:Linear.easeNone}

  var markers = [
  	$('#indonesia-marker-1'),
  	$('#indonesia-marker-2'),
  	$('#indonesia-marker-3'),
  	$('#indonesia-marker-4'),
  	$('#indonesia-marker-5'),
  	$('#indonesia-marker-6'),
  ]

  var captions = [
  	$('#indonesia-caption-1'),
  	$('#indonesia-caption-2'),
  	$('#indonesia-caption-3'),
  	$('#indonesia-caption-4'),
  	$('#indonesia-caption-5'),
  	$('#indonesia-caption-6'),
  ]

  markers.forEach((marker, i)=>{
  	marker.addEventListener('click', evt => {
  		return new TimelineMax()
  			.add(TweenMax.to(captions, 0, hidden_opt))
				.add(TweenMax.to(captions[i], 0.5, visiable_opt))
		})
  })
}

export default Indonesia
