<template>
  <button class="remove-button">
    <img
      class="remove-button__icon"
      src="@/assets/svg/removeIcon.svg"
      alt="remove"
    />
  </button>
</template>

<script lang="ts">
export default {
  name: "RemoveButton",
};
</script>

<style lang="scss" scoped>
.remove-button {
  display: block;
  width: 1rem;
  height: 1rem;
  border: none;
  cursor: pointer;
  background-color: transparent;
}
</style>
