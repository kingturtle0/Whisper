<template>
  <div>

    <!-- 물결 -->
    <div v-if='showCover' class="cover">
      <div class="body">
        <div class="wave-container">
          <div style="width:100vw;height:100vh;position:absolute;" @click="toggleCover"></div>
          <!--------- 버튼 --------->
          <button v-if="texts" class="btn" @click="toggleRecognition">{{ texts }}</button>
          <button v-else class="btn" @click="toggleRecognition">Whisper</button>
          <div class="wave_wrap">
            <div class="wave" :class="{ 'animated': isAnimating }"></div>
            <div class="wave" :class="{ 'animated': isAnimating }"></div>
            <div class="wave" :class="{ 'animated': isAnimating }"></div>
          </div>
        </div>
      </div>
    </div>

    <!-- footer음파 -->
    <div class="hov-anim-box">
      <div class="img-container">
        <img src="https://blog.kakaocdn.net/dn/cNCDUI/btshrxNCa1E/J7A4RIcYrByidgReViRdhk/img.gif" alt="" class="animated" @click="toggleCover">
        <img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcOKN4D%2Fbtshp5RXddR%2FbGi8QkLjbPtnfikPCQa19K%2Fimg.png" alt="" class="static" @click="toggleCover">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home04Footer',
  data() {
    return {
      showCover: false,
      texts: '',
      isRecognizing: true,
      recognitionTimeout: null,
      isAnimating: false,
    };
  },
  mounted() {
    this.initializeSpeechRecognition()
  },
  methods: {
    toggleCover() {
      this.showCover = !this.showCover
    },
    toggleAnimation() {
      this.isAnimating = !this.isAnimating
    },
    initializeSpeechRecognition() {
      let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
      if (!("webkitSpeechRecognition" in window)) {
        alert("이 브라우저에서는 음성 인식 기능을 지원하지 않습니다!")
      } else {
      const recognition = new SpeechRecognition()
      recognition.interimResults = true
      recognition.lang = 'ko-KR'
      recognition.continuous = false
      recognition.maxAlternatives = 20000

      recognition.onspeechend = () => {
        recognition.stop()
        this.isRecognizing = true
      }

      recognition.onresult = (e) => {
        this.texts = Array.from(e.results).map(results => results[0].transcript).join("")
      }

      this.recognition = recognition
      }
    },
    toggleRecognition() {
      if (this.isRecognizing) {
        this.startRecognition()
      } else {
        this.stopRecognition()
      }
    },
    startRecognition() {
      this.recognition.start()
      this.toggleAnimation()
      this.isRecognizing = false
      this.recognitionTimeout = setTimeout(() => {
        this.stopRecognition()
      }, 5000)
    },
    stopRecognition() {
      clearTimeout(this.recognitionTimeout)
      this.recognition.stop()
      this.isRecognizing = true
      if (this.texts.trim()) {
        if (this.texts.includes('커뮤니티') || this.texts.includes('글')) {
          this.$router.push({ name: 'CreateArticleView' })
        } else if (this.texts.includes('공포')) {
          this.$router.push({ name: 'RecommendGenreView', params: { genre: '공포'} })
        } else if (this.texts.includes('페이지')) {
          this.$router.push({ name: 'MyPagezView' })
        } else {
          this.$store.dispatch("getVideo", this.texts)
        }
      } else {
        alert('음성이 입력되지 않았습니다!')
      }
      this.toggleAnimation()
      this.texts = ''
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
    color: white;
    font-family: 'Sriracha', 'Noto Sans KR' ,sans-serif;
    font-weight: 400;
    font-size: 19px;
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
    color: white;
    font-family: 'Sriracha', 'Noto Sans KR' ,sans-serif;
    font-weight: 400;
    font-size: 19px;
  }

  .wave-container .btn:hover {
    transform: scale(1.1);
  }

  .wave-container .btn:active {
    transform: scale(1);
  }

  .wave-container .btn::before {
    /* content: 'Whisper'; */
    /* color: var(--brightcolor); */
    color: white;
    font-family: 'Sriracha', 'Noto Sans KR' ,sans-serif;
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

  .wave-container .wave.animated {
    animation-play-state: running;
  }

  .wave-container .wave:not(.animated) {
    animation-play-state: paused;
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