<script setup lang="ts">
import Navbare from "@/components/navbar/Index.vue";
import HeroBanner from "@/components/LicPrese/HeroBanner.vue";
import History from "@/components/LicPrese/History.vue";
import EducativeOfert from "@/components/LicPrese/EducativeOfert.vue";
import OptionUninter from "~/components/LicPrese/OptionUninter.vue";
import DinamicSection from "~/components/LicPrese/DinamicSection.vue";

useHead({
  title: "Licenciaturas Presenciales | UNINTER",
});
</script>

<template>
  <div>
    <Navbare />
    <HeroBanner />
    <History />
    <EducativeOfert />
    <OptionUninter />
    <DinamicSection />
  </div>
</template>

<style scoped></style>
