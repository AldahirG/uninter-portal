<template>
  <div class="calculator-page">
    <NavbarIndex />
    
    <!-- Hero Header / Intro for Calculator -->
    <header class="calc-hero">
      <div class="uninter-container">
        <h1 class="calc-hero__title">Calculadora de <em>Becas UNINTER</em></h1>
        <p class="calc-hero__desc">
          Descubre el apoyo económico que tenemos para ti. Ingresa tus datos y promedio escolar para simular tu colegiatura oficial al instante.
        </p>
      </div>
    </header>

    <main>
      <CareerAdmissionCTA />
    </main>

    <FloatingActions />
    <PortalFooter />
  </div>
</template>

<script setup lang="ts">
import NavbarIndex from "~/components/navbar/Index.vue";
import CareerAdmissionCTA from "~/components/degree/shared/CareerAdmissionCTA.vue";
import FloatingActions from "~/components/portal/FloatingActions.vue";
import PortalFooter from "~/components/layout/Footer.vue";

useHead({
  title: "Calculadora de Becas | Universidad Internacional - UNINTER",
  meta: [
    {
      name: "description",
      content: "Simula tu beca UNINTER en tiempo real. Ingresa tu promedio de secundaria, bachillerato o licenciatura para conocer tu tabulador oficial de pago."
    }
  ]
});
</script>

<style scoped>
.calculator-page {
  background-color: #f8fafc;
}

.calc-hero {
  background: linear-gradient(135deg, #0f3c61 0%, #071f33 100%);
  padding: 8rem 0 4rem; /* top padding to clear fixed navbar */
  color: #ffffff;
  text-align: center;
}

.uninter-container {
  max-width: 1250px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.calc-hero__title {
  font-family: var(--font-serif, Lora, Georgia, serif);
  font-size: clamp(2.2rem, 4vw, 3.2rem);
  font-weight: 800;
  margin: 0 0 1rem;
  line-height: 1.15;
}

.calc-hero__title em {
  font-style: italic;
  color: #fde68a; /* gold accent */
}

.calc-hero__desc {
  font-size: 1.15rem;
  color: #cbd5e1;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
}

/* Adjust CareerAdmissionCTA padding when embedded in this page */
:deep(.admission-section) {
  padding-top: 3rem !important; /* reduce top spacing since hero is above */
}
</style>
