const actions = {
  togglepagenavigation ({commit}) {
    commit('togglePageNavigation')
  },
  setpagenavigationopen ({commit}) {
    commit('setPageNavigation', true)
  },
  setpagenavigationclose ({commit}) {
    commit('setPageNavigation', false)
  }
}
export default actions
