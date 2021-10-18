export const state = () => ({
  isLightBG: false
})

export const mutations = {
  setIsLightBG (state, payload) {
    state.isLightBG = payload
  }
}
