<template>
  <div class="position-absolute text-center" :style="style">
    {{ label }}
  </div>
</template>

<script setup lang="ts">
defineProps<{
  label: string;
  style: Record<string, string>;
}>();
</script>
