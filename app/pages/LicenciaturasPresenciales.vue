<script setup lang="ts">
import Navbare from "@/components/navbar/Index.vue";
import HeroBanner from "@/components/LicPrese/HeroBanner.vue";
import History from "@/components/LicPrese/History.vue";
import EducativeOfert from "@/components/LicPrese/EducativeOfert.vue";
import OptionUninter from "~/components/LicPrese/OptionUninter.vue";
import DinamicSection from "~/components/LicPrese/DinamicSection.vue";
//import CalculaBeca from "@/components/portal/Calculabeca.vue";
import CalScholarship from "~/components/LicPrese/CalScholarship.vue";
import FormRegister from "~/components/LicPrese/FormRegister.vue";
import SchoolUninter from "~/components/LicPrese/SchoolUninter.vue";
import PortalFooter from "@/components/portal/Footer.vue";
import FloatingActions from "@/components/portal/FloatingActions.vue";

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
    <CalScholarship />
    <OptionUninter />
    <DinamicSection />
    <FormRegister />
    <SchoolUninter />
    <PortalFooter />
    <FloatingActions />
  </div>
</template>

<style scoped></style>
