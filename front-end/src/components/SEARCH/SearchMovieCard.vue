<template>
  <div class="col-3 mb-5 d-flex align-items-stretch">
    <li class="d-flex align-items-stretch">
      <div class="card rounded">
        <img class="card-img-top rounded-top border-bottom poster" :src="getMoviePosterSrc(movie)" alt="poster_img">
      </div>
    </li>
  </div>
</template>

<script>
export default {
  name: 'MovieCard',
  props: {
    movie: Object
  },
  methods: {
    getMoviePosterSrc(movie) {
      return 'http://image.tmdb.org/t/p/w500/' + movie.poster_path
    }
  }
}
</script>

<style scoped>
.poster {
  aspect-ratio: 7/10;
}
</style>