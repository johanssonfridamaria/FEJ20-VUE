import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [
      {id: 1, name: 'Product 1', price: 200},
      {id: 2, name: 'Product 2', price: 299},
      {id: 3, name: 'Product 3', price: 500},
      {id: 4, name: 'Product 4', price: 100},
      {id: 5, name: 'Product 5', price: 223},
      {id: 6, name: 'Product 6', price: 999},
      {id: 7, name: 'Product 7', price: 222},
      {id: 8, name: 'Product 8', price: 200},
      {id: 9, name: 'Product 9', price: 300},
      {id: 10, name: 'Product 10', price: 400},
      {id: 11, name: 'Product 11', price: 500},
      {id: 12, name: 'Product 12', price: 600},
      {id: 13, name: 'Product 13', price: 700},
      {id: 14, name: 'Product 14', price: 800},
      {id: 15, name: 'Product 15', price: 900}
    ],
    comp: 'Grid',
    product: {name: 'hejhej'},
    searchVal: ''
  },
  getters: {
    taxedProducts: (state) => {
      let taxedProducts = state.products.map(product => {
        return {
          id: product.id,
          name: product.name + ' + tax',
          price: Math.round(product.price + product.price * 0.2)
        }
      })
      return taxedProducts
    },
    comp: state => state.comp,
    product: state => state.product,
    filteredProducts: (state, getters) => {
      // return state.products.filter(product => product.name.toLowerCase().match(state.searchVal.toLowerCase()))
      return getters.taxedProducts.filter(product => product.name.toLowerCase().match(state.searchVal.toLowerCase()))
    }
  },
  mutations: {
    ADD: (state, amount) => {
      state.products.forEach(product => {
        product.price += amount
      })
    },
    SUB: (state, amount) => {
        state.products.forEach(product => {
          product.price -= amount
        })
    },
    CHANGE_COMP: (state, payload) => {
      state.comp = payload
    },
    SET_PRODUCT: (state, id) => {
      let prod = state.products.filter(p => p.id == id)
      state.product = prod.map(p => {
        return {
          id: p.id,
          name: p.name,
          price: p.price,
          taxPrice: Math.round(p.price + p.price * 0.2)
        }
      })
    },
    SEARCH: (state, val) => {
      state.searchVal = val
    }
  },
  actions: {
    // subAsync: (context) => {
    //   setTimeout(() => {
    //     context.commit('SUB')
    //   }, 4000)
    // }
    subAsync: ({ commit }, amount) => {
      setTimeout(() => {
        commit('SUB', amount)
      }, 4000)
    },
    addToPrice: ({commit}, amount) => {
      commit('ADD', amount)
    },
    changeComp: ({commit}, component) => {
      commit('CHANGE_COMP', component)
    },
    getProduct: ({commit}, id) => {
      // axios.get('localhost:9999/api/products/' + id)
      commit('SET_PRODUCT', id)
    },
    search: ({commit}, val) => {
      commit('SEARCH', val)
    }
  }
})
