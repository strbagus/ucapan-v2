import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/LandingPage.vue')
    },
    {
      path: '/write',
      name: 'write',
      component: () => import('@/views/HomeView.vue')
    },
    {
      path: '/message',
      name: 'message',
      component: () => import('@/views/MessageView.vue')
    }
  ]
})

export default router
