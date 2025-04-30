import { ref } from 'vue';
import { describe, it, expect } from 'vitest';
import { useTicTacToeAI } from '../../../composables/useTicTacToeAI';

type CellValue = 'X' | 'O' | null;

type Difficulty = 'easy' | 'medium' | 'hard';

// Utility function to mock cells and difficulty
const createGame = (cells: CellValue[], difficulty: Difficulty) => {
  const cellsRef = ref(cells);
  const difficultyRef = ref(difficulty);

  return useTicTacToeAI({
    cells: { value: cellsRef.value },
    difficulty: { value: difficultyRef.value },
  });
};

describe('useTicTacToeAI', () => {
  describe('getAIMove', () => {
    it('should return a move for easy difficulty', () => {
      const { getAIMove } = createGame(
        [null, null, null, null, null, null, null, null, null],
        'easy',
      );
      const move = getAIMove();
      expect(move).toBeTypeOf('number');
      expect(move).toBeGreaterThanOrEqual(0);
      expect(move).toBeLessThanOrEqual(8);
    });

    it('should return a blocking move on medium difficulty', () => {
      const { getAIMove } = createGame(
        ['X', 'X', null, null, null, null, null, null, null],
        'medium',
      );
      const move = getAIMove();
      expect(move).toBe(2);
    });

    it('should return the best move on hard difficulty', () => {
      const { getAIMove } = createGame(['X', 'X', 'O', 'O', null, null, null, null, null], 'hard');
      const move = getAIMove();
      expect(move).toBe(4);
    });
  });

  describe('checkWinner', () => {
    it('should return "O" as the winner when the AI wins', () => {
      const { checkWinner } = createGame(
        ['O', 'O', 'O', null, null, null, null, null, null],
        'easy',
      );
      const winner = checkWinner();
      expect(winner).toBe('O');
    });

    it('should return "X" as the winner when the player wins', () => {
      const { checkWinner } = createGame(
        ['X', 'X', 'X', null, null, null, null, null, null],
        'easy',
      );
      const winner = checkWinner();
      expect(winner).toBe('X');
    });

    it('should return null when there is no winner', () => {
      const { checkWinner } = createGame(['X', 'O', 'X', 'X', 'O', 'O', 'O', 'X', 'X'], 'easy');
      const winner = checkWinner();
      expect(winner).toBeNull();
    });
  });
});
