<template>
  <div class='background' id="app">
    <!-- 메뉴바 -->
    <div class="container">
      <div class="item">LOGO</div>
      <div class="item">ABOUT</div>
      <div class="item">TALK</div>
      <div class="item">LOGIN</div>
      <div class="item">
        <!-- <input type="text" name="" id="" placeholder="검색어를입력하세요"> -->
      </div>
      <!-- <button type="button" class="btn btn-dark">Login</button> -->
    </div>  

    <div>
      <MovieRating msg="Welcome to Your Vue.js App"/>
    </div>
    <div>
      <!-- <HomeFooter msg="Welcome to Your Vue.js App"/>   -->
    </div>
    
    

  </div>

</template>

<script>
import MovieRating from './components/MovieRatinddg.vue'
export default {
  name: 'App',
  components: {
    MovieRating,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
  /* margin-top: 60px; */
}

.item{
  font-size: 25px;
}
/* HOME 배경화면 클래스 */
.background{ 
  position:fixed;
  /* background-image: url(./assets/background.png); */
  background-color: #0e1318;
  background-position: center center;
  background-size: cover;
  width: 100%;
  height: 100%;
}

/* display:flex 클래스 */
.container {
	display: flex;
  justify-content: space-evenly;
  /* border: solid 1px white; */
  font-size: 20pt;

	/* display: inline-flex; */
}




</style>
