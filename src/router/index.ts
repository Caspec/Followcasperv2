import { createRouter, createWebHistory } from 'vue-router';

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
    {
      path: '/blog/:slug',
      name: 'blog-post',
      component: () => import('@/views/BlogPostView.vue'),
      props: true,
    },
    {
      path: '/games',
      name: 'games',
      component: () => import('@/views/GamesView.vue'),
    },
    {
      path: '/games/tic-tac-toe',
      name: 'games/tic-tac-toe',
      component: () => import('@/components/games/TicTacToe/TicTacToe.vue'),
    },
    {
      path: '/games/guess-the-number',
      name: 'games/guess-the-number',
      component: () => import('@/components/games/GuessTheNumber/GuessTheNumber.vue'),
    },
    {
      path: '/games/monopoly',
      name: 'games/monopoly',
      component: () => import('@/components/games/Monopoly/MonopolyGame.vue'),
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.hash) {
    window.history.replaceState({ ...history.state }, '', to.path);
  }
  if (to.path === '/blog' || to.path === '/games') {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
  }
  next();
});

export default router;
