<script setup lang="ts">
import Navbare from "@/components/navbar/Index.vue";
import HeroBanner from "@/components/LicEjec/HeroBanner.vue";
import History from "@/components/LicEjec/History.vue";
import EducativeOfert from "@/components/LicEjec/EducativeOfert.vue";
import SchoolUninter from "@/components/LicEjec/SchoolUninter.vue";
import OptionUninter from "@/components/LicEjec/OptionUninter.vue";
import DinamicSection from "@/components/LicEjec/DinamicSection.vue";
import FormRegister from "@/components/LicEjec/FormRegister.vue";
import PortalFooter from "@/components/portal/Footer.vue";
import FloatingActions from "@/components/portal/FloatingActions.vue";

useHead({
  title: "Licenciaturas Ejecutivas | UNINTER",
  meta: [
    {
      name: "description",
      content: "Estudia una Licenciatura Ejecutiva en UNINTER con la flexibilidad y el prestigio que necesitas. Planes cuatrimestrales de 3 años con validez oficial SEP."
    }
  ]
});
</script>

<template>
  <div class="licenciaturas-ejecutivas-page">
    <Navbare />
    <HeroBanner />
    <History />
    <EducativeOfert />
    <SchoolUninter />
    <OptionUninter />
    <DinamicSection />
    <FormRegister />
    <PortalFooter />
    <FloatingActions />
  </div>
</template>

<style scoped>
.licenciaturas-ejecutivas-page {
  background-color: #ffffff;
  color: #1e293b;
  min-height: 100vh;
}
</style>
