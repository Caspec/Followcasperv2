import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import { createRouter, createMemoryHistory } from 'vue-router';
import GuessTheNumber from '../../games/GuessTheNumber/GuessTheNumber.vue';

const router = createRouter({
  history: createMemoryHistory(),
  routes: [
    {
      path: '/games/guess-the-number',
      name: 'games/guess-the-number',
      component: GuessTheNumber,
    },
    {
      path: '/games',
      name: 'games',
      component: { template: '<div>Games List</div>' },
    },
  ],
});

describe('GuessTheNumber', () => {
  it('renders without crashing', async () => {
    router.push('/games/guess-the-number');
    await router.isReady();

    const wrapper = mount(GuessTheNumber, {
      global: {
        plugins: [router],
      },
    });

    expect(wrapper.exists()).toBe(true);
  });
});
