import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    articles: []
  },
  mutations: {
    fillUpArticles(state, dataArticles) {
      state.articles = dataArticles
    }
  },
  actions: {
    getArticles: async function({ commit }) {
      const data = await fetch('./articles.json');
      const articles = await data.json();
      commit('fillUpArticles', articles);
    }
  },
  modules: {
  }
})
