<script setup lang="ts">
import { useHead } from "#imports";

useHead({
  script: [
    {
      src: "https://link.superleads.mx/js/form_embed.js",
      defer: true
    }
  ]
});
</script>

<template>
  <section id="formulario-registro" class="le-reg-section">
    <div class="le-container">
      <div class="le-reg-card">
        <!-- Lado del Formulario -->
        <div class="le-reg-form-side">
          <iframe
            src="https://link.superleads.mx/widget/form/4crDIop7ylztoeWZxtZ0"
            style="width: 100%; height: 613px; border: none; border-radius: 4px; overflow: hidden;"
            id="inline-4crDIop7ylztoeWZxtZ0"
            data-layout="{'id':'INLINE'}"
            data-trigger-type="alwaysShow"
            data-trigger-value=""
            data-activation-type="alwaysActivated"
            data-activation-value=""
            data-deactivation-type="neverDeactivate"
            data-deactivation-value=""
            data-form-name="FormEjecutivas"
            data-height="613"
            data-layout-iframe-id="inline-4crDIop7ylztoeWZxtZ0"
            data-form-id="4crDIop7ylztoeWZxtZ0"
            data-cookie-consent="true"
            data-cookie-consent-provider="auto"
            title="FormEjecutivas"
          ></iframe>
        </div>

        <!-- Lado de la Mascota Legi -->
        <div class="le-reg-mascot-side">
          <div class="mascot-wrap">
            <img
              src="/images/forms/legi-mascot.png"
              alt="Mascota Legi UNINTER"
              class="mascot-img"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.le-container {
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.le-reg-section {
  background: #fbf9f6;
  padding: 5.5rem 0;
  border-top: 1px solid #ede4db;
}

.le-reg-card {
  background: #ffffff;
  border: 1px solid #ede4db;
  border-radius: 24px;
  box-shadow: 0 24px 60px rgba(105, 78, 57, 0.12);
  display: flex;
  min-height: 620px;
  overflow: hidden;
}

.le-reg-form-side {
  flex: 1.25;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;
}

.le-reg-mascot-side {
  align-items: center;
  background: linear-gradient(145deg, #876D56 0%, #694E39 60%, #4e3827 100%);
  display: flex;
  flex: 0.75;
  justify-content: center;
  overflow: hidden;
  position: relative;
}

.le-reg-mascot-side::before {
  background: radial-gradient(
    circle at 30% 70%,
    rgba(255, 255, 255, 0.1) 0%,
    transparent 65%
  );
  content: "";
  inset: 0;
  position: absolute;
}

.mascot-wrap {
  max-width: 320px;
  position: relative;
  width: 85%;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.mascot-img {
  height: auto;
  width: 100%;
  filter: drop-shadow(0 15px 30px rgba(0, 0, 0, 0.35));
}

@media (max-width: 860px) {
  .le-reg-card {
    flex-direction: column-reverse;
  }
  .le-reg-mascot-side {
    padding: 3rem 1.5rem;
  }
  .mascot-wrap {
    max-width: 220px;
  }
  .le-reg-form-side {
    padding: 1.5rem;
  }
}
</style>
