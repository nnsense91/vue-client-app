<template>{{ servicesList }}</template>

<script setup lang="ts">
import { useStore } from "vuex";
import { computed, onBeforeMount } from "vue";

const store = useStore();
const getServices = async () =>
  await store.dispatch("servicesStore/getServicesAction");
const servicesList = computed(() => store.state.servicesStore.servicesArr);

onBeforeMount(async () => await getServices());
</script>

<style scoped></style>
