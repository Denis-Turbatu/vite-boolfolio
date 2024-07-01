<script>
import axios from "axios";
import AppProjectCard from "../components/AppProjectCard.vue";

export default {
  components: {
    AppProjectCard
  },
  data() {
    components: {
      AppProjectCard;
    }
    return {
      projects: []
    };
  },
  created() {
    axios.get("http://127.0.0.1:8000/api/projects").then((resp) => {
      //console.log(resp.data.result);
      this.projects = resp.data.result;
    });
  }
};
</script>

<template>
  <div class="bg-primary text-white ps-5 pt-2 pb-4 mb-5">
    <h1 class="py-5">La tua collezione</h1>
  </div>
  <div class="container">
    <div class="row">
      <div class="col col-md-6 col-lg-4" v-for="card in projects" :key="card">
        <AppProjectCard :cardObj="card" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
</style>
