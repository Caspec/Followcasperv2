import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import TicTacToeBoard from '../../games/TicTacToe/TicTacToeBoard.vue';

describe('TicTacToeBoard', () => {
  it('renders without crashing', async () => {
    const wrapper = mount(TicTacToeBoard, {
      props: {
        isWinning: false,
        value: null,
        cells: Array(9).fill(null),
        winningCells: [],
      },
    });

    expect(wrapper.exists()).toBe(true);
  });
});
