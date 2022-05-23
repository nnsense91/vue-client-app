<template>
  <div class="container">
    <section class="section">
      <h2 class="section__title">{{ appTitle }}</h2>
      <slot></slot>
    </section>
  </div>
</template>

<script setup lang="ts">
import { defineProps, toRefs } from "vue";
interface IAppSectionProps {
  appTitle?: string;
}
const props = defineProps<IAppSectionProps>();
const { appTitle } = toRefs(props);
</script>

<style lang="scss" scoped>
.section {
  position: relative;
  border: 1px solid $color-primary-3;
  padding: 1rem;
  min-height: 90%;
  border-radius: 1rem;
}
.section__title {
  position: absolute;
  right: 5%;
  top: -0.65rem;
  background-color: #fff;
  padding: 0 1rem;
  color: $color-primary-2;
}
</style>
