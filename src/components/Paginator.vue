<template>
  <div id="paginator">
    <div>
      <pagination-button @click="currentPage=1; getAction(currentPage);" :disable="!prev">
        {{1}}
      </pagination-button>
      <pagination-button @click="getAction(--currentPage);" :disable="!prev">
        {{'prev'}}
      </pagination-button>
      <span style="margin: auto; font-weight: bold; font-size: 14pt;">
        {{currentPage}}
      </span>
      <pagination-button @click="getAction(++currentPage);" :disable="!next">
        {{'next'}}
      </pagination-button>
      <pagination-button @click="currentPage=pagesCount; getAction(currentPage)" :disable="!next">
        {{pagesCount}}
      </pagination-button>
    </div>
  </div>
</template>

<script>
import PaginationButton from '@/components/PaginationButton.vue'

export default {
  name: 'Paginator',
  components: {
    PaginationButton,
  },
  props: {
    info: {
      type: Object | null,
      required: true,
    }
  },
  data() {
    return {
      currentPage: 1,
    }
  },
  methods: {
    async getAction(pageNum) {
      this.$emit('getAction', pageNum)
    }
  },
  computed: {
    prev() { return this.info && this.info.prev },
    next() { return this.info && this.info.next },
    pagesCount() { return this.info && this.info.pages },
  }
}
</script>

<style scoped>
#paginator {
  background-color: #333;
  color: white;
  height: 9%;
  text-align: center;
  font-size: 13pt;
}
#paginator > div {
  width: 170px;
  height: 100%;
  display: flex;
  margin: auto;
}
</style>