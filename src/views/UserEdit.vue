<template>
  <div class="container">
    <h2 class="page-title">Edit user {{ id }}</h2>

    <div v-if="!user" class="alert alert-warning">
      Loading...
    </div>
    <template v-else>
      <user-form v-model="user"></user-form>
      {{ user }}

      <button type="button" class="btn btn-primary" @click="save">Save</button>
      <button type="button" class="btn btn-danger" @click="cancel">Cancel</button>
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
