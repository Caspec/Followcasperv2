<template>
  <div class="board">
    <Cell
      v-for="(cell, index) in cells"
      :key="index"
      :value="cell"
      @click="() => $emit('cell-click', index)"
    />
  </div>
</template>

<script setup lang="ts">
import Cell from './TicTacToeCell.vue';
defineProps<{ cells: (string | null)[] }>();
</script>

<style scoped>
.board {
  display: grid;
  grid-template-columns: repeat(3, 100px);
  gap: 5px;
  justify-content: center;
  align-items: center;
}
</style>
