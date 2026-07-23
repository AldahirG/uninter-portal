<script setup lang="ts">
useHead({
  script: [
    { src: "https://link.superleads.mx/js/form_embed.js", defer: true }
  ]
});
</script>

<template>
  <section class="reg-section">
    <div class="dp-container">
      <div class="reg-card">
        <!-- Lado formulario -->
        <div class="reg-form-side">
          <iframe
            src="https://link.superleads.mx/widget/form/KHpOCcYwrUtI7nUVFh2Y"
            style="width: 100%; height: 860px; border: none; border-radius: 4px; overflow: hidden;"
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

        <!-- Lado mascota -->
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
/* Colores Diplomados */
.reg-section {
  --s: #6D4C41;
  --sd: #4E342E;
  --sbg: #180f0c;
  background: #f4f2f0;
  padding: 5rem 0;
}

.dp-container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

/* Tarjeta */
.reg-card {
  display: flex;
  background: #fff;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 24px 60px rgba(109, 76, 65, 0.12);
  min-height: 880px;
}

/* Lado formulario */
.reg-form-side {
  flex: 1.25;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

/* Lado mascota */
.reg-mascot-side {
  flex: 0.75;
  background: linear-gradient(145deg, var(--s) 0%, var(--sbg) 100%);
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
    circle at 30% 70%,
    rgba(255, 255, 255, 0.1) 0%,
    transparent 60%
  );
}

.mascot-wrap {
  width: 85%;
  max-width: 300px;
  position: relative;
  z-index: 1;
}

.mascot-img {
  width: 100%;
  height: auto;
  object-fit: contain;
  filter: drop-shadow(0 20px 30px rgba(0, 0, 0, 0.35));
}

/* Responsive */
@media (max-width: 900px) {
  .reg-card {
    flex-direction: column-reverse;
  }
  .reg-mascot-side {
    padding: 2.5rem 0;
    min-height: 200px;
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
}
</style>
