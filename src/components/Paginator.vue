<template>
  <div id="paginator">
    <div>
      <pagination-button @click="$emit('first'); currentPage=1;" :disable="!(info && info.prev)">
        {{1}}
      </pagination-button>
      <pagination-button @click="$emit('prev'); currentPage--;" :disable="!(info && info.prev)">
        {{'prev'}}
      </pagination-button>
      <span style="margin: auto; font-weight: bold; font-size: 14pt;">
        {{currentPage}}
      </span>
      <pagination-button @click="$emit('next'); currentPage++;" :disable="!(info && info.next)">
        {{'next'}}
      </pagination-button>
      <pagination-button @click="$emit('last'); currentPage=info.pages;" :disable="!(info && info.next)">
        {{info.pages}}
      </pagination-button>
    </div>
  </div>
</template>

<script>
import PaginationButton from '@/components/PaginationButton.vue'

export default {
  name: 'Paginator',
  components: {
    PaginationButton
  },
  props: {
    info: {
      type: Object | null,
      required: true,
    }
  },
  data() {
    return {
      currentPage: 1
    }
  }
}
</script>

<style scoped>
#paginator {
  background-color: #eee;
  color: black;
  height: 10%;
  text-align: center;
}
#paginator > div {
  width: 160px;
  height: 100%;
  display: flex;
  margin: auto;
  font-size: 13pt;
}
</style>