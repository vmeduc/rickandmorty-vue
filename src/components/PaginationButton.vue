<template>
  <span 
    @click="!disable ? $emit('click') : undefined" 
    :class="{'enable': !disable, 'disable': disable}"
  >
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
  }
}
</script>

<style scoped>
span {
  margin: auto;
  cursor: pointer;
  user-select: none;
}
.enable:hover {
  color: grey;
}
.enable:active {
  color: white;
}
.disable {
  color: grey;
  cursor: default;
  text-decoration: line-through;
}
</style>