<template>
  <div class="logo" @click="returnHome">Client-App</div>
</template>

<script>
export default {
  name: "LogoComponent",
  methods: {
    returnHome() {
      return this.$router.push("/");
    },
  },
};
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
