<template>
  <div class='flex-container'>
    <div v-if='login_modal==true && isLogin==false' class='logindirect'>
      <div class="row d-flex black">
        <div class='close close1' @click='login_modal=false'></div>
        <div class='login-title'>
          Login
        </div>
        <form @submit.prevent="login">
          <div class="md-form mb-20">
            <i class="fas fa-user prefix"></i>
            <label for="orangeForm-name" class='ml-10'>ID</label>
            <input type="text" placeholder="ID" id="id" class="account" v-model="username">
          </div>
          <div class="md-form mb-20">
            <i class="fas fa-lock prefix"></i>
            <label for="orangeForm-pass" class='ml-10'>Password</label>
            <input type="password" placeholder="Password" id="password" class="account" v-model="password">
          </div>
          <div>
            <button id="login" class="account" type="submit"><strong>로그인</strong></button>
          </div>
          <div>
            <router-link :to="{ name: 'SignUpView' }" class="no-underline">
              <button id="login" class="account"><strong>회원가입</strong></button>
            </router-link>
          </div>
        </form>
      </div>
    </div>
    <!-- NAVBAR 시작 -->
    <div class='flex-item' style='flex-grow:1'>
      <router-link :to="{ name: 'HomeView' }">
        <img src="../../assets/NAV_LOGO.png" alt="LOGO" class='logo-img'>
      </router-link>
    </div>
    <div class='flex-item' style='flex-grow:2'>
      <!-- 빈칸 grow -->
    </div>
    <div class='flex-item' style='flex-grow:1'>
      <input type="text" placeholder="SEARCH" class="home-input">
    </div>
    <div class='flex-item' style='flex-grow:1'>
      ABOUT
    </div>
    <div class='flex-item' style='flex-grow:1;'>
      <router-link :to="{ name: 'RecommendView' }" class='router-link'>
        RECOMMEND
      </router-link>
    </div>
    <div class='flex-item' style='flex-grow:1'>
      커뮤니티
    </div>
    <div v-if="isLogin==false" class='flex-item' style='flex-grow:1' @click='login_modal=true'>
      로그인
    </div>
    <div v-if="isLogin==true" class='flex-item dropdown' style='flex-grow:1'>
      <p class='dropdown-toggle mb-0' id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
        MYPAGE
      </p>
      <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        <li><a class="dropdown-item" href="#">내정보</a></li>
        <li><a class="dropdown-item" href="#" @click="logout">로그아웃</a></li>
      </ul>
    </div>
    <div class='flex-item' style='flex-grow:0.5'></div>
  </div>
</template>

<script>
  export default {
    name: 'Home01Navbar',
    data() {
      return {
        login_modal: false,
        mypage_modal: false,
        username: null,
        password: null,
      }
    },
    computed: {
      isLogin() {
        return this.$store.getters.isLogin
      }
    },
    methods: {
      closelogin() {
        this.login_modal = false
      },
      closemypage() {
        this.mypage_modal = false
      },
      login() {
        const username = this.username
        const password = this.password
        const payload = { username, password }
        this.$store.dispatch('login', payload)
        this.username = ''
        this.password = ''
      },
      logout() {
        this.$store.dispatch('logout')
        this.mypage_modal = false
        this.login_modal = false
        alert('로그아웃되었습니다.')
      },
    }
  }
</script>

<style>
  .black {
    width: 280px;
    height: 400px;
    right: 25%;
    top: 8%;
    background-color: #0d0f11;
    border: 2px solid lightgrey;
    border-radius: 5px;
  }

  .login-title {
    text-align: center;
    font-size: 25px;
  }

  .mb-0 {
    margin-bottom: 0px;
  }

  .mb-20 {
    margin-bottom: 20px;
  }

  .ml-10 {
    margin-left: 10px;
  }

  .flex-container {
    display: flex;
    margin-top: 10px;
  }

  .flex-item {
    display: flex;
    font-size: 20px;
    justify-content: center;
    align-items: center;
    font-weight: 500;
  }

  .logo-img {
    width: 180px;
  }

  .home-input {
    width: 300px;
    height: 32px;
    font-size: 15px;
    border: 0;
    border-radius: 15px;
    outline: none;
    padding-left: 10px;
    background-color: rgb(233, 233, 233);
  }

  .black-bg {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    padding: 20px;
  }

  .logindirect {
    position: absolute;
    top: 70px;
    right: 418px;
  }

  .close {
    width: 20px;
    height: 20px;
    right: 5%;
    top: 1%;
    text-align: right;
  }

  .close1:after {
    content: "\00d7";
    font-size: 15pt;
    line-height: 50px;
  }

  #login {
    width: 100%;
    background-color: #9f8fe0;
    border-color: transparent;
    color: white;
    text-decoration: none;
  }

  .no-underline {
    text-decoration: none;
  }

  .account {
    width: 100%;
    display: block;
    margin-bottom: 3px;
    padding: 3px;
    border: 1px solid lightgray;
    border-radius: 3px;
    text-decoration: none;
  }

  #alert {
    border-color: transparent;
  }

  .dropdown:hover .dropdown-menu {
    display: block;
    margin-top: 120px;
    margin-left: 55px;
  }
</style>
