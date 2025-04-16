import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import OpenToWorkBadge from '@/components/ui/OpenToWorkBadgeUI.vue';

describe('AvailabilityBadge.vue', () => {
  it('renders the correct message', () => {
    const wrapper = mount(OpenToWorkBadge);
    expect(wrapper.text()).toContain('Open to new opportunities!');
  });

  it('renders a green dot', () => {
    const dot = mount(OpenToWorkBadge).find('.dot');
    expect(dot.exists()).toBe(true);
  });
});
