import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/404',
      name: '404',
      component: import('../views/NonExistentResource.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/404'
    }
  ]
})

export default router
