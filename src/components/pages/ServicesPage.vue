<template>
  <app-section appTitle="Список услуг" class="services-page">
    <app-button @click="openAddDialog">Добавить</app-button>
    <services-list
      class="services-list"
      v-if="servicesArr.length"
      :servicesArr="servicesArr"
    />
  </app-section>
  <app-dialog dialogTitle="Добавить услугу" v-model:show="isAddDialogShow">
    <modify-service
      :closeAddDialog="closeAddDialog"
      :addNewService="addNewService"
    />
  </app-dialog>
</template>

<script setup lang="ts">
import AppDialog from "@/components/layout/AppDialog.vue";
import ServicesList from "@/components/group/services/ServicesList.vue";
import AppSection from "@/components/layout/AppSection.vue";
import ModifyService from "@/components/group/services/components/ModifyService.vue";
import { useStore } from "vuex";
import { computed, onBeforeMount, ref } from "vue";
import { IServiceModel } from "@/store/modules/services";

const store = useStore();
const isAddDialogShow = ref(false);
const openAddDialog = () => (isAddDialogShow.value = true);
const closeAddDialog = () => (isAddDialogShow.value = false);

const getServices = async () =>
  await store.dispatch("servicesStore/getServicesAction");
const servicesArr = computed(() => store.state.servicesStore.servicesArr);

const addNewService = async (service: Omit<IServiceModel, "id">) => {
  await store.dispatch("servicesStore/addServiceAction", service);
  closeAddDialog();
};

onBeforeMount(async () => await getServices());
</script>

<style scoped>
.services-list {
  margin-top: 1rem;
}
</style>
