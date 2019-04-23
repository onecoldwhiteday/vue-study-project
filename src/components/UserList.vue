<template>
  <table class="table table-striped">
    <caption>
      Users Total:
      <span class="users-amount">{{ total }}</span>
    </caption>
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
      <td colspan="4">
        <page-rows v-model="rows"></page-rows>
      </td>
      <td colspan="4">
        <pagination :users="users" v-model="currentPage" :rows="rows"></pagination>
      </td>
    </tr>
  </table>
</template>

<script>
export default {
  name: 'UserList',
  components: {
    pagination: () => import('@/components/Pagination.vue'),
    'page-rows': () => import('@/components/PageRows.vue')
  },
  props: {
    users: {
      type: Array,
      required: true
    }
  },
  data: () => ({
    rows: 5,
    currentPage: null
  }),
  computed: {
    total() {
      return this.users.length
    },
    start() {
      return this.currentPage * this.rows
    }
  },
  methods: {
    openEditPage(userId) {
      this.$emit('edit', userId)
    },
    pageView() {
      let localUsers = [...this.users]
      return localUsers.slice(this.start, this.start + this.rows)
    }
  }
}
</script>
<style>
.users-amount {
  color: red;
}
</style>
