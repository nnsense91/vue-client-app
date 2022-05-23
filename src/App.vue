<template>
  <app-header />
  <router-view />
</template>

<script>
import AppHeader from "@/components/layout/AppHeader.vue";

export default {
  name: "AppComponent",
  components: {
    AppHeader,
  },
};
</script>

<style lang="scss">
.container {
  padding: 3% 3%;
  margin: 0 auto;
  width: 80%;
}
</style>
