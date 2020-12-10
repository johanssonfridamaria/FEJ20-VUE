import axios from 'axios'

export default {
  state: {
    posts: [],
    post: {}
  },
  getters: {
    posts: state => state.posts,
    post: state => state.post
  },
  mutations: {
    SET_POSTS: (state, _posts) => {
      state.posts = _posts
    },
    SET_POST: (state, _post) => {
      state.post = _post
    }
  },
  actions: {
    getPosts: async ({commit}) => {
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
      commit('SET_POSTS', res.data)
    },
    getPostById: async ({commit}, id) => {
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
      commit('SET_POST', res.data)
    }
  }
}