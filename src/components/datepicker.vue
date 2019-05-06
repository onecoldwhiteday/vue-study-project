<template>
  <div class="form-group row">
    <label for="registered" class="col-sm-4 col-form-label">Registration date</label>
    <input type="text" id="registered" ref="picker" :value="value" class="form-control col-sm-6" />
    <button type="button" class="btn btn-primary col-sm-2" @click="openCalendar">
      Choose date
    </button>
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
        clickOpens: false,
        allowInput: true,
        onChange: (selectedDates, dateStr) => {
          this.$emit('input', dateStr)
        }
      })
    },
    updateDatapicker() {
      if (this.fp) {
        this.fp.setDate(this.value)
      }
    },
    openCalendar() {
      this.fp.open()
    }
  }
}
</script>
