<template>
  <div class='flex-container'>


    <div v-if='login_modal==true' class=''>
      <div class="main">
        <div class='close close1' @click='login_modal=false'></div>
        <h1 class="logo">Whisper</h1>
        <div class="">
          <input type="text" placeholder="ID" id="id" class="account">
          <input type="password" placeholder="Password" id="password" class="account">
          <div><button id="login" class="account">로그인</button></div>
          <p id="alert" class="account"> </p>
        </div>
      </div>
    </div>


    <!-- style="flex-grow: 2" -->
    <div class='flex-item' style='flex-grow:1'>
      <img src="../../assets/NAV_LOGO.png" alt="LOGO" class='logo-img'>
    </div>

    <div class='flex-item' style='flex-grow:7'>
      <!-- 빈칸 grow -->
    </div>

    <div class='flex-item' style='flex-grow:1'>
      ABOUT
    </div>
    <div class='flex-item' style='flex-grow:1'>
      커뮤니티
    </div>
    <div class='flex-item' style='flex-grow:1' @click='login_modal=true'>
      로그인
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
      }
    },
    methods:{
      closelogin:function(){
        if(this.login_modal==true){
          return this.login_modal=false;
        }
      }
    }
  }
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

/* ===========================로그인=================================== */

.black-bg {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  padding: 20px;
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

#login {
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
</style>