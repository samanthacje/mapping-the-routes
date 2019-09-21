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
        .add(TweenMax.to($('#bertoua-text'), 0.5, visiable_opt))
        .add(TweenMax.to($('#abong-text'), 0.5, visiable_opt))
        .add(TweenMax.to($('#mindourou-text'), 0.5, visiable_opt))
        .add(TweenMax.to($('#lomie-text'), 0.5, visiable_opt))
        .add(TweenMax.to($('#djoum-text'), 0.5, visiable_opt))
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
        .add(TweenMax.to($('#arrow6'), 0.5, visiable_opt))
        .add(TweenMax.to($('#arrow7'), 0.5, visiable_opt))
        .add(TweenMax.to($('#marker-douala'), 0.5, visiable_opt))
        .add(TweenMax.to($('#marker-yaounde'), 0.5, visiable_opt))
        .add(TweenMax.to($('#yaounde-text'), 0.5, visiable_opt))
        .add(TweenMax.to($('#douala-text'), 0.5, visiable_opt))
        .addCallback(()=>{
          pulseMarker([
            $('#marker-douala'),
            $('#marker-yaounde'),
          ])
        }, 0.7)
    )
    .on('leave', () => {
      var targets = [$('#arrow6'), $('#arrow7'),$('#marker-douala'), $('#marker-yaounde'),$('#yaounde-text'), $('#douala-text')]
      TweenMax.killTweensOf(targets)
      TweenMax.to(targets, 0.5, hidden_opt)
    })
    .addTo(controller);

  var thrid_scene = new ScrollMagic.Scene({ triggerElement: map, triggerHook:'onLeave', duration: duration_per, offset: (2 * duration_per-navOffset), reverse: true})
    .setTween(
      new TimelineMax()
        .add(TweenMax.to([
          $('#marker-yairport'), $('#marker-dairport'),$('#arrow1'), $('#arrow2'), $('#arrow3'), $('#arrow4'),$('#arrow5'), $('#yairport-text'),$('#dairport-txt')
          ], 0, visiable_opt), 0.7)
        .addCallback(()=>{
          pulseMarker([
            $('#marker-yairport'),
            $('#marker-dairport'),
          ])
        }, 0.7)
    )
    .addTo(controller);

    return controller
}

export default Cameroon
