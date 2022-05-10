<template>
  <div id="app">
    <container :characters="results"/>
    <paginator :info="info" @getAction="getCharacters"/>
  </div>
</template>

<script>
import Container from '@/components/Container.vue'
import Paginator from '@/components/Paginator.vue'

export default {
  name: 'App',
  components: {
    Container,
    Paginator,
  },
  data() {
    return {
      results: [],
      info: null,
      baseUrl: 'https://rickandmortyapi.com/api/character'
    }
  },
  async mounted() {
    await this.getCharacters()
  },
  methods: {
    async getCharacters(pageNum=1) {
      const response = await fetch(this.baseUrl + `?page=${pageNum}`)
      const data = await response.json()
      this.results = data.results
      this.info = data.info
      this.$el.children['container'].scrollTo(0, 0)
    },
  }
}
</script>

<style>
body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
  color: #333;
  font-size: 11pt;
}
#app {
  width: 100vw;
  height: 100vh;
}
</style>