<template>
  <div class="position-absolute text-center" :style="style">
    {{ label }}
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'MonopolyTile',
});
defineProps<{
  label: string;
  style: Record<string, string>;
}>();
</script>
