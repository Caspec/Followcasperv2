<template>
  <div class="text-center">
    <button class="btn btn-success" @click="roll">🎲 Roll Dice</button>
    <p class="mt-3">
      Dice: <strong>{{ value }}</strong>
    </p>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  (e: 'rollDice', value: number): void;
}>();

defineProps<{
  value: number;
}>();

const roll = () => {
  const rollDice = Math.floor(Math.random() * 6) + 1;
  emit('rollDice', rollDice);
};
</script>
