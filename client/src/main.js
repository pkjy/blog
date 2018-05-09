/* eslint-disable no-console */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import post from '@/components/MainPost';
import NotFound from '@/components/common/404';

import App from './App';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

import {
  format
} from "date-fns"
Vue.filter("formdate", function (value, formatdata = "YYYY-MM-DD HH:mm") {
  if (value === void 0) return "-"
  return format(value, formatdata)
})

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
        console.log('111', router, routes)
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