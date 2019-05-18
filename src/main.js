// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueAnalytics from 'vue-analytics'

Vue.config.productionTip = false

/* global CSS */
require('./assets/styles.css')
require('./assets/mobile.css')

/* flexbox CSS */
require('flexboxgrid')

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App
  }
})

/* ga integration */
Vue.use(VueAnalytics, {
  id: 'UA-100938565-1',
  router
})
