<template>
  <div
    class="cell"
    :class="{
      x: value === 'X',
      o: value === 'O',
      winning: isWinning,
    }"
    @click="$emit('click')"
  >
    {{ value }}
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'TicTacToeCell',
});
defineProps<{ value: string | null; isWinning: boolean }>();
</script>

<style scoped>
.cell {
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  border: 1px solid black;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.cell:hover {
  background-color: #f0f0f0;
}

.winning {
  animation: glow 1.5s ease-out infinite alternate;
  background-color: rgba(255, 223, 0, 0.7);
  box-shadow: 0 0 15px rgba(255, 223, 0, 1);
}

/* Glowing effect */
@keyframes glow {
  0% {
    box-shadow: 0 0 5px rgba(255, 223, 0, 0.5);
  }
  100% {
    box-shadow: 0 0 15px rgba(255, 223, 0, 1);
  }
}
</style>
