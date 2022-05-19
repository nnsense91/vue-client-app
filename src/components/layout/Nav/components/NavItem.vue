<template>
  <li class="nav__item">
    <router-link class="nav__link" :to="route.path" v-slot="{ isActive }">
      <button class="nav__button" :class="{ active: isActive }">
        {{ route.name }}
      </button>
    </router-link>
  </li>
</template>

<script lang="ts">
import { RouteRecordRaw } from "vue-router";

interface INavItemProps {
  route: RouteRecordRaw;
}

export default {
  name: "NavItem",
  props: {
    route: {
      type: Object as () => INavItemProps,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.nav__button {
  cursor: pointer;
  padding: 1rem;
  background-color: transparent;
  border: none;
}
.nav__link {
  padding-bottom: 0.5rem;
}
.nav__button {
  cursor: pointer;
  padding: 0.5rem 1rem;
  background-color: transparent;
  border: none;
  color: $color-primary-2;
  text-transform: uppercase;

  &.active {
    color: $color-secondary-b-4;
  }
}

.router-link-exact-active {
  border-bottom: 2px solid $color-secondary-b-4;
  transition: ease-in 0.4s;
}
</style>
