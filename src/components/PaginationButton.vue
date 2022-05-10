<template>
  <span @click="onClick" :class="{'disable': disable}">
    <slot></slot>
  </span>
</template>

<script>
export default {
  name: 'PaginationButton',
  props: {
    disable: {
      type: Boolean,
      required: false,
      default: false,
    }
  },
  methods: {
    onClick() {
      if (!this.disable) this.$emit('click')
    }
  }
}
</script>

<style scoped>
span {
  margin: auto;
  cursor: pointer;
}
.disable {
  color: grey;
  cursor: default;
  text-decoration: line-through;
}
</style>