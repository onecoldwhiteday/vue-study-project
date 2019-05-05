<template>
  <div class="user-list">
    <users-on-page v-model="usersOnPage"></users-on-page>
    <table class="table table-dark users-table">
      <caption class="users-total">
        Users Total:
        <span class="users-amount">{{ total }}</span>
      </caption>
      <slot name="table-header">
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
      </slot>

      <tr v-for="user in pageView()" :key="user.id">
        <slot name="table-body" :user="user">
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
        </slot>
      </tr>
    </table>

    <pagination :users="users" v-model="currentPage" :users-on-page="usersOnPage"></pagination>
  </div>
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
.users-total {
  color: white;
  font-weight: bold;
}
.users-table {
  border-radius: 8px;
}
</style>
