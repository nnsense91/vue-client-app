<template>
  <app-section appTitle="Список клиентов" class="clients-page">
    <app-button @click="openAddDialog">Добавить</app-button>
    <clients-list
      class="clients-list"
      v-if="clientsArr.length"
      :clientsArr="clientsArr"
    />
  </app-section>
  <app-dialog dialogTitle="Добавить клиента" v-model:show="isAddDialogShow">
    <add-client :closeAddDialog="closeAddDialog" :addNewClient="addNewClient" />
  </app-dialog>
</template>

<script setup lang="ts">
import { useStore } from "vuex";
import { computed, onBeforeMount, ref } from "vue";

import ClientsList from "@/components/group/clients/ClientsList.vue";
import AppSection from "@/components/layout/AppSection.vue";
import AppDialog from "@/components/layout/AppDialog.vue";
import AddClient from "@/components/group/clients/components/AddClient.vue";

import { IClientModel } from "@/store/modules/clients";

const store = useStore();
const isAddDialogShow = ref(false);
const openAddDialog = () => (isAddDialogShow.value = true);
const closeAddDialog = () => (isAddDialogShow.value = false);

const getClients = async () =>
  await store.dispatch("clientsStore/getClientsAction");
const addNewClient = async (client: Omit<IClientModel, "id">) => {
  await store.dispatch("clientsStore/addClientAction", client);
  closeAddDialog();
};

const clientsArr = computed(() => store.state.clientsStore.clientsArr);

onBeforeMount(async () => await getClients());
</script>

<style scoped>
.clients-list {
  margin-top: 1rem;
}
</style>
