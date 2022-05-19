<template>
  <header class="header">
    <logo-component class="header__logo" />
    <nav-component class="header__nav" />
  </header>
</template>

<script>
import LogoComponent from "@/components/layout/Logo";
import NavComponent from "@/components/layout/Nav/Nav";

export default {
  name: "HeaderComponent",
  components: { LogoComponent, NavComponent },
};
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
