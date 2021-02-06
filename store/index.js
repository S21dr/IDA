export const state = () => ({
  catalogList:[],
  cartMask:false,
  cartItems:[],
})

export const mutations = {
  setCatalogList(state,data) {
    state.catalogList = data
  },
  setCartMask(state,data) {
    state.cartMask = data
  },
  setCartItems(state,data) {
    state.cartItems = data
  },
}
