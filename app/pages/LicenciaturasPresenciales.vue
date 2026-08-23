<script setup lang="ts">
import Navbare from "@/components/navbar/Index.vue";
import HeroBanner from "@/components/LicPrese/HeroBanner.vue";
import History from "@/components/LicPrese/History.vue";
import EducativeOfert from "@/components/LicPrese/EducativeOfert.vue";
import SchoolUninter from "~/components/LicPrese/SchoolUninter.vue";
import OptionUninter from "~/components/LicPrese/OptionUninter.vue";
import DinamicSection from "~/components/LicPrese/DinamicSection.vue";
import CalScholarship from "~/components/LicPrese/CalScholarship.vue";
import FormRegister from "~/components/LicPrese/FormRegister.vue";
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
    <!-- Blogs Institucionales arriba de 25 Razones -->
    <SchoolUninter />
    <!-- 25 Razones para elegir UNINTER -->
    <OptionUninter />
    <DinamicSection />
    <FormRegister />
    <PortalFooter />
    <FloatingActions />
  </div>
</template>

<style scoped></style>
