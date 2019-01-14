import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

var state = {
  isLogin: 0
}
const mutations = {
  changeLogin (state, data) {
    state.isLogin = data
  }
}
export default new Vuex.Store({
  state,
  mutations
})
