<template>
  <button class="btn" type="button">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'custom__button',
};
</script>

<style scoped>
.btn {
  padding: 10px 15px;
  background: none;
  color: teal;
  border: 1px solid teal;
  transition: 0.5s;
}
.btn:hover {
  background-color: teal;
  color: antiquewhite;
  font-size: 20px;
}
</style>
