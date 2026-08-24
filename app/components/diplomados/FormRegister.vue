<script setup lang="ts">
useHead({
  script: [
    { src: "https://link.superleads.mx/js/form_embed.js", defer: true }
  ]
});
</script>

<template>
  <section class="reg-section" id="contacto">
    <div class="dp-container">
      <div class="reg-card">
        <!-- Lado formulario (Incrustación SUPERLEADS) -->
        <div class="reg-form-side">
          <iframe
            src="https://link.superleads.mx/widget/form/KHpOCcYwrUtI7nUVFh2Y"
            style="width: 100%; height: 860px; border: none; border-radius: 16px; overflow: hidden;"
            id="inline-KHpOCcYwrUtI7nUVFh2Y"
            data-layout="{'id':'INLINE'}"
            data-trigger-type="alwaysShow"
            data-trigger-value=""
            data-activation-type="alwaysActivated"
            data-activation-value=""
            data-deactivation-type="neverDeactivate"
            data-deactivation-value=""
            data-form-name="FormDiplomados"
            data-height="844"
            data-layout-iframe-id="inline-KHpOCcYwrUtI7nUVFh2Y"
            data-form-id="KHpOCcYwrUtI7nUVFh2Y"
            title="FormDiplomados"
          >
          </iframe>
        </div>

        <!-- Lado mascota con degradado cálido institucional -->
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
/* ═══ SECCIÓN DE REGISTRO DIPLOMADOS ═══ */
.reg-section {
  background: #fbf9f7;
  padding: 5.5rem 0 6rem;
}

.dp-container {
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

/* Tarjeta Principal */
.reg-card {
  display: flex;
  background: #ffffff;
  border-radius: 28px;
  border: 1px solid rgba(254, 215, 170, 0.6);
  overflow: hidden;
  box-shadow: 0 24px 60px rgba(194, 89, 22, 0.1), 0 4px 20px rgba(0, 0, 0, 0.03);
  min-height: 880px;
}

/* Lado formulario */
.reg-form-side {
  flex: 1.25;
  padding: 2.25rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #ffffff;
}

/* Lado mascota con Degradado Naranja a Café Profundo */
.reg-mascot-side {
  flex: 0.75;
  background: linear-gradient(180deg, #c25916 0%, #a3440d 35%, #5a2007 75%, #341204 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
}

.reg-mascot-side::before {
  content: "";
  position: absolute;
  inset: 0;
  background: radial-gradient(
    circle at 35% 65%,
    rgba(255, 255, 255, 0.1) 0%,
    transparent 65%
  );
}

.mascot-wrap {
  width: 85%;
  max-width: 320px;
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.mascot-img {
  width: 100%;
  height: auto;
  object-fit: contain;
  filter: drop-shadow(0 20px 30px rgba(0, 0, 0, 0.4));
}

/* Responsive */
@media (max-width: 900px) {
  .reg-card {
    flex-direction: column-reverse;
  }
  .reg-mascot-side {
    padding: 3rem 0;
    min-height: 240px;
  }
  .mascot-wrap {
    width: 45%;
    max-width: 200px;
  }
  .reg-form-side {
    padding: 2rem 1.25rem;
  }
}

@media (max-width: 560px) {
  .reg-section {
    padding: 3.5rem 0;
  }
}
</style>
