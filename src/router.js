import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/Index.vue'
Vue.use(Router)

export const router = new Router({
  mode: 'abstract',
  routes: [{
    path: '/',
    name: 'Index',
    component: Index
  }, {
    path: '/hello',
    name: 'HelloWorld',
    component: HelloWorld
  }]
})