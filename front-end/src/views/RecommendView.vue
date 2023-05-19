<template>
  <div class="background">
    <div class="container">
      <Home01Navbar/>
      <section class="recommend-container">
        <h3 class="ms-5 my-4">장르별</h3>
        <div class="row d-flex justify-content-center my-4">
          <!-- <ul v-for="genre in genres" :key="genre.id">
            <li></li>
          </ul> -->
          <div class="box col-2 m-4">
            
          </div>
          <div class="box col-2 m-4">
            
          </div>
          <div class="box col-2 m-4">
            
          </div>
          <div class="box col-2 m-4">
            
          </div>
          <div class="box col-2 m-4">
            
          </div>
          <div class="box col-2 m-4">
            
          </div>
          <div class="box col-2 m-4">
            
          </div>
          <div class="box col-2 m-4">
            
          </div>
        </div>

        <div class="row d-flex justify-content-center my-4">
        </div>
      </section>

      <section class="recommend-container">
        <h3 class="ms-5 my-4">연도별</h3>
        <div class="row d-flex justify-content-center my-4">
          <div class="box col-2 m-4">
            
          </div>
          <div class="box col-2 m-4">
            
          </div>
          <div class="box col-2 m-4">
            
          </div>
          <div class="box col-2 m-4">
            
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import Home01Navbar from '@/components/HOME/Home01Navbar.vue'

export default {
  name: 'RecommendView',
  components: {
    Home01Navbar
  }
}
</script>

<style>

</style>