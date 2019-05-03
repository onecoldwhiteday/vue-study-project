<template>
  <div>
    <nav class="pages-nav">
      <ul class="pagination bg-blue">
        <li class="page-item">
          <button
            type="button"
            class="page-link"
            @click="changePage(prevPage)"
            :disabled="!hasPrev()"
          >
            Prev
          </button>
        </li>
        <li
          v-for="page in pages"
          :key="page"
          :class="page == currentPage ? 'page-item active' : 'page-item'"
        >
          <button type="button" class="page-link" @click="changePage(page)">{{ page }}</button>
        </li>
        <li class="page-item">
          <button
            type="button"
            class="page-link"
            @click="changePage(nextPage)"
            :disabled="!hasNext()"
          >
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
    usersOnPage: {
      type: Number,
      default: 7
    }
  },
  data: () => ({
    currentPage: 1
  }),
  computed: {
    nextPage() {
      return this.currentPage < this.totalPages ? this.currentPage + 1 : this.totalPage
    },
    prevPage() {
      return this.currentPage > 0 ? this.currentPage - 1 : 1
    },
    totalPages() {
      return Math.floor(this.users.length / this.usersOnPage)
    },
    pages() {
      let pagesList = []
      for (let i = 1; i <= this.totalPages; i++) {
        pagesList.push(i)
      }
      console.log(pagesList)
      return pagesList
    },
    firstPage() {
      return this.currentPage === 1
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
    getCurrentPage() {
      this.$emit('input', this.currentPage)
    },
    changePage(page) {
      this.currentPage = page
    },
    hasPrev() {
      return this.currentPage > 1
    },
    hasNext() {
      return this.currentPage < this.totalPages
    }
  }
}
</script>
