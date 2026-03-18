<script setup>
const navItems = [
  { label: 'Universidad', href: '/' },
  { label: 'Bachillerato', href: 'https://bachillerato.uninter.edu.mx' },
  { label: 'Secundaria', href: 'https://secundaria.uninter.edu.mx' },
  { label: 'Posgrados', href: 'https://posgrados.uninter.edu.mx' },
  { label: 'Diplomados', href: 'https://diplomados.uninter.edu.mx' },
  { label: 'Idiomas', href: 'https://idiomas.uninter.edu.mx' },
]
</script>

<template>
  <nav class="hidden lg:flex gap-6">
    <a
      v-for="item in navItems"
      :key="item.label"
      :href="item.href"
      class="text-sm font-medium hover:text-primary transition"
    >
      {{ item.label }}
    </a>
  </nav>
</template>
