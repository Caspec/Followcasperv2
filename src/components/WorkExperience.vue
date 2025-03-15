<template>
  <section id="experience" class="container py-5">
    <h2 class="text-center mb-5">🚀 Work</h2>
    <div class="row">
      <div v-for="(job, index) in jobs" :key="index" class="col-12 col-lg-6 mb-4">
        <div class="card shadow-sm p-4 h-100">
          <div class="d-flex align-items-center mb-3">
            <i :class="job.icon" class="display-6 text-primary me-3"></i>
            <div>
              <h4 class="mb-0">{{ job.title }}</h4>
              <small class="text-muted">{{ job.company }} ({{ job.year }})</small>
            </div>
          </div>
          <ul class="list-unstyled">
            <li v-for="(task, i) in job.tasks" :key="i">✅ {{ task }}</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const jobs = ref([
  {
    year: '2024-2025',
    title: 'Software Engineer',
    company: 'Andel A/S',
    icon: 'bi bi-layers',
    tasks: [
      'Developed system integrations in Go.',
      'Further developed Andel’s consumption database.',
      'Created consumption UI for better user insights.',
      'Worked with AWS, Azure, Docker & GitHub.',
      'Used Windows with WSL for development.',
      'Followed Scrum methodology with Azure DevOps.',
    ],
  },
  {
    year: '2021-2024',
    title: 'Frontend Developer',
    company: 'Andel A/S',
    icon: 'bi bi-braces',
    tasks: [
      'Built Vue frontend for Nemo billing system.',
      'Rewrote Blade templates to Vue components for improved UI.',
      'Developed Nemo debt collection system integration with Intrum.',
      'Worked on PHP Laravel backend: controllers, services, and API integrations.',
      'Implemented Jest unit tests (frontend) & Laravel tests (backend).',
      'Worked with Docker, GitHub, and AWS Cloud.',
      'Used Linux OS (Ubuntu, PopOS) in daily development.',
      'Collaborated in Scrum teams using Jira.',
    ],
  },
  {
    year: '2019-2021',
    title: 'Web Developer',
    company: 'AK Techotel A/S',
    icon: 'bi bi-box',
    tasks: [
      'Developed Online Booking 2020 system for 700+ hotels.',
      'Worked on frontend in JQuery & backend in .NET 4.8.',
      'Further developed Umbraco CMS-based booking systems.',
      'Enhanced hotel info screens in Picasso system.',
      'Built new Online Gift Cards feature using Umbraco CMS.',
    ],
  },
  {
    year: '2018-2019',
    title: 'Web Developer',
    company: 'Risma Systems A/S',
    icon: 'bi bi-box',
    tasks: [
      'Developed Risk Matrix feature in Vue.js.',
      'Upgraded License Manager Laravel framework (5.2 → 5.6).',
      'Worked with Vue and PHP Laravel on key projects.',
    ],
  },
])
</script>

<style scoped>
.card {
  transition: 0.3s ease-in-out;
  border-radius: 0 !important;
}
.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}
</style>
