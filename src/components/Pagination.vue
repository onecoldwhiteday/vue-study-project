<template>
  <div>
    <nav class="pages-nav">
      <ul class="pagination bg-blue">
        <li class="page-item">
          <button type="button" class="page-link" @click="prevPage" :disabled="firstPage">
            Prev
          </button>
        </li>
        <li v-for="page in pages" :key="page" class="page-item">
          <button type="button" class="page-link" @click="changePage(page)">{{ page }}</button>
        </li>
        <li class="page-item">
          <button type="button" class="page-link" @click="nextPage" :disabled="lastPage">
            Next
          </button>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script>
export default {
  name: 'Pagination',
  props: {
    users: {
      type: Array,
      required: true
    },
    rows: {
      type: Number,
      default: 7
    }
  },
  data: () => ({
    currentPage: 0
  }),
  computed: {
    pages() {
      return Math.floor(this.users.length / this.rows)
    },
    firstPage() {
      return this.currentPage === 0
    },
    lastPage() {
      return this.currentPage === this.pages - 1
    }
  },
  watch: {
    currentPage: {
      handler() {
        this.$emit('input', this.currentPage)
      }
    }
  },
  methods: {
    nextPage() {
      this.currentPage++
      console.log(this.currentPage)
      console.log(`It's ${this.pages} pages`)
    },
    prevPage() {
      this.currentPage--
      console.log(this.currentPage)
    },
    getCurrentPage() {
      this.$emit('input', this.currentPage)
    },
    changePage(page) {
      this.currentPage = page
    }
  }
}
</script>
