<template>
  <ModalUI :isVisible="isVisible" @update:isVisible="isVisible = $event">
    <div>
      <h5 class="modal-title">Contact Me</h5>
      <p>Click below to copy my email and send me a message.</p>

      <div class="mb-3">
        <label for="email" class="form-label">My Email</label>
        <input type="text" id="email" v-model="email" class="form-control" readonly />
      </div>

      <button @click="copyToClipboard" class="btn btn-success">Copy Email</button>

      <p v-if="emailCopied" class="mt-3 text-success">
        Email address copied to clipboard! You can now paste it into your email client.
      </p>
    </div>
  </ModalUI>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ModalUI from './ui/ModalUI.vue'

const isVisible = ref(false)
const email = ref('casper.emde.christensen@gmail.com')
const emailCopied = ref(false)

const copyToClipboard = async () => {
  try {
    await navigator.clipboard.writeText(email.value)
    emailCopied.value = true
    setTimeout(() => {
      emailCopied.value = false
    }, 3000)
  } catch (error) {
    console.error('Failed to copy email to clipboard', error)
  }
}
</script>

<style scoped>
.modal-content {
  padding: 20px;
  background-color: #fff;
  border-radius: 5px;
}

.form-label {
  font-weight: bold;
}

.text-success {
  color: green;
}
</style>
