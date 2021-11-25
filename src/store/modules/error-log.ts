import { ActionContext } from 'vuex'
import { IRootState } from '../index'

export interface IErrorLogState {
  logs: IErrorLog[]
}

interface IErrorLog {
  err: Error
  vm: any
  info: string
  url: string
}
// initial state
const state : IErrorLogState ={
  logs: []
}

// getters
const getters = {}

// actions
const actions = {
  AddErrorLog(context: ActionContext<IErrorLogState, IRootState>, log: IErrorLog): void  {
    context.commit('ADD_ERROR_LOG', log)
  },

  ClearErrorLog(context: ActionContext<IErrorLogState, IRootState>): void  {
    context.commit('CLEAR_ERROR_LOG')
  }
}

// mutations
const mutations = {
  ADD_ERROR_LOG(state: IErrorLogState, log: IErrorLog): void {
    state.logs.push(log)
  },

  CLEAR_ERROR_LOG(state: IErrorLogState): void {
    state.logs.splice(0)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}