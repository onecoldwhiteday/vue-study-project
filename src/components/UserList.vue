<template>
  <table class="table table-dark">
    <caption>
      Users Total:
      <span class="users-amount">{{ total }}</span>
    </caption>
    <tr>
      <td colspan="4"></td>
      <td colspan="4">
        <users-on-page v-model="usersOnPage"></users-on-page>
      </td>
    </tr>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Is Active</th>
      <th>Balance</th>
      <th>Email</th>
      <th>Phone</th>
      <th>Registered</th>
    </tr>

    <tr v-for="user in pageView()" :key="user.id">
      <td>
        <router-link :to="'/edit/' + user.id"> # {{ user.id }} </router-link>
      </td>
      <td>{{ user.firstName }}</td>
      <td>{{ user.lastName }}</td>
      <td>{{ user.isActive }}</td>
      <td>{{ user.balance }}</td>
      <td>{{ user.email }}</td>
      <td>{{ user.phone }}</td>
      <td>{{ user.registered }}</td>
    </tr>

    <tr>
      <td colspan="4"></td>
      <td colspan="4">
        <pagination :users="users" v-model="currentPage" :users-on-page="usersOnPage"></pagination>
      </td>
    </tr>
  </table>
</template>

<script>
export default {
  name: 'UserList',
  components: {
    pagination: () => import('@/components/Pagination.vue'),
    'users-on-page': () => import('@/components/UsersOnPage.vue')
  },
  props: {
    users: {
      type: Array,
      required: true
    }
  },
  data: () => ({
    usersOnPage: 5,
    currentPage: 1
  }),
  computed: {
    total() {
      return this.users.length
    },
    start() {
      return this.currentPage * this.usersOnPage - this.usersOnPage
    }
  },
  methods: {
    openEditPage(userId) {
      this.$emit('edit', userId)
    },
    pageView() {
      let localUsers = this.users
      return localUsers.slice(this.start, this.start + this.usersOnPage)
    }
  }
}
</script>
<style>
.users-amount {
  color: red;
}
</style>
