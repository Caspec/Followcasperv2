<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-success fixed-top w-100">
      <div class="container-fluid">
        <router-link class="nav-link" to="/" @click="scrollToTop">
          <a class="navbar-brand fs-4 fw-bold px-2">FollowCasper</a>
        </router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          @click="isMenuOpen = !isMenuOpen"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          :class="['collapse', 'navbar-collapse', 'justify-content-end', { show: isMenuOpen }]"
          id="navbarNav"
        >
          <ul class="navbar-nav px-2">
            <li class="nav-item">
              <router-link class="nav-link" to="/" @click="scrollToTop">Home</router-link>
            </li>
            <li class="nav-item" :class="{ 'disabled-link': !isHomePage }">
              <a class="nav-link" href="#work" :aria-disabled="isHomePage ? 'true' : 'false'"
                >Work</a
              >
            </li>
            <li class="nav-item" :class="{ 'disabled-link': !isHomePage }">
              <a class="nav-link" href="#about" :aria-disabled="isHomePage ? 'true' : 'false'"
                >About</a
              >
            </li>
            <li class="nav-item" :class="{ 'disabled-link': !isHomePage }">
              <a class="nav-link" href="#contact" :aria-disabled="isHomePage ? 'true' : 'false'"
                >Contact</a
              >
            </li>

            <li class="nav-item">
              <router-link class="nav-link" to="/blog">Blog</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div :class="['default', isHomePage ? 'full-width' : 'container']">
      <router-view></router-view>
    </div>

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
          <button class="btn btn-success" @click="showContactModal = true">✉️ Contact Me</button>
        </div>
      </div>
      <p class="mt-4">&copy; {{ new Date().getFullYear() }} | Built with Vue 3</p>
    </footer>
    <ContactModal :isVisible="showContactModal" @update:isVisible="showContactModal = $event" />
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import ContactModal from '@/components/ModalContact.vue'

const github = ref('https://github.com/Caspec')
const linkedin = ref('https://www.linkedin.com/in/casper-christensen88')

const route = useRoute()
const isMenuOpen = ref(false)
const showContactModal = ref(false)

const isHomePage = computed(() => route.path === '/')

const scrollToTop = (event: MouseEvent) => {
  event.preventDefault()
  window.scrollTo(0, 0)
  isMenuOpen.value = false
}

watch(route, () => {
  isMenuOpen.value = false
})
</script>

<style scoped>
html,
body {
  height: 100%;
  margin: 0;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.default {
  width: 100%;
}

.default.full-width {
  width: 100%;
}

.default.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding-left: 15px;
  padding-right: 15px;
}

.container-fluid {
  width: 100%;
  padding: 0;
}

.disabled-link .nav-link {
  pointer-events: none;
  opacity: 0.5;
}

.disabled-link .nav-link[aria-disabled='true'] {
  cursor: not-allowed;
}

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

@media (max-width: 768px) {
  .default.container {
    max-width: 100%;
  }
}
</style>
