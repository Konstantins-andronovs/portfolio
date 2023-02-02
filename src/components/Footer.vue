<script setup lang="ts">
import { ref } from 'vue'

// defineProps<{ msg: string }>()
const menus = [
  { name: "About", link: "" },
  { name: "Experience", link: "" },
  { name: "Work", link: "" },
  { name: "Contact", link: "" },
]
const count = ref(0)
</script>

<template>
  <div class="flex flex-col justify-center items-center min-h-16 p-3.5 text-center">
    <div v-if=false class="w-full max-w-72 mb-2.5">a</div>
    <div>
      <span class="text-gray-500">
        Designed & Build by Konstantins Andronovs
      </span>
    </div>
  </div>
</template>

<style scoped>

</style>
