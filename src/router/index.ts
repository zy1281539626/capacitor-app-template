import { createRouter, createWebHistory } from '@ionic/vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/home/index.vue')
    },
    {
      path: '/user',
      name: 'user',
      component: () => import('@/views/user/index.vue')
    }
  ]
})

export default router
