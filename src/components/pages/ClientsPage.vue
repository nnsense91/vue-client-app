<template>Clients-page</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "ClientsPage",
  methods: {
    ...mapActions("getClientsAction", ["getClients"]),
  },
  async created() {
    try {
      await this.getClients();
    } catch (e) {
      console.error("error!!!");
    }
  },
};
</script>

<style scoped></style>
