import Vue from 'vue'
import Vuex from 'vuex'
import posts from './modules/Posts'
import customers from './modules/Customers'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    posts,
    customers
  }
})
