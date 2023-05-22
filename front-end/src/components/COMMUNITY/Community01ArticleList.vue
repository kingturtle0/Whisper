<template>
  <div class="container">
    <h3 class='ml-55 mt-50'><i class='fa fa-film'></i> 영화수다</h3>
    <div class="table-wrapper d-flex justify-content-center">
    <table class="table table-dark table-hover mt-20" style="width: 90%;">
      <thead class="text-center">
        <tr>
          <th scope="col" class="article">ID</th>
          <th scope="col" class="article title">제목</th>
          <th scope="col" class="article">작성자</th>
          <th scope="col" class="article">작성일</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="article in displayedArticles" :key="article.id">
          <td class="text-center">{{ article.id }}</td>
          <td>
            <a style="text-decoration:none; color:white;" :href="getArticleUrl(article.id)">{{ article.title }}</a>
          </td>
          <td class="text-center">{{ article.user.username }}</td>
          <td class="text-center">{{ formatDate(article.created_at) }}</td>
        </tr>
      </tbody>
    </table>
    </div>
    <div class="table-wrapper d-flex justify-content-end">
      <button type="button" class="btn btn-secondary mr-61">
        <router-link class='write' :to="{ name: 'CreateArticleView' }"><i class="fas fa-pen fa-sm"></i> 쓰기</router-link>
      </button>
    </div>



    <nav aria-label="Page navigation example" class="">
      <ul class="pagination">
        <li class="page-item">
          <a class="page-link" href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li class="page-item" v-for="pageNumber in totalPages" :key="pageNumber" :class="{'active': currentPage === pageNumber}">
          <a class="page-link" href="#" @click="setCurrentPage(pageNumber)">{{ pageNumber }}</a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>

export default {
  name: 'ArticleList',
  data() {
    return {
      currentPage: 1,
      itemsPerPage: 5,
    };
  },
  computed: {
    articles() {
      return this.$store.state.articles;
    },
    displayedArticles() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      const slicedArticles = this.articles.slice(startIndex, endIndex);
      
      if (this.currentPage === 1) {
        const noticeArticle = {
          id: '#',
          title: '공지글입니다',
          user: {
            username: '운영자'
          },
          created_at: '2023-05-01'
        };
        slicedArticles.unshift(noticeArticle);
      }
      
      return slicedArticles;
    },
    totalPages() {
      return Math.ceil(this.articles.length / this.itemsPerPage);
    },
  },
  methods: {
    setCurrentPage(pageNumber) {
      this.currentPage = pageNumber;
    },
    getArticleUrl(id) {
      if (id === '#') {
        // Handle notice article URL
        // You can modify this method based on your actual URL structure
        return '/notice';
      } else {
        // Handle regular article URL
        return `/community/${id}`;
      }
    },
    formatDate(dateString) {
      if (dateString === '2023-05-01') {
        return '5월 1일';
      } else {
        const date = new Date(dateString);
        const month = date.getMonth() + 1;
        const day = date.getDate();
        return `${month}월 ${day}일`;
      }
    },
  },
};
</script>

<style>

.mt-50 {
  margin-top: 50px;
}
.mt-20 {
  margin-top: 20px;
}
.mr-61 {
  margin-right: 61px;
}
.ml-55 {
  margin-left: 60px;
}

.width-1000{
  width:1000px;
}

.table-wrapper {
  margin: 0 auto; /* 가운데 정렬 */
  min-width: 1000px; /* 테이블의 최대 너비 설정 */
}

.title{
  width:25%
}


a {
  text-decoration: none;
}

.write{
  color:white;
  text-decoration: none;
}

.pagination {
  justify-content: center;
}

tbody td {
  font-weight: 500;
  color: white;
}


/* 페이지네이션 색상 */
.pagination > li > a
{
    background-color: rgb(238, 238, 238);
    color: #5A4181;
}

.pagination > li > a:focus,
.pagination > li > a:hover,
.pagination > li > span:focus,
.pagination > li > span:hover
{
    /* color: #5a5a5a; */
    background-color: #ffffff;
    border-color: #8f8f8f;
}

.pagination > .active > a
{
    color: white;
    background-color: #5A4181 !Important;
    border: solid 1px #5A4181 !Important;
}

.pagination > .active > a:hover
{
    background-color: #5A4181 !Important;
    border: solid 1px #5A4181;
}

</style>
