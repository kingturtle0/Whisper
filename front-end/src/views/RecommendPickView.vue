<template>
  <div class="background">
    <div class="container">
      <Home01Navbar/>
      <RecommendPick01Main/>
      <RecommendPick02Footer/>
    </div>
  </div>
</template>

<script>
import Home01Navbar from '@/components/HOME/Home01Navbar.vue'

export default {
  name: 'RecommendPickView',
  components: {
    Home01Navbar
  }
}
</script>

<style>

</style>