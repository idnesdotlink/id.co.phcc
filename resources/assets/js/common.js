import Vue from 'vue'
import Vuebar from 'vuebar'
import 'holderjs'
import axios from 'axios'
import AOS from 'aos'
import Vuex from 'vuex'
import state from './store/state'
import getters from './store/getters'
import mutations from './store/mutations'
import actions from './store/actions'
import AppContainerComponent from './components/AppContainerComponent.vue'
import PageContainerComponent from './components/PageContainerComponent.vue'
import ImageStreamComponent from './components/ImageStreamComponent.vue'
import ImageStreamItemComponent from './components/ImageStreamItemComponent.vue'
// import NavigationButtonComponent from './components/NavigationButtonComponent.vue'

axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
let token = document.head.querySelector('meta[name="csrf-token"]')
if (token) {
  axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
} else {
  console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
}

AOS.init()

Vue.use(Vuebar)
Vue.use(Vuex)
Vue.component('page-container-component', PageContainerComponent)
Vue.component('app-container-component', AppContainerComponent)
Vue.component('image-stream-component', ImageStreamComponent)
Vue.component('image-stream-item-component', ImageStreamItemComponent)
// Vue.component('navigation-button-component', NavigationButtonComponent)
const store = new Vuex.Store({
  getters,
  state,
  mutations,
  actions
})

var app = new Vue({
  el: '#app',
  store
})
