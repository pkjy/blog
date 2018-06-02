import Vue from 'vue';
import Router from 'vue-router';
import Meta from 'vue-meta';

const MainBlog = () =>
  import("@/components/MainBlog.vue")
const MainArchives = () =>
  import("@/components/MainArchives.vue")
const MainHome = () =>
  import("@/components/MainHome.vue")
const MainGallery = () =>
  import("@/components/MainGallery.vue")
const MainGalleryDirective = () =>
  import("@/components/MainGalleryDirective.vue")
const MainGalleryMixin = () =>
  import("@/components/MainGalleryMixin.vue")
const MainGalleryCsv = () =>
  import("@/components/MainGalleryCsv.vue")
const MainGalleryQrcodePure = () =>
  import("@/components/MainGalleryQrcodePure.vue")

Vue.use(Router);
Vue.use(Meta);

const router = new Router({
  mode: 'hash',
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
  },
  {
    path: '/gallery/',
    name: 'MainGallery',
    component: MainGallery,
  },
  {
    path: '/gallery/directive',
    name: 'MainGalleryDirective',
    component: MainGalleryDirective,
  },
  {
    path: '/gallery/mixin',
    name: 'MainGalleryMixin',
    component: MainGalleryMixin,
  },
  {
    path: '/gallery/csv',
    name: 'MainGalleryCsv',
    component: MainGalleryCsv,
  },
  {
    path: '/gallery/qrcode-pure',
    name: 'MainGalleryQrcodePure',
    component: MainGalleryQrcodePure,
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
