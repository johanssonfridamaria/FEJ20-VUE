import axios from '@/axios'
import router from '@/router'

export default {
  state: {
    products: [],
    product: {}
  },
  getters: {
    products: state => state.products,
    product: state => state.product
  },
  mutations: {
    SET_PRODUCTS: (state, _products) => {
      state.products = _products
    },
    SET_PRODUCT: (state, _product) => {
      state.product = _product
    }
  },
  actions: {
    getProducts: async ({commit}) => {
      const res = await axios.get('/products')
      commit('SET_PRODUCTS', res.data)
    },
    getProductById: async ({commit}, id) => {
      const res = await axios.get('/products/' + id)
      commit('SET_PRODUCT', res.data)
    },
    updateProduct: async ({dispatch}, product) => {

      const _product = {
        name: product.name,
        price: product.price,
        short: product.short,
        desc: product.desc
      }

      let config = {
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
      }

      await axios.patch('/products/' + product._id, _product, config)
      dispatch('getProducts')
      router.push('/products/details/' + product._id)

    },
    deleteProduct: async ({dispatch}, id) => {
      let config = {
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
      }

      await axios.delete('/products/' + id, config)
      dispatch('getProducts')
    }
  }
}