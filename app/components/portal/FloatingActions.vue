<script setup lang="ts">
const waUrl = 'https://wa.me/5217776154241?text=Hola%20vengo%20de%20la%20p%C3%A1gina%20de%20Universidad%2C%20necesito%20m%C3%A1s%20informaci%C3%B3n%20%E2%9C%8C%EF%B8%8F.?text=Hola%2C%20me%20interesa%20informaci%C3%B3n%20sobre%20los%20programas%20de%20UNINTER'
</script>

<template>
  <!-- Removed bottom-right WhatsApp bubble in favor of right-side sidebar -->
</template>

<style scoped>
.fa-root {
  position: fixed;
  bottom: calc(1.75rem + env(safe-area-inset-bottom, 0px));
  right: 1.75rem;
  z-index: 9999;
}

.fa-btn {
  position: relative;
  display: flex; align-items: center; justify-content: center;
  width: 56px; height: 56px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  color: #fff;
  text-decoration: none;
  transition: transform .2s, filter .2s;
}
.fa-btn:hover { transform: scale(1.1); }

.fa-btn--wa { 
  background: #25D366; 
  box-shadow: 0 4px 16px rgba(37,211,102,.35); 
}

.fa-pulse {
  position: absolute;
  inset: -4px;
  border-radius: 50%;
  border: 2px solid rgba(37, 211, 102, 0.4);
  animation: fa-pulse 2.2s ease-out infinite;
  pointer-events: none;
}
@keyframes fa-pulse {
  0% { opacity: 1; transform: scale(1); }
  70% { opacity: 0; transform: scale(1.5); }
  100% { opacity: 0; }
}

@media (max-width: 640px) {
  .fa-root { right: 1.25rem; bottom: calc(1.25rem + env(safe-area-inset-bottom, 0px)); }
}
</style>