<template>
  <div class="background">
    <div class="container">
      <Home01Navbar />
      <section class="background">
        <div class="profilecontainer">
          <div v-if="modal === false" class="userprofile">
            내 정보
          </div>

          <img v-if="gif" src="@/assets/nyancat1.gif" alt="" class='modal-gif'>
          <!-- <img v-if="modal" src="@/assets/AI_giphy.gif" alt="" class='modal-gif'> -->
          <div v-if="modal" class="mt-100 mb-4 mb-md-0 zindex fade-in">
            <div class="navy pad card-container">
              <p class="navy mt-3 mb-3 d-flex justify-content-between" style="font-size:25px">
                {{ userName }}님의 취향분석
              </p>


              <!------- 추천카드부분 ------->
              <div v-if="recommend" class="row">
                <div class="col-md-3" v-for="i in 4" :key="i">
                  <div class="card-image d-flex justify-content-center align-items-center" style="height: 400px;">

              <!--------- 카드뒤집기 -------->

                    <div class="card-container fade-in-image">
                      <div class="card-vertical">
                        <div class="card-front">
                          <img src="@/assets/card1.png" alt="" class='front-card'>
                        </div>

                        <div class="card-back">
                          <img v-if="recommendedMovies[i - 1]?.poster_path"
                            :src="posterSrc + recommendedMovies[i - 1]?.poster_path" alt="" @click="moveToRecommendDetail(i - 1)"
                            style="border-radius: 20px">
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>


              <!----- 장르차트막대기 ----->
              <div v-if="recommend==false">
                <div v-for="genre in topGenres" :key="genre.name">
                  <p class="navy mb-1" style="font-size:20px;">{{ genre.name }}</p>
                  <div class="navy progress rounded mb-4" style="height: 25px;">
                    <div class="navy progress-bar" role="progressbar" :style="{ width: genre.percent*3 + '%' }"
                      :aria-valuenow="genre.percent" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
              </div>
            </div>
            <!-- 버튼 -->
            <!-- <div style="display: flex; justify-content: center;"> -->
            <div class="text-center">
              <img class='cat' src="@/assets/nyancat1.gif" alt=""
                @click="[recommendMovies(),recommend_toggle(),start()]">
              <div class='cat-content'>영화 추천받기</div>


            </div>
          </div>

          <!-- 모달 끝 -->
          <div v-if='modal==false' class="row">
            <div class="col-lg-4">
              <!------- 왼쪽상단 ------->
              <div class="mb-4">
                <div class="text-center navy user">
                  <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="avatar"
                    class="rounded-circle img-fluid" style="width: 150px;">
                  <h5 class="mb-4 my-3 navy">{{ userName }}</h5>
                  <p class="mb-1 navy">🍀새싹등급🍀</p>
                  <p class="mb-1 navy">Full Stack Developer</p>
                  <p class="mb-4 navy">Bay Area, samsung</p>
                  <div class="d-flex justify-content-center mb-1">
                    <div class=''>
                      <img @click='modal_toggle' class='gif' src="https://blog.kakaocdn.net/dn/bQtdqh/btshp6i4jG5/PZkBODwCeGNHYxk0K5CjPK/img.gif" alt="">
                    </div>
                    <!-- <button type="button" class="btn btn-primary">내영화 취향 분석</button> -->
                  </div>
                  <div>내 취향 분석하기</div>
                </div>
              </div>
            </div>


            <!------- 우측상단 카드 좋아요 ------->
            <div class="col-lg-8">
              <div class="mb-4">
                <div class="navy pad">
                  <div class="row">
                    <!-- 상단 4장의 이미지 -->
                    <div class="col-md-3" v-for="i in 4" :key="i">
                      <div class="card-image" style="height: 200px;">
                        <img v-if="likedMovies[i - 1]?.poster_path" :src="posterSrc + likedMovies[i - 1]?.poster_path"
                          alt="" @click="moveToDetail(i - 1)">
                      </div>
                    </div>
                  </div>

                  <div class="row mt-4">
                    <!-- 하단 4장의 이미지 -->
                    <div class="col-md-3" v-for="i in 4" :key="i">
                      <div class="card-image" style="height: 200px;">
                        <img v-if="likedMovies[i + 3]?.poster_path" :src="posterSrc + likedMovies[i + 3]?.poster_path"
                          alt="" @click="moveToDetail(i + 3)">
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-------- 우측하단 댓글 내역 -------->
              <div class="mb-4 mt-20">
                <div class="navy pad">
                  <div class="navy row">
                    <div class="navy col-sm-3">
                      등록일
                    </div>
                    <div class="navy col-sm-8">
                      댓글내용
                    </div>
                  </div>
                  <hr class=white-hr>
                  <div v-if="myComments.length">
                    <div v-for="i in myComments.length" :key="i">
                      <div class="navy row">
                        <div class="navy col-sm-3">
                          <p class="navy mb-0">{{ formatDate(myComments[i - 1]?.created_at) }}</p>
                        </div>
                        <div class="navy col-sm-9">
                          <p class="navy mb-0">{{ myComments[i - 1]?.content }}</p>
                        </div>
                      </div>
                      <hr class=white-hr>
                    </div>
                  </div>
                  <div v-else>
                    <div class="navy row">
                      <div class="navy">
                        <p class="navy mb-0">작성한 댓글이 없습니다.</p>
                      </div>
                    </div>
                    <hr class=white-hr>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>


