<template>
  <div class="game-container mt-5">
    <div class="my-5">
      <router-link
        :to="{
          path: '/games',
          query: $route.query,
        }"
        class="go-back-arrow"
      >
        <i class="bi bi-arrow-left"></i> Go Back to Games List
      </router-link>
    </div>
    <ConfettiExplosion
      v-if="isConfettiVisible"
      :duration="5000"
      :angle="90"
      :particles="100"
      :fadeOut="true"
    />
    <div class="text-center">
      <h2 class="mb-3">Tic Tac Toe</h2>
      <label for="difficulty">Select AI Difficulty:</label>
      <select v-model="difficulty" class="form-select mb-3 w-100 mx-auto text-center">
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>
      <Board :cells="cells" :winningCells="winningCells" @cell-click="handleCellClick" />
      <p
        class="turn-indicator"
        :class="{
          x: currentPlayer === 'X' && !isDraw,
          o: currentPlayer === 'O' && !isDraw,
          draw: isDraw,
        }"
      >
        {{
          winner ? `${winner} wins!` : isDraw ? "It's a draw!" : `Player ${currentPlayer}'s Turn`
        }}
      </p>
      <button class="btn btn-success" @click="resetGame">
        {{ winner ? 'Play again' : isDraw ? 'Play again' : 'Reset' }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import Board from './TicTacToeBoard.vue';
import ConfettiExplosion from 'vue-confetti-explosion';
import { useTicTacToeAI } from '@/composables/useTicTacToeAI';

const cells = ref(Array(9).fill(null));
const currentPlayer = ref('X');
const winner = ref<string | null>(null);
const isDraw = computed(() => !winner.value && cells.value.every((cell) => cell !== null));
const isConfettiVisible = ref(false);
const difficulty = ref<'easy' | 'medium' | 'hard'>('medium');
const { getAIMove, checkWinner, winningCells } = useTicTacToeAI({ cells, difficulty });

// Does not work in composables DRY
const disableScroll = () => {
  document.body.style.position = 'fixed';
  document.body.style.top = `-${window.scrollY}px`;
  document.body.style.left = '0';
  document.body.style.width = '100%';
};

const enableScroll = () => {
  const scrollY = document.body.style.top;
  document.body.style.position = '';
  document.body.style.top = '';
  window.scrollTo(0, parseInt(scrollY || '0') * -1);
};

const handleCellClick = (index: number) => {
  if (!cells.value[index] && !winner.value) {
    cells.value[index] = currentPlayer.value;
    winner.value = checkWinner();
    if (winner.value) {
      disableScroll();
      isConfettiVisible.value = true;
      setTimeout(() => {
        isConfettiVisible.value = false;
        enableScroll();
      }, 4000);
    }

    if (!winner.value) {
      currentPlayer.value = 'O';
      setTimeout(() => {
        const aiMove = getAIMove();
        if (aiMove !== null) {
          cells.value[aiMove] = 'O';
          winner.value = checkWinner();
        }
        currentPlayer.value = 'X';
      }, 500);
    }
  }
};

const resetGame = () => {
  cells.value = Array(9).fill(null);
  currentPlayer.value = 'X';
  winner.value = null;
  winningCells.value = [];
};
</script>

<style scoped>
.winner-message {
  height: 24px;
  line-height: 24px;
  min-height: 24px;
}

.turn-indicator {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
  min-height: 24px;
}
</style>
