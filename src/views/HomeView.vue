<script setup>
import MainScreen from '../components/MainScreen.vue'
import TheHeader from '../components/TheHeader.vue'
import ErrorModal from '../components/ErrorModal.vue'
</script>

<template>
  <div class="wrapper">
    <error-modal />
    <main class="content">
      <TheHeader />
      <MainScreen />
    </main>
    <footer class="footer"></footer>
  </div>
</template>
