<script setup lang="ts">
import Layout from './components/Layout.vue'
import { onMounted } from 'vue'

import {
  initAccordions,
  initCarousels,
  initCollapses,
  initDials,
  initDismisses,
  initDrawers,
  initDropdowns,
  initModals,
  initPopovers,
  initTabs,
  initTooltips
} from 'flowbite'

onMounted(() => {
  initAccordions();
  initCarousels();
  initCollapses();
  initDials();
  initDismisses();
  initDrawers();
  initDropdowns();
  initModals();
  initPopovers();
  initTabs();
  initTooltips();
})


</script>

<template>
  <div class="flex flex-col min-h-screen">
    <Layout />
  </div>
</template>

<style scoped>

</style>
