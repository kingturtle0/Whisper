<template>
  <div class="container">
    <Home01Navbar />
    <SpinnerIcon v-if="isLoading" />
    <div v-else>
      <h1>{{ title }}</h1>
      <div class="upload-date">Upload Date: {{ publishedAt }}</div>
      <iframe
        width="560"
        height="315"
        :src="videoSrc" 
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      <p class="description">{{ description }}</p>
    </div>
  </div>
</template>

<script>
import Home01Navbar from '@/components/HOME/Home01Navbar.vue'
import SpinnerIcon from '@/components/COMMON/SpinnerIcon.vue';
import axios from 'axios'
import dayjs from 'dayjs'

export default {
  name: 'DetailMovieView',
  components: {
    Home01Navbar,
    SpinnerIcon,
  },
  data() {
    return {
      video: {}
    }
  },
  computed: {
    isLoading() {
      return this.$store.state.loading
    },
    title() {
      return this.video.title
    },
    videoSrc() {
      return `https://www.youtube.com/embed/${this.video.videoId}?autoplay=1`
    },
    description() {
      return this.video.description
    },
    publishedAt() {
      return this.video.publishedAt
    }
  },
  created() {
    this.$store.dispatch("changeLoading", true)
    console.log(this.$store.state.URL)
    console.log(this.$store.state.KEY)
    console.log(this.$route.params.videoId)
    axios.get(`${this.$store.state.URL}/videos`, {
      params: {
        key: this.$store.state.KEY,
        part: "snippet",
        id: this.$route.params.videoId
      },
    })
    .then((response) => {
      const item = response.data.items[0]
      this.video = {
        videoId: item.id,
        title: item.snippet.title,
        description: item.snippet.description,
        publishedAt: dayjs(item.snippet.publishedAt).format("YYYY-MM-DD")
      }
      this.$store.dispatch("changeLoading", false)
    })
    .catch((error) => {
      console.log(error)
    })
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