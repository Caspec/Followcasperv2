<template>
  <div
    v-if="localIsVisible"
    class="modal fade show"
    id="modalUI"
    tabindex="-1"
    aria-labelledby="modalUILabel"
    aria-hidden="true"
    style="display: block"
    @click.self="handleBackdropClick"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button
            type="button"
            class="btn-close"
            @click="closeModal"
            style="position: absolute; left: 10px"
          ></button>
        </div>

        <div class="modal-body">
          <slot></slot>
        </div>

        <div class="modal-footer">
          <button type="button" class="btn btn-primary" @click="closeModal">Close</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

const emit = defineEmits(['update:isVisible']);
const props = defineProps({
  isVisible: {
    type: Boolean,
    required: true,
  },
});

const localIsVisible = ref(props.isVisible);

const closeModal = () => {
  localIsVisible.value = false;
  emit('update:isVisible', false);
};

const handleBackdropClick = () => {
  closeModal();
};

watch(
  () => props.isVisible,
  (newVal) => {
    localIsVisible.value = newVal;
  },
);
</script>

<style scoped>
.modal {
  transition: opacity 0.3s ease;
}

.modal.show {
  display: block;
  opacity: 1;
}

.modal-dialog {
  max-width: 90%;
}

.modal-content {
  background-color: #fff;
  border-radius: 5px;
  padding: 20px;
}

.modal-header {
  border-bottom: 1px solid #dee2e6;
  position: relative;
}

.modal-footer {
  border-top: 0px;
}

.modal-body {
  padding: 20px;
  margin-bottom: 20px;
}

.btn-close {
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
}

@media (min-width: 768px) {
  .modal-dialog {
    max-width: 600px;
  }
}

@media (min-width: 1200px) {
  .modal-dialog {
    max-width: 1000px;
  }
}
</style>
