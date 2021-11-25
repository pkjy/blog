import { ActionContext } from 'vuex'
import { IRootState } from '../index'
import defaultSettings from '@/settings'
import elementVariables from '@/assets/styles/element-variables.scss'

export interface ISettingsState {
  theme: string
  fixedHeader?: boolean
  showSettings?: boolean
  showTagsView?: boolean
  showSidebarLogo?: boolean
  sidebarTextTheme?: boolean
}

// initial state
const state: ISettingsState = {
  theme: elementVariables.theme,
  fixedHeader: defaultSettings.fixedHeadertheme,
  showSettings: defaultSettings.showSettingstheme,
  showTagsView: defaultSettings.showTagsViewtheme,
  showSidebarLogo: defaultSettings.showSidebarLogotheme,
  sidebarTextTheme: defaultSettings.sidebarTextThemetheme,
}

// getters
const getters = {
  showSettings: (state: ISettingsState) => {
    return state.showSettings
  },
  fixedHeader: (state: ISettingsState) => {
    return state.fixedHeader
  }
}

// actions
const actions = {
  ChangeSetting(context: ActionContext<ISettingsState, IRootState>, payload: { key: keyof ISettingsState, value: string }): void {
    context.commit('CHANGE_SETTING', payload)
  }
}

// mutations
const mutations = {
  CHANGE_SETTING(state: ISettingsState, payload: { key: keyof ISettingsState, value: string }): void {
    const { key, value } = payload
    if (Object.prototype.hasOwnProperty.call(this, key)) {
      state[key] = (value as never)
    }
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
