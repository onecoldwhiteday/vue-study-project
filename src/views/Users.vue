<template>
  <div>
    <h2 class="page-title">User List</h2>
    <div v-if="!loading">
      Loading...
    </div>
    <div v-else-if="!loadingData">
      Error while loading page
    </div>
    <user-list :users="users"></user-list>
  </div>
</template>

<script>
import axios from 'axios'
import UserList from '@/components/UserList.vue'

export default {
  components: {
    'user-list': UserList
  },
  data: function() {
    return {
      users: []
    }
  },
  computed: {
    activeUsers: function() {
      return this.users.filter(function(user) {
        return user.isActive === true
      })
    }
  },
  mounted: function() {
    this.loadData()
    this.loading()
    this.loadingData()
  },
  methods: {
    loadData: function() {
      const self = this
      axios
        .get('http://localhost:3000/db')
        .then(function(response) {
          self.users = response.data.users
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
    loadingData: function() {
      return this.users.length > 0
    }
    // openEditUser: function(id) {
    //   window.open('./edit.html?userId=' + id)
    //   // return userId
    // }
  }
}
</script>

<style>
.page-title {
  margin-top: 100px;
}
</style>
