import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import WorkExperience from '@/components/WorkExperience.vue';

describe('WorkExperience', () => {
  it('renders without crashing', async () => {
    const wrapper = mount(WorkExperience, {});

    expect(wrapper.exists()).toBe(true);
  });

  it('renders job titles correctly', () => {
    const wrapper = mount(WorkExperience);

    const jobTitles = wrapper.findAll('h4');
    expect(jobTitles.length).toBe(4);
  });
});
