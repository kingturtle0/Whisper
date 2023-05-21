<template>
  <div class="rate-container">
    <!-- <div @mouseover="selectPoster(0)">
      <img src="../../assets/MAIN_poster.jpg" :class="{ 'rate-poster': true, 'rate-select': selectedPosterIndex === 0 }">
    </div>

    <div @mouseover="selectPoster(1)">
      <img src="../../assets/rate_01.jpg" :class="{ 'rate-poster': true, 'rate-select': selectedPosterIndex === 1 }">
      <div class="overlay" v-if="hoveredPosterIndex === 1"></div>
    </div>

    <div @mouseover="selectPoster(2)">
      <img src="../../assets/rate_02.jpg" :class="{ 'rate-poster': true, 'rate-select': selectedPosterIndex === 2 }">
      <div class="overlay" v-if="hoveredPosterIndex === 2"></div>
    </div>

    <div @mouseover="selectPoster(3)">
      <img src="../../assets/rate_03.jpg" :class="{ 'rate-poster': true, 'rate-select': selectedPosterIndex === 3 }">
      <div class="overlay" v-if="hoveredPosterIndex === 3"></div>
    </div>

    <div @mouseover="selectPoster(4)">
      <img src="../../assets/rate_04.jpg" :class="{ 'rate-poster': true, 'rate-select': selectedPosterIndex === 4 }">
      <div class="overlay" v-if="hoveredPosterIndex === 4"></div>
    </div> -->
  </div>
</template>

<script>
export default {
  name: 'Home03Rate',
  data() {
    return {
      selectedPosterIndex: 0,
      hoveredPosterIndex: -1,
    };
  },
  methods: {
    selectPoster(index) {
      this.selectedPosterIndex = index;
    },
  },
};
</script>

<style>
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
  position: relative;
}

.rate-select {
  border: solid 2.5px rgba(229, 255, 0, 0.884);
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0;
  transition: opacity 0.3s;
  pointer-events: none;
}

.text-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
}

.movie-title {
  font-size: 20px;
  font-weight: bold;
}

.rating {
  font-size: 16px;
}

.rate-poster:hover .overlay {
  opacity: 1;
}



</style>
