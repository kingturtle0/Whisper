import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'axios'
import createPersistedState from 'vuex-persistedstate'
// import router from '../router'

const API_URL = 'http://127.0.0.1:8000'

Vue.use(Vuex)


export default new Vuex.Store({
  plugins: [
    createPersistedState(),
  ],
  state: {
    articles: [
    ],
    token: null,
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
    // signup & login -> 완료하면 토큰 발급
    SAVE_TOKEN(state, token) {
      state.token = token
      // router.push({name : 'HomeView'}) // store/index.js $router 접근 불가 -> import를 해야함
    }
  },
  actions: {
    getArticles(context) {
      axios({
        method: 'get',
        url: `${API_URL}/community/`,
        headers: {
          'Authorization' : `Token ${context.state.token}`
        }
      })
        .then((response) => {
        // console.log(response, context)
          context.commit('GET_ARTICLES', response.data)
        })
        .catch((error) => {
        console.log(error)
      })
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
          // console.log(response)
          // context.commit('SIGN_UP', response.data.key)
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
      .catch((error) => console.log(error))
    }
  },
  modules: {
  }
})
