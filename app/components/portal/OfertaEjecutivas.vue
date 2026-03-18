<template>
  <section class="py-24 bg-white">
    <div
      class="container mx-auto grid gap-12 lg:grid-cols-2 items-center"
    >
      <!-- Contenido -->
      <div>
        <h2 class="text-4xl font-bold mb-6">
          Licenciaturas Ejecutivas
        </h2>

        <p class="text-lg text-muted-foreground mb-8 max-w-xl">
          Programas diseñados para quienes trabajan y desean continuar con su
          formación profesional, con horarios flexibles y modalidades
          adaptadas a tu ritmo de vida.
        </p>

        <ul class="mb-8 space-y-3 text-sm">
          <li class="flex items-center gap-2">
            <span class="text-primary">✓</span> Horarios flexibles
          </li>
          <li class="flex items-center gap-2">
            <span class="text-primary">✓</span> Modalidad ejecutiva
          </li>
          <li class="flex items-center gap-2">
            <span class="text-primary">✓</span> Acompañamiento académico
          </li>
        </ul>

        <div class="flex flex-wrap gap-4">
          <a
            href="https://universidad.uninter.edu.mx/ejecutivas"
            class="btn-primary"
          >
            Ver programas
          </a>

          <a
            href="/contacto"
            class="btn-outline"
          >
            Solicitar información
          </a>
        </div>
      </div>

      <!-- Imagen -->
      <div class="relative">
        <img
          src="/images/oferta/ejecutivas.jpg"
          alt="Licenciaturas Ejecutivas UNINTER"
          class="rounded-2xl shadow-lg w-full object-cover"
        />

        <!-- Etiqueta -->
        <div
          class="absolute top-4 right-4 bg-secondary text-white px-4 py-2 rounded-lg text-sm font-semibold"
        >
          Modalidad Ejecutiva
        </div>
      </div>
    </div>
  </section>
</template>
