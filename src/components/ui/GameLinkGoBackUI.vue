<template>
  <div class="my-5">
    <router-link
      :to="{
        path: '/games',
        query: route.query,
      }"
      class="go-back-arrow"
    >
      <i :class="icon" />{{ label }}
    </router-link>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute();

defineProps({
  label: {
    type: String,
    default: 'Go Back to Games List',
  },

  icon: {
    type: String,
    default: 'bi bi-arrow-left',
  },
});
</script>

<style scoped>
.go-back-arrow {
  display: inline-flex;
  align-items: center;
}
</style>
