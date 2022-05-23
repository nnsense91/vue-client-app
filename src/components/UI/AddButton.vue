<template>
  <button class="add-button">
    <img class="add-button__icon" src="@/assets/svg/addIcon.svg" alt="addNew" />
  </button>
</template>

<script lang="ts">
export default {
  name: "AddButton",
};
</script>

<style lang="scss" scoped>
.add-button {
  display: block;
  width: 1rem;
  height: 1rem;
  border: none;
  cursor: pointer;
  background-color: transparent;
}
</style>
