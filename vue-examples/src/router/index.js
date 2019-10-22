import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    redirect: '/single-row'
  },
  {
    path: '/:current',
    name: 'current',
    component: Main,
    props: true
  },
  {
    path: '/:current/view-source',
    name: 'view-source',
    component: Main,
    props: true
  }
]

const router = new VueRouter({
  routes
})

export default router
