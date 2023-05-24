<template>
  <div class='comments-container'>
    <div class="comments-box">
    <h5>댓글작성</h5>
    <form @submit.prevent="createComment">
      <input required type="text" maxlength="140" v-model.trim="content">
      <label>{{ userName }}</label>
      <span></span>
    </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
const API_URL = 'http://127.0.0.1:8000'

export default {
  name: 'Community03CreateComment',
  data() {
    return {
      content: '',
    }
  },
  computed: {
    userName() {
      return this.$store.state.auth.userName
    }
  },
  methods: {
    createComment() {
      const content = this.content
      if (content) {
        axios({
          method: 'post',
          url: `${API_URL}/community/${ this.$route.params.id }/comments/`,
          data: { content },
          headers: {
            'Authorization' : `Token ${this.$store.state.auth.token}`
          }
        })
        .then(() => {
          this.$store.dispatch('getComments', this.$route.params.id)
          this.content = ''
        })
        .catch((error) => {
          console.log(error)
        })
      }
    },
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}


.comments-container{
  width:89%;
  margin: 40px auto;
  
}

form {
  position: relative;
  margin-top: 30px;
}

input {
  font-size: 15px;
  color: white;
  width: 100%;
  border: none;
  border-bottom: solid #aaaaaa 1px;
  padding-bottom: 10px;
  padding-left: 10px;
  position: relative;
  background: none;
  z-index: 5;
}

input::placeholder { color: #aaaaaa; }
input:focus { outline: none; }

span {
  display: block;
  position: absolute;
  bottom: 0;
  left: 0%;  /* right로만 바꿔주면 오 - 왼 */
  background-color: #666;
  width: 0;
  height: 2px;
  border-radius: 2px;
  transition: 0.5s;
}

label {
  position: absolute;
  color: #aaa;
  left: 10px;
  font-size: 20px;
  bottom: 8px;
  transition: all .2s;
}

input:focus ~ label, input:valid ~ label {
  font-size: 16px;
  bottom: 40px;
  color: #666;
  font-weight: bold;
}

input:focus ~ span, input:valid ~ span {
  width: 100%;
}


.my-hr{
  margin-top: 15px;
  border: 0;
  height: 2px;
  background-color: white;
}

.mb-20{
  margin-bottom: 20px;
}

.article-box{
  height: 600px;
  width: 88%;
  background-color: rgb(33, 33, 37);
  padding:20px;
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
  margin-left: 5px;
  /* font-weight: bold; */
  /* margin-left: 10px; */
}

.title-date{
  font-size:15px
}

.content{
  font-size: 20px;
  margin-top: 15px;
}





</style>
