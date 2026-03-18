<template>
  <section class="relative py-24 bg-primary text-white overflow-hidden">
    <!-- Fondo decorativo -->
    <div class="absolute inset-0 opacity-10">
      <div class="absolute -top-24 -left-24 w-96 h-96 bg-white rounded-full"></div>
      <div class="absolute -bottom-24 -right-24 w-96 h-96 bg-white rounded-full"></div>
    </div>

    <div class="relative container mx-auto text-center max-w-3xl">
      <h2 class="text-4xl md:text-5xl font-bold mb-6">
        ¿Listo para formar tu futuro?
      </h2>

      <p class="text-lg md:text-xl mb-10 text-white/90">
        Nuestro equipo está listo para brindarte la información que necesitas
        y acompañarte en el siguiente paso de tu formación académica.
      </p>

      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="/contacto"
          class="btn-secondary"
        >
          Solicita información
        </a>

        <a
          href="https://wa.me/521XXXXXXXXXX"
          target="_blank"
          rel="noopener"
          class="btn-outline border-white text-white hover:bg-white hover:text-primary"
        >
          Contáctanos por WhatsApp
        </a>
      </div>
    </div>
  </section>
</template>
