<template>
  <div>

    <!-- 물결 -->
    <div v-if='showCover' class="cover">
      <div class="body">
        <div class="wave-container">
          <!--------- 버튼 --------->
          <button class="btn"></button>
          <div class="wave_wrap">
            <div class="wave"></div>
            <div class="wave"></div>
            <div class="wave"></div>
          </div>
        </div>
      </div>
    </div>

    <!-- footer음파 -->
    <div class="hov-anim-box">
      <div class="img-container" @click="toggleCover">
        <img src="@/assets/footer1.gif" alt="" class="animated">
        <img src="@/assets/footer1.png" alt="" class="static">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home04Footer',
  data() {
    return {
      showCover: false
    };
  },
  methods: {
    toggleCover() {
      this.showCover = !this.showCover;
    },

}

}
</script>


<style scoped>
  .marginbox {
    margin-top: 20px;
    text-align: center;
  }

  img{
    width: 7%;
    border-radius: 95%;
  }

  .img-container{
 display: flex;
    justify-content: center;
    align-items: center;
  }


  .hov-anim-box .animated {
    display: none
    
  }

  .hov-anim-box:hover .animated {
    display: grid
  }

  .hov-anim-box:hover .static {
    display: none
  }

  @keyframes spread {
    0% {
      width: 0;
      height: 0;
      opacity: 1;
    }

    100% {
      width: 800px;
      height: 800px;
      opacity: 0;
    }
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --maincolor: #0e0a36;
    --darkcolor: #08080c;
    --brightcolor: #ffffff;
  }


  .wave-container {
    position: relative;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    /* background: linear-gradient(to right, #91eae4, #86a8e7, #7f7fd5); */
    background: linear-gradient(to right, #0f0f31, #110d3b, #030327);
  }

  .wave-container .btn {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    border: none;
    background-color: var(--maincolor);
    box-shadow: 0px 1px 10px rgba(3, 17, 78, 0.2);
    transition: transform 0.2s ease-out;
    z-index: 10;
    cursor: pointer;
  }

  .wave-container .btn:hover {
    transform: scale(1.1);
  }

  .wave-container .btn:active {
    transform: scale(1);
  }

  .wave-container .btn::before {
    content: 'Whisper';
    /* color: var(--brightcolor); */
    color: white;
    font-family: 'Sriracha', sans-serif;
    font-weight: 400;
    font-size: 19px;
  }

  .wave-container .wave_wrap {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .wave-container .wave_wrap .wave {
    position: absolute;
    width: 230px;
    height: 230px;
    border: 10px solid var(--brightcolor);
    border-radius: 50%;
    filter: blur(10px);
    box-shadow: inset 6px 6px 15px rgb(75, 96, 190),
      6px 6px 15px rgb(16, 46, 179),
      inset calc(6px * -1) calc(6px * -1) 15px rgba(2 37 201/ 0.2),
      calc(6px * -1) calc(6px * -1) 15px rgba(2 37 201/ 0.2);

    animation: spread;
    /* 여기가 시작되게 하자 */
    animation-duration: 3s;
    animation-timing-function: cubic-bezier(0, 0.2, 0.8, 1);
    animation-iteration-count: infinite;
  }

  .wave-container .wave_wrap .wave:nth-child(2) {
    animation-delay: 1s;
  }

  .wave-container .wave_wrap .wave:nth-child(3) {
    animation-delay: 2s;
  }

  .cover {
    /* 여기를 조정 */
    /* display: none; */
    position: fixed;
    float: initial;
    top: 0%;
    left: 0%;
  }



</style>