<script setup lang="ts">
import Navbare from "~/components/navbar/Index.vue";
import HeroBanner from "~/components/posgrados/HeroBanner.vue";
import Welcome from "~/components/posgrados/Welcome.vue";
import OfertaEducativa from "~/components/posgrados/OfertaEducativa.vue";
import PhotoStrip from "~/components/posgrados/PhotoStrip.vue";
import OptionUninter from "~/components/posgrados/OptionUninter.vue";
import VidaUninter from "~/components/posgrados/VidaUninter.vue";
import VidaEstudiantil from "~/components/posgrados/VidaEstudiantil.vue";
import FormRegister from "~/components/posgrados/FormRegister.vue";
import PortalFooter from "~/components/layout/Footer.vue";

useHead({ title: "Posgrados UNINTER | Especialidades, Maestrías y Doctorados" });
</script>

<template>
  <div>
    <Navbare />
    <HeroBanner />
    <Welcome />
    <OfertaEducativa />
    <PhotoStrip />
    <OptionUninter />
    <VidaUninter />
    <VidaEstudiantil />
    <FormRegister />
    <PortalFooter />
  </div>
</template>
