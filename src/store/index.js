import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    windowSize: 0
  },
  getters: {
    screenLabel(state) {
      
    }
  },
  mutations: {
    setWinSize(state, size) {
      state.windowSize = size
    }
  },
  actions: {
  },
  modules: {
  }
})
