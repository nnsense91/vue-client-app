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

<script>
import NavItem from "@/components/layout/Nav/components/NavItem";
export default {
  name: "NavComponent",
  components: {
    NavItem,
  },
  computed: {
    routes() {
      return this.$router.options.routes;
    },
  },
};
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
