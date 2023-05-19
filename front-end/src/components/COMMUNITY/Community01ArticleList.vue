<template>
  <div class="container">
    <h3>Article List</h3>
    <Community02ArticleListItem 
    v-for="article in articles" :key="article.id" :article="article"
    />
  </div>
</template>

<script>
import Community02ArticleListItem from '@/components/COMMUNITY/Community02ArticleListItem'

export default {
  name: 'ArticleList',
  components: {
    Community02ArticleListItem,
  },
  computed: {
    articles() {
      return this.$store.state.articles
    }
  }
}
</script>

<style>

</style>
