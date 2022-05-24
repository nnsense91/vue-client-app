<template>
  <button class="app-button__button">
    <slot></slot>
  </button>
</template>

<script lang="ts">
export default {
  name: "AppButton",
};
</script>

<style lang="scss" scoped>
button {
  background-color: transparent;
  border: none;
  text-transform: uppercase;
  padding: 0.5rem;
  cursor: pointer;
  border-radius: 0.3rem;
  border: 1px solid $color-primary-3;
  color: $color-primary-0;
  &:hover {
    background-color: $color-primary-4;
    transition: background-color 0.4s;
  }
}
</style>
