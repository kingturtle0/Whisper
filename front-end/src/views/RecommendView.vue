<template>
  <div class="background">
    <div class="container text-center">
      <Home01Navbar/>
      <h2 class="my-5">영화추천</h2>
      <section class="recommend-container" style="width:85%">
        <div class="row movie-container my-2">

          <div class="col-3 movie-box hov-anim-box radius">
            <img src="@/assets/01_로맨스영화.gif" alt="" class='animated'>
            <img src="@/assets/01_로맨스영화.jpg" alt="" class='static'>
          </div>
          <div class="col-3 movie-box hov-anim-box">
            <img src="@/assets/03_음악영화.gif" alt="" class='animated'>
            <img src="@/assets/03_음악영화.png" alt="" class='static'>
          </div>
          <div class="col-3 movie-box hov-anim-box">
            <img src="@/assets/04_SF영화.gif" alt="" class='animated'>
            <img src="@/assets/04_SF영화.png" alt="" class='static'>
          </div>
          <div class="col-3 movie-box hov-anim-box">
            <img src="@/assets/02_액션영화.gif" class='animated'>
            <img src="@/assets/02_액션영화.png" class='static'>
          </div>

        </div>

        <div class="row movie-container my-5">

          <div class="col-3 movie-box hov-anim-box">
            <img src="@/assets/05_공포영화.gif" alt="" class='animated'>
            <img src="@/assets/05_공포영화.png" alt="" class='static'>
          </div>
          <div class="col-3 movie-box hov-anim-box">
            <img src="@/assets/06_역사영화.gif" alt="" class='animated'>
            <img src="@/assets/06_역사영화.png" alt="" class='static'>
          </div>
          <div class="col-3 movie-box hov-anim-box">
            <img src="@/assets/07_가족영화.gif" alt="" class='animated'>
            <img src="@/assets/07_가족영화.png" alt="" class='static'>
          </div>
          <div class="col-3 movie-box hov-anim-box">
            <img src="@/assets/08_애니메이션영화.gif" alt="" class='animated'>
            <img src="@/assets/08_애니메이션영화.png" alt="" class='static'>
          </div>
        </div>
          
        

      </section>
    </div>
  </div>
</template>

<script>
import Home01Navbar from '@/components/HOME/Home01Navbar.vue'

export default {
  name: 'RecommendView',
  components: {
    Home01Navbar
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

</style>