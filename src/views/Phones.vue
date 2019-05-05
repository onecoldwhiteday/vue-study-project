<template>
  <div>
    <h2 class="page-title">Phonebook</h2>

    <div v-if="!haveUsers" class="alert alert-warning">
      Loading...
    </div>
    <user-list v-else :users="users">
      <template v-slot:table-header>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Phone</th>
        </tr>
      </template>
      <template v-slot:table-body="{ user }">
        <td>
          <router-link :to="'/edit/' + user.id"> # {{ user.id }} </router-link>
        </td>
        <td>{{ user.firstName }}</td>
        <td>{{ user.lastName }}</td>
        <td>{{ user.phone }}</td>
      </template>
    </user-list>
  </div>
</template>

<script>
import axios from '@/axios.js'

export default {
  name: 'PhonesPage',
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
    },
    testParent() {
      alert('testParent')
    }
  }
}
</script>
<style>
.page-title {
  margin-top: 100px;
}
</style>
