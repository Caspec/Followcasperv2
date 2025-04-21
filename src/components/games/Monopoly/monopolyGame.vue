<template>
  <div class="game-container mt-5">
    <GameBackLink label="Go Back to Games List" icon="bi bi-arrow-left" />
    <div
      class="monopoly-wrapper d-flex flex-column align-items-center justify-content-center text-center"
    >
      <h1 class="mb-4">🎲 Monopoly: First Step</h1>
      <p class="text-warning">This game is currently under construction.</p>

      <MonopolyBoard :spaces="boardSpaces" :playerPosition="playerPosition" />

      <MonopolyDice :value="dice" @rollDice="handleRoll" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import GameBackLink from '@/components/ui/GameLinkGoBackUI.vue';
import MonopolyBoard from '@/components/games/Monopoly/MonopolyBoard.vue';
import MonopolyDice from '@/components/games/Monopoly/MonopolyDice.vue';

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

const handleRoll = (value: number) => {
  dice.value = value;
  playerPosition.value = (playerPosition.value + value) % boardSpaces.length;
};
</script>
