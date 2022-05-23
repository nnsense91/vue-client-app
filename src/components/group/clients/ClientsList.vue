<template>
  <ul class="clients-list">
    <client-item
      v-for="client in clientsArr"
      :client="client"
      :key="client.id"
    />
  </ul>
</template>

<script lang="ts">
import { IClientModel } from "@/store/modules/clients";
import ClientItem from "@/components/group/clients/components/ClientItem.vue";

export default {
  name: "ClientsList",
  components: {
    ClientItem,
  },
  props: {
    clientsArr: {
      type: Array as () => IClientModel[],
      required: true,
    },
  },
};
</script>

<style scoped></style>
