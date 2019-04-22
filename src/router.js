import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/Home.vue'
import AddUser from '@/views/AddUser.vue'
import UserEdit from '@/views/UserEdit.vue'

import UserList from '@/views/Users.vue'

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
      path: '/edit/:id',
      component: UserEdit
    },
    {
      path: '/add',
      component: AddUser
    }
  ]
})
