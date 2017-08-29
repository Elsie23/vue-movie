import Vue from 'vue'
import Vuex from 'vuex'
import publicState from './modules/public'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    publicState
  }
})
