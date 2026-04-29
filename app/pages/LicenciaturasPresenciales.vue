<template>
  <div>
    <!-- Renderiza el Navbar -->
    <Navbare />

    <h1 class="text-4xl font-bold text-center mt-10">
      Licenciaturas Presenciales
    </h1>
    <p class="text-center mt-4 text-lg">
      Explora nuestras licenciaturas presenciales y encuentra la carrera ideal
      para ti.
    </p>

    <!-- Aquí puedes agregar una lista o tarjetas de las licenciaturas presenciales -->
    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 px-4"
    >
      <!-- Ejemplo de tarjeta de licenciatura -->
      <div class="bg-white rounded-lg shadow-md p-6">
        <h2 class="text-2xl font-semibold mb-2">
          Licenciatura en Administración
        </h2>
        <p class="text-gray-600 mb-4">
          Desarrolla habilidades en gestión empresarial, finanzas y recursos
          humanos.
        </p>
        <button
          class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Más información
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// ¡AQUÍ ESTÁ LA MAGIA! Tienes que importar el componente igual que en index.vue
import Navbare from "@/components/navbar/Index.vue";

// Opcional: Agregar el título de la pestaña
useHead({
  title: "Licenciaturas Presenciales | UNINTER",
});
</script>

<style scoped></style>
