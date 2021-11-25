import { getSidebarStatus, getSize, setSidebarStatus, setLanguage, setSize } from '@/utils/cookies'
import { ActionContext } from 'vuex'
import { IRootState } from '../index'

export interface IAppState {
  device: DeviceType
  sidebar: {
    opened: boolean
    withoutAnimation: boolean
  }
  language: string
  size: string
}
export enum DeviceType {
  Mobile,
  Desktop,
}

// initial state
const state: IAppState = {
  sidebar: {
    opened: getSidebarStatus() !== 'closed',
    withoutAnimation: false
  },
  device: DeviceType.Desktop,
  language: 'zh-cn',
  size: getSize() || 'medium'
}

// getters
const getters = {
  isMobile: (state: IAppState) => {
    return state.device === DeviceType.Mobile
  }
}

// actions
const actions = {
  ToggleSideBar(context: ActionContext<IAppState, IRootState>, withoutAnimation: boolean): void {
    context.commit('TOGGLE_SIDEBAR', withoutAnimation)
  },

  CloseSideBar(context: ActionContext<IAppState, IRootState>, withoutAnimation: boolean): void {
    context.commit('CLOSE_SIDEBAR', withoutAnimation)
  },

  ToggleDevice(context: ActionContext<IAppState, IRootState>, device: DeviceType): void {
    context.commit('TOGGLE_DEVICE', device)
  },

  SetLanguage(context: ActionContext<IAppState, IRootState>, language: string): void {
    context.commit('SET_LANGUAGE', language)
  },

  SetSize(context: ActionContext<IAppState, IRootState>, size: string): void {
    context.commit('SET_SIZE', size)
  },

  changeVideoDialog(context: ActionContext<IAppState, IRootState>, bool: boolean): void {
    context.commit('CHANGE_VIDEO_DIALOG', bool)
  },
}

// mutations
const mutations = {
  TOGGLE_SIDEBAR(state: IAppState, withoutAnimation: boolean): void {
    state.sidebar.opened = !state.sidebar.opened
    state.sidebar.withoutAnimation = withoutAnimation
    if (state.sidebar.opened) {
      setSidebarStatus('opened')
    } else {
      setSidebarStatus('closed')
    }
  },
  CLOSE_SIDEBAR(state: IAppState, withoutAnimation: boolean): void {
    state.sidebar.opened = false
    state.sidebar.withoutAnimation = withoutAnimation
    setSidebarStatus('closed')
  },

  TOGGLE_DEVICE(state: IAppState, device: DeviceType): void {
    state.device = device
  },

  SET_LANGUAGE(state: IAppState, language: string): void {
    state.language = language
    setLanguage(state.language)
  },

  SET_SIZE(state: IAppState, size: string): void {
    state.size = size
    setSize(state.size)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
