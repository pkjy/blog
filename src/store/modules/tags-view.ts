import { ActionContext } from 'vuex'
import { IRootState } from '../index'
import { RouteRecordNormalized, RouteRecordName } from 'vue-router'

export interface ITagView extends Partial<RouteRecordNormalized> {
  title?: string
  name?: RouteRecordName
  fullPath?: string
}

export interface ITagsViewState {
  visitedViews: ITagView[]
  cachedViews: (string | undefined)[]
}

// initial state
const state = (): ITagsViewState => ({
  visitedViews: [],
  cachedViews: []
})

// getters
const getters = {}

// actions
const actions = {
  addView(context: ActionContext<ITagsViewState, IRootState>, view: ITagView): void {
    context.commit('ADD_VISITED_VIEW', view)
    context.commit('ADD_CACHED_VIEW', view)
  },
  addVisitedView(context: ActionContext<ITagsViewState, IRootState>, view: ITagView): void {
    context.commit('ADD_VISITED_VIEW', view)
  },
  delView(context: ActionContext<ITagsViewState, IRootState>, view: ITagView): void {
    context.commit('DEL_VISITED_VIEW', view)
    context.commit('DEL_CACHED_VIEW', view)
  },
  delCachedView(context: ActionContext<ITagsViewState, IRootState>, view: ITagView): void {
    context.commit('DEL_CACHED_VIEW', view)
  },
  delOthersViews(context: ActionContext<ITagsViewState, IRootState>, view: ITagView): void {
    context.commit('DEL_OTHERS_VISITED_VIEWS', view)
    context.commit('DEL_OTHERS_CACHED_VIEWS', view)
  },
  delAllViews(context: ActionContext<ITagsViewState, IRootState>): void {
    context.commit('DEL_ALL_VISITED_VIEWS')
    context.commit('DEL_ALL_CACHED_VIEWS')
  },
  delAllCachedViews(context: ActionContext<ITagsViewState, IRootState>): void {
    context.commit('DEL_ALL_CACHED_VIEWS')
  },
  updateVisitedView(context: ActionContext<ITagsViewState, IRootState>, view: ITagView): void {
    context.commit('UPDATE_VISITED_VIEW', view)
  },
}

// mutations
const mutations = {
  ADD_VISITED_VIEW(state: ITagsViewState, view: ITagView): void {
    if (state.visitedViews.some(v => v.path === view.path)) return
    state.visitedViews.push(
      Object.assign({}, view, {
        title: view?.meta?.title || 'no-name'
      })
    )
  },
  ADD_CACHED_VIEW(state: ITagsViewState, view: { meta: { noCache?: string }, name: string }): void {
    if (view.name === null) return
    if (state.cachedViews.includes(view.name)) return
    if (!view?.meta?.noCache) {
      state.cachedViews.push(view.name)
    }
  },
  DEL_VISITED_VIEW(state: ITagsViewState, view: ITagView): void {
    for (const [i, v] of state.visitedViews.entries()) {
      if (v.path === view.path) {
        state.visitedViews.splice(i, 1)
        break
      }
    }
  },
  DEL_CACHED_VIEW(state: ITagsViewState, view: { name: string }): void {
    if (view.name === null) return
    const index = state.cachedViews.indexOf(view.name)
    index > -1 && state.cachedViews.splice(index, 1)
  },
  DEL_OTHERS_VISITED_VIEWS(state: ITagsViewState, view: ITagView): void {
    state.visitedViews = state.visitedViews.filter(v => {
      return v?.meta?.affix || v.path === view.path
    })
  },
  DEL_OTHERS_CACHED_VIEWS(state: ITagsViewState, view: { name: string }): void {
    if (view.name === null) return
    const index = state.cachedViews.indexOf(view.name)
    if (index > -1) {
      state.cachedViews = state.cachedViews.slice(index, index + 1)
    } else {
      // if index = -1, there is no cached tags
      state.cachedViews = []
    }
  },
  DEL_ALL_VISITED_VIEWS(state: ITagsViewState): void {
    // keep affix tags
    const affixTags = state.visitedViews.filter(tag => tag?.meta?.affix)
    state.visitedViews = affixTags
  },
  DEL_ALL_CACHED_VIEWS(state: ITagsViewState): void {
    state.cachedViews = []
  },


  UPDATE_VISITED_VIEW(state: ITagsViewState, view: ITagView): void {
    for (let v of state.visitedViews) {
      if (v.path === view.path) {
        v = Object.assign(v, view)
        break
      }
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