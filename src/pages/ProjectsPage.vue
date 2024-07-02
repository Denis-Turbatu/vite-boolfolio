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
      projects: [],
      lastPage: null,
      currentPage: null,
    };
  },
  created() {
    axios.get("http://127.0.0.1:8000/api/projects").then((resp) => {
      // console.log(resp.data.result);
      // console.log(resp.data.result.data[0].technologies);
      // console.log("currentPage", resp.data.result.current_page);
      // console.log("lastPage", resp.data.result.last_page);
      this.projects = resp.data.result.data;
      this.lastPage = resp.data.result.last_page;
      this.currentPage = resp.data.result.last_page;
    });
  },
  methods: {
    getProjects(pageNumber) {
      axios.get(`http://127.0.0.1:8000/api/projects?page=${pageNumber}`).then((resp) => {
        // console.log(resp.data.result);
        // console.log("currentPage", resp.data.result.current_page);
        this.projects = resp.data.result.data;
      });
    },
    changePage(pageNumber) {
      this.getProjects(pageNumber);
    }
  },
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
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item"><a class="page-link" href="#" @click="getPrevious()">Previous</a></li>
        <li class="page-item" v-for="page in lastPage" :key="page">
          <a class="page-link" href="#" @click="changePage(page)">{{ page }}</a>
        </li>
        <li class="page-item"><a class="page-link" href="#" @click="getNext()">Next</a></li>
      </ul>
    </nav>
  </div>
</template>

<style scoped lang="scss"></style>

<!-- @click.prevent="changePage(num_page)" -->
