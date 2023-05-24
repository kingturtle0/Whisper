<template>
  <div class="container">
    <Home01Navbar/>

    <div class="margin-box"></div> 
    <div class="flex-container">
      <div class="flex-item" style="flex-grow: 2"></div>
      <div class="flex-item-main mt-40" style="flex-grow: 4; width: 450px">
        <div class="column"> 
          <div class="main-title">{{ data[selectedIndex]?.title }}</div>
          <div class="main-title-eng">{{ data[selectedIndex]?.english_title }}</div>
          <div class="title-container">
            <div class="detail-title">개봉일</div>
            <div class="detail-content">{{ data[selectedIndex]?.release_date }}</div>
          </div>
          <div class="title-container">
            <div class="detail-title">장르</div>
            <div class="detail-content">{{ data[selectedIndex]?.genre }}</div>
          </div>
          <div class="title-container">
            <div class="detail-title">러닝타임</div>
            <div class="detail-content">{{ data[selectedIndex]?.running_time }}</div>
          </div>
          <div class="title-container">
            <div class="detail-title">평점</div>
            <div class="detail-content">{{ data[selectedIndex]?.rating }}</div>
          </div>
        </div>
      </div>
      <div class="flex-item" style="flex-grow: 3">
        <img :src="posterSrc + data[selectedIndex]?.poster_path" alt="LOGO" class="main-poster" @click="moveToDetail">
      </div>

      <!-- 오른쪽마진 -->
      <div class="flex-item" style="flex-grow: 0.8">
        
      </div>

    </div>




    <div class="ml-55 mt-40 mb-10" style="font-size: 25px; font-weight: 500">무비차트</div>
    <div id="carouselExampleSlidesOnly" class="carousel slide zindex" data-bs-ride="carousel" data-bs-interval="5000">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <div class="container">
            <div class="row" style="width: 95%; margin: auto">
              <div v-for="index in 5" :key="index" class="col">
                <img :src="posterSrc + data[index - 1]?.poster_path" class="rate-poster" @mouseover="changeSelectedIndex(index - 1)" :class="{ 'rate-select': selectedIndex === index - 1 }">
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="container">
            <div class="row" style="width: 95%; margin: auto">
              <div v-for="index in 5" :key="index" class="col">
                <img :src="posterSrc + data[index + 4]?.poster_path" class="rate-poster" @mouseover="changeSelectedIndex(index + 4)" :class="{ 'rate-select': selectedIndex === index + 4 }">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import rank from '@/assets/rank.js'
import Home01Navbar from '@/components/HOME/Home01Navbar.vue'
import axios from 'axios'
const API_KEY = '5db44a1f1708b49ae75a1bb65957bfac'
const url = 'https://api.themoviedb.org/3/movie/popular?language=ko-KR&page=1'

export default {
  name: 'RecommendView',
  components: {
    Home01Navbar
  },
  data() {
    return {
      data: [],
      posterSrc: 'https://image.tmdb.org/t/p/w500',
      selectedIndex: 0,
    }
  },
  created() {
    this.getTopRatedMovies()
  },
  methods: {
    changeSelectedIndex(index) {
      this.selectedIndex = index
    },
    moveToDetail() {
      this.$store.commit('GET_MOVIE_DETAIL', this.data[this.selectedIndex])
      this.$store.dispatch('getVideo', this.data[this.selectedIndex].title)
    },
    getTopRatedMovies() {
      axios({
        method: 'get',
        url: url,
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZGI0NGExZjE3MDhiNDlhZTc1YTFiYjY1OTU3YmZhYyIsInN1YiI6IjYzZDMxNzMyMDMxYTFkMDBhMTFmNDYxZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Y8DuQtADhIbmwKDbBIvxd4WxlLAGlKejCyBbtGqmn74'
        }
      })
        .then((response) => {
          const json = response.data;
          const topMovies = json.results.slice(0, 10)

          const movieDetailsPromises = topMovies.map((movie) => {
            const movieId = movie.id
            const detailUrl = `https://api.themoviedb.org/3/movie/${movieId}?language=ko-KR&api_key=${API_KEY}`

            return axios.get(detailUrl)
              .then(detailResponse => {
                const detailJson = detailResponse.data
                
                const movieDetail = {
                  movie_id: detailJson.id,
                  title: detailJson.title,
                  english_title: detailJson.original_title,
                  release_date: detailJson.release_date,
                  genre: detailJson.genres.map(genre => genre.name).join(', '),
                  running_time: `${detailJson.runtime}분`,
                  rating: detailJson.vote_average,
                  poster_path: detailJson.poster_path,
                }
                return movieDetail
              })
          })

          return Promise.all(movieDetailsPromises)
        })
        .then((movieDetails) => {
          this.data = movieDetails
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
}
</script>

<style>
.carousel-inner {
  width: 100%;
}

.rate-container {
  display: flex;
  margin-top: 30px;
  justify-content: space-around;
  padding-right: 30px;
  padding-left: 30px;
}

.rate-poster {
  border-radius: 5%;
  width: 150px;
  height: 200px;
}

.margin-box {
  margin-top: 50px;
}

.main-poster {
  border-radius: 5%;
  width: 300px;
  height: 420px;
}

.flex-item-main {
  display: flex;
  font-size: 20px;
  justify-content: center;
  font-weight: 500;
}

.column {
  align-items: center;
}

.mt-40 {
  margin-top: 40px;
}

.mb-10{
  margin-bottom: 10px;
}
.mb-20{
  margin-bottom: 20px;
}

.ml-50 {
  margin-left: 50px;
}
.ml-55 {
  margin-left: 55px;
}

.main-title {
  font-size: 28px;
  color: white;
  font-weight: 600;
}

.main-title-eng {
  font-size: 20px;
  color: rgb(209, 209, 209);
  margin-bottom: 30px;
}

.detail-title {
  font-size: 24px;
  min-width: 100px;
  color: #ebebeb;
  margin-top: auto;
  margin-bottom: auto;
}

.detail-content {
  font-size: 20px;
  color: #d4d3d3;
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 15px;
}

.title-container {
  display: flex;
  margin-top: 10px;
}

.rate-select {
  border: solid 2.5px rgba(229, 255, 0, 0.884);
}

.zindex{
  z-index: 0;
}

</style>


