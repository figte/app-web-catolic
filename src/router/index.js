import { createRouter, createWebHistory } from 'vue-router'
import IndexView from '../views/IndexView.vue'

const router = createRouter({
  history: createWebHistory('/'),
  routes: [
    {
      path: '/',
      name: 'index',
      component: IndexView
    }
  ]
})

export default router
