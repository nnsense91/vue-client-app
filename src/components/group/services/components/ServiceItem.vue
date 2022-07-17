<template>
  <div class="service">
    <div class="service__row">
      <div class="service__item service__name">{{ name }}</div>
      <div class="service__item service__price">{{ price }}р.</div>
      <div class="service__item service__description">{{ description }}</div>
    </div>
    <div class="service__controls">
      <remove-button @click="removeService" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useStore } from "vuex";
import { defineProps, toRefs } from "vue";
import { IServiceModel } from "@/store/modules/services";

interface IServiceItemProps {
  service: IServiceModel;
}

const store = useStore();
const props = defineProps<IServiceItemProps>();
const { id, name, description, price } = toRefs(props.service);

const removeService = async () =>
  store.dispatch("servicesStore/removeServiceAction", id.value);
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

    &:not(:first-child) {
      margin-left: 1rem;
    }
  }
  &__name {
    min-width: 10%;
  }
  &__description {
    min-width: 30%;
    flex-grow: 1;
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
