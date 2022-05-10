<template>
  <div id="app">
    <container :characters="results" ref="container"></container>
    <paginator 
      :info="info" 
      @first="onFirst"
      @next="onNext"
      @prev="onPrev"
      @last="onLast"
    ></paginator>
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
    }
  },
  async mounted() {
    let response = await fetch('https://rickandmortyapi.com/api/character?page=1')
    console.log(response)
    let data = await response.json()
    console.log(data)
    this.results = data.results
    this.info = data.info
  },
  methods: {
    async onFirst() {
      let response = await fetch(`https://rickandmortyapi.com/api/character?page=1`)
      let data = await response.json()
      this.results = data.results
      this.info = data.info
      this.$el.children['container'].scrollTo(0, 0)
    },
    async onNext() {
      let response = await fetch(this.info.next)
      let data = await response.json()
      this.results = data.results
      this.info = data.info
      this.$el.children['container'].scrollTo(0, 0)
    },
    async onPrev() {
      let response = await fetch(this.info.prev)
      let data = await response.json()
      this.results = data.results
      this.info = data.info
      this.$el.children['container'].scrollTo(0, 0)
    },
    async onLast() {
      let response = await fetch(`https://rickandmortyapi.com/api/character?page=42`)
      let data = await response.json()
      this.results = data.results
      this.info = data.info
      this.$el.children['container'].scrollTo(0, 0)
    }
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