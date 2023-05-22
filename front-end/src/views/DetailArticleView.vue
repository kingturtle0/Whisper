<template>
  <div class="container">
    <Home01Navbar />
    <h1>Detail</h1>
    <p>글 번호 : {{ article?.id }}</p>
    <p>작성자 : {{ article?.user.username }}</p>
    <p>제목 : {{ article?.title }}</p>
    <p>내용 : {{ article?.content }}</p>
    <p>작성시간 : {{ article?.created_at }}</p>
    <p>수정시간 : {{ article?.updated_at }}</p>
    <div v-if="article?.user.username === userName">
      <button>수정</button>
      <button @click="deleteArticle">삭제</button>
    </div>
  </div>
</template>

<script>
import Home01Navbar from '@/components/HOME/Home01Navbar.vue'
import axios from 'axios'
const API_URL = 'http://127.0.0.1:8000'

export default {
  name: 'DetailView',
  components: {
    Home01Navbar
  },
  data() {
    return {
      article: null
    }
  },
  computed: {
    userName() {
      return this.$store.state.userName
    }
  },
  created() {
    this.getArticleDetail()
  },
  methods: {
    getArticleDetail() {
      axios({
        method: 'get',
        url: `${API_URL}/community/${ this.$route.params.id }/`,
        headers: {
          'Authorization' : `Token ${this.$store.state.token}`
        }
      })
      .then((response) => {
        this.article = response.data
      })
      .catch((error) => {
        console.log(error)
      })
    },
    deleteArticle() {
      axios({
        method: 'delete',
        url: `${API_URL}/community/${ this.$route.params.id }/`,
        headers: {
          'Authorization' : `Token ${this.$store.state.token}`
        }
      })
      .then(() => {
        console.log(this.$route.params.id)
        // localStorage.removeItem(this.$route.params.id);
        history.back()
      })
      .catch((error) => {
        console.log(error)
      })
    }
  }
}
</script>
