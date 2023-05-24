<template>
  <div class="container">
    <Home01Navbar />
    <div class="d-flex justify-content-evenly mt-5">
      <div style="width: 700px; text-align:center;">
        <SpinnerIcon v-if="isLoading" />
        <div v-else>
          <h3>{{ title }}</h3>
          <div class="upload-date">Upload Date: {{ publishedAt }}</div>
          <iframe
            width="660"
            height="355"
            :src="videoSrc" 
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <p>{{ description }}</p>
        </div>
      </div>
      <div class="image-container my-5">
        <img class="poster" :src="movieSrc" alt="poster_img" @click="likeMovie">
        <div class="overlay">
          <button class="like-button" v-if="!isLiked">Like: {{ likeCount }}</button>
          <button class="like-button" v-else>Cancel: {{ likeCount }}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Home01Navbar from '@/components/HOME/Home01Navbar.vue'
import SpinnerIcon from '@/components/COMMON/SpinnerIcon.vue';
import axios from 'axios'
import dayjs from 'dayjs'
const API_URL = 'http://127.0.0.1:8000'

export default {
  name: 'DetailMovieView',
  components: {
    Home01Navbar,
    SpinnerIcon,
  },
  data() {
    return {
      video: {},
      movie: {},
      isLiked: false,
      likeCount: 0,
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
    },
    movieSrc() {
      return 'http://image.tmdb.org/t/p/w500/' + this.movie.poster_path
    }
  },
  created() {
    this.$store.dispatch("changeLoading", true)
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
    this.movie = this.$store.state.movie
    axios({
        method: 'get',
        url: `${API_URL}/movies/${this.movie.id}/like/`,
        headers: {
          'Authorization' : `Token ${this.$store.state.auth.token}`
        }
      })
        .then((response) => {
          this.isLiked = response.data.is_liked
          this.likeCount = response.data.like_count
        })
        .catch((error) => {
          console.log(error)
        })
  },
  methods: {
    likeMovie() {
      axios({
        method: 'post',
        url: `${API_URL}/movies/${this.movie.id}/like/`,
        headers: {
          'Authorization' : `Token ${this.$store.state.auth.token}`
        }
      })
        .then((response) => {
          this.isLiked = response.data.is_liked
          this.likeCount = response.data.like_count
        })
        .catch((error) => {
          console.log(error)
        })
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

.image-container {
  position: relative;
  display: inline-block;
  width: 400px;
  height: 550px;
}

.image-container img {
  display: block;
  width: 100%;
  height: 100%;
  transition: filter 0.3s;
}

.image-container .overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
  transition: opacity 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
}

.image-container:hover img {
  filter: brightness(0.7);
}

.image-container:hover .overlay {
  opacity: 1;
}

.like-button {
  padding: 10px 20px;
  background-color: #fff;
  color: #000;
  border: none;
  font-weight: bold;
  cursor: pointer;
}
</style>