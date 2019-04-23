<template>
  <div>
    <h2 class="page-title">
      Add user
    </h2>
    <user-form v-model="user"></user-form>
    <div class="button-container">
      <button type="button" class="btn btn-primary" @click="add">Add user</button>
      <button type="button" class="btn btn-danger" @click="cancel">Cancel</button>
    </div>
  </div>
</template>
<script>
import axios from '@/axios.js'

export default {
  name: 'AddUser',
  components: {
    'user-form': () => import('@/components/UserForm.vue')
  },
  data: () => ({
    user: {}
  }),
  methods: {
    add() {
      axios
        .post('/users/', this.user)
        .then(() => this.$router.push('/users'))
        .catch(error => console.error(error))
    },
    cancel() {
      this.$router.push('/users')
    }
  }
}
</script>
