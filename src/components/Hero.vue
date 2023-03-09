<script setup lang="ts">
import CanvaTest from './CanvaTest.vue'
</script>

<template>
  <section id="hero" class="min-h-screen flex flex-col">
    <div class="h-screen flex flex-row justify-between items-center">
      <div class="w-8/12 z-0">
        <h1 class="font-normal">Hi, my name is
        </h1>
        <h2 class="m-0 text-7xl font-semibold leading-tight mb-2.5">Konstantins Andronovs.
        </h2>
        <h3 class="text-7xl">I design and develop.
        </h3>
        <p>I’m a software architect specializing in building feature rich, high load
          systems.
        </p>
      </div>
      <div class="h-full w-4/12 z-0 pt-16 md:block hidden">
        <CanvaTest />
      </div>
    </div>
  </section>

</template>

<style scoped>
h1 {
    margin: 0px 0px 20px 4px;
    font-family: var(--font-mono);
}
.big-heading {
    margin: 0px;
    font-size: clamp(40px, 8vw, 80px);
}
h3 {
    margin-top: 5px;
    line-height: 0.9;
}
p {
    margin: 20px 0px 0px;
    max-width: 540px;
}
</style>
