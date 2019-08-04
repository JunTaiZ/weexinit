import Vue from 'vue'
import weex from 'weex-vue-render'

/*global Vue*/

weex.init(Vue)
weex.init(Vue)
/* weex initialized here, please do not move this line */
import Vuex from 'vuex'

Vue.use(Vuex)


const {router}= require('./router.js')
const store = require('@/store/index.js')
const App = require('@/Router.vue'); 
/* eslint-disable no-new */
new Vue(Vue.util.extend({el: '#root', store, router }, App));
router.push('/')