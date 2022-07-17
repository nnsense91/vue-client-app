<template>
  <div class="client">
    <div class="client__data">
      <div class="client__item client__lastname">{{ lastName }}</div>
      <div class="client__item client__name">{{ name }}</div>
    </div>
    <div class="client__controls">
      <remove-button @click="removeClient" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { IClientModel } from "@/store/modules/clients";
import { defineProps, toRefs } from "vue";
import { useStore } from "vuex";

interface IClientItemProps {
  client: IClientModel;
}

const props = defineProps<IClientItemProps>();
const store = useStore();
const { name, lastName, id } = toRefs(props.client);
const removeClient = async () =>
  store.dispatch("clientsStore/removeClientAction", id.value);
</script>

<style lang="scss" scoped>
.client {
  display: flex;
  padding: 1rem;
  width: 100%;
  border-bottom: 1px solid $color-primary-3;
  &__data {
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
  &__lastname {
    min-width: 15%;
  }
  &__controls {
    width: 5%;
    display: flex;
    justify-content: space-around;
  }
}
</style>
