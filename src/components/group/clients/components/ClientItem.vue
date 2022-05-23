<template>
  <div class="client">
    <div class="client__data">
      <div class="client__item client__lastname">{{ lastName }}</div>
      <div class="client__item client__name">{{ name }}</div>
    </div>
    <div class="client__controls"><add-button /><remove-button /></div>
  </div>
</template>

<script setup lang="ts">
import { IClientModel } from "@/store/modules/clients";
import { defineProps, toRefs } from "vue";

interface IClientItemProps {
  client: IClientModel;
}

const props = defineProps<IClientItemProps>();
const { name, lastName } = toRefs(props.client);
</script>

<style lang="scss" scoped>
.client {
  display: flex;
  padding: 1rem;
  width: 100%;
  border-bottom: 1px solid $color-primary-3;
}
.client__data {
  display: flex;
  width: 80%;
}
.client__item {
  color: $color-primary-2;
}
.client__name {
  min-width: 10%;
}
.client__lastname {
  min-width: 15%;
}
.client__controls {
  width: 5%;
  display: flex;
  justify-content: space-around;
}
</style>
