import { mount } from '@vue/test-utils';
import { describe, it, expect, vi } from 'vitest';
import { createRouter, createMemoryHistory } from 'vue-router';
import BlogFilter from '@/components/BlogFilter.vue';

vi.mock('@/stores/useTagStore', () => {
  return {
    useTagStore: vi.fn(() => ({
      selectedTags: ['vue'],
      toggleTag: vi.fn(),
      clearTags: vi.fn(),
    })),
  };
});

describe('BlogFilter', () => {
  const router = createRouter({
    history: createMemoryHistory(),
    routes: [{ path: '/', component: { template: '<div />' } }],
  });

  it('renders without crashing', async () => {
    router.push('/');
    await router.isReady();

    const wrapper = mount(BlogFilter, {
      props: {
        posts: [{ tags: ['vue', 'js'] }, { tags: ['vue'] }, { tags: ['angular'] }],
      },
      global: {
        plugins: [router],
      },
    });

    expect(wrapper.exists()).toBe(true);
    expect(wrapper.text()).toContain('vue');
    expect(wrapper.text()).toContain('angular');
  });
});
