<template>
  <div class="card">
    <div style="font-weight: bold; text-transform: capitalize;">
      <span>{{character.name}}</span>
      <span :style="statusStyle">{{character.status}}</span>
    </div>
    <div>
      <span>{{character.gender}}</span>
      <span>{{character.location.name}}</span>
    </div>
    <img :src="character.image" alt="Image">
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    character: {
      type: Object,
      required: true,
    }
  },
  computed: {
    statusStyle() {
      if (this.character.status === 'Alive') return {color: 'green'}
      if (this.character.status === 'Dead') return {color: 'red'}
      else return {color: 'grey'}
    }
  }
}
</script>

<style scoped>
.card > div {
  display: flex;
  justify-content: space-between;
  line-height: 1.15;
}
img {
  width: 100%;
}
</style>