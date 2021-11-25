import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

/* Layout */
import Layout from '@/layout/index.vue'
import LayoutHome from '@/layout/home.vue'

export const constantRoutes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home', // '/home/index'
  },
  {
    path: '/redirect',
    component: Layout,
    meta: { hidden: true },
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import(/* webpackChunkName: "redirect" */ '../views/redirect/index.vue')
      }
    ]
  },
  {
    path: '/login',
    component: () => import(/* webpackChunkName: "login" */ '@/views/login/index.vue'),
    meta: { hidden: true }
  },
  {
    path: '/home',
    component: LayoutHome,
    redirect: '/home/index',
    meta: { hidden: true },
    children: [
      {
        path: 'index',
        component: () => import(/* webpackChunkName: "index" */ '@/views/home/index.vue'),
        name: 'Home',
        meta: {
          title: 'home',
          breadcrumb: false
        }
      },
      {
        path: 'poster',
        component: () => import(/* webpackChunkName: "index" */ '@/views/poster/index.vue'),
        name: 'Poster',
        meta: {
          title: 'poster',
          fullScreenMode: true,
          breadcrumb: false
        }
      },
      {
        path: 'blog',
        component: () => import(/* webpackChunkName: "index" */ '@/views/blog/index.vue'),
        name: 'Blog',
        meta: {
          title: 'blog',
          breadcrumb: false
        }
      },
      {
        path: 'blog/:id',
        component: () => import(/* webpackChunkName: "index" */ '@/views/blog/detail.vue'),
        name: 'BlogDetail',
        meta: {
          title: 'BlogDetail',
          breadcrumb: false
        }
      },
    ]
  },
  {
    path: '/manage',
    component: Layout,
    redirect: '/manage/dashboard', // '/home/index'
    children: [
      {
        path: 'dashboard',
        component: () => import(/* webpackChunkName: "dashboard" */ '@/views/dashboard/index.vue'),
        name: 'Dashboard',
        meta: {
          title: '首页',
          icon: 'kai-dashboard',
          affix: true
        }
      }
    ]
  },
  {
    path: '/manage',
    component: Layout,
    children: [
      {
        path: 'example',
        component: () => import(/* webpackChunkName: "example" */ '@/views/example/index.vue'),
        name: 'Example',
        meta: {
          title: '示例展示',
          icon: 'kai-gallery'
        }
      }
    ]
  },
  {
    path: '/manage',
    component: Layout,
    children: [
      {
        path: 'guide',
        component: () => import(/* webpackChunkName: "guide" */ '@/views/guide/index.vue'),
        name: 'Guide',
        meta: {
          title: '引导页',
          icon: 'kai-ic_guide',
          noCache: true
        }
      }
    ]
  },
  {
    path: '/manage',
    component: Layout,
    children: [
      {
        path: '404',
        component: () => import(/* webpackChunkName: "error-page-404" */ '@/views/error-page/404.vue'),
        name: 'Page404',
        meta: {
          title: '错误页面',
          icon: 'kai-browser-',
          noCache: true
        }
      }
    ]
  },
  {
    path: '/manage',
    component: Layout,
    children: [
      {
        path: 'error',
        component: () => import(/* webpackChunkName: "error-log" */ '@/views/error-log/index.vue'),
        name: 'ErrorLog',
        meta: {
          title: '错误日志',
          icon: 'kai-bug'
        }
      }
    ]
  },
  {
    path: '/manage',
    component: Layout,
    children: [
      {
        path: 'clipboard',
        component: () => import(/* webpackChunkName: "clipboard" */ '@/views/clipboard/index.vue'),
        name: 'Clipboard',
        meta: {
          title: '粘贴板',
          icon: 'kai-wenjianfuzhi'
        }
      }
    ]
  },
  {
    path: '/manage',
    component: Layout,
    children: [
      {
        path: 'sticky',
        component: () => import(/* webpackChunkName: "clipboard" */ '@/views/sticky/index.vue'),
        name: 'Sticky',
        meta: {
          title: 'Sticky',
          icon: 'kai-stickynote'
        }
      }
    ]
  },
  {
    path: '/manage',
    component: Layout,
    children: [
      {
        path: 'excel',
        component: () => import(/* webpackChunkName: "clipboard" */ '@/views/excel/index.vue'),
        name: 'Excel',
        meta: {
          title: 'Excel',
          icon: 'kai-excel'
        }
      },
    ]
  },
  // {
  //   path: '/:pathMatch(.*)',
  //   redirect: '/404',
  //   meta: { hidden: true }
  // }
]

