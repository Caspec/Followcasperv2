<template>
  <div>
    <!-- Hero image credit: <a href="http://www.freepik.com">Designed by starline / Freepik</a> -->
    <header id="home" class="hero d-flex align-items-center text-center text-white">
      <div class="container">
        <h1 class="display-3 fw-bold">
          Hey, I'm <span class="text-primary">{{ name }}</span>
        </h1>
        <h4>Frontend and Full Stack Developer | Vue, Typescript, Angular, Laravel and Go</h4>
        <p class="lead">
          I create high-performance web applications using modern JavaScript frameworks.
        </p>
        <p class="lead text-warning fw-semibold">🚀 Open to new opportunities!</p>
        <a href="#contact" class="btn btn-primary me-2">Let's talk</a>
      </div>
      <div></div>
    </header>

    <WorkExperience id="work" />

    <AboutMe id="about" />

    <section id="fun-facts" class="fun-facts container my-5 text-center">
      <h2 class="mb-4">Fun Facts About Me</h2>
      <div class="row g-4">
        <div class="col-md-6 col-lg-4" v-for="(fact, index) in funFacts" :key="index">
          <div class="card h-100 p-3">
            <h5 class="text-center fw-bold flex-shrink-0">{{ fact.title }}</h5>
            <p class="flex-grow-1 d-flex align-items-center">{{ fact.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <section id="skills" class="py-5 bg-light">
      <div class="container text-center">
        <h2 class="mb-4">Tech Stack</h2>
        <div class="row">
          <div class="col-sm-6 col-md-4 col-lg-3 mb-4" v-for="skill in skills" :key="skill.name">
            <div class="card p-3">
              <i :class="skill.icon" class="display-4 text-primary"></i>
              <h5 class="mt-3">{{ skill.name }}</h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import WorkExperience from '@/components/WorkExperience.vue';
import AboutMe from '@/components/AboutMe.vue';

import { funFacts } from '@/content/funFacts';
import { skills } from '@/content/skills';

const name = ref('Casper');
</script>

<style scoped>
@media (max-width: 768px) {
  .fun-facts .row {
    flex-direction: column;
    align-items: center;
  }
}

.hero {
  height: 90vh;
  background-image: url('../images/hero.jpg');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.7);
}

.card {
  transition: 0.3s ease-in-out;
  border-radius: 0 !important;
  border: 0px;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.fun-facts .card {
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #fff;
  padding: 20px;
  text-align: left;
  transition: 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.fun-facts h5 {
  min-height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.fun-facts p {
  font-size: 1rem;
  color: #555;
  flex-grow: 1;
  display: flex;
  align-items: center;
}
</style>
