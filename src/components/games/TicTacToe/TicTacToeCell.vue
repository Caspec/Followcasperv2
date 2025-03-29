<template>
  <div class="cell" @click="$emit('click')">{{ value }}</div>
</template>

<script setup lang="ts">
defineProps<{ value: string | null }>();
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
}
</style>
