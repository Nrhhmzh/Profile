<template>
  <div class="bg-[#111827] min-h-screen">
    <NavBar />
    <HeroSection />
  </div>
</template>

<script setup>
  import { defineAsyncComponent } from "vue";
  // Import Components Asynchronously
  const NavBar = defineAsyncComponent(()=>import('@/components/NavBar.vue'));
  const HeroSection = defineAsyncComponent(()=>import('@/components/HeroSection.vue'));
</script>