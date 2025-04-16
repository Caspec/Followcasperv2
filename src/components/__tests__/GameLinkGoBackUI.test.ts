import { describe, it, expect, vi } from 'vitest';
import { mount, RouterLinkStub } from '@vue/test-utils';
import GameLinkGoBackUI from '@/components/ui/GameLinkGoBackUI.vue';
import { useRoute } from 'vue-router';

// Mock the useRoute function to return a mock route with a query object
vi.mock('vue-router', () => {
  return {
    useRoute: vi.fn(),
  };
});

describe('GameLinkGoBackUI.vue', () => {
  it('mounts the component without crashing', () => {
    // Mocking the useRoute return value with query
    (useRoute as ReturnType<typeof vi.fn>).mockReturnValue({
      query: {}, // Empty query to avoid error
    });

    const wrapper = mount(GameLinkGoBackUI, {
      global: {
        stubs: {
          RouterLink: RouterLinkStub, // Mock RouterLink if used in the component
        },
      },
    });

    expect(wrapper.exists()).toBe(true);
  });
});
