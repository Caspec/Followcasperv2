import { ref } from 'vue';

type CellValue = 'X' | 'O' | null;

type Board = CellValue[];

type Difficulty = 'easy' | 'medium' | 'hard';

interface TicTacToeAIProps {
  cells: { value: Board };
  difficulty: { value: Difficulty };
}

export function useTicTacToeAI({ cells, difficulty }: TicTacToeAIProps) {
  const getAIMove = (): number | null => {
    const availableMoves = cells.value
      .map((cell, index) => (cell === null ? index : null))
      .filter((i): i is number => i !== null); // Type guard to ensure non-null values

    if (difficulty.value === 'easy') {
      return availableMoves[Math.floor(Math.random() * availableMoves.length)];
    }

    if (difficulty.value === 'medium') {
      for (const move of availableMoves) {
        cells.value[move] = 'O'; // Make the move for AI ('O')
        if (checkWinner() === 'O') {
          cells.value[move] = null; // Reset the move
          return move; // Return the winning move
        }
        cells.value[move] = null; // Reset the move if it wasn't a winning move
      }

      for (const move of availableMoves) {
        cells.value[move] = 'X'; // Make the move for the player ('X')
        if (checkWinner() === 'X') {
          cells.value[move] = null; // Reset the move
          return move; // Block the player by returning this move
        }
        cells.value[move] = null; // Reset the move if it doesn't result in the player winning
      }

      return availableMoves[Math.floor(Math.random() * availableMoves.length)];
    }

    if (difficulty.value === 'hard') {
      return getBestMove();
    }

    return availableMoves[Math.floor(Math.random() * availableMoves.length)];
  };

  const getBestMove = (): number | null => {
    let bestScore = -Infinity; // Initialize bestScore to the smallest possible number
    let bestMove: number | null = null;

    cells.value.forEach((cell, index) => {
      if (cell === null) {
        cells.value[index] = 'O'; // Simulate AI making a move
        const score = minimax(cells.value, 0, false); // Recursively calculate score for AI's move
        cells.value[index] = null; // Reset the move

        if (score > bestScore) {
          // If the score of this move is better than the current best score
          bestScore = score; // Update the best score
          bestMove = index; // Update the best move (the current move being evaluated)
        }
      }
    });

    return bestMove;
  };

  const minimax = (board: Board, depth: number, isMaximizing: boolean): number => {
    const result = checkWinner();
    if (result === 'O') return 10 - depth;
    if (result === 'X') return depth - 10;
    if (board.every((cell) => cell !== null)) return 0;

    if (isMaximizing) {
      let bestScore = -Infinity; // Initialize bestScore to the smallest possible number
      board.forEach((cell, index) => {
        if (cell === null) {
          board[index] = 'O';
          const score = minimax(board, depth + 1, false);
          board[index] = null;
          bestScore = Math.max(score, bestScore);
        }
      });
      return bestScore;
    } else {
      let bestScore = Infinity; // Initialize bestScore to the smallest possible number
      board.forEach((cell, index) => {
        if (cell === null) {
          board[index] = 'X';
          const score = minimax(board, depth + 1, true);
          board[index] = null;
          bestScore = Math.min(score, bestScore);
        }
      });
      return bestScore;
    }
  };

  const winningCells = ref<number[]>([]);
  const checkWinner = (): CellValue => {
    const winPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (const pattern of winPatterns) {
      const [a, b, c] = pattern;
      if (
        cells.value[a] &&
        cells.value[a] === cells.value[b] &&
        cells.value[a] === cells.value[c]
      ) {
        winningCells.value = [a, b, c];
        return cells.value[a];
      }
    }
    winningCells.value = [];
    return null;
  };

  return { getAIMove, checkWinner, winningCells };
}
