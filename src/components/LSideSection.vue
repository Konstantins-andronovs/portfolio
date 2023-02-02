<script setup lang="ts">
import { ref } from 'vue'

// defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <div class="flex flex-col items-center relative after:content-[''] after:h-28 after:w-px after:bg-black">
    <ul class="mb-5">
      <li class="mb-2.5">
        <a class="cursor-pointer p-5 text-gray-500" href="https://github.com/Konstantins-andronovs">
          <vue-feather class="text-inherit" type="github"></vue-feather>
        </a>
      </li>
      <li>
        <a class="cursor-pointer p-5 text-gray-500" href="https://www.linkedin.com/in/kandronovs/">
          <vue-feather class="text-inherit" type="linkedin"></vue-feather>
        </a>
      </li>
    </ul>
  </div>
</template>

<style scoped>
/* ul {
  list-style: none;
} */
</style>
