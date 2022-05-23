<template>
  <ul class="clients-list">
    <client-item
      v-for="client in clientsArr"
      :client="client"
      :key="client.id"
    />
  </ul>
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

<style scoped></style>
