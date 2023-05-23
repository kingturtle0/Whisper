<template>
  <div class='flex-container'>
    <div v-if='login_modal==true && isLogin==false' class='logindirect'>
      <div class="loginwrap">
        <div class="section">
          <!-- <div class='close close1' @click='login_modal=false'></div> -->
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-12 text-center align-self-center">
                <div class="section mb-4 mt-4 text-center">
                  <h6 class="mb-0 pb-3"><span>Log In </span><span>Sign Up</span></h6>
                  <input class="checkbox" type="checkbox" id="reg-log" name="reg-log" />
                  <label for="reg-log"></label>
                  <div class="card-3d-wrap mx-auto">
                    <div class="card-3d-wrapper">
                      <div class="card-front">
                        <div class="center-wrap">
                          <div class="section text-center">
                            <h4 class="mb-4 pb-3">Log In</h4>
                            <form @submit.prevent="login">
                              <div class="form-group">
                                <input type="text" name="logemail" class="form-style" placeholder="Your ID"
                                  id="logemail" autocomplete="off" v-model="username">
                                <i class="input-icon fas fa-at"></i>
                              </div>
                              <div class="form-group mt-2">
                                <input type="password" name="logpass" class="form-style" placeholder="Your Password"
                                  id="logpass" autocomplete="off" v-model="password">
                                <i class="input-icon fas fa-key"></i>
                              </div>
                              <button class="btn mt-4" type="submit">
                                submit
                              </button>
                            </form>
                            <!-- 여기부터 회원가입 -->
                            <!-- <p class="mb-0 mt-4 text-center"><a href="#0" class="link">Forgot your password?</a></p> -->
                          </div>
                        </div>
                      </div>
                      <div class="card-back">
                        <div class="center-wrap">
                          <div class="section text-center">
                            <h4 class="mb-4 pb-3">Sign Up</h4>
                            <form @submit.prevent="signUp">
                              <div class="form-group">
                                <input type="text" name="logname" class="form-style" placeholder="Your ID" id="logname"
                                  autocomplete="off" v-model="signupname">
                                <i class="input-icon fas fa-at"></i>
                              </div>
                              <div class="form-group mt-2">
                                <input type="password" name="logpass" class="form-style" placeholder="Your Password"
                                  autocomplete="off" v-model="signuppassword1">
                                <i class="input-icon fas fa-key"></i>
                              </div>
                              <div class="form-group mt-2">
                                <input type="password" name="logpass" class="form-style" placeholder="Check Password"
                                  autocomplete="off" v-model="signuppassword2">
                                <i class="input-icon fas fa-key"></i>
                              </div>
                              
                              <button class="btn mt-4" type="submit" value="SignUp">
                                submit
                              </button>
                              <!-- <input type="submit" value="SignUp"> -->
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- NAVBAR 시작 -->
    <div class='flex-item' style='flex-grow:1'>
      <router-link :to="{ name: 'HomeView' }">
        <img src="../../assets/NAV_LOGO.png" alt="LOGO" class='logo-img'>
      </router-link>
    </div>
    <!-- <div class='flex-item' style='flex-grow:2'> -->
    <!-- 빈칸 grow -->
    <!-- </div> -->
    <div class='flex-item' style='flex-grow:1'>
      <form @submit.prevent="SearchMovie">
        <input type="text" placeholder="SEARCH" class="home-input" v-model="searchInput" @keyup.enter="SearchMovie">
      </form>
    </div>
    <div class='flex-item' style='flex-grow:1'>
      ABOUT
    </div>
    <div class='flex-item leftToRight' style='flex-grow:1;'>
      <router-link :to="{ name: 'RecommendView' }" class='router-link' id=''>
        RECOMMEND
      </router-link>
    </div>
    <div class='flex-item' style='flex-grow:1'>
      <router-link :to="{ name: 'CommunityView' }" class='router-link'>
        커뮤니티
      </router-link>
    </div>
    <div v-if="isLogin==false" class='flex-item' style='flex-grow:1' @click='login_toggle()'>
      로그인
    </div>
    <div v-if="isLogin==true" class='flex-item dropdown' style='flex-grow:1'>
      <div class='dropdown-toggle mb-0' id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" style="font-seze:20px">
        {{logincheck()}}
        MYPAGE
      </div>
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
      password: null,
      username: null,

      signupname: null,
      signuppassword1: null,
      signuppassword2: null,

      searchInput: '',
    }
  },
  computed: {
    isLogin() {
      return this.$store.getters.isLogin
    }
  },
  methods: {
    login_toggle(){
      if (this.login_modal==false){
        this.login_modal=true;
      } else{
        this.login_modal=false;
      }
    },
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
    signUp(){
      const signupname = this.signupname
      const signuppassword1 = this.signuppassword1
      const signuppassword2 = this.signuppassword2
      const payload = { signupname, signuppassword1, signuppassword2}

      this.$store.dispatch('signUp', payload)
      this.signupname = ''
      this.signuppassword1 = ''
      this.signuppassword2 = ''
    },
    logincheck() {
      if (this.isLogin) {
        if (!sessionStorage.getItem('loginAlertShown')) {
          alert('로그인에 성공하였습니다.')
          sessionStorage.setItem('loginAlertShown', true)
        }
      }
    },
    logout() {
      this.$store.dispatch('logout')
      this.mypage_modal = false
      this.login_modal = false
      alert('로그아웃되었습니다.')
    },
    SearchMovie() {
      this.$router.push({ name: 'SearchView', query: {keyword: this.searchInput} })
        .catch(error => {
          if (error.name !== 'NavigationDuplicated') {
            throw error;
          }
        })
    }
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
    right: 900px;
  }

  .close {
    width: 20px;
    height: 20px;
    right: 5%;
    top: 1%;
    text-align: right;
    z-index: 5000;
  }

  .close1:after {
    content: "\00d7";
    font-size: 17pt;
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


  /* 로그인폼 */
  /* 로그인폼 */
  /* 로그인폼 */
  /* 로그인폼 */
  /* 로그인폼 */

  @import url('https://fonts.googleapis.com/css?family=Poppins:400,500,600,700,800,900');

  .loginwrap {
    width: 500px;
    background-color: #1f2029;
    position: absolute;
    z-index: 5;
    border: solid 2px rgb(92, 92, 92);
    border-radius: 2%;
  }

  body {
    font-family: 'Poppins', sans-serif;
    font-weight: 300;
    font-size: 15px;
    line-height: 1.7;
    color: #c4c3ca;
    background-color: #1f2029;
    overflow-x: hidden;
  }

  a {
    cursor: pointer;
    transition: all 200ms linear;
  }

  a:hover {
    text-decoration: none;
  }

  .link {
    color: #c4c3ca;
  }

  .link:hover {
    color: #ffeba7;
  }

  p {
    font-weight: 500;
    font-size: 14px;
    line-height: 1.7;
  }

  h4 {
    font-weight: 600;
  }

  h6 span {
    padding: 0 20px;
    text-transform: uppercase;
    font-weight: 700;
  }

  .section {
    position: relative;
    width: 100%;
    display: block;
  }

  .full-height {
    min-height: 100vh;
  }

  [type="checkbox"]:checked,
  [type="checkbox"]:not(:checked) {
    position: absolute;
    left: -9999px;
  }

  .checkbox:checked+label,
  .checkbox:not(:checked)+label {
    position: relative;
    display: block;
    text-align: center;
    width: 60px;
    height: 16px;
    border-radius: 8px;
    padding: 0;
    margin: 10px auto;
    cursor: pointer;
    background-color: #ffeba7;
  }

  .checkbox:checked+label:before,
  .checkbox:not(:checked)+label:before {
    position: absolute;
    display: block;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    color: #ffeba7;
    background-color: #102770;
    font-family: 'unicons';
    content: '\eb4f';
    z-index: 20;
    top: -10px;
    left: -10px;
    line-height: 36px;
    text-align: center;
    font-size: 24px;
    transition: all 0.5s ease;
  }

  .checkbox:checked+label:before {
    transform: translateX(44px) rotate(-270deg);
  }


  .card-3d-wrap {
    position: relative;
    width: 440px;
    max-width: 100%;
    height: 400px;
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
    perspective: 800px;
    margin-top: 60px;
  }

  .card-3d-wrapper {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
    transition: all 600ms ease-out;
  }

  .card-front,
  .card-back {
    width: 100%;
    height: 100%;
    background-color: #2a2b38;
    background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/1462889/pat.svg');
    background-position: bottom center;
    background-repeat: no-repeat;
    background-size: 300%;
    position: absolute;
    border-radius: 6px;
    left: 0;
    top: 0;
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
    -webkit-backface-visibility: hidden;
    -moz-backface-visibility: hidden;
    -o-backface-visibility: hidden;
    backface-visibility: hidden;
  }

  .card-back {
    transform: rotateY(180deg);
  }

  .checkbox:checked~.card-3d-wrap .card-3d-wrapper {
    transform: rotateY(180deg);
  }

  .center-wrap {
    position: absolute;
    width: 100%;
    padding: 0 35px;
    top: 50%;
    left: 0;
    transform: translate3d(0, -50%, 35px) perspective(100px);
    z-index: 20;
    display: block;
  }


  .form-group {
    position: relative;
    display: block;
    margin: 0;
    padding: 0;
  }

  .form-style {
    padding: 13px 20px;
    padding-left: 55px;
    height: 48px;
    width: 100%;
    font-weight: 500;
    border-radius: 4px;
    font-size: 14px;
    line-height: 22px;
    letter-spacing: 0.5px;
    outline: none;
    color: #c4c3ca;
    background-color: #1f2029;
    border: none;
    -webkit-transition: all 200ms linear;
    transition: all 200ms linear;
    box-shadow: 0 4px 8px 0 rgba(21, 21, 21, .2);
  }

  .form-style:focus,
  .form-style:active {
    border: none;
    outline: none;
    box-shadow: 0 4px 8px 0 rgba(21, 21, 21, .2);
  }

  .input-icon {
    position: absolute;
    margin-top: auto;
    top: 15px;
    /* bottom: 5px; */
    left: 18px;
    /* height: 48px; */
    font-size: 18px;
    /* line-height: 48px; */
    text-align: left;
    color: #ffeba7;

  }

  .form-group input:-ms-input-placeholder {
    color: #c4c3ca;
    opacity: 0.7;
    -webkit-transition: all 200ms linear;
    transition: all 200ms linear;
  }

  .form-group input::-moz-placeholder {
    color: #c4c3ca;
    opacity: 0.7;
    -webkit-transition: all 200ms linear;
    transition: all 200ms linear;
  }

  .form-group input:-moz-placeholder {
    color: #c4c3ca;
    opacity: 0.7;
    -webkit-transition: all 200ms linear;
    transition: all 200ms linear;
  }

  .form-group input::-webkit-input-placeholder {
    color: #c4c3ca;
    opacity: 0.7;
    -webkit-transition: all 200ms linear;
    transition: all 200ms linear;
  }

  .form-group input:focus:-ms-input-placeholder {
    opacity: 0;
    -webkit-transition: all 200ms linear;
    transition: all 200ms linear;
  }

  .form-group input:focus::-moz-placeholder {
    opacity: 0;
    -webkit-transition: all 200ms linear;
    transition: all 200ms linear;
  }

  .form-group input:focus:-moz-placeholder {
    opacity: 0;
    -webkit-transition: all 200ms linear;
    transition: all 200ms linear;
  }

  .form-group input:focus::-webkit-input-placeholder {
    opacity: 0;
    -webkit-transition: all 200ms linear;
    transition: all 200ms linear;
  }

  .btn {
    border-radius: 4px;
    height: 44px;
    font-size: 13px;
    font-weight: 600;
    text-transform: uppercase;
    -webkit-transition: all 200ms linear;
    transition: all 200ms linear;
    padding: 0 30px;
    letter-spacing: 1px;
    display: -webkit-inline-flex;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -webkit-align-items: center;
    -moz-align-items: center;
    -ms-align-items: center;
    align-items: center;
    -webkit-justify-content: center;
    -moz-justify-content: center;
    -ms-justify-content: center;
    justify-content: center;
    -ms-flex-pack: center;
    text-align: center;
    border: none;
    background-color: #ffeba7;
    color: #102770;
    box-shadow: 0 8px 24px 0 rgba(255, 235, 167, .2);
  }

  .btn:active,
  .btn:focus {
    background-color: #102770;
    color: #ffeba7;
    box-shadow: 0 8px 24px 0 rgba(16, 39, 112, .2);
  }

  .btn:hover {
    background-color: #102770;
    color: #ffeba7;
    box-shadow: 0 8px 24px 0 rgba(16, 39, 112, .2);
  }




  .logo {
    position: absolute;
    top: 30px;
    right: 30px;
    display: block;
    z-index: 100;
    transition: all 250ms linear;
  }

  .logo img {
    height: 26px;
    width: auto;
    display: block;
  }
  div>a:hover{color:#ffea72;}
  .dropdown-toggle:hover{
    color:#ffea72;
  }


  a.router-link-exact-active {
  color: #ffea72;
}

</style>