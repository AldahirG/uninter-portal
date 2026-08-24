<template>
  <div>
    <CareerHeroShowcase />
    <CareerOverview />
    <CareerSyllabus />
    <CareerCertifications />
    <CareerResearch />
  </div>
</template>

<script setup lang="ts">
import CareerHeroShowcase from "@/components/degree/lco/CareerHeroShowcase.vue";
import CareerOverview from "~/components/degree/lco/CareerOverview.vue";
import CareerSyllabus from "~/components/degree/lco/CareerSyllabus.vue";
import CareerCertifications from "~/components/degree/lco/CareerCertifications.vue";
import CareerResearch from "~/components/degree/lco/CareerResearch.vue";

useHead({
  title: "Comunicación | UNINTER",
});
</script>

<style></style>
