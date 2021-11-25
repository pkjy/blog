import { ActionContext } from 'vuex'
import { IRootState } from '../index'

export interface IBlogState {
  loadingContent: boolean
  [key: string]: any
}

// initial state
const state: IBlogState = {
  loadingContent: false,
}

// getters
const getters = {}

// actions
const actions = {
  getPost(context: ActionContext<IBlogState, IRootState>): void {
    context.commit('setLoading')
    context.commit('unsetLoading')
  }
}

// mutations
const mutations = {
  setLoading(state: IBlogState): void {
    state.loadingContent = true
  },

  unsetLoading(state: IBlogState): void {
    state.loadingContent = false
  }

}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
