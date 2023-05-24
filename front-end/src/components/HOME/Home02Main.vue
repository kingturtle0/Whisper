<template>
  <div class="background">
    <div class="container text-center">
      <!-- <div></div> -->
      <section class="recommend-container mt-80" style="width:92%">
        <div class="row movie-container my-2">

          <div class="col-3 movie-box hov-anim-box" @click="moveToRomance">
            <img src="@/assets/01_로맨스영화.gif" alt="" class='animated'>
            <img src="@/assets/01_로맨스영화.jpg" alt="" class='static'>
          </div>
          <div class="col-3 movie-box hov-anim-box" @click="moveToMusic">
            <img src="@/assets/03_음악영화.gif" alt="" class='animated'>
            <img src="@/assets/03_음악영화.png" alt="" class='static'>
          </div>
          <div class="col-3 movie-box hov-anim-box" @click="moveToSF">
            <img src="@/assets/04_SF영화.gif" alt="" class='animated'>
            <img src="@/assets/04_SF영화.png" alt="" class='static'>
          </div>
          <div class="col-3 movie-box hov-anim-box" @click="moveToAction">
            <img src="@/assets/02_액션영화.gif" class='animated'>
            <img src="@/assets/02_액션영화.png" class='static'>
          </div>

        </div>

        <div class="row movie-container my-5">

          <div class="col-3 movie-box hov-anim-box" @click="moveToHorror">
            <img src="@/assets/05_공포영화.gif" alt="" class='animated'>
            <img src="@/assets/05_공포영화.png" alt="" class='static'>
          </div>
          <div class="col-3 movie-box hov-anim-box" @click="moveToHistory">
            <img src="@/assets/06_역사영화.gif" alt="" class='animated'>
            <img src="@/assets/06_역사영화.png" alt="" class='static'>
          </div>
          <div class="col-3 movie-box hov-anim-box" @click="moveToFamily">
            <img src="@/assets/07_가족영화.gif" alt="" class='animated'>
            <img src="@/assets/07_가족영화.png" alt="" class='static'>
          </div>
          <div class="col-3 movie-box hov-anim-box" @click="moveToAnimation">
            <img src="@/assets/08_애니메이션영화.gif" alt="" class='animated'>
            <img src="@/assets/08_애니메이션영화.png" alt="" class='static'>
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

