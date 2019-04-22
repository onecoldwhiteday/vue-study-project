<template>
  <div>
    <h2 class="page-title">User List</h2>

    <div v-if="!haveUsers" class="alert alert-warning">
      Loading...
    </div>
    <user-list v-else :users="users"></user-list>
  </div>
</template>

<script>
import axios from '@/axios.js'

export default {
  components: {
    'user-list': () => import('@/components/UserList.vue')
  },
  data: () => {
    return {
      users: []
    }
  },
  computed: {
    haveUsers() {
      return this.users.length > 0
    }
  },
  mounted() {
    this.loadData()
  },
  methods: {
    loadData: function() {
      axios
        .get('/users')
        .then(response => {
          this.users = response.data
        })
        .catch(error => console.error(error))
    }
  }
}
</script>
<style>
.page-title {
  margin-top: 100px;
}
</style>
