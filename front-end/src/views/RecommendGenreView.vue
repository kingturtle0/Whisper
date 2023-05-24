<template>
  <div class="container">
    <Home01Navbar/>
    <h3 class="my-5 text-center">{{ this.genre }} 영화 추천</h3>
    <ul class="row">
      <RecommendMovieCard v-for="movie in movies" :key="movie.movieId" :movie="movie"/>
    </ul>
  </div>
</template>

<script>
import Home01Navbar from '@/components/HOME/Home01Navbar.vue'
import RecommendMovieCard from '@/components/RECOMMEND/RecommendMovieCard.vue'
import axios from 'axios'
const API_URL = 'http://127.0.0.1:8000'

export default {
  name: 'RecommendGenreView',
  components: {
    Home01Navbar,
    RecommendMovieCard
  },
  data() {
    return {
      movies: [],
      genre: this.$route.params.genre,
    }
  },
  created() {
    this.genreMovie()
  },
  methods: {
    genreMovie() {
      axios({
        method: 'get',
        url: `${API_URL}/movies`,
        headers: {
          'Authorization' : `Token ${this.$store.state.auth.token}`
        }
      })
        .then((response) => {
          const genre = this.$route.params.genre
          const parsedMovies = response.data.filter((movie) => {
            const genres = movie.genres
            for (const key in genres) {
              if (genre.includes(genres[key])) {
                return true
              }
            }
            return false
          })
          this.movies =  parsedMovies
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
}
</script>

<style>

</style>