<template>
  <div class="availability-badge">
    🚀<span class="dot" aria-hidden="true"></span>
    <span class="lead text-warning fw-semibold">Focused on current role</span>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'OpenToWorkBadgeUI',
});
</script>

<style scoped>
.availability-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
  color: #28a745;
  font-size: 2rem;
}

.dot {
  width: 12px;
  height: 12px;
  background-color: #a30606;
  border-radius: 50%;
  animation: pulse 1.5s infinite ease-in-out;
}

@keyframes pulse {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.6);
    opacity: 0.6;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
</style>
