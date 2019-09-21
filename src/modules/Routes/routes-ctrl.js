import Malaysia from './malaysia.js'
import Indonesia from './indonesia.js'

const RoutesCtrl = {}
var	initCalledOnce = false

const callOnce = () => {
	Indonesia.MapCtrl1()

	return true
}

RoutesCtrl.init = (isDesktop) => {
	if(!initCalledOnce){
		console.log('init called once')
		initCalledOnce = callOnce()
	}
  if (isDesktop){
    //return all controllers
    return [Malaysia.MapCtrl1(), Malaysia.MapCtrl2()]
  } else {
    return [Malaysia.MapCtrlM1(), Malaysia.MapCtrlM2(), Malaysia.MapCtrlM3(), Indonesia.MapCtrlM1()]
  }
}

export default RoutesCtrl