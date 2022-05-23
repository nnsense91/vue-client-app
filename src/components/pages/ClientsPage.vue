<template>
  <div class="clients-page__wrap">
    <clients-list v-if="clientsArr.length" :clientsArr="clientsArr" />
  </div>
</template>

<script lang="ts">
import ClientsList from "@/components/group/clients/ClientsList.vue";
import { useStore } from "vuex";
import { computed, onBeforeMount } from "vue";

export default {
  name: "ClientsPage",
  components: {
    ClientsList,
  },
  setup() {
    const store = useStore();
    const getClients = async () =>
      await store.dispatch("clientsStore/getClientsAction");
    const clientsArr = computed(() => store.state.clientsStore.clientsArr);

    onBeforeMount(async () => await getClients());

    return {
      clientsArr,
    };
  },
};
</script>

<style scoped></style>
