<script setup lang="ts">
import { ref } from 'vue'
import { onMounted } from 'vue'
import { initCarousels} from 'flowbite'

onMounted(() => {
  initCarousels();
})

const testimonials = [
  { author: "Sergejs Kizlo", link: "https://www.linkedin.com/in/sergejs-kizlo/", text: "Have you ever dreamed of a colleague that is perfect team player who cares and supports each team member, never is afraid of taking responsibility, can handle a lead role, loves to explain complicated things in  simple and clear words, and has passion and excitement over developing non-trivial things ? I have known Konstantin for more than four years. We worked together on different kinds of projects and I promise you that if you ever have a chance to work with Konstantin, you will not regret it, but instead will enjoy every collaboration with him" },
  { author: "Sergejs Rostovskyi", link: "https://www.linkedin.com/in/srostovskyi/", text: "It's pleasure to work with Konstantins both from professional point of view and the personal one. Konstantins is great team-player and i can fully rely on him, knowing his professional and personal qualities. Thank you for doing a great job and being an excellent colleague." },
];
</script>

<template>
  <section id="testimonials" class="py-24">
    <h2 class="numbered-heading text-4xl font-semibold leading-tight capitalize">Testimonials</h2>
    <div id="default-carousel" class="relative" data-carousel="static">
      <div class="relative h-96 overflow-hidden rounded-lgs">
        <div v-for="testimonial in testimonials" class="hidden duration-700 ease-in-out px-36 pt-16" data-carousel-item>
          <div class="flex flex-row">
            <h3 class="text-2xl font-semibold leading-tight capitalize align-center pr-2.5 pb-5">
              {{ testimonial.author }}
            </h3>
            <a :href="testimonial.link" lass="cursor-pointer text-gray-500 hover:text-teal-300">
              <vue-feather class="h-7" type="linkedin"></vue-feather>
            </a>
          </div>
          <div class="text-justify">
            {{ testimonial.text }}
          </div>
        </div>
      </div>
      <div class="absolute z-30 flex space-x-3 -translate-x-1/2 left-1/2">
        <button v-for="(testimonial, index) in testimonials" :key=index type="button" class="w-3 h-3 rounded-full"
          aria-current="false" :aria-label=index.toString :data-carousel-slide-to=index.toString></button>
      </div>
      <button type="button"
        class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev>
        <span
          class="inline-flex items-center justify-center w-8 h-8 rounded sm:w-10 sm:h-10 dark:bg-gray-800/30 text-gray-500 group-hover:text-black dark:group-hover:bg-gray-800/60 group-focus:ring-1 group-focus:ring-gray-300 dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg aria-hidden="true" class="w-5 h-5 sm:w-6 sm:h-6 dark:text-gray-800 text-inherit" fill="none"
            stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
          </svg>
          <span class="sr-only">Previous</span>
        </span>
      </button>
      <button type="button"
        class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next>
        <span
        class="inline-flex items-center justify-center w-8 h-8 rounded sm:w-10 sm:h-10 dark:bg-gray-800/30 text-gray-500 group-hover:text-black dark:group-hover:bg-gray-800/60 group-focus:ring-1 group-focus:ring-gray-300 dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg aria-hidden="true" class="w-5 h-5 sm:w-6 sm:h-6 dark:text-black  text-inherit" fill="none"
            stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
          <span class="sr-only">Next</span>
        </span>
      </button>
    </div>
  </section>
</template>

<style scoped>
.numbered-heading::before {
  position: relative;
  counter-increment: section 1;
  content: "0" counter(section) ".";
  margin-right: 10px;
  font-family: var(--font-mono);
  font-size: clamp(var(--fz-md), 3vw, var(--fz-xxl));
  font-weight: 400;
}

.numbered-heading {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  position: relative;
  margin: 10px 0px 40px;
  width: 100%;
  font-size: clamp(26px, 3vw, var(--fz-heading));
  white-space: nowrap;
}

.numbered-heading::after {
  content: "";
  display: block;
  position: relative;
  width: 100%;
  height: 1px;
  margin-left: 20px;
  background-color: var(--dark-slate);
}
</style>
