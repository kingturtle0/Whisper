<template>
  <div>
    <h5>{{ article.title }}</h5>
    <p>{{ article.content }}</p>
    <router-link :to="{ name: 'DetailArticleView', params: { id: article.id }}">
      [DETAIL]
    </router-link>
    <hr>
  </div>
</template>

<script>
export default {
  name: 'ArticleListItem',
  props: {
    article: Object,
  }
}
</script>

<style>

</style>
