<template>
  <div class="blog-container py-5">
    <div class="container py-3">
      <div class="mb-2">
        <router-link
          :to="{
            path: '/blog',
            query: $route.query,
          }"
          class="go-back-arrow"
        >
          <i class="bi bi-arrow-left"></i> Go Back to Blog List
        </router-link>
      </div>

      <div v-if="post">
        <h1>{{ post.title }}</h1>
        <div class="blog-content py-1">
          <p>{{ post.date }}</p>
          <div>{{ post.content }}</div>
        </div>
      </div>

      <div v-else>
        <p>Post not found</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { posts } from '@/content/posts';

type Post = {
  id: number;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  slug: string;
  author?: string;
  tags?: string[];
};

const props = defineProps({
  slug: {
    type: String,
    required: true,
  },
});

const post = ref<Post | null>(null);

onMounted(() => {
  const foundPost = posts.find((p) => p.slug === props.slug);
  post.value = foundPost || null;
});
</script>

<style scoped>
.go-back-arrow {
  display: inline-flex;
  align-items: center;
  font-size: 18px;
  color: #007bff;
  text-decoration: none;
  margin-top: 10px;
}

.go-back-arrow i {
  margin-right: 5px;
}

.go-back-arrow:hover {
  text-decoration: underline;
}
</style>
