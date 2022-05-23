<template>
  <div>{{ id }}</div>
  <div>{{ name }}</div>
  <div>{{ lastName }}</div>
</template>

<script setup lang="ts">
import { IClientModel } from "@/store/modules/clients";
import { defineProps, toRefs } from "vue";

interface IClientItemProps {
  client: IClientModel;
}

const props = defineProps<IClientItemProps>();
const { id, name, lastName } = toRefs(props.client);
</script>

<style scoped></style>
