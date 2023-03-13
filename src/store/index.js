import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    windowSize: 0,
    isAuthenticated: false
  },
  getters: {
    screenLabel(state) {
      
    }
  },
  
  mutations: {
    setWinSize(state, size) {
      state.windowSize = size
    },
    login(state) {
      console.log('....')
      state.isAuthenticated = true
    },
    logout(state) {
      this.isAuthenticated = false
    }
  },
  actions: {
  },
  modules: {
  }
})
