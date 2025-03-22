<template>
  <div class="blog-container py-5">
    <div class="container py-3">
      <h1>Blog</h1>
      <div class="blog-content py-1">
        <p>
          Welcome to the blog! Here I share interesting articles, tips, and more. <br />
          Happy reading!
        </p>
        <div class="filter-info mt-5">
          <p>💡Select a category below to filter blog posts</p>
        </div>
        <div class="tag-filter">
          <button
            v-for="tag in tags"
            :key="tag.tag"
            @click="filterByTag(tag.tag)"
            :class="{ 'active-tag': selectedTag === tag.tag }"
          >
            {{ tag.tag }} ({{ tag.count }})
          </button>
          <button class="btn btn-warning" v-if="selectedTag" @click="clearFilter">
            Clear Filter
          </button>
        </div>
        <div class="my-3">
          <h3>Latest Posts</h3>
          <div v-for="post in filteredPosts" :key="post.id" class="post-section mt-3">
            <router-link :to="`/blog/${post.slug}`" class="post-link">
              <div class="post-content">
                <h2>{{ post.title }}</h2>
                <p class="post-date">{{ post.date }}</p>
                <p class="post-excerpt">
                  {{ truncateContent(post.content) }}
                </p>
                <p class="post-author">Written by {{ post.author }}</p>
                <button class="btn btn-primary">Read More</button>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { posts } from '@/content/posts'

const selectedTag = ref<string | null>(null)

const sortedPosts = computed(() => {
  return [...posts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
})

const filteredPosts = computed(() => {
  if (!selectedTag.value) return sortedPosts.value
  return sortedPosts.value.filter(
    (post) => selectedTag.value && post.tags?.includes(selectedTag.value),
  )
})

const tags = computed(() => {
  const tagCounts: { [key: string]: number } = {}
  posts.forEach((post) => {
    post.tags?.forEach((tag) => {
      if (tagCounts[tag]) {
        tagCounts[tag]++
      } else {
        tagCounts[tag] = 1
      }
    })
  })
  return Object.keys(tagCounts).map((tag) => ({
    tag,
    count: tagCounts[tag],
  }))
})

const filterByTag = (tag: string) => {
  selectedTag.value = tag
}

const clearFilter = () => {
  selectedTag.value = null
}

const truncateContent = (content: string): string => {
  return content.length > 100 ? content.substring(0, 100) + '...' : content
}
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

.post-section .post-date {
  font-size: 1rem;
  color: #6c757d;
}

.post-section .post-excerpt {
  font-size: 1.1rem;
  color: #495057;
  margin-bottom: 15px;
}

.post-section .btn {
  padding: 10px 15px;
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

@media (max-width: 768px) {
  .blog-container .container {
    max-width: 100%;
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

.post-author {
  font-size: 14px;
  font-weight: bold;
  color: #333;
}
</style>
