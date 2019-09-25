//for modules with dependcies only of d3

import Subscribe from './modules/subscribe.js'
import SeizureMap from './modules/seizure-map.js'

window.addEventListener('DOMContentLoaded', () => {
	Subscribe.initBookmark()
	SeizureMap.renderMap()
})