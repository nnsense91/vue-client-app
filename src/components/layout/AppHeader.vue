<template>
  <header class="header">
    <LogoComponent class="header__logo" />
    <NavList class="header__nav" />
  </header>
</template>

<script setup lang="ts">
import LogoComponent from "@/components/layout/AppLogo.vue";
import NavList from "@/components/layout/Nav/NavList.vue";
</script>

<style lang="scss" scoped>
.header {
  position: sticky;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 3rem;
  background-color: $color-primary-0;
}
</style>
