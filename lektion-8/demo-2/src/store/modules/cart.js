export default {
  state: {
    cart: []
  },
  getters: {
    shoppingCart: state => {
      if(sessionStorage.getItem('cart')) {
        state.cart = JSON.parse(sessionStorage.getItem('cart'))
      }
      return state.cart
    },
    cartItemCount: state => {
      let items = 0
      state.cart.forEach(item => {
        items += item.quantity
      })
      return items
    },
    shoppingCartTotal: state => {
      let total = 0
      if(state.cart.length !== 0) {
        state.cart.forEach(item => {
          total += item.product.price * item.quantity
        })
      }
      return total
    }
  },
  mutations: {
    ADD_TO_CART: (state, { product, quantity }) => {
      let exists = state.cart.find(item => item.product.id === product.id)
      if(exists) {
        exists.quantity += quantity
        sessionStorage.setItem('cart', JSON.stringify(state.cart))
        return
      }
      state.cart.push({product, quantity})
      sessionStorage.setItem('cart', JSON.stringify(state.cart))
    },
    DELETE_FROM_CART: (state, _id) => {
      state.cart = state.cart.filter(item => item.product.id !== _id)
      sessionStorage.setItem('cart', JSON.stringify(state.cart))
    },
    INCREMENT_QUANTITY: (state, item) => {
      item.quantity += 1
      sessionStorage.setItem('cart', JSON.stringify(state.cart))
    },
    DECREMENT_QUANTITY: (state, item) => {
      item.quantity -= 1
      sessionStorage.setItem('cart', JSON.stringify(state.cart))
    }
  },
  actions: {
    addProductToCart: ({commit}, { product, quantity }) => {
      commit('ADD_TO_CART', { product, quantity })
    },
    deleteProductFromCart: ({commit}, id) => {
      commit('DELETE_FROM_CART', id)
    },
    decrementQuantity: ({commit}, item) => {
      if(item.quantity <= 1) {
        commit('DELETE_FROM_CART', item.product.id)
        return
      }
      commit('DECREMENT_QUANTITY', item)
    },
    incrementQuantity: ({commit}, item) => {

      commit('INCREMENT_QUANTITY', item)
    }
  }
}