<template>
  <div id="container">
    <div id="wrapper">
      <card 
        v-for="character in characters" 
        :key="character.id" 
        :character="character" 
      />
    </div>
  </div>
</template>

<script>
import Card from '@/components/Card.vue'

export default {
  name: 'Container',
  components: {
    Card
  },
  props: {
    characters: {
      type: Array,
      required: true,
    }
  }
}
</script>

<style scoped>
#container {
  height: 90%;
  overflow: auto;
}
#wrapper {
  margin: auto;
  width: 300px;
  padding: 1rem 0;
  display: grid;
  grid-gap: 1rem;
  font-size: 11pt;
}
@media (min-width: 768px) {
  #wrapper { 
    width: 670px;
    grid-template: 'a b';
    grid-gap: 2rem;
  }
}
</style>