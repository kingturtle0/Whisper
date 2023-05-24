<template>
  <div class="container">
    <Home01Navbar />
    <div class="form-container">
      <div class="">
      <div class='first'>
        <h3>
          <i class="fas fa-pen fa-sm"></i> 글 작성
        </h3>
      </div>
      <div class="container">
      <div class="formbold-form-wrapper" ref="formWrapper">
        <form @submit.prevent="createArticle">
          <div class="formbold-mb-5">
            <label for="name" class="formbold-form-label">글제목</label>
            <input type="text" name="name" id="name" placeholder="제목을 입력하세요" class="formbold-form-input"
              v-model.trim="title" />
          </div>

          <div class="formbold-mb-5">
            <label for="message" class="formbold-form-label">내용</label>
            <textarea rows="12" name="message" id="message" placeholder="내용을 입력하세요" class="formbold-form-input"
              v-model="content"></textarea>
          </div>

          <div class='text-center'>
            <button class="formbold-btn w-full" type="submit" id="submit">작성하기</button>
          </div>
        </form>
      </div>
    </div>
    </div></div>
  </div>
</template>

<script>
  import Home01Navbar from '@/components/HOME/Home01Navbar.vue'
  import axios from 'axios'
  const API_URL = 'http://127.0.0.1:8000'

  export default {
    name: 'CreateArticleView',
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
      createArticle() {
        const title = this.title
        const content = this.content

        if (!title) {
          alert('제목을 입력해주세요')
          return
        } else if (!content) {
          alert('내용을 입력해주세요')
          return
        }
        axios({
          method: 'post',
          url: `${API_URL}/community/`,
          data: { title, content },
          headers: {
            'Authorization': `Token ${this.$store.state.auth.token}`
          }
        })
          .then(() => {
            this.$router.push({ name: 'CommunityView' })
          })
          .catch((error) => {
            console.log(error)
          })
      }
    }
  }
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: "Inter", sans-serif;
  }

  .form-container {
    width: 90%;
    margin: 30px auto;
  }

  .first{
    margin-top: 50px;
    margin-bottom: 30px;
    margin-left: 10px;
  }

  .formbold-mb-5 {
    margin-bottom: 30px;
  }

  .formbold-pt-3 {
    padding-top: 12px;
  }

  .formbold-main-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 48px;
  }

  .formbold-form-wrapper {
    margin: 0 auto;
    /* max-width: 550px; */
    width: 100%;
    height: 630px;
    background: #212529;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    padding: 10px;
    /* margin-top: 50px; */
  }

  .formbold-form-label {
    display: block;
    font-weight: 500;
    font-size: 20px;
    color: white;
    margin: 12px;
  }

  .formbold-form-label-2 {
    font-weight: 600;
    font-size: 20px;
    margin-bottom: 20px;
  }

  .formbold-form-input {
    width: 100%;
    padding: 12px 24px;
    border-radius: 6px;
    background: #212529;
    font-weight: 500;
    font-size: 16px;
    color: white;
    outline: none;
    resize: none;
    /* border: solid 0.5px #8f8f8f; */
  }

  .formbold-form-input:focus {
    border-color: #5b5a74;
    /* box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.05); */
  }

  .formbold-btn {
    text-align: center;
    font-size: 16px;
    border-radius: 6px;
    padding: 14px 32px;
    border: none;
    font-weight: 600;
    background-color: #8184a0;
    color: white;
    cursor: pointer;
  }

  .formbold-btn:hover {
    box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.05);
  }

  .formbold--mx-3 {
    margin-left: -12px;
    margin-right: -12px;
  }

  .formbold-px-3 {
    padding-left: 12px;
    padding-right: 12px;
  }

  .flex {
    display: flex;
  }

  .flex-wrap {
    flex-wrap: wrap;
  }

  .w-full {
    width: 20%;
  }

  .formbold-form-header h3 {
    font-weight: 700;
    font-size: 20px;
    color: white;
  }

  @media (min-width: 540px) {
    .sm\:w-half {
      width: 50%;
    }
  }
</style>
