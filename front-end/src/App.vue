<template>
  <div class='background' id="app" >
    <div class="container">
      <Home01Navbar/>
      <Home02Main/>
      <Home03Rate/>
      <Home04Footer/>
      <!-- <div id="app">
        <nav>
          <router-link to="/">Home</router-link> |
          <router-link to="/about">About</router-link>
        </nav>
        <router-view/>
      </div> -->
    </div>
  </div>
</template>

<script>
import Home01Navbar from './components/HOME/Home01Navbar.vue'
import Home02Main from './components/HOME/Home02Main.vue'
import Home03Rate from './components/HOME/Home03Rate.vue'
import Home04Footer from './components/HOME/Home04Footer.vue'

export default {
  name: 'App',
  components: {
    Home01Navbar,
    Home02Main,
    Home03Rate,
    Home04Footer,
  }
}


// const id = document.getElementById('id')
// const password = document.getElementById('password')
// const login = document.getElementById('login')
// let errStack = 0;

// login.addEventListener('click', () => {
//     if (id.value == 'acid') {
//         if (password.value == '0000') {
//             alert('로그인 되었습니다!')
//         }
//         else {
//             alert('아이디와 비밀번호를 다시 한 번 확인해주세요!')
//             errStack ++;
//         }
//     }
//     else {
//         alert('존재하지 않는 계정입니다.')
//     }

//     if (errStack >= 5) {
//         alert('비밀번호를 5회 이상 틀리셨습니다. 비밀번호 찾기를 권장드립니다.')
//     }
// })
</script>


<style>

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

#app {
font-family: 'Noto Sans KR','Montserrat', sans-serif;
/* font-family: 'Montserrat', 'Noto Sans KR', sans-serif; */
color:white;
/* font-family: 'IBM Plex Sans', sans-serif; */
/* text-align: center; */
/* color: #2c3e50; */
}

.container{
  width:1100px;
  margin:auto;

}

.background{ 
  min-width: 100%;
  min-height: 100%;
  background-color: #0e1318;
  background-size: cover;
  background-position: center center;
  position:fixed;
  /* background-image: url(./assets/background.png); */
}

.violet{
  color: #C0B7E8;
  font-size:45px;
  font-weight: 550;
  
}

/* 확인용 */
div{
  /* background-color: rgb(199, 199, 199); */
  /* border: solid rgb(39, 38, 38) 1px; */
  
}

img:hover{
  cursor:pointer;
}
</style>