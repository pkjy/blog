
// import { login, logout, getUserInfo } from '@/api/users'
import { getToken, setToken, removeToken } from '@/utils/cookies'
import router, { resetRouter } from '@/router'
import { RouteRecordRaw } from 'vue-router'
import { ActionContext } from 'vuex'
import { IRootState } from '../index'

export interface IUserState {
  token: string
  name: string
  avatar: string
  introduction: string
  roles: string[]
  email: string
}

// initial state
const state: IUserState = {
  token: getToken() || '"admin-token"',
  name: '',
  avatar: '//avatars.githubusercontent.com/u/14119424?v=4',
  introduction: '',
  roles: [],
  email: '',
}

// getters
const getters = {}

// actions
const actions = {

  async Login(context: ActionContext<IUserState, IRootState>, userInfo: { username: string, password: string }): Promise<void> {
    let { username } = userInfo
    const { password } = userInfo
    console.log('username', username)
    username = username.trim()
    console.log('store', username, password)
    // const response = (await login({ username, password }) as { data: { accessToken: string } })
    const response = { data: { accessToken: "admin-token" } }
    console.log('store data', response.data)
    setToken(response.data.accessToken)
    context.commit('SET_TOKEN', response.data.accessToken)
  },
  ResetToken(context: ActionContext<IUserState, IRootState>): void {
    removeToken()
    context.commit('SET_TOKEN', '')
    context.commit('SET_ROLES', [])
  },
  async GetUserInfo(context: ActionContext<IUserState, IRootState>): Promise<void> {
    if (context.state.token === '') {
      throw Error('GetUserInfo: token is undefined!')
    }
    // const { data } = (await getUserInfo({ /* Your params here */ }) as { data: { user: { roles: string[], name: string, avatar: string, introduction: string, email: string } } })
    const data = { "user": { "id": 0, "username": "admin", "password": "any", "name": "Super Admin", "avatar": "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif", "introduction": "I am a super administrator", "email": "admin@test.com", "phone": "1234567890", "roles": ["admin"] } }
    if (!data) {
      throw Error('Verification failed, please Login again.')
    }
    const { roles, name, avatar, introduction, email } = data.user
    // roles must be a non-empty array
    if (!roles || roles.length <= 0) {
      throw Error('GetUserInfo: roles must be a non-null array!')
    }
    context.commit('SET_ROLES', roles)
    context.commit('SET_NAME', name)
    context.commit('SET_AVATAR', avatar)
    context.commit('SET_INTRODUCTION', introduction)
    context.commit('SET_EMAIL', email)
  },
  async ChangeRoles(context: ActionContext<IUserState, IRootState>, role: string): Promise<void> {
    // Dynamically modify permissions
    const token = role + '-token'
    context.commit('SET_TOKEN', token)
    setToken(token)
    await context.dispatch('user/GetUserInfo')
    resetRouter()
    // Generate dynamic accessible routes based on roles
    context.dispatch('permission/GenerateRoutes', context.state.roles)
    // Add generated routes
    context.rootState.permission.dynamicRoutes.forEach((route: RouteRecordRaw) => router.addRoute(route))
    // Reset visited views and cached views
    context.dispatch('user/tagsView/delAllViews')
  },
  async LogOut(context: ActionContext<IUserState, IRootState>): Promise<void> {
    if (context.state.token === '') {
      throw Error('LogOut: token is undefined!')
    }
    // await logout()
    removeToken()
    resetRouter()

    // Reset visited views and cached views
    context.dispatch('user/tagsView/delAllViews')
    context.commit('SET_TOKEN', '')
    context.commit('SET_ROLES', [])
  }
}

// mutations
const mutations = {
  SET_TOKEN(state: IUserState, token: string): void {
    state.token = token
  },
  SET_NAME(state: IUserState, name: string): void {
    state.name = name
  },
  SET_AVATAR(state: IUserState, avatar: string): void {
    state.avatar = avatar
  },
  SET_INTRODUCTION(state: IUserState, introduction: string): void {
    state.introduction = introduction
  },
  SET_ROLES(state: IUserState, roles: string[]): void {
    state.roles = roles
  },
  SET_EMAIL(state: IUserState, email: string): void {
    state.email = email
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}

