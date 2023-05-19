<template>
  <div class='flex-container'>
    <!-- 로그인알림 -->


    <div v-if='login_modal==true && isLogin==false' class='logindirect'>
      <div class="main">
        <div class='close close1' @click='login_modal=false'></div>
        <h1 class="logo">Whisper</h1>
        <form @submit.prevent="login">
          <input type="text" placeholder="ID" id="id" class="account" v-model="username">
          <input type="password" placeholder="Password" id="password" class="account" v-model="password">
          <div><button id="login" class="account" type="submit" @click='loginMention'>로그인</button></div>
          <div>
            <router-link :to="{name:'SignUpView'}">
              <button id="signup" class="account">회원가입</button>
            </router-link>
          </div>
          <p id="alert" class="account"> </p>
        </form>
      </div>
    </div>

<!-- 마이페이지모달 -->
    <div v-if='mypage_modal==true' class='logindirect'>
      <div class="main">
        <div class='close close1' @click='closemypage'></div>
          <div><button id="login" class="account">내정보</button></div>
          <div>
              <button id="signup" class="account">로그아웃</button>
          </div>
      </div>
    </div>


    <!-- style="flex-grow: 2" -->


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

    <div v-if="isLogin==true" class='flex-item' style='flex-grow:1' @click='mypage_modal=true'>
      MYPAGE
    </div>



    <!-- 오른쪽마진 -->
    <div class='flex-item' style='flex-grow:0.5'>

    </div>

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
    computed:{
      isLogin(){
        return this.$store.getters.isLogin
      }
    },

    methods:{
      loginMention:function(){
        alert('로그인성공')
      },

      closelogin:function(){
          return this.login_modal=false;
      },

      closemypage:function(){
          return this.mypage_modal=false;
      },


      
      login() {
      const username = this.username
      const password = this.password

      const payload = {
        username, password
      }

      this.$store.dispatch('login', payload)
    }
    }
  }


/* 로그인알림 */

</script>




<style>


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
    /* height: 150px; */
    width: 120px;
  }

.home-input{
  width: 300px;
  height: 32px;
  font-size: 15px;
  border: 0;
  border-radius: 15px;
  outline: none;
  padding-left: 10px;
  background-color: rgb(233, 233, 233);
  }

/* ===========================로그인=================================== */

.black-bg {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  padding: 20px;
}

.logindirect{
  position: absolute;
  top: 70px;
  right: 418px;
}

.close{
  position:absolute;
  display:inline-block;
  *display:inline;
  width:20px;
  height:20px;
  right:5%;
  top:1%;
  text-align:center;
  margin-right:''}

.close1:after{content: "\00d7"; font-size:15pt;line-height:50px;}




.main {
    width: 310px;
    height: 350px;
    right:25%;
    top:8%;
    /* margin-left:-100px;
    margin-top:-150px; */

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border: 1px solid lightgrey;
    background-color: black;
    border-radius: 5px;
    position:absolute;

}

.logo {
    margin-top: 0px;
    margin-bottom: 40px;
}

#login,

#signup {
    width: 100%;
    background-color: #C0B7E8;
    border-color: transparent;
    color: white;
}

.account {
    display: block;
    margin-bottom: 3px;
    padding: 3px;
    border: 1px solid lightgray;
    border-radius: 3px;
}

#alert {
    border-color: transparent;
}
/* =================로그인================= */



</style>