<script setup lang="ts">
useHead({
  script: [
    { src: 'https://link.superleads.mx/js/form_embed.js', defer: true }
  ]
})
</script>

<template>
  <section class="reg-section" id="formulario-registro">
    <div class="siu-container">
      <div class="reg-card">
        <div class="reg-form-side">
          <iframe
            src="https://link.superleads.mx/widget/form/FqVQFTMb4bpP98Fi2kVS"
            style="width: 100%; height: 560px; border: none; border-radius: 4px; overflow: hidden;"
            id="inline-FqVQFTMb4bpP98Fi2kVS"
            data-layout="{'id':'INLINE'}"
            data-trigger-type="alwaysShow"
            data-trigger-value=""
            data-activation-type="alwaysActivated"
            data-activation-value=""
            data-deactivation-type="neverDeactivate"
            data-deactivation-value=""
            data-form-name="FormSecundaria"
            data-height="844"
            data-layout-iframe-id="inline-FqVQFTMb4bpP98Fi2kVS"
            data-form-id="FqVQFTMb4bpP98Fi2kVS"
            title="FormSecundaria"
          ></iframe>
        </div>
        <div class="reg-mascot-side">
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
.siu-container {
  margin: 0 auto;
  max-width: 1100px;
  padding: 0 1.5rem;
}
.reg-section {
  background: #fdfbf2;
  padding: 5rem 0;
}
.reg-card {
  background: #fff;
  border-radius: 24px;
  box-shadow: 0 24px 60px rgba(236, 171, 0, 0.18);
  display: flex;
  min-height: 560px;
  overflow: hidden;
}
.reg-form-side {
  flex: 1.25;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;
}
.reg-mascot-side {
  align-items: center;
  background: linear-gradient(145deg, #ecab00, #362400);
  display: flex;
  flex: 0.75;
  justify-content: center;
  overflow: hidden;
  position: relative;
}
.reg-mascot-side:before {
  background: radial-gradient(
    circle at 30% 70%,
    rgba(255, 255, 255, 0.1) 0,
    transparent 60%
  );
  content: "";
  inset: 0;
  position: absolute;
}
.mascot-wrap {
  max-width: 300px;
  position: relative;
  width: 85%;
  z-index: 1;
}
.mascot-img {
  filter: drop-shadow(0 20px 30px rgba(0, 0, 0, 0.4));
  height: auto;
  object-fit: contain;
  width: 100%;
}
@media (max-width: 900px) {
  .reg-card {
    flex-direction: column-reverse;
  }
  .reg-mascot-side {
    min-height: 200px;
    padding: 2.5rem 0;
  }
  .mascot-wrap {
    width: 50%;
  }
  .reg-form-side {
    padding: 2.5rem 1.75rem;
  }
}
@media (max-width: 560px) {
  .reg-section {
    padding: 3rem 0;
  }
  .reg-form-side {
    padding: 2rem 1.25rem;
  }
}
</style>
