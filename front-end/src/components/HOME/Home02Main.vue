<template>
  <div class="background">
    <div class="container text-center">
      <!-- <div></div> -->
      <section class="recommend-container mt-80" style="width:92%">
        <div class="row movie-container my-2">

          <div class="col-3 movie-box hov-anim-box" @click="moveToRomance">
            <img src="https://blog.kakaocdn.net/dn/c7OH6a/btshp2VeGqM/6i1IQUgmoGgvCmRUmCNDnk/img.gif" alt="" class='animated'>
            <img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbFnfc0%2FbtshqTJ8bA0%2Fg3mPupptveKmtacyzTDCz1%2Fimg.jpg" alt="" class='static'>
          </div>
          <div class="col-3 movie-box hov-anim-box" @click="moveToMusic">
            <img src="https://blog.kakaocdn.net/dn/rsyZt/btshp4S1mS4/kRDU7kVdwDHehE3oP4jICK/img.gif" alt="" class='animated'>
            <img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FKqgpF%2Fbtshp1vo02h%2FeJkT4ae2jj5w1Vg3cqfGB1%2Fimg.png" alt="" class='static'>
          </div>
          <div class="col-3 movie-box hov-anim-box" @click="moveToSF">
            <img src="@/assets/04_SF영화.gif" alt="" class='animated'>
            <img src="@/assets/04_SF영화.png" alt="" class='static'>
          </div>
          <div class="col-3 movie-box hov-anim-box" @click="moveToAction">
            <img src="https://blog.kakaocdn.net/dn/OnKeZ/btshkygmd1Q/oLFOdEAj9mIrIfkS5oIWy1/img.gif" class='animated'>
            <img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FBwToA%2Fbtshr5pMCr0%2FOHxJ28nsrS5NN49stked20%2Fimg.png" class='static'>
          </div>

        </div>

        <div class="row movie-container my-5">

          <div class="col-3 movie-box hov-anim-box" @click="moveToHorror">
            <img src="https://blog.kakaocdn.net/dn/bwhm7S/btshsLLnxnr/dFLrdtqWrTQCNcLOkKtqpK/img.gif" alt="" class='animated'>
            <img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbXefIM%2Fbtshp30T7H2%2FC690cCalmnVBc9Shd60t8k%2Fimg.png" alt="" class='static'>
          </div>
          <div class="col-3 movie-box hov-anim-box" @click="moveToHistory">
            <img src="https://blog.kakaocdn.net/dn/uveOy/btshqxN6q7c/WmGOiimffkA8e9DLqcn4P0/img.gif" alt="" class='animated'>
            <img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcoRfFM%2FbtshrdIqVQu%2FYKurKV7BbQbG79nJ1m4Hs0%2Fimg.png" alt="" class='static'>
          </div>
          <div class="col-3 movie-box hov-anim-box" @click="moveToFamily">
            <img src="https://blog.kakaocdn.net/dn/bSiEuJ/btshrcJyYJH/pIhsv1FNz9LQPvSYvgQUUk/img.gif" alt="" class='animated'>
            <img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbwJTKH%2Fbtshqse4sYT%2FcqCsiMTKwXbBPmSokv8LB0%2Fimg.png" alt="" class='static'>
          </div>
          <div class="col-3 movie-box hov-anim-box" @click="moveToAnimation">
            <img src="https://blog.kakaocdn.net/dn/cMKNrr/btshlXtrBdF/4fxJmZm6jPd1bvwqBKDohk/img.gif" alt="" class='animated'>
            <img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F9ijBd%2Fbtshqx1FdP9%2FM1iKUReY3G9yF9xAotGnfK%2Fimg.png" alt="" class='static'>
          </div>
        </div>
          
        

      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home02Main',
  methods: {
    moveToRomance() {
      this.$router.push({ name: 'RecommendGenreView', params: { genre: '로맨스'} })
    },
    moveToMusic() {
      this.$router.push({ name: 'RecommendGenreView', params: { genre: '음악'} })
    },
    moveToSF() {
      this.$router.push({ name: 'RecommendGenreView', params: { genre: 'SF'} })
    },
    moveToAction() {
      this.$router.push({ name: 'RecommendGenreView', params: { genre: '액션'} })
    },
    moveToHorror() {
      this.$router.push({ name: 'RecommendGenreView', params: { genre: '공포'} })
    },
    moveToHistory() {
      this.$router.push({ name: 'RecommendGenreView', params: { genre: '역사'} })
    },
    moveToFamily() {
      this.$router.push({ name: 'RecommendGenreView', params: { genre: '가족'} })
    },
    moveToAnimation() {
      this.$router.push({ name: 'RecommendGenreView', params: { genre: '애니메이션'} })
    },
  }
}
</script>

<style>

section{
  margin: 0 auto;
}

img{
  height: 100%;
  width: 100%;
  /* border-radius: 0; */
}

.movie-container{
  margin: auto;

}

.hov-anim-box .animated {
  display: none
}

.hov-anim-box:hover .animated {
  display:grid
}

.hov-anim-box:hover .static {
  display: none
}

.ml-30{
  margin-left: 100px;
}
.mt-100{
  margin-top: 100px;
}
.mt-120{
  margin-top: 120px;
}
.mt-80{
  margin-top: 55px;
}
.mt-140{
  margin-top: 140px;
}

</style>

