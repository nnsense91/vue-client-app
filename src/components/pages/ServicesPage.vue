<template>
  <app-section appTitle="Список услуг" class="services-page">
    <services-list :servicesArr="servicesArr" />
  </app-section>
</template>

<script setup lang="ts">
import ServicesList from "@/components/group/services/ServicesList.vue";
import AppSection from "@/components/layout/AppSection.vue";
import { useStore } from "vuex";
import { computed, onBeforeMount } from "vue";

const store = useStore();
const getServices = async () =>
  await store.dispatch("servicesStore/getServicesAction");
const servicesArr = computed(() => store.state.servicesStore.servicesArr);

onBeforeMount(async () => await getServices());
</script>

<style scoped></style>
