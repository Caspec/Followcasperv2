import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import ModalUI from '@/components/ui/ModalUI.vue';

describe('ModalUI', () => {
  it('renders the close button in header', () => {
    const wrapper = mount(ModalUI, {
      props: { isVisible: true },
    });
    expect(wrapper.find('.btn-close').exists()).toBe(true);
  });

  it('renders slot content in body', () => {
    const wrapper = mount(ModalUI, {
      props: { isVisible: true },
      slots: { default: 'Hello from slot' },
    });
    expect(wrapper.find('.modal-body').text()).toBe('Hello from slot');
  });

  it('emits close event when close button is clicked', async () => {
    const wrapper = mount(ModalUI, {
      props: { isVisible: true },
    });
    const closeBtn = wrapper.find('.btn-close');
    expect(closeBtn.exists()).toBe(true);
    await closeBtn.trigger('click');
    expect(wrapper.emitted('update:isVisible')).toBeTruthy();
  });
});
