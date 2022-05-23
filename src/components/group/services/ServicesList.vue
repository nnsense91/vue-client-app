<template>
  <div class="services">
    <ul class="services__list">
      <service-item
        v-for="service in servicesArr"
        :service="service"
        :key="service.id"
      />
    </ul>
  </div>
</template>

<script setup lang="ts">
import { defineProps, toRefs } from "vue";
import ServiceItem from "./components/ServiceItem.vue";
import { IServiceModel } from "@/store/modules/services";

interface IServicesListProps {
  servicesArr: IServiceModel[];
}

const props = defineProps<IServicesListProps>();
const { servicesArr } = toRefs(props);
</script>

<style lang="scss" scoped></style>
