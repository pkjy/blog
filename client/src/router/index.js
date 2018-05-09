import Vue from 'vue';
import Router from 'vue-router';
import Meta from 'vue-meta';

const MainBlog = () =>
  import ("@/components/MainBlog.vue")
const MainArchives = () =>
  import ("@/components/MainArchives.vue")
const MainHome = () =>
  import ("@/components/MainHome.vue")

Vue.use(Router);
Vue.use(Meta);

const router = new Router({
  mode: 'history',
  base: '/',
  routes: [{
      path: '/',
      name: 'MainHome',
      component: MainHome,
      beforeEnter: (to, from, next) => {
        if (to.query.path) {
          next(to.query.path);
        } else {
          next();
        }
      },
    }, {
      path: '/blog/',
      name: 'MainBlog',
      component: MainBlog,
      beforeEnter: (to, from, next) => {
        if (to.query.path) {
          next(to.query.path);
        } else {
          next();
        }
      },
    },
    {
      path: '/archives/',
      name: 'MainArchives',
      component: MainArchives,
    }
  ],
  scrollBehavior(to) {
    if (to.hash) {
      return {
        selector: to.hash,
      };
    }
    return {
      x: 0,
      y: 0,
    };
  },
});

export default router;