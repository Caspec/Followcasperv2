<template>
  <div class="blog-container py-5">
    <div class="container py-3">
      <h1>Blog</h1>
      <div class="blog-content py-1">
        <p>
          Welcome to the blog! Here I share interesting articles, tips, and more. <br />
          Happy reading!
        </p>

        <BlogFilter :posts="posts" />

        <div class="my-3">
          <h3>Latest Posts</h3>
          <div v-for="post in filteredPosts" :key="post.id" class="post-section mt-3">
            <router-link :to="getPostLink(post.slug)" class="post-link">
              <div class="post-content">
                <h2>{{ post.title }}</h2>
                <p class="post-meta">
                  <span class="post-date">{{ post.date }} - </span>
                  <span class="reading-time">{{ getReadingTime(post.content) }} min read</span>
                </p>
                <p class="post-excerpt">
                  {{ truncateContent(post.content) }}
                </p>
                <button class="btn btn-primary">Read More</button>
                <div class="post-minor mt-4">
                  <p class="post-tags p-0 m-0">
                    <span v-for="tag in post.tags ?? []" :key="tag" class="badge bg-success mr-1">
                      {{ tag }}
                    </span>
                  </p>
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, watch, onMounted } from 'vue';
import { useTagStore } from '@/stores/useTagStore';
import { posts } from '@/content/posts';
import { useRoute } from 'vue-router';
import BlogFilter from '@/components/BlogFilter.vue';

const store = useTagStore();
const route = useRoute();

// Computed to access selected tags from the store
const selectedTags = computed(() => store.selectedTags);

// Sorted posts based on date
const sortedPosts = computed(() => {
  return [...posts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
});

// Filter posts based on selected tags
const filteredPosts = computed(() => {
  if (!selectedTags.value.length) return sortedPosts.value;
  return sortedPosts.value.filter((post) =>
    post.tags?.some((tag) => selectedTags.value.includes(tag)),
  );
});

// Generate a post link with the current query (preserving the filters)
const getPostLink = (slug: string) => {
  return { path: `/blog/${slug}`, query: route.query };
};

// On mount, load the tags from the URL if available
onMounted(() => {
  const queryTags = route.query.tags;
  if (queryTags) {
    const tagsFromURL = (queryTags as string).split(',');
    store.setTags(tagsFromURL);
  }
});

// Watch for changes in query parameters (for example, when navigating back from a post)
watch(
  () => route.query.tags,
  (newTags) => {
    if (newTags) {
      const tagsFromURL = (newTags as string).split(',');
      store.setTags(tagsFromURL);
    } else {
      store.clearTags();
    }
  },
  { immediate: true },
);

const truncateContent = (content: string): string => {
  return content.length > 100 ? content.substring(0, 100) + '...' : content;
};

const getReadingTime = (content: string): number => {
  const wordsPerMinute = 200;
  const words = content.split(/\s+/).length;
  return Math.max(1, Math.ceil(words / wordsPerMinute));
};
</script>

<style scoped>
.blog-container {
  background-color: #f8f9fa;
}

.blog-content h3 {
  color: #343a40;
}

.blog-container .container {
  max-width: 800px;
}

@media (max-width: 768px) {
  .blog-container .container {
    max-width: 100%;
  }

  .btn-primary {
    font-size: 14px !important;
    padding: 6px 10px !important;
    border-radius: 4px !important;
  }
}

.post-section {
  background-color: #fff;
  padding: 15px;
  margin-bottom: 30px;
  transition: 0.3s ease-in-out;
  border-radius: 0 !important;
  border: 1px solid #d6d3d7;
  cursor: pointer;
}

.post-section h2 {
  color: #007bff;
  font-size: 2rem;
}

.reading-time {
  font-size: 1rem;
  color: #6c757d;
}

.post-section .post-date {
  font-size: 1rem;
  color: #6c757d;
}

.post-section .post-excerpt {
  font-size: 1.1rem;
  color: #495057;
  margin-bottom: 15px;
}

.post-section:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.post-link {
  display: block;
  text-decoration: none;
  color: inherit;
}

.post-tags {
  font-style: italic;
  font-size: 12px;
  color: #333;
}
</style>
