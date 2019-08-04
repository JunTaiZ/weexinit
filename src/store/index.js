import Vuex from 'vuex'
import Vue from 'vue'
import tab from './modules/tabConfig'
import list from './modules/dreamList'
import pageConfig from './modules/pageConfig'
Vue.use(Vuex)
const store = new Vuex.Store({
  modules: {
    tab,
    list,
    pageConfig,
  }
})

module.exports = store