/* eslint-disable no-console */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import post from '@/components/MainPost';
import NotFound from '@/components/common/404';

import App from './App';
import router from './router';
import store from './store';

import ElementUI from 'element-ui';
Vue.use(ElementUI)

Vue.config.productionTip = false;

// 将date-fns作为全局的filter
import {
  format
} from "date-fns"
Vue.filter("fns", function (value, formatdata = "YYYY-MM-DD HH:mm") {
  if (value === void 0) return "-"
  return format(value, formatdata)
})

// 水波纹指令
import wave from "./directives/waves/index"
Vue.use(wave)
// 水波纹指令
import canvasDownload from "@/directives/download/index"
Vue.use(canvasDownload)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  // components: { App },
  // template: '<App/>',
  render: h => h(App),
  created: () => {
    // set api root
    store.commit('setRoot', router.options.base);
    // add post routes
    store.dispatch('initialize')
      .then(() => {
        const routes = store.state.postlist.map(({
          path
        }) => ({
          path,
          component: post,
        }));
        routes.push({
          path: '*',
          name: 'NotFound',
          component: NotFound,
        });
        router.addRoutes(routes);
        // const logo = document.getElementById('logo');
        // if (logo.complete) {
        document.querySelector('.loading-warp-main').style.display = 'none';
        // } else {
        //   logo.onload = () => {
        //     document.querySelector('.loading-warp-main').style.display = 'none';
        //   };
        // }
      });
  },
});
