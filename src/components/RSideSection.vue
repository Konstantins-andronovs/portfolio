<script setup lang="ts">
import { ref } from 'vue'
import CanvaTest from './CanvaTest.vue'

// defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <div class="absolute bg-transparent z-0 flex flex-col items-center relative after:content-[''] after:h-28 after:w-px after:bg-gray-500">
    <a class="cursor-pointer m-5 p-2.5 tracking-widest text-gray-500">konstantin.andronov@gmail.com</a>
  </div>
</template>

<style scoped>
a {
  writing-mode: vertical-rl;
  text-decoration: none;
  text-decoration-skip-ink: auto;
}
</style>
