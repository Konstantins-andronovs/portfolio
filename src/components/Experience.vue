<script setup lang="ts">
import { ref } from 'vue'

const exps = [
  { title: "Fintech Solutions", description: "Development of various bank and heavy transactions dependant systems.", icon: 'bar-chart-2' },
  { title: "Media Streaming Services", description: "Modern solutions for media streaming portal.", icon: 'play' },
  { title: "Full Development Lifecycle", description: "Application development from Requirements definition to Evaluation.", icon: 'refresh-cw'  },
  { title: "Cloud management", description: "Cloud infrastructure design and support ", icon: 'cloud'  },
  { title: "IoT Applications", description: "Embedded development and integration.", icon: 'wifi'  },
  { title: "Mentoring", description: "Team leading, influencing personal and professional growth.", icon: 'book'  },
]
</script>

<template>
  <section id="experience" class="py-24">
    <h2 class="numbered-heading text-4xl font-semibold leading-tight capitalize pb-20">Experience</h2>
    <div class="flex flex-wrap justify-center gap-10">
      <div v-for="exp in exps"
        class="max-w-full w-72 p-6 border border-gray-300 rounded-lg shadow">
        <vue-feather class="w-10 h-10 mb-2 text-black dark:text-gray-400" :type="exp.icon"></vue-feather>
        <h5 class="mb-2 text-2xl font-semibold tracking-tight">{{ exp.title}}
        </h5>
        <p class="mb-3 font-normal text-black">{{ exp.description }}</p>
      </div>
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
