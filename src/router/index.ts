import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue'),
    },
    {
      path: '/blog',
      name: 'blog',
      component: () => import('@/views/BlogView.vue'),
    },
  ],
})

router.beforeEach((to, from, next) => {
  if (to.hash) {
    window.history.replaceState({ ...history.state }, '', to.path)
  }
  if (to.path === '/blog') {
    setTimeout(() => {
      window.scrollTo(0, 0)
    }, 0)
  }
  next()
})

export default router
