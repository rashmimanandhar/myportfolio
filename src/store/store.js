import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showNavBar: true
  },
  mutations: {
    SHOW_NAVBAR(state) {
      state.showNavBar = true
    },
    HIDE_NAVBAR(state) {
      state.showNavBar = false
    }
  },
  getters: {
    getStateNavBar: state =>{
      return state.showNavBar
    }
  },
  actions: {
    showNavBar({ commit }, flag) {
      console.log(flag);
      if (flag) {
        commit('SHOW_NAVBAR')
      } else {
        commit('HIDE_NAVBAR')
      }
    }
  }
})
