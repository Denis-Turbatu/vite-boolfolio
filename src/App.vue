<script>
import AppHeader from "./components/AppHeader.vue";

export default {
    components: {
      AppHeader,
    },
};
</script>

<template>
  <AppHeader />
  <router-view></router-view>
</template>

<style scoped lang="scss"></style>