<template>
  <app-section appTitle="Список клиентов" class="clients-page">
    <clients-list v-if="clientsArr.length" :clientsArr="clientsArr" />
  </app-section>
</template>

<script setup lang="ts">
import ClientsList from "@/components/group/clients/ClientsList.vue";
import AppSection from "@/components/layout/AppSection.vue";
import { useStore } from "vuex";
import { computed, onBeforeMount } from "vue";

const store = useStore();
const getClients = async () =>
  await store.dispatch("clientsStore/getClientsAction");
const clientsArr = computed(() => store.state.clientsStore.clientsArr);

onBeforeMount(async () => await getClients());
</script>

<style scoped></style>
