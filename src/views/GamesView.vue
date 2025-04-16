<template>
  <div class="games-container py-5">
    <div class="container py-3">
      <h1 class="games">🎮 Games</h1>
      <p class="games-intro">
        Welcome to the games section! Explore and play exciting games! <br />
        Happy gaming!
      </p>

      <div class="my-3">
        <div v-for="game in games" :key="game.id" class="games-section mt-3">
          <router-link :to="getGameLink(game.slug)" class="game-link">
            <div class="game-content">
              <h2>{{ game.title }}</h2>
              <p class="game-meta">
                <span class="game-date">{{ game.date }}</span>
              </p>
              <p class="game-description">
                {{ truncateDescription(game.description) }}
              </p>
              <button class="btn btn-primary">Play Now</button>
              <div class="game-tags mt-4">
                <p class="game-tags p-0 m-0">
                  <span v-for="tag in game.tags ?? []" :key="tag" class="badge bg-success me-1">
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
</template>

<script setup lang="ts">
import { games } from '@/content/games';
import { useRoute } from 'vue-router';

const route = useRoute();

// Generate a game link with the current query
const getGameLink = (slug: string) => {
  return { path: `/games/${slug}`, query: route.query };
};

const truncateDescription = (description: string): string => {
  return description.length > 100 ? description.substring(0, 100) + '...' : description;
};
</script>

<style scoped>
@media (max-width: 768px) {
  .games-container .container {
    max-width: 100%;
  }

  .btn-primary {
    font-size: 14px !important;
    padding: 6px 10px !important;
    border-radius: 4px !important;
  }
}

.games-container {
  background-color: #f8f9fa;
}

.games-container .container {
  max-width: 800px;
  min-height: 1000px;
}

.games-section {
  background-color: #fff;
  padding: 20px;
  margin-bottom: 30px;
  transition:
    transform 0.3s ease-in-out,
    box-shadow 0.3s ease-in-out;
  border-radius: 0 !important;
  border: 1px solid #d6d3d7;
  cursor: pointer;
  will-change: transform, box-shadow;
  box-shadow: 0 0 0 rgba(0, 0, 0, 0);
}

.games-section h2 {
  color: #007bff;
  font-size: 2rem;
}

.game-meta {
  font-size: 1rem;
  color: #6c757d;
}

.game-description {
  font-size: 1.1rem;
  color: #495057;
  margin-bottom: 15px;
}

.games-section:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.game-link {
  display: block;
  text-decoration: none;
  color: inherit;
}

.game-tags {
  font-style: italic;
  font-size: 12px;
  color: #333;
}
</style>
