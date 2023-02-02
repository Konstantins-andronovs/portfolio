<script setup lang="ts">
</script>

<template>
  <section id="contact" class="py-32 mx-auto mb-12 text-center flex flex-col justify-center items-center">
    <h2 class="numbered-heading overline">What’s Next?</h2>
    <h2 class="text-4xl font-semibold leading-tight capitalize mb-5">Get in Touch</h2>
    <p class="px-16">I’m always open for any new opportunities and challenges. Whether you have a question or just want to say hi,
      I’ll try my best to get back to you!</p>
    <a class="text-gray-800 bg-transparent border rounded border-solid border-gray-800 px-7 py-5 mt-12 pointer"
      href="mailto:konstantin.andronov@gmail.com">
      Get in touch
    </a>
  </section>
</template>

<style scoped>
.numbered-heading {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  position: relative;
  margin: 10px 0px 40px;
  width: 100%;
  font-size: clamp(26px, 5vw, var(--fz-heading));
  white-space: nowrap;
}

.numbered-heading::before {
  position: relative;
  counter-increment: section 1;
  content: "0" counter(section) ".";
  margin-right: 10px;
  font-family: var(--font-mono);
  font-size: clamp(var(--fz-md), 3vw, var(--fz-xl));
  font-weight: 400;
}
.overline {
  text-decoration-line: none;
  display: block;
  margin-bottom: 20px;
  font-family: var(--font-mono);
  font-size: var(--fz-xxl);
  font-weight: 400;
}
</style>
