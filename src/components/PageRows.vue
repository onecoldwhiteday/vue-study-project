<template>
  <div>
    <input
      type="range"
      v-model.number="rows"
      min="5"
      :max="max"
      class="form-control-range"
      id="rows-range"
      list="marks"
    />
    <label>There is {{ rows }} users on the page</label>
    <datalist id="marks">
      <option v-for="point in max" :value="point" :key="point">{{ item }}</option>
    </datalist>
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
