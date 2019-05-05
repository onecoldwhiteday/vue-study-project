<template>
  <div>
    <select min="1" v-model.number="usersOnPage" class="users-on-page form-control">
      <option value="2">2</option>
      <option value="5">5</option>
      <option value="10">10</option>
      <option value="100">100</option>
    </select>
  </div>
</template>
<script>
export default {
  name: 'UsersOnPage',
  data: () => ({
    usersOnPage: 5
  }),
  watch: {
    usersOnPage: {
      handler() {
        this.$emit('input', this.usersOnPage)
      }
    }
  },
  methods: {
    getUsersOnPage() {
      this.$emit('input', this.usersOnPage)
    },
    changeUsersOnPage() {}
  }
}
</script>
<style>
.users-on-page {
  padding-left: 5px;
  width: 100px;
  margin-bottom: 30px;
}
</style>
