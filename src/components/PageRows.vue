<template>
  <select @change="currentVal" class="form-control">
    <option v-for="value in rowsArr" :key="value">
      {{ value }}
    </option>
  </select>
</template>
<script>
export default {
  name: 'PageRows',
  data: () => ({
    rowsArr: ['5', '10', '15'],
    rows: 5
  }),
  watch: {
    rows: {
      handler() {
        this.$emit('input', this.rows)
      }
    }
  },
  methods: {
    currentVal() {
      this.rows += 5
    }
  }
}
</script>
