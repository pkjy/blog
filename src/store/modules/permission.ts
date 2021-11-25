import { ActionContext } from 'vuex'
import { IRootState } from '../index'
import { RouteRecordRaw } from 'vue-router'
import { asyncRoutes, constantRoutes } from '@/router'

const hasPermission = (roles: string[], route: RouteRecordRaw) => {
  if (route && route.meta && route.meta.roles) {
    const arr = (route.meta.roles as string[])
    return roles.some(role => arr.includes(role))
  } else {
    return true
  }
}

export const filterAsyncRoutes = (routes: Array<RouteRecordRaw>, roles: string[]): Array<RouteRecordRaw> => {
  const res: Array<RouteRecordRaw> = []
  routes.forEach(route => {
    const r = { ...route }
    if (hasPermission(roles, r)) {
      if (r.children) {
        r.children = filterAsyncRoutes(r.children, roles)
      }
      res.push(r)
    }
  })
  return res
}

export interface IPermissionState {
  routes: Array<RouteRecordRaw>
  dynamicRoutes: Array<RouteRecordRaw>
}

// initial state
const state:IPermissionState = {
  routes: [],
  dynamicRoutes: [],
}

// getters
const getters = {}

// actions
const actions = {
  GenerateRoutes(context: ActionContext<IPermissionState, IRootState>, roles: string[]): void {
    let accessedRoutes
    if (roles.includes('admin')) {
      accessedRoutes = asyncRoutes
    } else {
      accessedRoutes = filterAsyncRoutes(asyncRoutes, roles)
    }
    context.commit('SET_ROUTES', accessedRoutes)
  }
}

// mutations
const mutations = {
  SET_ROUTES(state: IPermissionState, routes: Array<RouteRecordRaw>): void {
    state.routes = constantRoutes.concat(routes)
    state.dynamicRoutes = routes
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}



