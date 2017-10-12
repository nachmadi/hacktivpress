import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const state = {
  articles: [],
  article:{}
}

const mutations = {
  setArticles(state, payload){
    state.articles = payload
  }
  ,
  setAddOneArticle(state, payload){
    state.articles.push(payload);
  },
  deleteOneArticle(state, payload){
    console.log('mutations delete ', payload)
    //mengambil data yang ada di state question selain payload iteuh di var filterQuestion
    const filterArticle = state.articles.filter((article) => article._id !== payload)
    // state.questions nilainya di override dgn filterQuestion
    state.articles = filterArticle
  },
  setArticle(state, payload){
    state.article = payload
  },
  saveEditArticle (state, payload) {
    console.log('mutations save edit ', payload)
    const idxTodolist = state.articles.findIndex((article => article.id == payload._id));
    state.articles[idxTodolist].tgl = payload.tgl
    state.articles[idxTodolist].priority = payload.priority
    state.articles[idxTodolist].task = payload.task
    state.articles[idxTodolist].status = payload.status
  }
}

const actions = {
  getAllArticles({commit}){
    axios.get('http://localhost:3000/articles')
    .then(({ data }) => {
      console.log(data)
      commit('setArticles', data)
    })
    .catch(err => console.log(err))
  }
  ,
  addOneArticle ({commit}, objArticles) {
    console.log(objArticles);
    axios.post(`http://localhost:3000/articles`, objArticles)
    .then(data => {
        console.log(data.data)
        commit('setAddOneArticle', data.data)
    })
    .catch(err => {
      console.log(err)
    })
  },
  deleteOneArticle({ commit }, articleId) {
    console.log("data masuk", articleId);
    axios.delete(`http://localhost:3000/articles/${articleId}`)
    .then(({ data }) => {
      console.log(data)
      commit('deleteOneArticle', articleId)
    })
    .catch(err => console.log(err))
  },
  setArticle({commit}, article){
    console.log(article);
    commit('setArticle',article)
  },
  saveEditArticle ({commit}, objArticle) {
    console.log('object todo dari componen',objArticle);
    axios.put(`http://localhost:3000/articles/${objArticle._id}`, objArticle)
    .then(data => {
        console.log(data.data)
        commit('saveEditArticle', data.data)
    })
    .catch(err => {
      console.log(err)
    })
  }
}

const store = new Vuex.Store({
  state,
  mutations,
  actions
})

export default store
