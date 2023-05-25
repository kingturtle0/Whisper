<template>
  <div class="container">
    <Home01Navbar />
    <div>하이</div>
    <div data-aos="zoom-out-right"> <!-- 오른쪽으로 줌아웃 하는 모션 설정 -->
        <!-- 내용 ... -->
        blabla
    </div>
    
    <!-- 다양한 속성들이 존재한다. (설명은 후술) -->
    <div data-aos="fade-up" 
        data-aos-offset="200" 
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000" 
          >
        <!-- 내용 ... -->
        blablabla
    </div>
  </div>
</template>

<script>
import Home01Navbar from '@/components/HOME/Home01Navbar.vue'

export default {
  name: 'AboutView',
  components: {
    Home01Navbar,
  }
}
</script>

<style>

</style>