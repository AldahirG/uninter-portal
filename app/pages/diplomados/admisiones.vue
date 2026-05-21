<script setup lang="ts">
import Navbare           from "~/components/navbar/Index.vue";
import HeroBanner        from "~/components/diplomados/admisiones/HeroBanner.vue";
import Welcome           from "~/components/diplomados/admisiones/Welcome.vue";
import OfertaEducativa   from "~/components/diplomados/admisiones/OfertaEducativa.vue";
import OptionUninter     from "~/components/diplomados/admisiones/OptionUninter.vue";
import VidaUninter       from "~/components/diplomados/admisiones/VidaUninter.vue";
import VidaEstudiantil   from "~/components/diplomados/admisiones/VidaEstudiantil.vue";
import FormRegister      from "~/components/diplomados/admisiones/FormRegister.vue";
import PortalFooter      from "~/components/layout/Footer.vue";

useHead({ title: "Proceso de Admisión | Diplomados UNINTER" });
</script>

<template>
  <div>
    <Navbare />
    <HeroBanner />
    <Welcome />
    <OfertaEducativa />
    <OptionUninter />
    <VidaUninter />
    <VidaEstudiantil />
    <FormRegister />
    <PortalFooter />
  </div>
</template>
