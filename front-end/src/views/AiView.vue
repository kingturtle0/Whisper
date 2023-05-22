<template>
  <div class="search">
    <div class="input-bar">
      <input type="text" placeholder="마이크 클릭후 음성으로 검색어 입력" autocomplete="off" v-model="texts">
      <button class="dictate" :class="{ on: !isRecognizing }" @click="toggleRecognition">
        <i class="ic-mike"></i>
        <svg width="1.25rem" height="1.25rem" viewBox="0 0 100 100">
          <g stroke="#fff" stroke-width="15">
            <path d="M20,20 20,80">
              <animate attributeName="d" values="M20,40 20,60;M20,20 20,80;M20,40 20,60" dur="1s" repeatCount="indefinite" />
            </path>
            <path d="M50,10 50,90">
              <animate attributeName="d" values="M50,10 50,90;M50,40 50,60;M50,10 50,90" dur="1s" repeatCount="indefinite" />
            </path>
            <path d="M80,20 80,80">
              <animate attributeName="d" values="M80,40 80,60;M80,20 80,80;M80,40 80,60" dur="1s" repeatCount="indefinite" />
            </path>
          </g>
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      texts: '',
      isRecognizing: true,
      recognitionTimeout: null,
    };
  },
  mounted() {
    this.initializeSpeechRecognition()
  },
  methods: {
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
        console.log(this.texts)
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
      this.isRecognizing = false
      this.recognitionTimeout = setTimeout(() => {
        this.stopRecognition()
      }, 7000)
    },
    stopRecognition() {
      clearTimeout(this.recognitionTimeout)
      this.recognition.stop()
      this.isRecognizing = true
      if (this.texts.trim()) {
        this.$store.dispatch("getVideo", this.texts)
      } else {
        console.log('no text')
      }
      this.texts = ''
    },
  },
}
</script>

<style scoped>
body {
  font-family: 'helvetica neue';
  font-weight: 200;
  font-size: 20px;
  background-color: #f4f4f4;
}

button {
  cursor: pointer;
  background: transparent;
  border: 0;
  border-radius: 50%;
  color: #444;
  font-size: 1.25rem;
  margin-right: 5px;
  outline: none;
  width: 3rem;
  min-width: 3rem;
  height: 3rem;
  transition: background-color, color;
  transition-duration: .25s;
  box-shadow: 0 0 2rem #0000;
}

button:hover {
  background: #eee;
}


i {
  font-family: 'ic-font' !important;
  speak: never;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.ic-mike:before {
  content: "\e900";
}

@keyframes pulse-red {
  0% {
    box-shadow: 0 0 0 0 rgba(255, 82, 82, 0.7);
  }

  70% {
    box-shadow: 0 0 0 20px rgba(255, 82, 82, 0);
  }

  100% {
    box-shadow: 0 0 0 0 rgba(255, 82, 82, 0);
  }
}

p {
  margin: 0 0 3rem;
}

.search {
  display: block;
  width: 90%;
  max-width: 30rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  font-weight: 600;
}

.search .input-bar {
  align-items: center;
  background: #fff;
  border: 2px solid #0000;
  border-radius: 4rem;
  box-sizing: border-box;
  box-shadow: 0 1rem 2rem -1.5rem #0005;
  display: inline-flex;
  height: 4rem;
  overflow: hidden;
  transition: box-shadow .5s;
  width: 100%;
}

.search .input-bar input {
  background: transparent;
  border: 0;
  box-sizing: border-box;
  flex: 1;
  font-size: 1.25rem;
  margin-left: .5rem;
  min-width: 8rem;
  outline: none;
  padding-left: 1rem;
  position: relative;
  z-index: 1;
}

.dictate.on {
  background: #000;
}

.dictate.on svg {
  display: block;
  margin: auto;
}

.dictate.on .ic-mike {
  display: none;
}

.dictate svg {
  display: none;
}
</style>
