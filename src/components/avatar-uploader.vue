<template>
  <div class="avatar-uploader form-group row">
    <label for="url" class="form-control-label col-sm-4">Upload pic</label>
    <input type="text" v-model="value" id="url" class="form-control col-sm-6" />
    <input type="file" ref="file" class="hide-select-file" @change="uploadFile" />
    <button type="button" class="btn btn-primary col-sm-2" @click="selectFile">
      Select file
    </button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Uploader',
  props: {
    value: {
      type: String,
      required: true
    }
  },
  methods: {
    selectFile() {
      this.$refs.file.click()
    },
    uploadFile() {
      const url = 'https://api.imgur.com/3/image'

      const data = new FormData()
      data.append('image', this.$refs.file.files[0])

      const config = {
        headers: {
          Authorization: 'Client-ID 3bef0b8892d4b04'
        }
      }

      axios
        .post(url, data, config)
        .then(response => response.data)
        .then(response => {
          console.log(response)
          this.$emit('input', response.data.link)
          this.$refs.file.value = ''
        })
    }
  }
}
</script>

<style>
.hide-select-file {
  display: none;
}
</style>
