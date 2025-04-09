<template>
  <footer id="contact" class="bg-dark text-center text-light py-3">
    <div>
      <h3>Let's Work Together</h3>
      <div class="mt-3">
        <a :href="linkedin" target="_blank" class="btn btn-light me-2">
          <i class="bi bi-linkedin"></i> LinkedIn
        </a>
        <a :href="github" target="_blank" class="btn btn-outline-light">
          <i class="bi bi-github"></i> GitHub
        </a>
      </div>
      <div class="mt-3">
        <button class="btn btn-success" @click="$emit('openContactModal')">✉️ Contact Me</button>
      </div>
    </div>
    <p class="mt-4">&copy; {{ new Date().getFullYear() }} | Built with Vue 3</p>
  </footer>
</template>

<script setup lang="ts">
const github = 'https://github.com/Caspec';
const linkedin = 'https://www.linkedin.com/in/casper-christensen88';
defineEmits(['openContactModal']);
</script>

<style scoped>
footer {
  background-color: #343a40;
  color: #fff;
  text-align: center;
  padding: 20px;
  margin-top: auto;
}

footer h3 {
  margin-bottom: 20px;
}

footer .btn {
  margin-right: 10px;
}

footer p {
  margin: 0;
}
</style>
