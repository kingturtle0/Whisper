<template>
  <div>
    <ul>
      <Community03CommentListItem v-for="comment in comments" :key="comment.id" :comment="comment"/>
    </ul>
  </div>
</template>

<script>
import Community03CommentListItem from '@/components/COMMUNITY/Community03CommentListItem.vue'
import axios from 'axios'
const API_URL = 'http://127.0.0.1:8000'

export default {
  name: 'Community03CommentList',
  components: {
    Community03CommentListItem,
  },
  data() {
    return {
      comments: []
    }
  },
  // watch: { 댓글 생성 or 수정 or 삭제 되면 다시 댓글 목록 조회하도록
  //   '$route.query.keyword'() {
  //     this.searchMovie()
  //   }
  // },
  computed: {
    userName() {
      return this.$store.state.auth.userName
    }
  },
  created() {
    this.getComments()
  },
  methods: {
    getComments() {
      axios({
        method: 'get',
        url: `${API_URL}/community/comments/`,
        headers: {
          'Authorization' : `Token ${this.$store.state.auth.token}`
        }
      })
      .then((response) => {
        const parsedComments = response.data.filter((comment) => {
          return this.$route.params.id === String(comment.article)
        })
        this.comments = parsedComments
      })
      .catch((error) => {
        console.log(error)
      })
    },
  }
}
</script>
