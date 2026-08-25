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
  <section id="formulario-registro" class="reg-section">
    <div class="prep-container">
      <div class="reg-card">
        
        <!-- Lado Izquierdo: Formulario SuperLeads -->
        <div class="reg-form-side">
          <iframe
            src="https://link.superleads.mx/widget/form/pl9WuxNcBIIan1OPZ8yf"
            style="width: 100%; height: 580px; border: none; border-radius: 4px; overflow: hidden;"
            id="inline-pl9WuxNcBIIan1OPZ8yf"
            data-layout="{'id':'INLINE'}"
            data-trigger-type="alwaysShow"
            data-trigger-value=""
            data-activation-type="alwaysActivated"
            data-activation-value=""
            data-deactivation-type="neverDeactivate"
            data-deactivation-value=""
            data-form-name="FormPrep-a"
            data-height="869"
            data-layout-iframe-id="inline-pl9WuxNcBIIan1OPZ8yf"
            data-form-id="pl9WuxNcBIIan1OPZ8yf"
            title="FormPrep-a"
          ></iframe>
        </div>

        <!-- Lado Derecho: Mascota Legi con color representativo #51CAB9 / #0f3c61 -->
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
.reg-section {
  background: #f0f7f6;
  padding: 5rem 1.5rem;
}

.prep-container {
  max-width: 1120px;
  margin: 0 auto;
}

.reg-card {
  background: #ffffff;
  border-radius: 24px;
  box-shadow: 0 24px 60px rgba(53, 136, 128, 0.15);
  display: flex;
  min-height: 580px;
  overflow: hidden;
  border: 1px solid rgba(81, 202, 185, 0.25);
}

.reg-form-side {
  flex: 1.25;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;
}

.reg-mascot-side {
  flex: 0.75;
  background: linear-gradient(145deg, #51CAB9, #0f3c61);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.reg-mascot-side::before {
  content: "";
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 30% 70%, rgba(255, 255, 255, 0.15) 0%, transparent 60%);
}

.mascot-wrap {
  position: relative;
  width: 85%;
  max-width: 290px;
  z-index: 1;
}

.mascot-img {
  width: 100%;
  height: auto;
  object-fit: contain;
  filter: drop-shadow(0 20px 30px rgba(0, 0, 0, 0.35));
}

@media (max-width: 900px) {
  .reg-card {
    flex-direction: column-reverse;
  }

  .reg-mascot-side {
    min-height: 220px;
    padding: 2.5rem 0;
  }

  .mascot-wrap {
    width: 45%;
    max-width: 220px;
  }

  .reg-form-side {
    padding: 2rem 1.5rem;
  }
}

@media (max-width: 560px) {
  .reg-section {
    padding: 3rem 1rem;
  }

  .reg-form-side {
    padding: 1.5rem 1rem;
  }
}
</style>
