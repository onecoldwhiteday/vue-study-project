<template>
  <div>
    <input
      type="number"
      class="form-control"
      min="1"
      :max="max"
      v-model="rows"
      pattern="[0-9].{2}"
    />
  </div>
</template>
<script>
export default {
  name: 'PageRows',
  props: {
    max: {
      type: Number,
      required: true
    }
  },
  data: () => ({
    rows: 5
  }),
  watch: {
    rows: {
      handler() {
        this.$emit('input', this.rows)
      }
    }
  }
}
</script>