export const asyncRoutes: Array<RouteRecordRaw> = [
  // {
  //   path: '/permission',
  //   component: Layout,
  //   redirect: '/permission/directive',
  //   meta: {
  //     title: 'permission',
  //     icon: 'pkjy-suo',
  //     roles: ['manage', 'editor'], // you can set roles in root nav
  //     alwaysShow: true // will always show the root menu
  //   },
  //   children: [
  //     {
  //       path: 'page',
  //       component: () => import(/* webpackChunkName: "permission-page" */ '@/views/permission/page.vue'),
  //       name: 'PagePermission',
  //       meta: {
  //         title: 'pagePermission',
  //         roles: ['manage'] // or you can only set roles in sub nav
  //       }
  //     },
  //     {
  //       path: 'role',
  //       component: () => import(/* webpackChunkName: "permission-role" */ '@/views/permission/role.vue'),
  //       name: 'RolePermission',
  //       meta: {
  //         title: 'rolePermission',
  //         roles: ['manage']
  //       }
  //     }
  //   ]
  // },
  /** when your routing map is too long, you can split it into small modules **/
  // componentsRouter,
  // nestedRouter,
  // tableRouter,
  // {
  //   path: '/excel',
  //   component: Layout,
  //   redirect: '/excel/export-excel',
  //   meta: {
  //     title: 'excel',
  //     icon: 'pkjy-excel'
  //   },
  //   children: [
  //     {
  //       path: 'export-excel',
  //       component: () => import(/* webpackChunkName: "export-excel" */ '@/views/excel/export-excel.vue'),
  //       name: 'ExportExcel',
  //       meta: { title: 'exportExcel' }
  //     },
  //     {
  //       path: 'export-selected-excel',
  //       component: () => import(/* webpackChunkName: "select-excel" */ '@/views/excel/select-excel.vue'),
  //       name: 'SelectExcel',
  //       meta: { title: 'selectExcel' }
  //     },
  //     {
  //       path: 'export-merge-header',
  //       component: () => import(/* webpackChunkName: "merge-header" */ '@/views/excel/merge-header.vue'),
  //       name: 'MergeHeader',
  //       meta: { title: 'mergeHeader' }
  //     },
  //     {
  //       path: 'upload-excel',
  //       component: () => import(/* webpackChunkName: "upload-excel" */ '@/views/excel/upload-excel.vue'),
  //       name: 'UploadExcel',
  //       meta: { title: 'uploadExcel' }
  //     }
  //   ]
  // },
  // {
  //   path: '/zip',
  //   component: Layout,
  //   redirect: 'noredirect',
  //   children: [
  //     {
  //       path: 'index',
  //       component: () => import(/* webpackChunkName: "zip" */ '@/views/zip/index.vue'),
  //       name: 'ExportZip',
  //       meta: {
  //         title: 'zip',
  //         icon: 'pkjy-zip'
  //       }
  //     }
  //   ]
  // },
  // {
  //   path: '/theme',
  //   component: Layout,
  //   redirect: 'noredirect',
  //   children: [
  //     {
  //       path: 'index',
  //       component: () => import(/* webpackChunkName: "theme" */ '@/views/theme/index.vue'),
  //       name: 'Theme',
  //       meta: {
  //         title: 'theme',
  //         icon: 'pkjy-huanfu'
  //       }
  //     }
  //   ]
  // },
  // {
  //   path: '/i18n',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'index',
  //       component: () => import(/* webpackChunkName: "i18n-demo" */ '@/views/i18n-demo/index.vue'),
  //       name: 'I18n',
  //       meta: {
  //         title: 'i18n',
  //         icon: 'pkjy-yk_guoji_fill'
  //       }
  //     }
  //   ]
  // },
]

const router = createRouter({
  // history: createWebHistory(process.env.BASE_URL),
  history: createWebHashHistory(),
  routes: constantRoutes
})

export function resetRouter() {
  const newRouter = router;
  (router as any).matcher = (newRouter as any).matcher // reset router
}

export default router


