<template>
  <div v-if="!loading">
    Loading...
  </div>
  <div v-else-if="!loadingUser">
    Error while loading page
  </div>

  <user-form :user="user" v-else></user-form>
</template>

<script>
import UserForm from '@/components/UserForm.vue'
import axios from 'axios'

export default {
  components: {
    'user-form': UserForm
  },
  data: function() {
    return {
      user: {},
      userId: 0
    }
  },
  //   computed: {
  //     userId: function() {
  //       return window.location.href.split('=')[1]
  //     }
  //   },
  beforeCreate: function() {
    console.log('Events and life cycle are initalized')
  },
  created: function() {
    console.log('App is created')
  },
  beforeMount: function() {
    console.log('Compilation of template is over')
  },
  mounted: function() {
    console.log('App is mounted')
    this.loading()
    console.log('Page is loaded')

    this.loadUser()
    this.loadingUser()
    console.log(this.userId)
  },
  methods: {
    loadUser: function() {
      const self = this
      axios
        .get('http://localhost:3000/users/' + this.userId)
        .then(function(response) {
          self.user = response.data
        })
        .catch(function(error) {
          console.log(error)
        })
    },
    loading: function() {
      window.onload = function() {
        return true
      }
    },
    loadingUser: function() {
      return this.user !== {}
    }
  }
}
</script>
