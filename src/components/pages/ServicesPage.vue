<template>{{ servicesList }}</template>

<script lang="ts">
import { useStore } from "vuex";
import { computed, onBeforeMount } from "vue";

export default {
  name: "ServicesPage",
  setup() {
    const store = useStore();
    const getServices = async () =>
      await store.dispatch("servicesStore/getServicesAction");
    const servicesList = computed(() => store.state.servicesStore.servicesArr);

    onBeforeMount(async () => await getServices());

    return {
      servicesList,
    };
  },
};
</script>

<style scoped></style>
