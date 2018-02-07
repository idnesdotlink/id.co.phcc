const mutations = {
  togglePageNavigation (state) {
    state.isPageNavigationOpen = !state.isPageNavigationOpen
  },
  setPageNavigation (state, payload) {
    console.log(payload)
    state.isPageNavigationOpen = payload
  }
}

export default mutations
