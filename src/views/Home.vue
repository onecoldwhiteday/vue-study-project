<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" class="logo" />

    <hr />

    <input type="text" v-model="title" />

    <hr />
  </div>
</template>

<script>
export default {
  name: 'Home',
  computed: {
    title: {
      get() {
        return this.$store.state.navbarTitle
      },
      set(value) {
        this.$store.commit('changeTitle', value)
      }
    }
  }
}
</script>
<style>
.logo {
  margin-top: 100px;
}
</style>