<script>
  import Home01Navbar from '@/components/HOME/Home01Navbar.vue'
  import axios from 'axios'
  import _ from 'lodash'
  import VueConfetti from 'vue-confetti'
  import Vue from 'vue'
  Vue.use(VueConfetti)
  const API_URL = 'http://127.0.0.1:8000'

  export default {
    name: 'MyPageView',
    components: {
      Home01Navbar
    },
    data() {
      return {
        modal: false,
        recommend: false,
        gif: false,
        likedMovies: [],
        posterSrc: 'https://image.tmdb.org/t/p/w500',
        myComments: [],
        genreCount: {
          '로맨스': 0,
          '음악': 0,
          'SF': 0,
          '액션': 0,
          '공포': 0,
          '역사': 0,
          '가족': 0,
          '애니메이션': 0,
        },
        recommendedMovies: [],
      }
    },
    computed: {
      userName() {
        return this.$store.state.auth.userName
      },
      movieSrc() {
        return 'http://image.tmdb.org/t/p/w500/' + this.movie.poster_path
      },
      topGenres() {
        const sortedGenres = Object.entries(this.genreCount).sort((a, b) => b[1] - a[1])

        const totalCount = Object.values(this.genreCount).reduce((a, b) => a + b, 0)

        const topGenres = sortedGenres.slice(0, 5).map(([name, count]) => {
          const percent = (count / totalCount) * 100
          return { name, percent }
        })
        return topGenres
      }
    },
    created() {
      this.getLikedMovies()
      this.getMyComments()
    },
    methods: {
      start() {
        this.$confetti.start()
        setTimeout(() => {
          this.stop()
        }, 3500);
      },

      stop() {
        this.$confetti.stop()
      },
      modal_toggle() {
        if (this.modal === false) {
          this.modal = true
          this.gif = true
          setTimeout(() => {
            this.gif = false
          }, 2500)
        } else {
          this.modal = false
        }
      },

      recommend_toggle() {
        if (this.recommend === false) {
          this.recommend = true
        } else {
          this.recommend = false
        }
      },

      getLikedMovies() {
        axios({
          method: 'get',
          url: `${API_URL}/movies/liked/`,
          headers: {
            'Authorization': `Token ${this.$store.state.auth.token}`
          }
        })
          .then((response) => {
            this.likedMovies = response.data

            response.data.forEach((movie) => {
              movie.genres.forEach((genre) => {
                if (genre in this.genreCount) {
                  this.genreCount[genre] += 1
                }
              })
            })
          })
          .catch((error) => {
            console.log(error)
          })
      },
      getMyComments() {
        axios({
          method: 'get',
          url: `${API_URL}/community/usercomments/`,
          headers: {
            'Authorization': `Token ${this.$store.state.auth.token}`
          }
        })
          .then((response) => {
            this.myComments = response.data
          })
          .catch((error) => {
            console.log(error)
          })
      },
      moveToDetail(index) {
        this.$store.commit('GET_MOVIE_DETAIL', this.likedMovies[index])
        this.$store.dispatch('getVideo', this.likedMovies[index].title)
      },
      moveToRecommendDetail(index) {
      this.$store.commit('GET_MOVIE_DETAIL', this.recommendedMovies[index])
      this.$store.dispatch('getVideo', this.recommendedMovies[index].title)
    },
      formatDate(dateString) {
        const date = new Date(dateString)
        const month = date.getMonth() + 1
        const day = date.getDate()
        return `${month}월 ${day}일`
      },

      recommendMovies() {
        axios({
          method: 'get',
          url: `${API_URL}/movies`,
          headers: {
            'Authorization': `Token ${this.$store.state.auth.token}`
          }
        })
          .then((response) => {
            const topGenre = this.topGenres[0].name

            const parsedMovies = response.data.filter((movie) => {
              const genres = movie.genres
              if (movie.vote_average >= 7) {
                for (const key in genres) {
                  if (topGenre.includes(genres[key])) {
                    return true
                  }
                }
              }
              return false
            })
            this.recommendedMovies = _.sampleSize(parsedMovies, 4)
          })
          .catch((error) => {
            console.log(error)
          })

      }


    }
  }
