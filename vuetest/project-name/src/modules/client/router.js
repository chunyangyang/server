import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    { path: '/', name: 'client', component: r => { require(['./components/test/Test.vue'], r) }, meta: { title: 'Client' }}
]

export default new VueRouter({
    routes: routes
})