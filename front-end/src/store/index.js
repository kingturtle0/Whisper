// vuex/store/index.js
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import dayjs from 'dayjs'
import createPersistedState from 'vuex-persistedstate'

const API_URL = 'http://127.0.0.1:8000'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [
    createPersistedState(),
  ],
  state: {
    articles: [],
    token: null,
    video: [],
    loading: false,
    URL: 'https://www.googleapis.com/youtube/v3',
    KEY: 'AIzaSyBIFkKeD-PjbNR24yuJQ1UIaia5z5MQuF0'
  },
  getters: {
    isLogin(state) {
      return state.token ? true : false
    }
  },
  mutations: {
    GET_ARTICLES(state, articles) {
      state.articles = articles
    },
    SAVE_TOKEN(state, token) {
      state.token = token
      // router.push({name : 'HomeView'}) // store/index.js $router 접근 불가 -> import를 해야함
    },
    LOGOUT(state) {
      state.token = null
    },
    GET_VIDEO(state, video) {
			state.video = video;
		},
		CHANGE_LOADING(state, flag) {
			state.loading = flag;
		},
  },
  actions: {
    getArticles(context) {
      axios({
        method: 'get',
        url: `${API_URL}/community/`,
        headers: {
          'Authorization': `Token ${context.state.token}`
        }
      })
        .then((response) => {
          context.commit('GET_ARTICLES', response.data)
        })
        .catch((error) => {
          console.log(error)
        })
    },
    getVideo(context, word) {
			context.dispatch("changeLoading", true);
			axios.get(`${context.state.URL}/search`, {
        params: {
          key: context.state.KEY,
          part: "snippet",
          type: "video",
          q: word + " 메인 예고편",
          maxResults: 1,
        },
      })
      .then((response) => {
        const parsedVideo = response.data.items.map((item) => {
          return {
            videoId: item.id.videoId,
            title: item.snippet.title,
            description: item.snippet.description,
            publishTime: dayjs(item.snippet.publishTime).format("YYYY-MM-DD"),
            thumbnails: item.snippet.thumbnails,
          };
        });
        context.commit("GET_VIDEO", parsedVideo[0]);
        context.dispatch("changeLoading", false);
      })
      .catch((error) => {
        console.log(error);
      });
		},
		changeLoading(context, flag) {
			context.commit("CHANGE_LOADING", flag);
		},
    signUp(context, payload) {
      const username = payload.username
      const password1 = payload.password1
      const password2 = payload.password2

      axios({
        method: 'post',
        url: `${API_URL}/accounts/signup/`,
        data: {
          username, password1, password2
        }
      })
        .then((response) => {
          context.commit('SAVE_TOKEN', response.data.key)
        })
        .catch((error) => {
          console.log(error)
        })
    },
    login(context, payload) {
      const username = payload.username
      const password = payload.password

      axios({
        method: 'post',
        url: `${API_URL}/accounts/login/`,
        data: {
          username, password
        }
      })
        .then((response) => {
          context.commit('SAVE_TOKEN', response.data.key)
        })
        .catch((error) => {
          console.log(error)
          alert('다시 입력해주세요!')
        })
    },
    logout(context) {
      context.commit('LOGOUT')
    }
  },
  modules: {
  }
})
