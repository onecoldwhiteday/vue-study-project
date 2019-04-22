<template>
  <div>
    <h2 class="page-title">
      Add user
    </h2>

    <user-form :user="user"></user-form>
  </div>
</template>
<script>
import UserForm from '@/components/UserForm.vue'

export default {
  name: 'AddUser',
  components: {
    UserForm
  },
  data: () => ({
    user: {}
  })
}
</script>
