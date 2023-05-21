<template>
  <div class="container">
    <Home01Navbar />
    <div>
      <input type="text" placeholder="Enter the keyword" v-model="userInput" @keyup.enter="getSearchData">
      <button type="button" class="btn btn-success" @click="getSearchData">Search</button>
      <button @click="moveToDetail">Go To Movie</button>
    </div>
  </div>
</template>

<script>
import Home01Navbar from '@/components/HOME/Home01Navbar.vue'

export default {
  name: 'MoviesView',
  components: {
    Home01Navbar,
  },
  data() {
    return {
      userInput: null
    }
  },
  methods: {
    getSearchData() {
        console.log('search')
      this.$store.dispatch("getVideo", this.userInput)
      this.userInput = null
    },
    moveToDetail() {
        console.log('move')
        console.log(this.$store.state.video)
      this.$router.push(`movies/${this.$store.state.video.videoId}`)
    }
  }
}
</script>

<style scoped>
.loading-icon-container {
  height: 80vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* h1 {
  margin-top: 20px;
  margin-bottom: 20px;
  font-weight: bold;
}

.upload-date {
  margin-bottom: 20px;
}

.description {
  margin-top: 20px;
} */
</style>