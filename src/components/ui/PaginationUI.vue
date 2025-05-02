<template>
  <div class="pagination-container">
    <p class="pagination-info">Page {{ currentPage }} of {{ totalPages }}</p>
    <nav>
      <ul class="pagination">
        <li class="page-item" :class="{ disabled: currentPage === 1 }">
          <button class="page-link" @click="changePage(currentPage - 1)">Previous</button>
        </li>

        <li
          v-for="page in totalPages"
          :key="page"
          class="page-item"
          :class="{ active: currentPage === page }"
          :data-testid="page === currentPage ? 'active-page' : ''"
        >
          <button class="page-link" @click="changePage(page)">{{ page }}</button>
        </li>

        <li class="page-item" :class="{ disabled: currentPage === totalPages }">
          <button class="page-link" @click="changePage(currentPage + 1)">Next</button>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
defineOptions({
  name: 'PaginationUI',
});

const props = defineProps({
  totalPosts: {
    type: Number,
    required: true,
  },
  postsPerPage: {
    type: Number,
    required: true,
  },
  currentPage: {
    type: Number,
    required: true,
  },
});

const totalPages = computed(() => Math.ceil(props.totalPosts / props.postsPerPage));

const emits = defineEmits({
  'update:currentPage': (page: number) => typeof page === 'number',
});

const changePage = (page: number) => {
  if (page >= 1 && page <= totalPages.value) {
    emits('update:currentPage', page);
  }
};
</script>

<style scoped>
@media (max-width: 600px) {
  .page-link {
    padding: 6px 10px;
    font-size: 14px;
  }
}

.pagination-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  text-align: center;
}

.pagination-info {
  margin-bottom: 10px;
  font-size: 16px;
  font-weight: 500;
  color: #555;
}

.pagination {
  display: flex;
  gap: 6px;
  padding: 0;
  list-style: none;
}

.page-link {
  padding: 8px 14px;
  font-size: 16px;
  font-weight: 500;
  border: 1px solid #ddd;
  border-radius: 5px;
  background: #fff;
  color: #333;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}

.page-item.active .page-link {
  background: #007bff;
  color: white;
  border-color: #007bff;
}

.page-link:hover {
  background: #f1f1f1;
}

.page-item.disabled .page-link {
  opacity: 0.5;
  pointer-events: none;
}
</style>
