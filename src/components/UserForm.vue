<template>
  <div class="container">
    <form class="col-6">
      <h2 class="page-title">Edit user {{ userName }}</h2>
      <!--
      <div v-for="(value, key) in user" class="form-group row" :key="key">
        <label for="value" class="col-sm-4 col-form-label">{{ key }}</label>
        <input type="text" :id="key" :value="value" class="form-control col-sm-8" />
      </div>

      <button type="button" class="btn btn-primary">Submit changes</button> -->

      <!--  -->

      <!-- <h3>In progress</h3> -->

      <div class="form-group row">
        <label for="user-id" class="col-sm-4 col-form-label">User Id</label>
        <input type="text" v-model="user.id" id="user-id" class="form-control col-sm-8" readonly />
      </div>

      <div class="form-group row">
        <label for="user-name" class="col-sm-4 col-form-label">Name</label>
        <input type="text" id="user-name" v-model="user.firstName" class="form-control col-sm-8" />
      </div>

      <div class="form-group row">
        <label for="last-name" class="col-sm-4 col-form-label">Last Name</label>
        <input type="text" id="last-name" v-model="user.lastName" class="form-control col-sm-8" />
      </div>

      <fieldset class="form-group row" id="isActive">
        <label class="col-sm-4 col-form-label">Is Active</label>
        <div class="col-sm-8">
          <div class="form-check-inline">
            <input
              type="radio"
              name="is-active"
              id="is-active-true"
              value="true"
              :checked="user.isActive"
              class="form-check-input"
            />
            <label for="is-active-true" class="form-check-label">Active</label>
          </div>
          <div class="form-check-inline">
            <input
              type="radio"
              name="is-active"
              id="is-active-false"
              value="false"
              :checked="!user.isActive"
              class="form-check-input"
            />
            <label for="is-active-false" class="form-check-label">Not Active</label>
          </div>
        </div>
      </fieldset>

      <div class="form-group row">
        <label for="balance" class="col-sm-4 col-form-label">Balance</label>
        <input
          type="text"
          id="balance"
          :value="user.balance"
          readonly
          class="form-control col-sm-8"
        />
      </div>

      <div class="form-group row">
        <label for="picture" class="col-sm-4 col-form-label">Picture</label>
        <input type="text" id="picture" :value="user.picture" class="form-control col-sm-8" />
      </div>

      <div class="form-group row">
        <label for="age" class="col-sm-4 col-form-label">Age</label>
        <input type="number" id="age" v-model.number="user.age" class="form-control col-sm-8" />
      </div>

      <div class="form-group row">
        <label for="access-level" class="col-sm-4 col-form-label">Access Level</label>
        <select
          name="access-level"
          id="access-level"
          v-model="user.accessLevel"
          class="form-control col-sm-8"
        >
          <option value="user">user</option>
          <option value="guest">guest</option>
          <option value="admin">admin</option>
        </select>
      </div>
      <div class="form-group row">
        <label for="company" class="col-sm-4 col-form-label">Company</label>
        <input type="text" id="company" :value="user.company" class="form-control col-sm-8" />
      </div>
      <div class="form-group row">
        <label for="about" class="col-sm-4 col-form-label">About</label>
        <textarea
          name="about"
          :value="user.about"
          id="about"
          cols="30"
          rows="5"
          class="from-control col-sm-8"
        ></textarea>
      </div>

      <!--  -->
    </form>
  </div>
</template>
<script>
export default {
  name: 'UserForm',
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  computed: {
    userName: function() {
      return this.user.firstName + ' ' + this.user.lastName
    }
  },
  created: function() {
    console.log('UserForm is created')
  },
  mounted: function() {
    console.log('UserForm mounted successfully')
  }
}
</script>
<style>
.page-title {
  margin-top: 100px;
}
</style>
