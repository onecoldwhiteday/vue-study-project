<template>
  <form class="container">
    <div class="form-group row">
      <label for="user-id" class="col-sm-4 col-form-label">User Id</label>
      <input type="text" v-model="localUser.id" id="user-id" class="form-control col-sm-8" />
    </div>

    <div class="form-group row">
      <label for="user-name" class="col-sm-4 col-form-label">Name</label>
      <input
        type="text"
        id="user-name"
        name="firstName"
        v-model="localUser.firstName"
        v-validate="'required'"
        class="form-control col-sm-8"
        :class="{ 'is-invalid': errors.has('firstName') }"
      />
      <div class="invalid-feedback" v-show="errors.has('firstName')">
        {{ errors.first('firstName') }}
      </div>
    </div>

    <div class="form-group row">
      <label for="last-name" class="col-sm-4 col-form-label">Last Name</label>
      <input
        type="text"
        id="last-name"
        v-model="localUser.lastName"
        class="form-control col-sm-8"
      />
    </div>

    <div class="form-group row">
      <label for="email" class=" col-sm-4 col-from-label">Email</label>
      <input
        type="text"
        name="email"
        id="email"
        v-model="localUser.email"
        class="form-control col-sm-8"
      />
    </div>

    <div class="form-group row">
      <label for="picture" class="col-form-label col-sm-4"> Pic preview</label>
      <img :src="localUser.picture" id="picture" alt="avatar" />
    </div>

    <avatar-uploader v-model="localUser.picture"></avatar-uploader>

    <div class="form-group row">
      <label for="age" class="col-sm-4 col-form-label">Age</label>
      <input type="number" id="age" v-model.number="localUser.age" class="form-control col-sm-8" />
    </div>

    <div class="form-group row">
      <label for="status" class="col-form-label col-sm-4">Is active now</label>
      <div class="checkbox-inline">
        <input
          type="checkbox"
          id="status"
          v-model="localUser.isActive"
          :checked="localUser.isActive"
          class="col-sm-8 form-control"
        />
        Yep
      </div>
    </div>

    <div class="form-group row">
      <label for="access-level" class="col-sm-4 col-form-label">Access Level</label>
      <select id="access-level" v-model="localUser.accessLevel" class="form-control col-sm-8">
        <option v-for="item in accessList" :key="item">{{ item }}</option>
      </select>
    </div>

    <div class="form-group row">
      <label for="balance" class="col-sm-4 col-form-label">Balance</label>
      <input type="text" id="balance" v-model="localUser.balance" class="form-control col-sm-8" />
    </div>

    <div class="form-group row">
      <label for="phone" class="col-sm-4 col-form-label">Phone</label>
      <input type="text" id="phone" v-model="localUser.phone" class="form-control col-sm-8" />
    </div>

    <div class="form-group row">
      <label for="address" class="col-sm-4 col-form-label">Address</label>
      <input type="text" id="address" v-model="localUser.address" class="form-control col-sm-8" />
    </div>

    <div class="form-group row">
      <label for="company" class="col-sm-4 col-form-label">Company</label>
      <input type="text" id="company" v-model="localUser.company" class="form-control col-sm-8" />
    </div>
    <div class="form-group row">
      <label for="about" class="col-sm-4 col-form-label">About</label>
      <markdown-editor
        v-model="localUser.about"
        name="about"
        id="about"
        ref="markdownEditor"
        class="col-sm-8"
      />
    </div>

    <!-- <div class="form-group column"> -->
    <!-- <input type="text" id="registered" v-model="localUser.registered" class="form-control" /> -->
    <datepicker v-model="localUser.registered" />
    <!-- </div> -->
  </form>
</template>
<script>
import markdownEditor from 'vue-simplemde/src/markdown-editor'

export default {
  name: 'UserForm',
  inject: ['$validator'],
  components: {
    datepicker: () => import('@/components/datepicker.vue'),
    'avatar-uploader': () => import('@/components/avatar-uploader.vue'),
    markdownEditor
  },
  model: {
    prop: 'user',
    event: 'test'
  },
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    localUser: null,
    accessList: ['guest', 'user', 'admin']
  }),
  watch: {
    localUser: {
      deep: true,
      handler() {
        console.log('UPD')
        this.$emit('test', Object.assign({}, this.localUser))
      }
    }
  },
  created() {
    this.localUser = Object.assign({}, this.user)
  }
}
</script>
<style>
@import '~simplemde/dist/simplemde.min.css';
.hide-me {
  display: none;
}
</style>
