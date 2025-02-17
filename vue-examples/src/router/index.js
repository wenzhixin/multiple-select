import { createRouter, createWebHashHistory } from 'vue-router'
import Main from '../views/Main.vue'

const routes = [
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
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/single-row'
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
