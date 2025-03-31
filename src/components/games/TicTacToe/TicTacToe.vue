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
    <div class="mt-5 text-center">
      <h2>Tic Tac Toe</h2>
      <Board :cells="cells" @cell-click="handleCellClick" />
      <p class="turn-indicator">
        {{
          winner ? `${winner} wins!` : isDraw ? "It's a draw!" : `Player ${currentPlayer}'s Turn`
        }}
      </p>
      <button class="btn btn-success" @click="resetGame">
        {{ winner ? 'Play again' : 'Reset' }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import Board from './TicTacToeBoard.vue';
import ConfettiExplosion from 'vue-confetti-explosion';

const cells = ref(Array(9).fill(null));
const currentPlayer = ref('X');
const winner = ref<string | null>(null);
const isDraw = computed(() => !winner.value && cells.value.every((cell) => cell !== null));
const isConfettiVisible = ref(false);

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

const checkWinner = () => {
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
    if (cells.value[a] && cells.value[a] === cells.value[b] && cells.value[a] === cells.value[c]) {
      return cells.value[a];
    }
  }
  return null;
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
      currentPlayer.value = currentPlayer.value === 'X' ? 'O' : 'X';
    }
  }
};

const resetGame = () => {
  cells.value = Array(9).fill(null);
  currentPlayer.value = 'X';
  winner.value = null;
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
