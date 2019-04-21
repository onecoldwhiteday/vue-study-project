import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/Home.vue'
import UserList from '@/views/Users.vue'
import AddUser from '@/views/AddUser.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/users',
      component: UserList
    },
    {
      path: '/add',
      component: AddUser
    }
  ]
})
