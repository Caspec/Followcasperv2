import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import TicTacToeCell from '../../games/TicTacToe/TicTacToeCell.vue';

describe('TicTacToeCell', () => {
  it('renders without crashing', async () => {
    const wrapper = mount(TicTacToeCell, {
      props: {
        isWinning: false,
        value: null,
      },
    });

    expect(wrapper.exists()).toBe(true);
  });
});
