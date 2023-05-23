<template>
  <div class='background'>
    <div class="container">
      <Home01Navbar/>
      <Home02Main/>
      <Home03Rate/>
      <!-- <AiView/> -->
      <Home04Footer/>
    </div>
  </div>
</template>

<script>
import Home01Navbar from '@/components/HOME/Home01Navbar.vue'
import Home02Main from '@/components/HOME/Home02Main.vue'
import Home03Rate from '@/components/HOME/Home03Rate.vue'
import Home04Footer from '@/components/HOME/Home04Footer.vue'
// import AiView from '@/views/AiView.vue'

export default {
  name: 'HomeView',
  components: {
    Home01Navbar,
    Home02Main,
    Home03Rate,
    Home04Footer,
    // AiView
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




</style>