<template>
  <div class="container">
    <Home01Navbar/>
    <h3 class="ms-5 my-4">장르</h3>
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
          let keyWord = ''
          if (genre === 'love') {
            keyWord = '로맨스'
          } else if (genre === 'action') {
            keyWord = '액션'
          } else if (genre === 'sf') {
            keyWord = 'SF'
          } else if (genre === 'music') {
            keyWord = '음악'
          } else if (genre === 'horror') {
            keyWord = '공포'
          } else if (genre === 'history') {
            keyWord = '역사'
          } else if (genre === 'comedy') {
            keyWord = '코미디'
          } else if (genre === 'animation') {
            keyWord = '애니메이션'
          }
          const parsedMovies = response.data.filter((movie) => {
            const genres = movie.genres
            for (const key in genres) {
              if (keyWord.includes(genres[key])) {
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