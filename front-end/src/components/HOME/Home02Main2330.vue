<template>
  <div>
    <!-- 메인 위 마진 -->
    <div class='margin-box'></div> 
    
    <!-- main시작 -->
    <div class='flex-container'>

      <!-- 왼쪽마진 -->
      <div class='flex-item' style='flex-grow:2'>
        
      </div>

      <!-- 타이틀,mt-30 -->
      <div class='flex-item-main mt-40' style='flex-grow:4; width:450  px'>
        <div class='column'> 
          <div class='main-title'>슈퍼마리오 브라더스(3D)</div>
          <div class="main-title-eng">The Super Mario Bros. Movie, 2023</div>
          
          <!-- 상세정보 -->
          <div class='title-container'>
            <div class='detail-title'>개봉일</div>
            <div class='detail-content'>2023-05-10</div>
          </div>

          <div class='title-container'>
            <div class='detail-title'>장르</div>
            <div class='detail-content'>애니메이션, 어드벤처, 코미디</div>
          </div>

          <div class='title-container'>
            <div class='detail-title'>러닝타임</div>
            <div class='detail-content'>92분</div>
          </div>

          <div class='title-container'>
            <div class='detail-title'>감독</div>
            <div class='detail-content'>아론 호바스, 마이클 젤레닉</div>
          </div>

          <div class='title-container'>
            <div class='detail-title'>평점</div>
            <div class='detail-content'>8.43</div>
          </div>
        <!-- column 끝 -->
        </div > 
      </div>
      <!-- 포스터 -->
      <div class='flex-item' style='flex-grow:3'>
        <img src="../../assets/MAIN_poster.jpg" alt="LOGO" class='main-poster'>
      </div>
      <!-- 오른쪽마진 -->
      <!-- <div class='flex-item' style='flex-grow:0.5'>
        
      </div> -->
    </div>

    <div class='ml-50 mt-40' style="font-size:25px; font-weight:500">무비차트</div>
<!-- 포스터 캐러샐 -->
<div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel" data-bs-interval="5200">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div class="container mt-20">
        <div class="row" style="width:95%; margin:auto">
          <!-- for문 시작 -->
          <div v-for="index in 5" :key="index" class="col">
            <img :src="data[index - 1].image" class='rate-poster'>
          </div>
          <!-- for문 끝 -->
        </div>
      </div>
    </div>
    <div class="carousel-item">
      <div class="container mt-20">
        <div class="row" style="width:95%; margin:auto">
          <!-- for문 시작 -->
          <div v-for="index in 5" :key="index" class="col">
            <img :src="data[index + 4].image" class='rate-poster'>
          </div>
          <!-- for문 끝 -->
        </div>
      </div>
    </div>
  </div>
</div>
</div>
</template>


<script>
import rank from '../../assets/rank.js'
export default {
  name:'Home02Main',
  data(){
    return{
      data: rank
    }
  }
}
</script>

<style>

.carousel-item {
  display: flex;
  justify-content: center;
}

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
  /* position: relative; */
}

.rate-select {
  border: solid 2.5px rgba(229, 255, 0, 0.884);
}


.margin-box{
  margin-top: 30px;
}

.main-poster{
  border-radius: 5%;
  width: 300px;
  height: 420px;
}

.flex-item-main{
  display: flex;
  font-size: 20px;
  justify-content: center;
  /* align-items: center; */
  font-weight: 500;
}

.column{
  align-items: center;
}

.mt-60{
  margin-top: 60px;
}
.mt-50{
  margin-top: 50px;
}
.mt-40{
  margin-top: 40px;
}
.mt-20{
  margin-top: 20px;
}

.ml-30{
  margin-left: 30px;
}
.ml-50{
  margin-left: 50px;
}
.ml-70{
  margin-left: 70px;
}
.ml-80{
  margin-left: 80px;
}

.main-title{
  font-size: 28px;
  color:white;
  font-weight: 600;
}

.main-title-eng{
  font-size:20px;
  color: rgb(209, 209, 209);
  margin-bottom: 30px;
}

.detail-title{
  font-size:20px;
  min-width:100px;
  /* color: #c5c5c5; */
  color: #ebebeb;
  margin-top: auto;
  margin-bottom: auto;

}

.detail-content{
  font-size:15px;
  color: #d4d3d3;
  margin-top: auto;
  margin-bottom: auto;
}

.title-container{
  display:flex;
  margin-top: 10px;
}









</style>