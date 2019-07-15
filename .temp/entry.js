import Vue from 'vue'
import weex from 'weex-vue-render'
/*global Vue*/

weex.init(Vue)
/* weex initialized here, please do not move this line */
import Vuex from 'vuex'

Vue.use(Vuex)

const store = require('@/store/index.js')
const App = require('@/index.vue'); 
/* eslint-disable no-new */
new Vue(Vue.util.extend({el: '#root', store}, App));

