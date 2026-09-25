<script setup lang="ts">
import Navbare from "@/components/navbar/Index.vue";
import HeroBanner from "~/components/prep-a/HeroBanner.vue";
import QueEsPrepA from "~/components/prep-a/QueEsPrepA.vue";
import PlanEstudiosPrepA from "~/components/prep-a/PlanEstudiosPrepA.vue";
import BeneficiosPrepA from "~/components/prep-a/BeneficiosPrepA.vue";
import FormRegister from "~/components/prep-a/FormRegister.vue";
import PortalFooter from "@/components/portal/Footer.vue";
import FloatingActions from "@/components/portal/FloatingActions.vue";

useHead({
  title: "Prepa Abierta | UNINTER",
  meta: [
    {
      name: "description",
      content:
        "Prepa Abierta UNINTER — Bachillerato flexible, semestres acelerados y calidad educativa internacional con más de 40 años de experiencia.",
    },
  ],
});
</script>

<template>
  <div>
    <!-- Menú de Navegación Fijo / Sticky del Layout -->
    <Navbare />

    <!-- Hero Banner Prepa Abierta -->
    <HeroBanner />

    <!-- Sección de Introducción: ¿Qué es la Prep-A? -->
    <QueEsPrepA />

    <!-- Sección de Plan de Estudios (22 Módulos & Ruta de 5 Niveles) -->
    <PlanEstudiosPrepA />

    <!-- Sección de Beneficios de Estudiar en PREP-A -->
    <BeneficiosPrepA />

    <!-- Formulario de Registro SuperLeads -->
    <FormRegister />

    <!-- Footer del Portal -->
    <PortalFooter />

    <!-- Acciones Flotantes (WhatsApp, etc.) -->
    <FloatingActions />
  </div>
</template>

<style scoped>
</style>
