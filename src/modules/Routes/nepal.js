import TweenMax from 'TweenMax'
import ScrollMagic from 'ScrollMagic'
import 'animation.gsap'

const $ = q => document.querySelector(q)

const Nepal = {}

Nepal.MapCtrl = () => {
	var map = $('#nepal-routes-1'),
	    visiable_opt = {opacity: 1, ease:Linear.easeNone},
      hidden_opt = {opacity: 0, ease:Linear.easeNone}
	
	var controller = new ScrollMagic.Controller();

  var navOffset = ($('.nav').offsetHeight + $('#progress-div').offsetHeight) || 0

  var pin_scene = new ScrollMagic.Scene({ triggerElement: map, triggerHook:'onLeave', duration: '300%', offset: (-navOffset), reverse: true})
    .on('start', function(){
      this.setPin(this.triggerElement(), {pushFollowers: true})
    })
    .addTo(controller)

  var duration_per = pin_scene.duration() / 3

  var first_scene = new ScrollMagic.Scene({ triggerElement: map, triggerHook:'onLeave', duration: duration_per, offset: (-navOffset), reverse: true})
    .on('start', (e) => {
  		var isForward = e.scrollDirection == 'FORWARD' ? true : false
  		if (isForward){
  			return new TimelineMax()
        	.add(TweenMax.to([$('#marker-ndjili'), $('#n_djili-text')], 0.5, visiable_opt))
  		} else{
  			var targets = [$('#marker-ndjili'), $('#n_djili-text')]
        TweenMax.killTweensOf(targets)
        TweenMax.to(targets, 0.5, hidden_opt)
  		}
    })
    .addTo(controller);

  var second_scene = new ScrollMagic.Scene({ triggerElement: map, triggerHook:'onLeave', duration: duration_per, offset: (duration_per-navOffset), reverse: true})
    .on('start', (e) => {
  		var isForward = e.scrollDirection == 'FORWARD' ? true : false
  		if (isForward){
  			return new TimelineMax()
        	.add(TweenMax.to($('#ndjili-line path'), 1, {strokeDashoffset: 0, ease:Power2.easeOut}))
        	.add(TweenMax.to([$('#marker-istanbul'), $('#istanbul-text')], 0.5, visiable_opt))
  		} else{
  			var targets = [$('#ndjili-line path'), $('#marker-istanbul'), $('#istanbul-text')]
        TweenMax.killTweensOf(targets)
        TweenMax.to([$('#marker-istanbul'), $('#istanbul-text')], 0.5, hidden_opt)
        TweenMax.to($('#ndjili-line path'), 0.5, {strokeDashoffset: 852.44, ease:Linear.easeNone})
  		}
    })
    .addTo(controller);

  var third_scene = new ScrollMagic.Scene({ triggerElement: map, triggerHook:'onLeave', duration: duration_per, offset: (2*duration_per-navOffset), reverse: true})
    .on('start', (e) => {
  		var isForward = e.scrollDirection == 'FORWARD' ? true : false
  		if (isForward){
  			return new TimelineMax()
        	.add(TweenMax.to($('#istanbul-line path'), 1, {strokeDashoffset: 0, ease:Power2.easeOut}),)
        	.add(TweenMax.to([$('#marker-tribhuvan'), $('#tribhuvan-text')], 0.5, visiable_opt),)
  		} else{
  			var targets = [$('#marker-tribhuvan'), $('#tribhuvan-text'), $('#istanbul-line path')]
        TweenMax.killTweensOf(targets)
        TweenMax.to([$('#marker-tribhuvan'), $('#tribhuvan-text')], 0.5, hidden_opt)
        TweenMax.to($('#istanbul-line path'), 0.5, {strokeDashoffset: 966, ease:Linear.easeNone})
  		}
    })
    .addTo(controller);

  return controller
}

Nepal.MapCtrlM = () => {
	var map = $('#nepal-routes-m-1')

  var controller = new ScrollMagic.Controller();

  var navOffset = ($('.nav').offsetHeight + $('#progress-div').offsetHeight) || 0

  var pin_scene = new ScrollMagic.Scene({ triggerElement: map, triggerHook:'onLeave', duration: '100%', offset: (-navOffset), reverse: true})
    .on('start', function(){
      this.setPin(this.triggerElement(), {pushFollowers: false})
    })
    .addTo(controller)

  return controller
}


export default Nepal