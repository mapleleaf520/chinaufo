// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'

import 'jquery'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import './assets/css/fonts/FontAwesome/font-awesome.css'
import './assets/css/animate.css'
import './assets/css/bootsnav.css'

import demonheader from './components/d_header.vue'
import demonfooter from './components/footer.vue'
import './assets/css/basic.css'

Vue.use(VueResource)
Vue.http.options.emulateJSON = true;

Vue.config.productionTip = false

Vue.component('my-header', demonheader)
Vue.component('my-footer', demonfooter)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
