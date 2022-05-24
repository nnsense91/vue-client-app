<template>
  <div class="service">
    <div class="service__row">
      <div class="service__item service__name">{{ name }}</div>
      <div class="service__item service__description">{{ description }}</div>
      <div class="service__item service__price">{{ price }}р.</div>
    </div>
    <div class="service__controls"><add-button /><remove-button /></div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, toRefs } from "vue";
import { IServiceModel } from "@/store/modules/services";

interface IServiceItemProps {
  service: IServiceModel;
}

const props = defineProps<IServiceItemProps>();
const { name, description, price } = toRefs(props.service);
</script>

<style lang="scss" scoped>
.service {
  display: flex;
  padding: 1rem;
  width: 100%;
  border-bottom: 1px solid $color-primary-3;
  &__row {
    display: flex;
    width: 80%;
  }
  &__item {
    color: $color-primary-2;
  }
  &__name {
    width: 10%;
  }
  &__description {
    width: 30%;
  }
  &__price {
    width: 5%;
  }
  &__controls {
    width: 5%;
    display: flex;
    justify-content: space-around;
  }
}
</style>
