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
      component: () => import('@/views/Users.vue'),
      props: true
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

// Auth (don't let open pages staying unlogged)
// const test = false

// router.beforeEach((to, from, next) => {
//   if (to.matched.some(record => record.meta.requiresAuth)) {
//     if (test === true) {
//       next({
//         path: '/login',
//         query: { redirect: to.fullPath }
//       })
//     } else {
//     next()
//     }
//   } else {
//     next()
//   }
// })
