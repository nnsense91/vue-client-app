<template>
  <div class="logo" @click="returnHome">Client-App</div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();
const returnHome = () => router.push("/");
</script>

<style lang="scss" scoped>
.logo {
  cursor: pointer;
  padding: 1rem;
  color: $color-primary-4;
  font-weight: bold;
  font-size: 2rem;
  font-family: "Dancing Script", cursive;
}
</style>
