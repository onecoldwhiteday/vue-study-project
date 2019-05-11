import Vue from 'vue'
import Vuex from 'vuex'
import axios from '@/axios.js'

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    navbarTitle: 'Vuex text title',
    users: []
  },
  mutations: {
    changeTitle: (state, payload) => (state.navbarTitle = payload),
    clearTitle: state => (state.navbarTitle = ''),
    setUsers: (state, payload) => (state.users = payload)
  },
  getters: {
    titleCount: state => state.navbarTitle.length
  },
  actions: {
    loadUsers({ commit }) {
      axios
        .get('/users')
        .then(response => commit('setUsers', response.data))
        .catch(error => console.error(error))
    }
  }
})

export default store
