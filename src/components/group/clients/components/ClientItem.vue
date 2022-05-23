<template>
  <div>{{ id }}</div>
  <div>{{ name }}</div>
  <div>{{ lastName }}</div>
</template>

<script lang="ts">
import { IClientModel } from "@/store/modules/clients";
import { toRefs } from "vue";

interface IClientItemProps {
  client: IClientModel;
}

export default {
  name: "ClientItem",
  props: {
    client: Object,
  },
  setup(props: IClientItemProps) {
    const { id, name, lastName } = toRefs(props.client);

    return {
      id,
      name,
      lastName,
    };
  },
};
</script>

<style scoped></style>
