import './style/main.css'
import './style/desktop.css'
import './style/routes-map.css'
import './style/progress-bar.css'
import './style/overlay.css'

import ProgressBar from './modules/progress-bar.js'
import Navbar from './modules/navbar.js'
import Hash from './modules/url-hash.js'
import Subscribe from './modules/subscribe.js'
import SeizureMap from './modules/seizure-map.js'
import RoutesCtrl from './modules/Routes/routes-ctrl.js'

window.addEventListener('DOMContentLoaded', () => {
	//init
	var isDesktopPrev = window.matchMedia("(min-device-width: 480px)").matches
	loadHeaderVideo(isDesktopPrev)

	var audioCtrl = ProgressBar.ctrlHeaderAudio()
	var progressCtrl = ProgressBar.initScrollController()
	ProgressBar.initClickNav()

	Navbar.titleChangeD()

	Navbar.countryControllerD()

	Hash.initHashController()

	Subscribe.initBookmark()

	SeizureMap.renderMap()

	var ctrls_prev = RoutesCtrl.init(isDesktopPrev)

	//window resize:
	window.onresize = function(){
	  var isDesktop = window.matchMedia("(min-device-width: 480px)").matches
	  // device change
	  if (isDesktop != isDesktopPrev){
	  	console.log('device changed')
	    loadHeaderVideo(isDesktop)
	    isDesktopPrev = isDesktop

	    //switch routes ctrl
	    ctrls_prev.forEach(ctrl=>{ ctrl.destroy(true) }) //destroy ctrls, reset scenes
			RoutesCtrl.init(isDesktop)
	  }
	  //reset audio ctrl
	  audioCtrl.destroy(true)
	  audioCtrl = ProgressBar.ctrlHeaderAudio()
	  //reset scroll bar progress
	  progressCtrl.destroy(true)
	  progressCtrl =  ProgressBar.initScrollController()
	}
});

function loadHeaderVideo(isDesktop){
  var video = document.querySelector('#header-video')
  var source = document.querySelector('#header-video > source')

  if (isDesktop){
    video.poster = "assets/images/header-image-desktop.jpg"
    source.src = "assets/images/pangolinreports_header.mp4"
    video.load()
  } else {
    video.poster = "assets/images/header-thumbnail-portrait.jpg"
    source.src = "assets/images/pangolinreports_header_portrait.mp4"
    video.load()
  }
}
