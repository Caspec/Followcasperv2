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
    <section id="about" class="about-me container text-center my-5">
      <div class="row align-items-center text-md-start text-center flex-lg-row flex-column">
        <div class="col-lg-4 col-md-12 text-center mb-4">
          <img :src="profileImage" alt="Profile" class="profile-img d-block mx-auto" />
        </div>
        <div class="col-lg-8 col-md-12">
          <h2 class="mb-4">About Me</h2>
          <p>
            Hello! I'm an experienced frontend developer specializing in Vue and Angular, with
            full-stack expertise in Laravel & Go. Passionate about creating
            <strong>fast, beautiful, and interactive web applications</strong> that provide seamless
            user experiences.
          </p>
          <p>
            My primary competencies are within frontend and full stack web development. For the last
            10 years, I have had a great interest in making websites and web applications. What
            happens in a browser I find very interesting. That's what I'm best at, and that's what
            I'm passionate about. I am a smiling, welcoming person, happy to learn new things, and
            to pass on my knowledge. I am respectful in my dealings with other people.
          </p>
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
import { ref } from 'vue'
import WorkExperience from '@/components/WorkExperience.vue'
import profileImageSrc from '@/assets/me.png'

const name = ref('Casper')
const profileImage = ref(profileImageSrc)

const skills = ref([
  { name: 'Vue', icon: 'bi bi-code-slash' },
  { name: 'Angular', icon: 'bi bi-box' },
  { name: 'JavaScript', icon: 'bi bi-braces-asterisk' },
  { name: 'TypeScript', icon: 'bi bi-braces' },
  { name: 'Laravel', icon: 'bi bi-layers' },
  { name: 'Go', icon: 'bi bi-globe' },
  { name: 'More...', icon: 'bi bi-three-dots' },
])
</script>

<style scoped>
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

.profile-img {
  transition: 0.3s ease-in-out;
}

.profile-img:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}
</style>
