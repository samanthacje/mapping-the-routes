import TweenMax from 'TweenMax'
import ScrollMagic from 'ScrollMagic'
import 'animation.gsap'

const $ = q => document.querySelector(q)

const HK = {}

HK.MapCtrl = () => {
  var map = $('#hk-routes-1'),
      visiable_opt = {opacity: 1, ease:Linear.easeNone},
      hidden_opt = {opacity: 0, ease:Linear.easeNone}

  var controller = new ScrollMagic.Controller();

  var navOffset = ($('.nav').offsetHeight + $('#progress-div').offsetHeight) || 0

  var pin_scene = new ScrollMagic.Scene({ triggerElement: map, triggerHook:'onLeave', duration: '500%', offset: (-navOffset), reverse: true})
    .on('start', function(){
      this.setPin(this.triggerElement(), {pushFollowers: false})
    })
    .addTo(controller)
  
  var duration_per = pin_scene.duration() / 5

  //first scene trigger inmediately on map pin, use onLeave triggerHook
  var first_scene = new ScrollMagic.Scene({ triggerElement: map, triggerHook:'onLeave', duration: duration_per, offset: (-navOffset), reverse: true})
    .on('start', (e) =>{
      var isForward = e.scrollDirection == 'FORWARD' ? true : false
      var targets = [$('#hk-ndjili-line'),$('#hk-marker-ndjili'),$('#hk-n_djili-text'), $('#marker-casablanca'), $('#casablanca-text')]
      if (isForward){
        TweenMax.to(targets, 0.5, visiable_opt)
      } else {
        TweenMax.killTweensOf(targets)
        TweenMax.to(targets, 0.5, hidden_opt)
      }
    })
    .addTo(controller);

  var second_scene = new ScrollMagic.Scene({ triggerElement: map, triggerHook:'onLeave', duration: duration_per, offset: (duration_per-navOffset), reverse: true})
    .on('start', (e) =>{
      var isForward = e.scrollDirection == 'FORWARD' ? true : false
      var targets = [$('#casablanca-line'),$('#hamad-text'),$('#marker-hamad')]
      if (isForward){
        TweenMax.to(targets, 0.5, visiable_opt)
      } else {
        TweenMax.killTweensOf(targets)
        TweenMax.to(targets, 0.5, hidden_opt)
      }
    })
    .addTo(controller);

  var thrid_scene = new ScrollMagic.Scene({ triggerElement: map, triggerHook:'onLeave', duration: duration_per, offset: (2*duration_per-navOffset), reverse: true})
    .on('start', (e) =>{
      var isForward = e.scrollDirection == 'FORWARD' ? true : false
      var targets = [$('#hamad-line'),$('#HK-text'),$('#marker-HK')]
      if (isForward){
        $('#hk-text-static').style.display = 'none'
        TweenMax.to(targets, 0.5, visiable_opt)
      } else {
        $('#hk-text-static').style.display = 'flex'
        TweenMax.killTweensOf(targets)
        TweenMax.to(targets, 0.5, hidden_opt)
      }
    })
    .addTo(controller);

  var forth_scene = new ScrollMagic.Scene({ triggerElement: map, triggerHook:'onLeave', duration: duration_per, offset: (3*duration_per-navOffset), reverse: true})
    .on('start', (e) =>{
      var isForward = e.scrollDirection == 'FORWARD' ? true : false
      switchByDirD(e, map, 'assets/maps/HK/desktop/map-01.jpg', 'assets/maps/HK/desktop/map-02.jpg')

      var part_one_targets = [$('#hk-ndjili-line'),$('#hk-marker-ndjili'),$('#hk-n_djili-text'), $('#marker-casablanca'), $('#casablanca-text'), $('#casablanca-line'),$('#hamad-text'),$('#marker-hamad'), $('#hamad-line'),$('#HK-text'),$('#marker-HK')]
      var targets = [
        $('#hk-line'),
        $('#marker-HK-2'),
        $('#HK-text-2'),
      ]
      if (isForward){
        return new TimelineMax()
        .add(TweenMax.to(part_one_targets, 0.5, hidden_opt))
        .add(TweenMax.to(targets, 0.5, visiable_opt))
      } else {
        TweenMax.to(part_one_targets, 0.5, visiable_opt)
        TweenMax.killTweensOf(targets)
        TweenMax.to(targets, 0.5, hidden_opt)
      }
    })
    .addTo(controller);

  var fifth_scene = new ScrollMagic.Scene({ triggerElement: map, triggerHook:'onLeave', duration: duration_per, offset: (4*duration_per-navOffset), reverse: true})
    .on('start', (e) =>{
      var isForward = e.scrollDirection == 'FORWARD' ? true : false
      var targets = [
        $('#macau-line'),
        $('#marker-macau'),
        $('#macau-text'),
        $('#marker-HK-3'),
        $('#HK-text-3'),
      ]
      if (isForward){
        TweenMax.to([$('#marker-macau'),$('#macau-text'),$('#marker-HK-3'),$('#HK-text-3')], 0.5, visiable_opt)
        TweenMax.to($('#macau-line'), 0.5, {opacity: 0.5, ease:Linear.easeNone},)
      } else {
        TweenMax.killTweensOf(targets)
        TweenMax.to(targets, 0.5, hidden_opt)
      }
    })
    .addTo(controller);

  return controller
}

HK.MapCtrlM = () => {
  var map = $('#hk-routes-m-1')

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
    .on('start', (e) => { switchByDirM(e, map, 'assets/maps/HK/mobile/m-map-01.jpg', 'assets/maps/HK/mobile/m-map-02.jpg') })
    .addTo(controller);

  var thrid_scene = new ScrollMagic.Scene({ triggerElement: map, triggerHook:'onLeave', duration: duration_per, offset: (2*duration_per-navOffset), reverse: true})
    .on('start', (e) => { switchByDirM(e, map, 'assets/maps/HK/mobile/m-map-02.jpg', 'assets/maps/HK/mobile/m-map-03.jpg') })
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

export default HK