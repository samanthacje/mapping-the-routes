import TweenMax from 'TweenMax'
import ScrollMagic from 'ScrollMagic'
import 'animation.gsap'

import 'debug.addIndicators'

const $ = q => document.querySelector(q)
const MOBILE = 'assets/maps/Cameroon/mobile/'

const Cameroon = {
	maps: [
    $('#cameroon-routes-1'),
	],
  pics_m: [
    `${MOBILE}m-01.jpg`,
    `${MOBILE}m-02.jpg`,
    `${MOBILE}m-03.jpg`,
  ],
  maps_m: [
    $('#cameroon-routes-m-1'),
  ]
}

Cameroon.MapCtrl1 = () => {
  var map = Cameroon.maps[0],
      visiable_opt = {opacity: 1, ease:Linear.easeNone},
      hidden_opt = {opacity: 0, ease:Linear.easeNone}

  var controller = new ScrollMagic.Controller();

  var navOffset = ($('.nav').offsetHeight + $('#progress-div').offsetHeight) || 0

  var pin_scene = new ScrollMagic.Scene({ triggerElement: map, triggerHook:'onLeave', duration: '300%', offset: (-navOffset), reverse: true})
    .on('enter', function(){
      this.setPin(this.triggerElement(), {pushFollowers: false})
    })
    .addTo(controller)

  var duration_per = pin_scene.duration() / 3

  //first scene trigger inmediately on map pin, use onLeave triggerHook
  var first_scene = new ScrollMagic.Scene({ triggerElement: map, triggerHook:'onLeave', duration: duration_per, offset: (-navOffset), reverse: true})
    .on('enter', () =>
      new TimelineMax()
        .add(TweenMax.to($('#bertoua-text'), 0.25, visiable_opt))
        .add(TweenMax.to($('#abong-text'), 0.25, visiable_opt))
        .add(TweenMax.to($('#mindourou-text'), 0.25, visiable_opt))
        .add(TweenMax.to($('#lomie-text'), 0.25, visiable_opt))
        .add(TweenMax.to($('#djoum-text'), 0.25, visiable_opt))
    )
    .on('leave', () => {
      var targets = [$('#bertoua-text'), $('#abong-text'),$('#mindourou-text'), $('#lomie-text'),$('#djoum-text')]
      TweenMax.killTweensOf(targets)
      TweenMax.to(targets, 0.5, hidden_opt)
    })
    .addTo(controller);

  var second_scene = new ScrollMagic.Scene({ triggerElement: map, triggerHook:'onLeave', duration: duration_per, offset: (duration_per-navOffset), reverse: true})
    .on('enter', () =>
      new TimelineMax()
				.add(TweenMax.to($('#cam-arrow7'), 0.5, visiable_opt))
        .add(TweenMax.to($('#marker-douala'), 0.5, visiable_opt))
				.add(TweenMax.to($('#douala-text'), 0.5, visiable_opt))
				.add(TweenMax.to($('#cam-arrow6'), 0.5, visiable_opt))
        .add(TweenMax.to($('#marker-yaounde'), 0.5, visiable_opt))
        .add(TweenMax.to($('#yaounde-text'), 0.5, visiable_opt))
        .addCallback(()=>{
           pulseMarker([
             $('#marker-douala'),
             $('#marker-yaounde'),
           ])
         }, 0.7)
    )
    .on('leave', () => {
      var targets = [$('#cam-arrow6'), $('#cam-arrow7'),$('#marker-douala'), $('#marker-yaounde'),$('#yaounde-text'), $('#douala-text')]
      TweenMax.killTweensOf(targets)
      TweenMax.to(targets, 0.5, hidden_opt)
    })
    .addTo(controller);

  var thrid_scene_targets = [$('#marker-yairport'), $('#marker-dairport'),$('#cam-arrow1'),$('#cam-arrow2'),$('#cam-arrow3'),$('#cam-arrow4'),$('#cam-arrow5'),$('#yairport-text'),$('#dairport-txt')]
  var thrid_scene = new ScrollMagic.Scene({ triggerElement: map, triggerHook:'onLeave', duration: duration_per, offset: (2 * duration_per-navOffset), reverse: true})

		.on('start', (e) => {
      var isForward = e.scrollDirection == 'FORWARD' ? true : false
			switchByDirD(e, map, 'assets/maps/Cameroon/desktop/map-01.jpg', 'assets/maps/Cameroon/desktop/map-02.jpg')
      if (isForward){
        return new TimelineMax()
          .add(TweenMax.to(thrid_scene_targets, 0.5, visiable_opt))
           .addCallback(()=>{
             pulseMarker([
               $('#marker-yairport'),
               $('#marker-dairport'),
             ])
           }, 0.7)
      } else {
        TweenMax.killTweensOf(thrid_scene_targets)
        TweenMax.to(thrid_scene_targets, 0.5, hidden_opt)
      }
    })
    .addTo(controller);

    return controller
}

Cameroon.MapCtrlM1 = () => {
  var map = Cameroon.maps_m[0]

  var controller = new ScrollMagic.Controller();

  var navOffset = ($('.nav').offsetHeight + $('#progress-div').offsetHeight) || 0

  var pin_scene = new ScrollMagic.Scene({ triggerElement: map, triggerHook:'onLeave', duration: '300%', offset: (-navOffset), reverse: true})
    .on('start', function(){
      this.setPin(this.triggerElement(), {pushFollowers: false})
    })
    .addTo(controller)

  var duration_per = pin_scene.duration() / 3
  //first scene trigger inmediately on map pin, use onLeave triggerHook
  var second_scene = new ScrollMagic.Scene({ triggerElement: map, triggerHook:'onLeave', duration: duration_per, offset: (duration_per-navOffset), reverse: true})
    .on('start', (e) => { switchByDir(e, map, Cameroon.pics_m[0], Cameroon.pics_m[1]) })
    .addTo(controller);

  var thrid_scene = new ScrollMagic.Scene({ triggerElement: map, triggerHook:'onLeave', duration: duration_per, offset: (2*duration_per-navOffset), reverse: true})
    .on('start', (e) => { switchByDir(e, map, Cameroon.pics_m[1], Cameroon.pics_m[2]) })
    .addTo(controller);

  return controller
}

function pulseMarker(markers){
	var inners = markers.map(item=>item.querySelector('.st9'))
	var outters = markers.map(item=>item.querySelector('.st8'))

	// TweenMax.fromTo(inners, 3, {attr:{r: 12.06}}, {attr:{r: 20}}).repeat(-1)//.yoyo(true)
	TweenMax.fromTo(outters, 1, {attr:{r: 20}, opacity: 0.4}, {attr:{r: 55.68}, opacity: 0}).repeat(-1)
}

function changeBg($map, src){
  //used only on mobile
	$map.querySelector('.routes-map-bg-m').src = src
}

function switchByDir(e, $map, src_old, src){
  var isForward = e.scrollDirection == 'FORWARD' ? true : false
    if (isForward){
      changeBg($map, src)
    } else {
      changeBg($map, src_old)
    }
}

function switchByDirD(e, $map, src_old, src){
  var isForward = e.scrollDirection == 'FORWARD' ? true : false
    if (isForward){
      changeBgD($map, src)
    } else {
      changeBgD($map, src_old)
    }
}

function changeBgD($map, src){
  //used only on mobile
  $map.querySelector('.routes-map-bg').src = src
}

export default Cameroon
