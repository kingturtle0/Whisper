<template>
  <div class="background">
    <div class="container">
      <Home01Navbar/>
      <h3 class="ms-5 my-4">검색 결과</h3>
      <ul class="row">
        <SearchMovieCard v-for="movie in movies" :key="movie.movieId" :movie="movie"/>
      </ul>
    </div>
  </div>
</template>

<script>
import Home01Navbar from '@/components/HOME/Home01Navbar.vue'
import SearchMovieCard from '@/components/SEARCH/SearchMovieCard.vue'
import axios from 'axios'
const API_URL = 'http://127.0.0.1:8000'

export default {
  name: 'SearchView',
  components: {
    Home01Navbar,
    SearchMovieCard
  },
  data() {
    return {
      movies: [],
    }
  },
  watch: {
    '$route.query.keyword'() {
      this.searchMovie()
    }
  },
  created() {
    this.searchMovie()
  },
  methods: {
    searchMovie() {
      axios({
        method: 'get',
        url: `${API_URL}/movies`,
        headers: {
          'Authorization' : `Token ${this.$store.state.auth.token}`
        }
      })
        .then((response) => {
          const keyWord = this.$route.query.keyword.split(/\s+/)
          const parsedMovies = response.data.filter((movie) => {
            const title = movie.title
            for (const key in keyWord) {
              if (title.includes(keyWord[key])) {
                return true
              }
            }
            const overview = movie.overview
            for (const key in keyWord) {
              if (overview.includes(keyWord[key])) {
                return true
              }
            }
            return false
          })
          this.movies =  parsedMovies
          // console.log(response.data[0].title.split(' '))
          // console.log(response.data[0].overview.split(' '))
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