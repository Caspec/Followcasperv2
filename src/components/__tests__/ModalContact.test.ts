import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import ModalContact from '@/components/ModalContact.vue';

describe('ModalContact', () => {
  it('renders without crashing', async () => {
    const wrapper = mount(ModalContact, {});

    expect(wrapper.exists()).toBe(true);
  });
});
