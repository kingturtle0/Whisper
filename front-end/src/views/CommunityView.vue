<template>
  <div class="container">
    <Home01Navbar/>

    <Community01ArticleList />
  </div>
</template>

<script>
import Home01Navbar from '@/components/HOME/Home01Navbar.vue'
import Community01ArticleList from '@/components/COMMUNITY/Community01ArticleList.vue'

export default {
  name: 'CommunityView',
  components: {
    Home01Navbar,
    Community01ArticleList
  },
  computed:{
    isLogin() {
      return this.$store.getters.isLogin // 로그인 여부
    }
  },
  created() {
    this.getArticles()
  },
  methods: {
    getArticles() {
      if (this.isLogin) {
        this.$store.dispatch('getArticles')
      } else {
        alert('로그인이 필요한 페이지입니다...')
      }
      // 로그인이 되어 있으면 getArticles action 실행
      // 로그인 X라면 login 페이지로 이동
    }
  }
}
</script>

<style>

</style>