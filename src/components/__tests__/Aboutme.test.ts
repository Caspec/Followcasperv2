import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import AboutMe from '@/components/AboutMe.vue';

describe('Aboutme', () => {
  it('mounts without crashing', () => {
    const wrapper = mount(AboutMe, {});
    expect(wrapper.exists()).toBe(true);
  });

  it('highlights the current page button', () => {
    const wrapper = mount(AboutMe, {});
    const images = wrapper.findAll('.profile-img.d-block.mx-auto');
    expect(images.length).toBeGreaterThan(0);
  });

  it('renders the profile image with correct attributes', () => {
    const wrapper = mount(AboutMe);
    const img = wrapper.find('img');
    expect(img.exists()).toBe(true);
    expect(img.attributes('alt')).toBe('Profile');
    expect(img.attributes('src')).toContain('me.png');
  });

  it('renders the section heading', () => {
    const wrapper = mount(AboutMe);
    const heading = wrapper.find('h2');
    expect(heading.text()).toBe('About Me');
  });
});
