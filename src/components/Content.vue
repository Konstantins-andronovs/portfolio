<script setup lang="ts">
import { ref } from 'vue'
import Hero from './Hero.vue'
import About from './About.vue'
import Experience from './Experience.vue'
import Testimonials from './Testimonials.vue'
import Contact from './Contact.vue'
import Footer from './Footer.vue'
// defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <div id="content">
    <main class="px-24">
      <Hero />
      <About />
      <Experience />
      <Testimonials />
      <Contact />
    </main>
    <footer>
      <Footer />
    </footer>
  </div>
</template>

<style scoped>
main {
  counter-reset: section 0;
}
</style>
