import Vue from 'vue/dist/vue.esm'
import App from './App.vue'
import EmptyStateComponent from '../src'

Vue.component('EmptyStateComponent', EmptyStateComponent)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})