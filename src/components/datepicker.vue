<template>
  <div>
    <input type="text" ref="picker" :value="value" class="form-control col-sm-8 " />
  </div>
</template>
<script>
import flatpickr from 'flatpickr'
import 'flatpickr/dist/flatpickr.css'

export default {
  name: 'Datepicker',
  props: {
    value: {
      type: String,
      required: true
    }
  },
  data: () => ({
    fp: null
  }),
  watch: {
    value: 'updateDatapicker'
  },
  mounted() {
    this.initDatepicker()
  },
  beforeDestroy() {
    if (this.fp) {
      this.fp.destroy()
    }
  },
  methods: {
    initDatepicker() {
      this.fp = flatpickr(this.$refs.picker, {
        dateFormat: 'd.m.Y',
        onChange: (selectedDates, dateStr) => {
          this.$emit('input', dateStr)
        }
      })
    },
    updateDatapicker() {
      if (this.fp) {
        this.fp.setDate(this.value)
      }
    }
  }
}
</script>
