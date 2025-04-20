<template>
  <div class="game-container mt-5">
    <GameBackLink label="Go Back to Games List" icon="bi bi-arrow-left" />

    <div
      class="monopoly-wrapper d-flex flex-column align-items-center justify-content-center text-center"
    >
      <h1 class="mb-4">🎲 Monopoly: First Step</h1>
      <p class="text-warning">This game is currently under construction.</p>

      <div class="board d-flex justify-content-center align-items-center position-relative mb-4">
        <div
          v-for="(space, index) in boardSpaces"
          :key="index"
          class="space position-absolute text-center"
          :style="getSpaceStyle(index, boardSpaces.length)"
        >
          {{ space }}
        </div>

        <div
          class="player position-absolute bg-primary text-white rounded-circle"
          :style="getSpaceStyle(playerPosition, boardSpaces.length)"
        >
          🧍
        </div>
      </div>

      <button class="btn btn-success" @click="rollDice">🎲 Roll Dice</button>
      <p class="mt-3">
        Dice: <strong>{{ dice }}</strong>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import GameBackLink from '@/components/ui/GameLinkGoBackUI.vue';

const boardSpaces = [
  'Space1',
  'Space2',
  'Space3',
  'Space4',
  'Space5',
  'Space6',
  'Space7',
  'Space8',
  'Space9',
  'Space10',
  'Space11',
  'Space12',
];
const playerPosition = ref(0);
const dice = ref(1);

const rollDice = () => {
  dice.value = Math.floor(Math.random() * 6) + 1;
  playerPosition.value = (playerPosition.value + dice.value) % boardSpaces.length;
};

const getSpaceStyle = (index: number, total: number) => {
  const angle = (360 / total) * index;
  const radius = 130;
  const x = 150 + radius * Math.cos((angle * Math.PI) / 180);
  const y = 150 + radius * Math.sin((angle * Math.PI) / 180);
  return {
    left: `${x}px`,
    top: `${y}px`,
    transform: 'translate(-50%, -50%)',
    width: '60px',
    height: '60px',
    lineHeight: '60px',
    borderRadius: '50%',
    backgroundColor: '#f8f9fa',
    border: '1px solid #ddd',
  };
};
</script>

<style scoped>
.board {
  width: 300px;
  height: 300px;
  border-radius: 50%;
  border: 4px solid #343a40;
  position: relative;
}

.player {
  width: 30px;
  height: 30px;
  line-height: 30px;
  font-size: 20px;
  text-align: center;
}
</style>
