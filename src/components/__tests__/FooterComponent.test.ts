import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import FooterComponent from '@/components/FooterComponent.vue';

describe('FooterComponent', () => {
  it('renders without crashing', async () => {
    const wrapper = mount(FooterComponent, {});

    expect(wrapper.exists()).toBe(true);
  });
});
