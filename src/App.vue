<template>
  <app-header />
  <router-view />
</template>

<script>
import AppHeader from "@/components/layout/Header";

export default {
  name: "AppComponent",
  components: {
    AppHeader,
  },
};
</script>
