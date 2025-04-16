import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import PaginationUI from '@/components/ui/PaginationUI.vue';

describe('PaginationUI', () => {
  it('mounts without crashing', () => {
    const wrapper = mount(PaginationUI, {
      props: {
        totalPosts: 50,
        postsPerPage: 10,
        currentPage: 1,
      },
    });
    expect(wrapper.exists()).toBe(true);
  });

  it('highlights the current page button', () => {
    const wrapper = mount(PaginationUI, {
      props: {
        totalPosts: 50,
        postsPerPage: 10,
        currentPage: 3,
      },
    });

    const activeButton = wrapper.find('[data-testid="active-page"]');
    expect(activeButton.exists()).toBe(true);
    expect(activeButton.text()).toBe('3');
  });
});
