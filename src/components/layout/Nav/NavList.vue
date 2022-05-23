<template>
  <nav class="nav">
    <ul class="nav__list">
      <nav-item
        class="nav__item"
        v-for="(route, index) in routes"
        :key="index"
        :route="route"
      />
    </ul>
  </nav>
</template>

<script setup lang="ts">
import NavItem from "@/components/layout/Nav/components/NavItem.vue";
import { computed } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const routes = computed(() => router.options.routes);
</script>

<style lang="scss" scoped>
.nav {
  margin-left: 5%;
}

.nav__list {
  display: flex;
}
.nav__item {
  &:not(:first-child) {
    margin-left: 1%;
  }
}
</style>
