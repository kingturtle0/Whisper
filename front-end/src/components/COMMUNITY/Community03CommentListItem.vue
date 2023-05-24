<template>
  <div>
    <div class='comment-container' v-if="!isUpdating">

      <div class='comment-box'>
      <span>
        {{ comment?.user.username }} : {{ comment?.content }}
        <span class='ml-10' v-if="comment?.user.username === userName">
          <button class='mybtn' @click="startUpdate">수정</button>
          <button class='mybtn' @click="deleteComment">삭제</button>
        </span>
        <!-- <hr class='my-hr'> -->
      </span>

    </div>
    </div>

    <div v-else>
      <form @submit.prevent="updateComment">
        <label>{{ userName }} : </label>
        <input required type="text" maxlength="140" v-model.trim="updatedComment">
      </form>
      <button @click="cancelUpdate">취소</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
const API_URL = 'http://127.0.0.1:8000'

export default {
  name: 'Community03CommentListItem',
  data() {
    return {
      isUpdating: false,
      updatedComment: '',
    }
  },
  props: {
    comment: Object,
  },
  computed: {
    userName() {
      return this.$store.state.auth.userName
    }
  },
  methods: {
    startUpdate() {
      this.isUpdating = true
      this.updatedComment = this.comment.content
    },
    cancelUpdate() {
      this.isUpdating = false
    },
    updateComment() {
      const commentId = this.comment.id
      const content = this.updatedComment
      axios({
        method: 'put',
        url: `${API_URL}/community/comments/${ commentId }/`,
        data: { content },
        headers: {
          'Authorization' : `Token ${this.$store.state.auth.token}`
        }
      })
      .then(() => {
        this.isUpdating = false
      })
      .catch((error) => {
        console.log(error)
      })
    },
    deleteComment() {
      const commentId = this.comment.id
      axios({
        method: 'delete',
        url: `${API_URL}/community/comments/${ commentId }/`,
        headers: {
          'Authorization' : `Token ${this.$store.state.auth.token}`
        }
      })
      .then(() => {
        console.log('delete comment')
      })
      .catch((error) => {
        console.log(error)
      })
    }
  }
}
</script>

<style scoped>
.comment-container {
  width:93%;
  margin: 0 auto;
  margin-top: 20px;
  /* margin-bottom: 20px; */
}

.mywidth1{
  width:93%;
  margin: 0 auto;
  margin-top: 20px;
}
.my-hr{
  width:100%;
  margin-top: 0px;
  margin-bottom: 0px;
  border: 0;
  height: 2px;
  background-color: white;
}

.comment-box{
  width:98%;
  margin-top: 25px;
  /* background-color: #4d4d4d; */
  margin-bottom: 25px;
}

.mybtn{
  background:white;
  border-radius: 5px;
  border: none;
  margin-left: 3px;
  font-size: 12px;
  padding:5px;
  
}

.ml-10{
  margin-left: 10px;
}



</style>
