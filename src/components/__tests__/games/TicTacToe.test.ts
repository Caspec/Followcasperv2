import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import { createRouter, createMemoryHistory } from 'vue-router';
import TicTacToe from '../../games/TicTacToe/TicTacToe.vue';

const router = createRouter({
  history: createMemoryHistory(),
  routes: [
    {
      path: '/games/tic-tac-toe',
      name: 'games/tic-tac-toe',
      component: TicTacToe,
    },
    {
      path: '/games',
      name: 'games',
      component: { template: '<div>Games List</div>' },
    },
  ],
});

describe('TicTacToe', () => {
  it('renders without crashing', async () => {
    router.push('/games/tic-tac-toe');
    await router.isReady();

    const wrapper = mount(TicTacToe, {
      global: {
        plugins: [router],
      },
    });

    expect(wrapper.exists()).toBe(true);
  });
});
