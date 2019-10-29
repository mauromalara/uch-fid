import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    articles: [],
    status: '',
    token: localStorage.getItem('token') || '',
    user: {}
  },
  mutations: {
    fillUpArticles(state, dataArticles) {
      state.articles = dataArticles;
    },
    auth_request(state){
      state.status = 'loading'
    },
    auth_success(state, token, user){
      state.status = 'success'
      state.token = token
      state.user = user
    },
    auth_error(state){
      state.status = 'error'
    },
    logout(state){
      state.status = ''
      state.token = ''
    }
  },
  actions: {
    getArticles: async function ({commit}) {
      const data = await fetch('http://localhost:8080/test');
      const dataArticles = await data.json();
      commit('fillUpArticles', dataArticles);
    },
    login({ commit }, user) {
      return new Promise((resolve, reject) => {
        commit('auth_request')
        axios({
            url: ' http://localhost:3800/apiBack-End/logIn',
            data: user,
            method: 'POST'
          })
          .then(resp => {
            const token = resp.data.token
            const user = resp.data.user
            localStorage.setItem('token', token)
            axios.defaults.headers.common['authorization'] = token
            commit('auth_success', token, user)
            resolve(resp)
          })
          .catch(err => {
            commit('auth_error')
            localStorage.removeItem('token')
            reject(err)
          })
      })
    },
    logout({commit}){
      return new Promise((resolve, reject) => {
        commit('logout')
        localStorage.removeItem('token')
        delete axios.defaults.headers.common['authorization']
        resolve()
      })
    }
  },
  modules: {},
  getters : {
    isLoggedIn: state => !!state.token,
    authStatus: state => state.status,
  }
})