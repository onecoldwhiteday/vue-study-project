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

    <tr v-for="user in users" :key="user.id">
      <td># {{ user.id }}</td>
      <td>{{ user.firstName }}</td>
      <td>{{ user.lastName }}</td>
      <td>{{ user.isActive }}</td>
      <td>{{ user.balance }}</td>
      <td>{{ user.email }}</td>
      <td>{{ user.phone }}</td>
      <td>{{ user.registered }}</td>
    </tr>
  </table>
</template>

<script>
export default {
  name: 'UserList',
  props: {
    users: {
      type: Array,
      required: true
    }
  },
  computed: {
    total: function() {
      return this.users.length
    }
  },
  created: function() {
    console.log('UserList is created')
  },
  mounted: function() {
    console.log('UserList mounted successfully')
  },
  methods: {
    handleCopied: function(text) {
      console.log(text)
    },
    openEditPage: function(userId) {
      this.$emit('edit', userId)
    }
  }
}
</script>
<style>
.users-amount {
  color: red;
}
</style>
