<template>
  <div class="filter-info">
    <p class="">💡 Select categories below to filter blog posts</p>
  </div>
  <div class="tag-filter">
    <button
      v-for="tag in tags"
      :key="tag.tag"
      @click="toggleTag(tag.tag)"
      :class="{ 'active-tag': selectedTags.includes(tag.tag) }"
    >
      {{ tag.tag }} ({{ tag.count }})
    </button>
    <button class="btn btn-warning" v-if="selectedTags.length" @click="clearFilter">
      Clear Filter
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed, watch, nextTick } from 'vue';
import { useTagStore } from '@/stores/useTagStore';
import { useRoute, useRouter } from 'vue-router';

const props = defineProps({
  posts: {
    type: Array as () => Array<{ tags?: string[] }>,
    required: true,
  },
});

const store = useTagStore();
const route = useRoute();
const router = useRouter();
const selectedTags = computed(() => store.selectedTags);

// Compute available tags
const tags = computed(() => {
  const tagCounts: { [key: string]: number } = {};
  props.posts.forEach((post) => {
    post.tags?.forEach((tag) => {
      tagCounts[tag] = (tagCounts[tag] || 0) + 1;
    });
  });
  return Object.keys(tagCounts).map((tag) => ({ tag, count: tagCounts[tag] }));
});

// Toggle tag selection (add or remove it from the store)
const toggleTag = (tag: string) => {
  store.toggleTag(tag);
  syncURLWithTags();
};

// Clear all selected filters
const clearFilter = () => {
  store.clearTags();
  syncURLWithTags();
};

// Sync the URL query params with the selected tags
const syncURLWithTags = () => {
  const queryTags = selectedTags.value.length ? { tags: selectedTags.value.join(',') } : {};
  router.replace({ path: route.path, query: queryTags });
  nextTick(() => {
    router.replace({ path: route.path, query: queryTags });
  });
};

// Watch for changes in selectedTags and sync with the URL
watch(selectedTags, syncURLWithTags, { deep: true });
</script>

<style scoped>
@media (max-width: 768px) {
  .tag-filter {
    gap: 2px;
  }

  .tag-filter button {
    font-size: 13px !important;
    padding: 6px 10px !important;
    margin: 3px !important;
    line-height: 1.2;
    min-width: 65px;
  }

  .tag-filter button.btn-warning {
    font-size: 13px !important;
    padding: 6px 10px !important;
  }
}

.filter-info {
  background: #f8f9fa;
  border-radius: 5px;
  font-size: 14px;
  color: #555;
  margin-bottom: 10px;
}

.tag-filter {
  display: flex;
  gap: 1px;
  flex-wrap: wrap;
}

.tag-filter button {
  margin: 5px;
  padding: 12px 20px;
  background: #ffffff;
  color: #333;
  cursor: pointer;
  border: 1px solid #ddd;
  font-size: 16px;
  font-weight: 500;
  border-radius: 0px;
  transition:
    background 0.3s,
    color 0.3s,
    transform 0.2s;
}

.tag-filter button:hover {
  background: #f8f9fa;
}

.tag-filter button.active-tag {
  background: #007bff;
  color: white;
  border-color: #007bff;
  transform: scale(1.05);
}

.tag-filter button.btn-warning {
  background-color: #ffc107;
  color: #212529;
  border-color: #ffc107;
}

.tag-filter button.btn-warning:hover {
  background-color: #e0a800;
  border-color: #e0a800;
}
</style>
