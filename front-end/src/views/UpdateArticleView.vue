<template>
  <div class="container">
    <Home01Navbar/>
    <h1>게시글 수정</h1>
    <form @submit.prevent="updateArticle">
      <label for="title">제목 : </label>
      <input type="text" id="title" v-model.trim="title"><br>
      <label for="content">내용 : </label>
      <textarea id="content" cols="30" rows="10" v-model="content"></textarea><br>
      <input type="submit" id="submit">
    </form>
  </div>
</template>

<script>
import Home01Navbar from '@/components/HOME/Home01Navbar.vue'
import axios from 'axios'
const API_URL = 'http://127.0.0.1:8000'

export default {
  name: 'CreateView',
  components: {
    Home01Navbar,
  },
  data() {
    return {
      title: null,
      content: null,
    }
  },
  methods: {
    updateArticle() {
      const title = this.title
      const content = this.content

      if (!title) {
        alert('제목 입력해주세요')
        return
      } else if (!content){
        alert('내용 입력해주세요')
        return
      }
      axios({
        method: 'put',
        url: `${API_URL}/community/${ this.$route.params.id }/`,
        data: { title, content },
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
    }
  }
}
</script>

<style>

</style>
