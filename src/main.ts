import { createApp } from 'vue'
import App from '@/App.vue'
import 'normalize.css'

import router from './router'
import store from './store'

import { setupGlobDirectives } from '@/directives'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '@/permission'

import '@/assets/styles/element-variables.scss'
import '@/assets/styles/index.scss'

import Svg from '@/components/Svg/index.vue'

const app = createApp(App)
// app.directive('my-directive', {
//   // Directive has a set of lifecycle hooks:
//   // called before bound element's parent component is mounted
//   beforeMount() {},
//   // called when bound element's parent component is mounted
//   mounted() {},
//   // called before the containing component's VNode is updated
//   beforeUpdate() {},
//   // called after the containing component's VNode and the VNodes of its children // have updated
//   updated() {},
//   // called before the bound element's parent component is unmounted
//   beforeUnmount() {},
//   // called when the bound element's parent component is unmounted
//   unmounted() {}
// })
app.config.errorHandler = function (err, vm, info) {
  store.dispatch('errorLog/AddErrorLog', {
    err,
    vm,
    info,
    url: window.location.href
  })
}
// 注入自定义指令
setupGlobDirectives(app)
app.use(store).use(router).component('Svg', Svg).use(ElementPlus).mount('#app')