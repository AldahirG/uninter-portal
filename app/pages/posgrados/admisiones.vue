<script setup lang="ts">
import Navbare        from "~/components/navbar/Index.vue";
import HeroBanner     from "~/components/posgrados/admisiones/HeroBanner.vue";
import Welcome        from "~/components/posgrados/admisiones/Welcome.vue";
import OfertaEducativa from "~/components/posgrados/admisiones/OfertaEducativa.vue";
import OptionUninter  from "~/components/posgrados/admisiones/OptionUninter.vue";
import PhotoStrip     from "~/components/posgrados/admisiones/PhotoStrip.vue";
import VidaUninter    from "~/components/posgrados/admisiones/VidaUninter.vue";
import VidaEstudiantil from "~/components/posgrados/admisiones/VidaEstudiantil.vue";
import FormRegister   from "~/components/posgrados/admisiones/FormRegister.vue";
import PortalFooter   from "~/components/layout/Footer.vue";

useHead({ title: "Proceso de Admisión | Posgrados UNINTER" });
</script>

<template>
  <div>
    <Navbare />
    <HeroBanner />
    <Welcome />
    <OfertaEducativa />
    <OptionUninter />
    <PhotoStrip />
    <VidaUninter />
    <VidaEstudiantil />
    <FormRegister />
    <PortalFooter />
  </div>
</template>
