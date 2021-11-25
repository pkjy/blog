import { createStore } from 'vuex'
import app, { IAppState } from './modules/app'
import user, { IUserState } from './modules/user'
import tagsView, { ITagsViewState } from './modules/tags-view'
import errorLog, { IErrorLogState } from './modules/error-log'
import permission, { IPermissionState } from './modules/permission'
import settings, { ISettingsState } from './modules/settings'
import blog, { IBlogState } from './modules/blog'

export interface IRootState {
  app: IAppState
  user: IUserState
  tagsView: ITagsViewState
  errorLog: IErrorLogState
  permission: IPermissionState
  settings: ISettingsState
  blog: IBlogState
}


export default createStore({
  modules: {
    app: app,
    user: user,
    tagsView,
    errorLog,
    permission,
    settings,
    blog,
  }
})
