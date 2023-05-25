<template>
  <div class="container">
    <Home01Navbar />
    <!-- <div data-aos="zoom-out-right">
        blabla
    </div> -->
    <h1 data-aos="flip-down" data-aos-delay="200" data-aos-duration="1000" class="text-center mt-5">Project Whisper</h1>
    <div class="cards">
      <div class="card about-us" data-aos="fade-right" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
        card1
      </div>
      <div class="card about-us" data-aos="fade-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
        card2
      </div>
      <div class="card about-us" data-aos="fade-right" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
        card1
      </div>
      <div class="card about-us" data-aos="fade-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
        card2
      </div>
      <div class="card about-us" data-aos="fade-right" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
        card1
      </div>
      <div class="card about-us" data-aos="fade-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
        card2
      </div>
      <div class="card about-us" data-aos="fade-right" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
        card1
      </div>
      <div class="card about-us" data-aos="fade-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
        card2
      </div>
      <div class="card about-us" data-aos="fade-right" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
        card1
      </div>
      <div class="card about-us" data-aos="fade-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
        card2
      </div>
    </div>
  </div>
</template>

<script>
import AOS from 'aos';
import Home01Navbar from '@/components/HOME/Home01Navbar.vue'
AOS.init()

export default {
  name: 'AboutView',
  components: {
    Home01Navbar,
  }
}
</script>

<style scoped>
.cards {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.card {
  width: 40%;
  height: 300px;
  font-size: 24px;
  margin: 100px 10px;
  border: 1px solid #e3e3e3;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>