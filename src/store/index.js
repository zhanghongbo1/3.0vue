import Vue from 'vue'
import Vuex from 'vuex'
import{ show }from './bord'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name:"10"
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    show : show
  }
})
