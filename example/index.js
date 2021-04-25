import Vue from 'vue/dist/vue.esm'
import App from './App.vue'
import EmptyState from '../src/main'

Vue.component('EmptyState', EmptyState)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})