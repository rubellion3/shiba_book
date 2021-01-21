export const state = () => ({
    calData: {},
    carts: [],
  })
  
  export const mutations = {
    cal(state, a) {
      state.calData = a
    },
    carts(state, cart) {
      window.console.log(cart)
      state.carts = cart
    },
  }
  