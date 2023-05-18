<template>
  <div class="container2">
    <img src="./assets/rate_poster/movie_rate_poster.jpg" alt="" id='rate_poster'>
    <!-- <div><img src="./assets/logo.png" alt=""></div> -->
    <div id='rate_box'>
      <div id='rate_container'>순위 1 슈퍼마리오 브라더스</div>
      <div id='rate_container'>순위 1 슈퍼마리오 브라더스</div>
      <div id='rate_container'>순위 1 슈퍼마리오 브라더스</div>
      <div id='rate_container'>순위 1 슈퍼마리오 브라더스</div>
      
    </div>
  </div>
</template>

<script>
export default {
  name: 'MovieRating',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.container2{
  display: flex;
  justify-content: center;

}

#rate_poster{
  min-height:500px;
  max-height: 600px;
}

#rate_box{
  border:solid white 1px;
  /* width:100vw; */
}
#violet{
  color: #C0B7E8;
  
}

#rate_container{
  border:solid white 1px;
  text-align: center;
  /* margin-left: 50px; */
  /* margin-right: 50px; */
  margin-bottom: 20px;
}
</style>
