<template>
  <div class="container">
    <h2 class="page-title">Edit user {{ id }}</h2>

    <div v-if="!user" class="alert alert-warning">
      Loading...
    </div>
    <template v-else>
      <user-form :user="user" @update="updateUser"></user-form>
      {{ user }}

      <button type="button" class="btn btn-primary" @click="save">Save</button>
      <button type="button" class="btn btn-danger" @click="cancel">Cancel</button>
    </template>
  </div>
</template>
<script>
import axios from 'axios'
import UserForm from '@/components/UserForm.vue'

export default {
  name: 'UserEdit',
  components: {
    UserForm
  },
  data: () => ({
    user: null
  }),
  computed: {
    id() {
      return this.$route.params.id
    },
    url() {
      return 'http://localhost:3000/users/' + this.id
    }
  },
  mounted() {
    this.loadUser()
  },
  methods: {
    updateUser(newUser) {
      this.user = newUser
    },
    loadUser() {
      axios
        .get(this.url)
        .then(response => {
          this.user = response.data
        })
        .catch(error => console.error(error))
    },
    save() {
      axios
        .patch(this.url, this.user)
        .then(() => this.$router.push('/users'))
        .catch(error => console.error(error))
    },
    cancel() {
      this.$router.push('/users')
    }
  }
}
</script>
<style>
.page-title {
  margin-top: 100px;
}
</style>
