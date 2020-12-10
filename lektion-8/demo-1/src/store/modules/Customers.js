export default {
  state: {
    customers: [
      { name: 'Customer 1', active: true },
      { name: 'Customer 2', active: false },
      { name: 'Customer 3', active: true },
    ]
  },
  getters: {
    customers: state => state.customers
  },
  mutations: {
    ADD_CUSTOMER: (state, cusName) => {
      // let customer = { name: cusName, active: true }
      state.customers.push({ name: cusName, active: true })
    },
    TOGGLE_ACTIVE_STATE: (state, customer) => {
      customer.active = !customer.active
    },
    REMOVE_CUSTOMER: (state, customer) => {
      // let index = state.customers.indexOf(customer)
      state.customers.splice(state.customers.indexOf(customer), 1)
    }
  },
  actions: {
    addCustomer: ({commit}, cusName) => {
      commit('ADD_CUSTOMER', cusName)
    },
    toggleActive: ({commit}, customer) => {
      commit('TOGGLE_ACTIVE_STATE', customer)
    },
    removeCustomer: ({commit}, customer) => {
      commit('REMOVE_CUSTOMER', customer)
    }
  }
}