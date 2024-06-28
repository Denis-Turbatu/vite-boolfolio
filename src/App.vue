<script>
import axios from 'axios';

export default {
  data() {
    return {
      projects: [],
    }
  },
  created() {
    axios.get('http://127.0.0.1:8000/api/projects').then((resp) => {
      console.log(resp.data.result);
    });
  },
}
</script>

<template>
  <div>
    
  </div>
</template>

<style scoped lang="scss">
  
</style>