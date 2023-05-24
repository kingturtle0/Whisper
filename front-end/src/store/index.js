import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import dayjs from 'dayjs'
import createPersistedState from 'vuex-persistedstate'
import router from '../router'
import auth from './modules/auth.js'

const API_URL = 'http://127.0.0.1:8000'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [
    createPersistedState({
      paths: ['auth'],
    }),
  ],
  state: {
    articles: [],
    video: [],
    movie: [],
    loading: false,
    URL: 'https://www.googleapis.com/youtube/v3',
    KEY: 'AIzaSyC-qE5UZQcriZFK3b5E3_Vd9m-hYEaqR6g'
  },
  getters: {
  },
  mutations: {
    GET_ARTICLES(state, articles) {
      state.articles = articles
    },
    GET_VIDEO(state, video) {
			state.video = video
		},
		CHANGE_LOADING(state, flag) {
			state.loading = flag
		},
    GET_MOVIE_DETAIL(state, movie) {
      state.movie = movie
    }
  },
  actions: {
    getArticles(context) {
      axios({
        method: 'get',
        url: `${API_URL}/community/`,
        headers: {
          'Authorization': `Token ${context.state.auth.token}`
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
			context.dispatch("changeLoading", true)
			axios.get(`${context.state.URL}/search`, {
        params: {
          key: context.state.KEY,
          part: "snippet",
          type: "video",
          q: word + " 메인 예고편",
          maxResults: 1,
        },
      })
      .then((searchResponse) => {
        const videoId = searchResponse.data.items[0].id.videoId
        return axios.get(`${context.state.URL}/videos`, {
          params: {
            key: context.state.KEY,
            part: "snippet",
            id: videoId
          },
        })
      })
      .then((videoResponse) => {
        const item = videoResponse.data.items[0]
        const parsedVideo = {
          videoId: item.id,
          title: item.snippet.title,
          description: item.snippet.description,
          publishedAt: dayjs(item.snippet.publishedAt).format("YYYY-MM-DD")
        }
        context.commit("GET_VIDEO", parsedVideo)
        context.dispatch("changeLoading", false)

        // router.push(`movies/${parsedVideo.videoId}`)
        router.push({ name: 'DetailMovieView', params: { videoId: parsedVideo.videoId} })
      })
      .catch((error) => {
        console.log(error);
      });
		},
		changeLoading(context, flag) {
			context.commit("CHANGE_LOADING", flag);
		},
  },
  modules: {
    auth
  }
})
