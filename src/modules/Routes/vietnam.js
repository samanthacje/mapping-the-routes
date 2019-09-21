import TweenMax from 'TweenMax'
import ScrollMagic from 'ScrollMagic'
import 'animation.gsap'

import 'debug.addIndicators'

const $ = q => document.querySelector(q)

const Vietnam = {}

Vietnam.MapCtrl = ()=>{
	var map = $('#vietnam-routes-1'),
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
    .on('start', (e) =>{
      var isForward = e.scrollDirection == 'FORWARD' ? true : false
      var targets = [$('#marker-cau'), $('#cau-text'), $('#mongcai-line'), $('#marker-mong'), $('#mong-text')]
      if (isForward){
      	return new TimelineMax()
      		.add(TweenMax.to([$('#marker-cau'), $('#cau-text')], 0.5, visiable_opt))
      		.add(TweenMax.to($('#mongcai-line'), 0.5, visiable_opt))
      		.add(TweenMax.to([$('#marker-mong'), $('#mong-text')], 0.5, visiable_opt))

      } else {
        TweenMax.killTweensOf(targets)
        TweenMax.to(targets, 0.5, hidden_opt)
      }
    })
    .addTo(controller);

  var second_scene = new ScrollMagic.Scene({ triggerElement: map, triggerHook:'onLeave', duration: duration_per, offset: (duration_per-navOffset), reverse: true})
    .on('start', (e) =>{
      var isForward = e.scrollDirection == 'FORWARD' ? true : false
      var targets = [$('#vietnam-circles'),$('#vietnam-legend')]
      if (isForward){
        TweenMax.to(targets, 0.5, visiable_opt)
      } else {
        TweenMax.killTweensOf(targets)
        TweenMax.to(targets, 0.5, hidden_opt)
      }
    })
    .on('end', (e) =>{
      var isForward = e.scrollDirection == 'FORWARD' ? true : false
      var targets = [$('#marker-cau'), $('#cau-text'), $('#mongcai-line'), $('#marker-mong'), $('#mong-text'), $('#vietnam-circles'),$('#vietnam-legend')]
      if (isForward){
        TweenMax.to(targets, 0.5, hidden_opt)
      } else {
        TweenMax.killTweensOf(targets)
        TweenMax.to(targets, 0.5, visiable_opt)
      }
    })
    .addTo(controller);

  var thrid_scene = new ScrollMagic.Scene({ triggerElement: map, triggerHook:'onLeave', duration: duration_per, offset: (2*duration_per-navOffset), reverse: true})
    .on('start', (e) => {
    	switchByDirD(e, map, 'assets/maps/Vietnam/desktop/map-01.jpg', 'assets/maps/Vietnam/desktop/map-02.jpg') 
    })
    .addTo(controller);

  return controller
}


function changeBgM($map, src){
  //used only on mobile
  $map.querySelector('.routes-map-bg-m').src = src
}

function switchByDirM(e, $map, src_old, src){
  var isForward = e.scrollDirection == 'FORWARD' ? true : false
    if (isForward){
      changeBgM($map, src)
    } else {
      changeBgM($map, src_old)
    }
}

function changeBgD($map, src){
  //used only on mobile
  $map.querySelector('.routes-map-bg').src = src
}

function switchByDirD(e, $map, src_old, src){
  var isForward = e.scrollDirection == 'FORWARD' ? true : false
    if (isForward){
      changeBgD($map, src)
    } else {
      changeBgD($map, src_old)
    }
}

export default Vietnam