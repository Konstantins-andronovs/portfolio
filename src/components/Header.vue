<script setup lang="ts">

const menus = [
  { name: "About", link: "#about" },
  { name: "Experience", link: "#experience" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
]

const moveToElement = (element) => {
  document.querySelector(element)!.scrollIntoView({ behavior: "smooth" });

}

</script>

<template>
  <nav class="w-full relative flex flex-row justify-between items-center bg-white dark:bg-gray-800">
    <span class="logo text-4xl"><a href="/">KA</a></span>
    <div class="flex menu-items items-center">
      <ol class="flex flex-row justify-between items-center">
        <li v-for="menuItem in menus" class="relative mx-2.5">
          <span @click="moveToElement(menuItem.link)" class="p-2.5">{{ menuItem.name }}</span>
        </li>
      </ol>
    </div>
  </nav>
</template>

<style scoped>
.logo {
  font-family: var(--font-mono);
}

li {
  counter-increment: item 1;
}

.menu-items span::before {
  content: "0" counter(item) ".";
  margin-right: 5px;
  font-family: var(--font-mono);
}
</style>
