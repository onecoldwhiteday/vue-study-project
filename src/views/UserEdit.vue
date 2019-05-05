<template>
  <div class="container">
    <h2 class="page-title">Edit user {{ id }}</h2>

    <div v-if="!user" class="alert alert-warning">
      Loading...
    </div>
    <template v-else>
      <user-form v-model="user"></user-form>

      <div class="button-container">
        <button type="button" class="btn btn-primary" @click="save">Save</button>
        <button type="button" class="btn btn-danger" @click="deleteUser">Delete user</button>
        <button type="button" class="btn btn-warning" @click="cancel">Cancel</button>
      </div>
    </template>
  </div>
</template>
<script>
import axios from '@/axios.js'

export default {
  name: 'UserEdit',
  components: {
    'user-form': () => import('@/components/UserForm.vue')
  },
  data: () => ({
    user: null
  }),
  computed: {
    id() {
      return this.$route.params.id
    },
    url() {
      return '/users/' + this.id
    }
  },
  mounted() {
    this.loadUser()
  },
  methods: {
    loadUser() {
      axios
        .get(this.url)
        .then(response => {
          this.user = response.data
        })
        .catch(error => console.error(error))
    },
    save() {
      this.$validator.validateAll()
      if (this.errors.any()) {
        alert('Fill all fields. Please.')
        return
      }

      axios
        .patch(this.url, this.user)
        .then(() => this.$router.push('/users'))
        .catch(error => console.error(error))
    },
    deleteUser() {
      axios
        .delete(this.url, this.user)
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
.button-container {
  display: flex;
  justify-content: space-around;
  padding: 50px;
}
</style>
