import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Home.vue')
    },
    {
      path: '/users',
      component: () => import('@/views/Users.vue')
    },
    {
      path: '/edit/:id',
      component: () => import('@/views/UserEdit.vue')
    },
    {
      path: '/add',
      component: () => import('@/views/AddUser.vue')
    }
  ]
})
