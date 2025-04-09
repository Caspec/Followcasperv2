<template>
  <section class="about-me container text-center my-5">
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
          happens in a browser I find very interesting. That's what I'm best at, and that's what I'm
          passionate about. I am a smiling, welcoming person, happy to learn new things, and to pass
          on my knowledge. I am respectful in my dealings with other people.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import profileImageSrc from '@/assets/me.png';

const profileImage = ref(profileImageSrc);
</script>

<style scoped>
.profile-img {
  transition: 0.3s ease-in-out;
}

.profile-img:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}
</style>
