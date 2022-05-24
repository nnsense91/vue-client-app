<template>
  <div class="clients">
    <ul class="clients__list">
      <client-item
        v-for="client in clientsArr"
        :client="client"
        :key="client.id"
      />
    </ul>
  </div>
</template>

<script setup lang="ts">
import { IClientModel } from "@/store/modules/clients";
import ClientItem from "@/components/group/clients/components/ClientItem.vue";
import { defineProps, toRefs } from "vue";

interface IClientsListProps {
  clientsArr: IClientModel[];
}

const props = defineProps<IClientsListProps>();
const { clientsArr } = toRefs(props);
</script>

<style lang="scss" scoped>
.clients {
  &__title {
    font-size: 2rem;
    text-align: center;
    color: $color-primary-2;
  }
}
</style>
