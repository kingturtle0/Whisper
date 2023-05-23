<template>
  <div>
    <div v-if="!isUpdating">
      <span>
        {{ comment?.user.username }} : {{ comment?.content }}
      </span>
      <div v-if="comment?.user.username === userName">
        <button @click="startUpdate">수정</button>
        <button @click="deleteComment">삭제</button>
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
