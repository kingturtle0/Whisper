<template>





  <div class="container">
    <Home01Navbar />
    <div class='article-container'>
      <h3 class='ml-55 mt-50 mb-20'><i class='fa fa-film'></i> 영화수다</h3>
      <div class="ml-55 article-box">
        <div class='title w-75'>{{ article?.title }}</div>
        <div>
          <div class='title-user'>
            <span class='title-date2'>
              <strong style="color:white; margin-left:5px;">{{ article?.user.username }}</strong>
            </span>
            <span class='title-date'>
              <strong style='color:white; margin-left:7px;'>{{formatDate(article?.created_at) }}</strong>
            </span> 
          </div>
        </div>
        <hr class='my-hr'>
        <p class='content'>{{ article?.content }}</p>
        <div v-if="article?.user.username === userName" class="btns">
          <button @click="moveToUpdate" class="btn btn-outline-light article-btn">수정</button>
          <button @click="deleteArticle" class="btn btn-outline-light article-btn">삭제</button>
        </div>
      </div>
    </div>

    <Community03CommentList/>
    <Community03CreateComment/>
  </div>
</template>

<script>
import Home01Navbar from '@/components/HOME/Home01Navbar.vue'
import Community03CreateComment from '@/components/COMMUNITY/Community03CreateComment.vue'
import Community03CommentList from '@/components/COMMUNITY/Community03CommentList.vue'
import axios from 'axios'
const API_URL = 'http://127.0.0.1:8000'

export default {
  name: 'DetailArticleView',
  components: {
    Home01Navbar,
    Community03CreateComment,
    Community03CommentList,
  },
  data() {
    return {
      article: null
    }
  },
  computed: {
    userName() {
      return this.$store.state.auth.userName
    }
  },
  created() {
    this.getArticleDetail()
  },
  methods: {
  formatDate(date) {
    if (date) {
      const options = { month: 'short', day: 'numeric' }
      return new Date(date).toLocaleDateString('ko-KR', options)
    }
    return ''
  },
    getArticleDetail() {
      axios({
        method: 'get',
        url: `${API_URL}/community/${ this.$route.params.id }/`,
        headers: {
          'Authorization' : `Token ${this.$store.state.auth.token}`
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
          'Authorization' : `Token ${this.$store.state.auth.token}`
        }
      })
      .then(() => {
        this.$router.push({name: 'CommunityView'})
      })
      .catch((error) => {
        console.log(error)
      })
    },
    moveToUpdate() {
      this.$router.push({name: 'UpdateArticleView'})
    }
  }
}
</script>

<style scoped>
.my-hr{
  margin-top: 7px;
  border: 0;
  height: 2px;
  background-color: white;
}

.mb-20{
  margin-bottom: 20px;
}

.article-box{
  height: 500px;
  width: 88%;
  background-color: rgb(33, 33, 37);
  padding:30px;
  border-radius: 1%;
  margin: 0 auto;
}

.title{
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 30px;
  font-weight: 500;
}

.title-user{
  font-size: 22px;
  /* margin-left:  */
  /* font-weight: bold; */
  /* margin-left: 10px; */
}

.title-date{
  font-size:15px;
  color:whitesmoke
}
.title-date2{
  font-size:20px;
  color:whitesmoke
}
.content{
  font-size: 20px;
  margin-top: 15px;
}

.btn-container {
  height: 60%;
}

.article-btn {
  border-radius: 5px;
  border: none;
  margin-left: 5px;
  font-size: 16px;
  padding:6px;
}

.btns {
  position: absolute;
  right: 425px;
  top: 600px;
}
</style>