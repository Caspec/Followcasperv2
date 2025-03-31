<template>
  <div class="game-container mt-5">
    <div class="my-5">
      <router-link
        :to="{
          path: '/games',
          query: $route.query,
        }"
        class="go-back-arrow"
      >
        <i class="bi bi-arrow-left"></i> Go Back to Games List
      </router-link>
    </div>
    <ConfettiExplosion
      v-if="isConfettiVisible"
      :duration="5000"
      :angle="90"
      :particles="100"
      :fadeOut="true"
    />
    <h2>Guess the Number</h2>
    <p>Pick a number between 1 and {{ maxNumber }}:</p>
    <div class="game-content text-center">
      <label for="difficulty">Select Difficulty:</label>
      <select
        class="form-select mb-3 w-100 mx-auto text-center"
        v-model="difficulty"
        @change="resetGame"
      >
        <option value="easy">Easy (1-10)</option>
        <option value="medium">Medium (1-50)</option>
        <option value="hard">Hard (1-100)</option>
      </select>

      <input
        type="number"
        class="form-control w-100 mx-auto text-center"
        v-model="guess"
        @keyup.enter="checkGuess"
        :min="1"
        :max="maxNumber"
        placeholder="Enter your guess"
      />
      <button class="btn btn-success my-3" @click="checkGuess">Guess</button>

      <p v-if="message" class="fw-bold fs-4">{{ message }}</p>
      <p>Attempts: {{ attempts }}</p>

      <button class="btn btn-primary" v-if="gameOver" @click="resetGame">Play Again</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import ConfettiExplosion from 'vue-confetti-explosion';

const secretNumber = ref<number | null>(null);
const guess = ref<number | null>(null);
const message = ref('');
const attempts = ref(0);
const gameOver = ref(false);
const isConfettiVisible = ref(false);
const difficulty = ref<'easy' | 'medium' | 'hard'>('easy');

const maxNumber = computed(() => {
  return difficulty.value === 'easy' ? 10 : difficulty.value === 'medium' ? 50 : 100;
});

function generateRandomNumber() {
  const max = maxNumber.value;
  return Math.floor(Math.random() * max) + 1;
}

// Does not work in composables DRY
const disableScroll = () => {
  document.body.style.position = 'fixed';
  document.body.style.top = `-${window.scrollY}px`;
  document.body.style.left = '0';
  document.body.style.width = '100%';
};

const enableScroll = () => {
  const scrollY = document.body.style.top;
  document.body.style.position = '';
  document.body.style.top = '';
  window.scrollTo(0, parseInt(scrollY || '0') * -1);
};

const checkGuess = () => {
  if (guess.value === null || secretNumber.value === null) {
    return;
  }

  attempts.value++;

  if (Math.abs(guess.value - secretNumber.value) <= 2 && guess.value !== secretNumber.value) {
    message.value = 'Very close! Just a tiny bit off! 😲';
  } else if (guess.value < secretNumber.value) {
    message.value = 'Too low! Try higher 🚀';
  } else if (guess.value > secretNumber.value) {
    message.value = 'Too high! Aim lower ⬇️';
  } else {
    disableScroll();
    isConfettiVisible.value = true;

    setTimeout(() => {
      isConfettiVisible.value = false;
      enableScroll();
    }, 4000);

    message.value = `Correct! 🎉 The number was ${secretNumber.value}`;
    gameOver.value = true;
  }
};

onMounted(() => {
  secretNumber.value = generateRandomNumber();
});

const resetGame = () => {
  secretNumber.value = generateRandomNumber();
  guess.value = null;
  message.value = '';
  attempts.value = 0;
  gameOver.value = false;
};
</script>

<style scoped>
@media (min-width: 768px) {
  .game-content {
    width: 50%;
  }
}
@media (max-width: 768px) {
  .game-content {
    width: 100%;
  }
}
</style>
