<template>
  <div class="container">
    <Home01Navbar/>

    <div class="margin-box"></div> 
    <div class="flex-container">
      <div class="flex-item" style="flex-grow: 2"></div>
      <div class="flex-item-main mt-40" style="flex-grow: 4; width: 450px">
        <div class="column"> 
          <div class="main-title">{{ data[selectedIndex].title }}</div>
          <div class="main-title-eng">{{ data[selectedIndex].english_title }}</div>
          <div class="title-container">
            <div class="detail-title">개봉일</div>
            <div class="detail-content">{{ data[selectedIndex].release_data }}</div>
          </div>
          <div class="title-container">
            <div class="detail-title">장르</div>
            <div class="detail-content">{{ data[selectedIndex].genre }}</div>
          </div>
          <div class="title-container">
            <div class="detail-title">러닝타임</div>
            <div class="detail-content">{{ data[selectedIndex].running_time }}</div>
          </div>
          <div class="title-container">
            <div class="detail-title">감독</div>
            <div class="detail-content">{{ data[selectedIndex].director }}</div>
          </div>
          <div class="title-container">
            <div class="detail-title">평점</div>
            <div class="detail-content">{{ data[selectedIndex].rating }}</div>
          </div>
        </div>
      </div>
      <div class="flex-item" style="flex-grow: 3">
        <img :src="data[selectedIndex].image" alt="LOGO" class="main-poster">
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
                <img :src="data[index - 1].image" class="rate-poster" @mouseover="changeSelectedIndex(index - 1)" :class="{ 'rate-select': selectedIndex === index - 1 }">
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="container">
            <div class="row" style="width: 95%; margin: auto">
              <div v-for="index in 5" :key="index" class="col">
                <img :src="data[index + 4].image" class="rate-poster" @mouseover="changeSelectedIndex(index + 4)" :class="{ 'rate-select': selectedIndex === index + 4 }">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import rank from '@/assets/rank.js'
import Home01Navbar from '@/components/HOME/Home01Navbar.vue'


export default {
  name: 'Home02Main',
  components: {
    Home01Navbar
  },
  data() {
    return {
      data: rank,
      selectedIndex: 0
    }
  },
  methods: {
    changeSelectedIndex(index) {
      this.selectedIndex = index;
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


