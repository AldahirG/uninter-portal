<template>
  <header class="border-b bg-white sticky top-0 z-50">
    <div class="container mx-auto flex items-center justify-between py-4">
      
      <!-- Logo -->
      <NuxtLink to="/" class="flex items-center gap-3">
        <img src="/images/logo-uninter.png" alt="UNINTER" class="h-10" />
      </NuxtLink>

      <!-- Navegación -->
      <MainNav />

      <!-- CTA -->
      <NuxtLink
        to="/contacto"
        class="hidden md:inline-flex btn-primary"
      >
        Contacto
      </NuxtLink>

    </div>
  </header>
</template>

<script setup>
import MainNav from './MainNav.vue'
</script>
