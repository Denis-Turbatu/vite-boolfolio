<script>
import axios from "axios";
    export default {
        data() {
            return {
                project: null,
            };
        },
        created() {
            const slug = this.$route.params.slug;

            axios.get(`http://127.0.0.1:8000/api/projects/${slug}`).then((resp) =>{
                this.project = resp.data.result;
            });
        },
    };
</script>

<template>
    <div>
    <h1>{{project.title}}</h1>
    <p>{{project.description}}</p>
    </div>
</template>

<style scoped lang="scss"></style>