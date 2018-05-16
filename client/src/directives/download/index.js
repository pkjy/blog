import canvasDowload from "./canvasDowload"

const install = function(Vue) {
  Vue.directive("download", canvasDowload)
}

// if (window.Vue) {
//   windowcanvasDowload =canvasDowload
//   Vue.use(install) // eslint-disable-line
// }

// canvasDowload.install = install
export default install
