<script setup lang="ts">
import { ref } from 'vue'
import Header from './Header.vue'
import LSideSection from './LSideSection.vue'
import RSideSection from './RSideSection.vue'
import Content from './Content.vue'

// defineProps<{  }>()

const count = ref(0)
</script>

<template>
  <header class="h-20 z-20 fixed w-full px-6 flex justify-between items-center bg-white">
    <Header />
  </header>
  <div class="h-screen">
    <Content />
  </div>
  <div class="fixed w-10 bottom-0 left-5 bg-transparent">
    <LSideSection />
  </div>
  <div class="fixed w-10 bottom-0 right-5  bg-transparent">
    <RSideSection />
  </div>
</template>

<style scoped>

</style>
