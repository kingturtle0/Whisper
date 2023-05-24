<template>
  <div>
    <h4 class='mymargin'>Comments</h4>
    <ul class='ul-bgc'>
      <Community03CommentListItem v-for="comment in comments" :key="comment.id" :comment="comment"/>
    </ul>
  </div>
</template>

<script>
import Community03CommentListItem from '@/components/COMMUNITY/Community03CommentListItem.vue'

export default {
  name: 'Community03CommentList',
  components: {
    Community03CommentListItem,
  },
  computed: {
    userName() {
      return this.$store.state.auth.userName
    },
    comments() {
      const comments = this.$store.state.comments
      return comments.reverse()
    }
  },
  created() {
    this.getComments()
  },
  methods: {
    getComments() {
      this.$store.dispatch('getComments', this.$route.params.id)
    },
  }
}
</script>


<style scoped>
.mymargin{
  margin-top: 20px;
  margin-left: 75px;
}

.ul-bgc{
  background-color: rgb(33, 33, 37);
  width:88%;
  margin: 0 auto;
  border-radius: 5px;
  padding:1px
}

</style>