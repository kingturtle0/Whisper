import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../../router'

const API_URL = 'http://127.0.0.1:8000'

Vue.use(Vuex)

const auth =  {
  state: {
    token: null,
    userName: null,
  },
  getters: {
    isLogin(state) {
      return state.token ? true : false
    },
  },
  mutations: {
    SAVE_USER_INFO(state, info) {
      state.token = info.token
      state.userName = info.userName
    },
    LOGOUT(state) {
      state.token = null
      router.push({name : 'HomeView'})
    }
  },
  actions: {
    signUp(context, payload) {
      const { signupname, signuppassword1, signuppassword2 } = payload;
    
      axios
        .post(`${API_URL}/accounts/signup/`, {
          username: signupname,
          password1: signuppassword1,
          password2: signuppassword2
        })
        .then((response) => {
          const auth = {
            token: response.data.key,
            userName: JSON.parse(response.config.data).username
          }
          context.commit('SAVE_USER_INFO', auth)
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
          const auth = {
            token: response.data.key,
            userName: JSON.parse(response.config.data).username
          }
          context.commit('SAVE_USER_INFO', auth)
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
}

export default auth