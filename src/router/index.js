import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MessageView from '../views/MessageView.vue'
import SecretView from '../views/SecretView.vue'
import LandingPage from '../views/LandingPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: LandingPage
    },
    {
      path: '/write',
      name: 'write',
      component: HomeView
    },
    {
      path: '/secret',
      name: 'secret',
      component: SecretView

    },
    {
      path: '/message',
      name: 'message',
      component: MessageView
    }
  ]
})

export default router
