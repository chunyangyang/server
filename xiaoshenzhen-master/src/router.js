import Vue from 'vue'
import VueRouter from 'vue-router'
import Goods from './components/Goods'
import Login from './view/Login'

Vue.use(VueRouter)

const routes = [
 { path: '/goods', component: Goods },
 { path: '/login', component: Login },
 { path: '/', component: Login }
]

const router = new VueRouter({
 routes
})

export default router
