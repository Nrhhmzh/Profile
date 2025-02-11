<template>
  <div class="bg-[#111827] min-h-screen">
    <NavBar />
    <HeroSection />
    <ServicesSection />
    <AboutSection />
    <ExperienceAndSkillsSection />
    <LatestProjectSection />
    <ContactSection />
  </div>
</template>

<script setup>
  import { defineAsyncComponent } from "vue";
  // Import Components Asynchronously
  const NavBar = defineAsyncComponent(()=>import('@/components/NavBar.vue'));
  const HeroSection = defineAsyncComponent(()=>import('@/components/HeroSection.vue'));
  const ServicesSection = defineAsyncComponent(()=>import('@/components/ServicesSection.vue'));
  const AboutSection = defineAsyncComponent(()=>import('@/components/AboutSection.vue'));
  const ExperienceAndSkillsSection = defineAsyncComponent(()=>import('@/components/ExperienceAndSkillsSection.vue'));
  const LatestProjectSection = defineAsyncComponent(()=>import('@/components/LatestProjectSection.vue'));
  const ContactSection = defineAsyncComponent(()=>import('@/components/ContactSection.vue'));
</script>