</script>

<style>
  section {
    width: 93%;
  }

  .card-container {
    /* min-height: 340px */
  }

  .card {
    height: 350px
  }

  .userprofile {
    font-size: 25px;
    font-weight: 500;
    color: white;
    margin-bottom: 10px;
    margin-top: 35px;

  }

  .title {
    font-size: 15px;
    margin: 0;
  }

  .navy {
    background-color: #212529;
    color: white;
  }

  .profilecontainer {
    /* background-color: #212529; */
    color: white;
    margin-top: 20px;
  }

  .white-hr {
    background-color: white;
    height: 1px;
    border: none;
  }

  .mt-20 {
    margin-top: 20px;
  }

  .pad {
    padding: 15px;
    border-radius: 5px;
  }

  .user {
    height: 455px;
    border-radius: 10px;
  }

  .gif {
    width: 18%;
    border-radius: 90%;
  }

  .mt-100 {
    margin-top: 80px;
  }

  .close {
    width: 50px;
    height: 50px;
    z-index: 1;
  }

  .close:before,
  .close:after {
    position: absolute;
    right: 380px;
    content: ' ';
    height: 20px;
    width: 2px;
    background-color: #ffffff;
  }

  .close:before {
    transform: rotate(45deg);
  }

  .close:after {
    transform: rotate(-45deg);
  }

  .cat {
    width: 15%;
    border-radius: 30px;
    margin-top: 10px;
  }

  .cat-content {
    font-size: 17px;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  .modal-content {
    animation: fadeIn 0.5s;
    opacity: 0;
  }

  @keyframes fadeOut {
    from {
      opacity: 1;
    }

    to {
      opacity: 0;
    }
  }

  .modal-gif {
    animation: fadeOut 2s;
    opacity: 0;
    position: absolute;
    z-index: 99;
    top: 0;
    left: 0;
  }

  .fade-in-image {
    opacity: 0;
    animation: fade-in 0.5s forwards;
    animation-delay: 0.5s;
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  /* .thisbody{background:#fbe9e7; position:relative;height:100%;width:100%;max-width:600px;overflow:auto; margin:0 auto;} */
  .thish1 {
    text-align: center;
    font-size: 2em;
    font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
  }

  .thisimg {
    width: 80%;
    height: 80%;
    margin-top: 10px;
    border-radius: .12em;
    /* box-shadow: 0 0 0 2px #fff; */
  }

  .align {
    padding-top: 20px;
    width: 100%;
    height: 580px;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    align-items: space-around;
  }

  .card-container {
    -webkit-perspective: 1200;
    -moz-perspective: 1200;
    perspective: 1200;
  }

  .card-vertical,
  .card-horizontal {
    height: 320px;
    width: 220px;
    /* box-shadow: 0 6px 8px #bbb; */
    -moz-transform-style: preserve-3d;
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;

    transition: all .4s ease;
    justify-content: center;
    align-items: center;
  }

  .card-front,
  .card-back {
    /* color: #fafafa; */
    height: 100%;
    width: 100%;
    position: absolute;
    /* background: #ff5252; */
    -moz-backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    -webkit-transform-style: preserve-3d;
    -moz-transform-style: preserve-3d;
    transform-style: preserve-3d;
    background-color: none;
  }

  .card-back {
    -moz-transform: rotateY(179.9deg);
    -webkit-transform: rotateY(179.9deg);
    transform: rotateY(179.9deg);
    /* background: #8d6e63; */
  }
  .front-card{
    border-radius: 20px;
    /* margin-left: 15px; */
    /* margin-right: 15px; */
  }




  .card-front-content,
  .card-back-content {
    padding: 2em;
    box-sizing: border-box;
    text-align: center;
    line-height: 2.6em;
    font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;

  }

  .card-back-hr {
    -webkit-transform: rotateX(179.9deg);
    -moz-transform: rotateX(179.9deg);
    transform: rotateX(179.9deg);
  }

  .card-vertical:hover {
    -webkit-transform: rotateY(179.9deg);
    -moz-transform: rotateY(179.9deg);
    transform: rotateY(179.9deg);
  }

  .card-horizontal:hover {
    -webkit-transform: rotateX(179.9deg);
    -moz-transform: rotateX(179.9deg);
    transform: rotateX(179.9deg);
  }

</style>