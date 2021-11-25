import router from './router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import store from './store'
import { ElMessage } from 'element-plus'
import { RouteLocationNormalized, NavigationGuardNext, RouteRecordRaw } from 'vue-router'

NProgress.configure({ showSpinner: false })

const whiteList = ['/login', '/home', '/home/index', '/home/poster']


router.beforeEach(async (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
  // Start progress bar
  NProgress.start()

  // Determine whether the user has logged in
  if (store.state.user.token) {
    if (to.path === '/login') {
      // If is logged in, redirect to the home page
      // next({ path: '/' })
      next()
      NProgress.done()
    } else {
      // Check whether the user has obtained his permission roles
      if (store.state.user.roles.length === 0) {
        try {
          // Note: roles must be a object array! such as: ['admin'] or ['developer', 'editor']
          await store.dispatch('user/GetUserInfo')
          const roles = store.state.user.roles
          // Generate accessible routes map based on role
          store.dispatch('permission/GenerateRoutes', roles)
          // Dynamically add accessible routes
          store.state.permission.dynamicRoutes.forEach((route: RouteRecordRaw) => router.addRoute(route))
          // Hack: ensure addRoutes is complete
          // Set the replace: true, so the navigation will not leave a history record
          next({ ...to, replace: true })
        } catch (err) {
          // Remove token and redirect to login page
          console.log('err', err)
          await store.dispatch('user/ResetToken')
          ElMessage.error((err as string) || 'Has Error')
          next(`/login?redirect=${to.path}`)
          NProgress.done()
        }
      } else {
        next()
      }
    }
  } else {
    // Has no token
    if (whiteList.indexOf(to.path) !== -1) {
      // In the free login whitelist, go directly
      next()
    } else {
      // Other pages that do not have permission to access are redirected to the login page.
      next(`/login?redirect=${to.path}`)
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  // Finish progress bar
  NProgress.done()
})
