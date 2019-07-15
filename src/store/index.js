import Vuex from 'vuex'
import Vue from 'vue'
import tab from './modules/tabConfig'
import list from './modules/dreamList'
Vue.use(Vuex)
const store = new Vuex.Store({
  modules: {
    tab,
    list,
  }
})

module.exports = store