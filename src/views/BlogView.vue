<template>
  <div class="blog-container py-5">
    <div class="container py-3">
      <h1>Blog</h1>
      <div class="blog-content py-1">
        <p>
          Welcome to the blog! Here I share interesting articles, tips, and more. <br />
          Happy reading!
        </p>
        <div class="my-5">
          <h3>Latest Posts</h3>
          <div v-for="post in sortedPosts" :key="post.id" class="post-section mt-3">
            <router-link :to="`/blog/${post.slug}`" class="post-link">
              <div class="post-content">
                <h2>{{ post.title }}</h2>
                <p class="post-date">{{ post.date }}</p>
                <p class="post-excerpt">
                  {{ truncateContent(post.content) }}
                </p>
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
import { ref, onMounted } from 'vue'
import type { Post } from '@/content/posts'
import { posts } from '@/content/posts'

const sortedPosts = ref<Post[]>([])

onMounted(() => {
  sortedPosts.value = posts.slice().sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })
})

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
</style>
