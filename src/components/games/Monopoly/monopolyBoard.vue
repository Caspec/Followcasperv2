<template>
  <div class="board d-flex justify-content-center align-items-center position-relative mb-4">
    <MonopolyTile
      v-for="(space, index) in spaces"
      :key="index"
      :label="space"
      :style="getSpaceStyle(index, spaces.length)"
    />

    <div
      class="player position-absolute bg-primary text-white rounded-circle"
      :style="getSpaceStyle(playerPosition, spaces.length)"
    >
      🧍
    </div>
  </div>
</template>

<script setup lang="ts">
import MonopolyTile from './MonopolyTile.vue';

defineProps<{
  spaces: string[];
  playerPosition: number;
}>();

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
