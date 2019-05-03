<template>
  <div>
    <input type="number" min="1" v-model.number="usersOnPage" />
    <p>There is {{ usersOnPage }} users on page</p>
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
