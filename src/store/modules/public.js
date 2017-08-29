import * as types from '../mutation-types'

const state = {
  nav: ['主页', '数据汇总']
}

const mutations = {
  [types.PUBLIC_NAV] (state, navs) {
    state.nav = navs
  }
}

const getters = {
  getNavItem: state => state.nav
}

const actions = {
  setNav ({ commit }, navs) {
    commit(types.PUBLIC_NAV, navs)
  }
}

export default {
  state,
  mutations,
  getters,
  actions
}
