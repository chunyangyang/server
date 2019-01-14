import 'normalize.css'
import 'font-awesome/css/font-awesome.min.css'
import Vue from 'vue'
import router from './router.js'
import store from './store.js'
import VueResource from 'vue-resource'
import moment from 'moment'
import App from './App'
Vue.config.productionTip = false
Vue.use(VueResource)
// Vue.config.debug = true
Vue.filter('datefmt', function (input, fmtstring) {
	return moment(input).format(fmtstring)
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: router,
	store,
	replace: false,
  components: { App },
  template: '<App/>'
})
