<template>
  <div class="container2">
    <div class='rate_box'>
      <!-- rate_box 1 -->
      <div class='column'> 
        <div id="violet">SSAFY <span class='text_big'>Final Project 01</span></div>
        <div class='text_big'>WITH <span id='violet'>open Ai</span></div>
        <div class='text_big'>슈퍼마리오 <span id='violet'>브라더스</span></div>
        <div id='text_sm'>Hello python,</div>
        <div id='text_sm'>project is very hard. This is main page </div>
        <div id='text_sm'>nisl tincidunt eget. Lectus mauris eros in vitae .</div>
      </div>
    </div>
      <!-- rate_box 2 -->
    <div class='rate_box'>
      <div class='column'> 
        
      </div>
    </div>
      <!-- rate_box 3 -->
    <div class='rate_box'>
      <img src="./assets/rate_poster/movie_rate_poster.jpg" alt="" id='ratepng'>
    </div>
    <!-- 아래 메뉴 3개 -->


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
  margin-top: 200px;
  display: flex;
  justify-content: space-evenly;

}

.text_big{
  font-size: 40px;
  font-weight: bold;
  color:white;
}

#rate_poster{
  min-height:500px;
  max-height: 600px;
}

.rate_box{
  display: flex;
  text-align: left;
  
  /* border:solid white 1px; */
  /* width:100vw; */
}
#violet{
  color: #C0B7E8;
  font-size:45px;
  font-weight: 550;
  
}

#rate_container{
  border:solid white 1px;
  text-align: center;
  /* margin-left: 50px; */
  /* margin-right: 50px; */
  margin-bottom: 20px;
}

#ratepng{
  border-radius: 10%;
  width: 500px;
  height: 650px;
}

#text_sm{
  flex-wrap: wrap;
  font-size: 18px;
}

#mt30{
  margin-top: 30px;
}

.column{
  flex-direction: column;
}
</style>
