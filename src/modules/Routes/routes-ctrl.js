import Malaysia from './malaysia.js'
import Indonesia from './indonesia.js'

const RoutesCtrl = {}

RoutesCtrl.init = (isDesktop) => {
  if (isDesktop){
  	Indonesia.MapCtrl1()
    //return all controllers
    return [Malaysia.MapCtrl1(), Malaysia.MapCtrl2()]
  } else {
    return [Malaysia.MapCtrlM1(), Malaysia.MapCtrlM2(), Malaysia.MapCtrlM3()]
  }
}

export default RoutesCtrl