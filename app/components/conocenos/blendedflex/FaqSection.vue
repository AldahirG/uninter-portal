<script setup lang="ts">
import { ref } from "vue";
import { ChevronDown, MessageCircle, HelpCircle } from "lucide-vue-next";
import data from "@/assets/data/blendedLearning.json";

const openIdx = ref<number | null>(0);

function toggle(i: number) {
  openIdx.value = openIdx.value === i ? null : i;
}

function openWhatsAppTour() {
  const text =
    "¡Hola! Vengo de la página del Modelo Blended Learning 4.0 en el portal UNINTER. Me gustaría recibir más información y agendar un recorrido en el campus para conocer las aulas híbridas y laboratorios. ¿Qué días y horarios tienen disponibles?";
  const url = `https://wa.me/5217776154241?text=${encodeURIComponent(text)}`;
  window.open(url, "_blank");
}
</script>

<template>
  <section class="faq-section" id="faq">
    <div class="uninter-container">
      <div class="section-heading text-center">
        <div class="section-eyebrow">
          <span class="eyebrow-line"></span>
          RESOLVEMOS TUS DUDAS
          <span class="eyebrow-line"></span>
        </div>
        <h2 class="section-title">
          Preguntas Frecuentes sobre el <em>Modelo Híbrido</em>
        </h2>
        <p class="section-subtitle">
          Todo lo que necesitas saber sobre la combinación de clases presenciales, actividades virtuales y el uso asistido de tecnología en UNINTER.
        </p>
      </div>

      <div class="faq-list">
        <div
          v-for="(faq, i) in data.faqs"
          :key="i"
          class="faq-item"
          :class="{ 'faq-item--open': openIdx === i }"
        >
          <button
            type="button"
            class="faq-question"
            @click="toggle(i)"
            :aria-expanded="openIdx === i"
          >
            <span class="faq-question__text">{{ faq.pregunta }}</span>
            <span class="faq-question__icon">
              <ChevronDown :size="20" />
            </span>
          </button>

          <div v-show="openIdx === i" class="faq-answer">
            <p>{{ faq.respuesta }}</p>
          </div>
        </div>
      </div>

      <!-- Banner de contacto y recorrido -->
      <div class="faq-cta-card">
        <div class="cta-inner">
          <div class="cta-text">
            <h3 class="cta-title">¿Quieres conocer nuestras aulas híbridas en persona?</h3>
            <p class="cta-desc">
              Agenda un recorrido guiado en campus y experimenta de cerca cómo nuestros profesores y alumnos interactúan con UninterVirtual y la tecnología 4.0.
            </p>
          </div>
          <button
            type="button"
            class="cta-btn"
            @click="openWhatsAppTour"
          >
            <MessageCircle :size="18" />
            <span>Agendar recorrido en campus</span>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.faq-section {
  padding: 5rem 0;
  background-color: #ffffff;
}

.uninter-container {
  max-width: 980px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.section-heading {
  margin-bottom: 3.5rem;
}

.section-eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  color: #028cdf;
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 0.15em;
  margin-bottom: 0.75rem;
  text-transform: uppercase;
}

.eyebrow-line {
  display: block;
  width: 24px;
  height: 2px;
  background: #028cdf;
}

.section-title {
  color: #0f172a;
  font-family: var(--font-serif, Georgia, serif);
  font-size: clamp(2rem, 3.5vw, 2.75rem);
  font-weight: 800;
  line-height: 1.18;
  letter-spacing: -0.02em;
  margin: 0 0 1rem;
}

.section-title em {
  color: #028cdf;
  font-style: normal;
}

.section-subtitle {
  color: #475569;
  font-size: 1rem;
  line-height: 1.6;
  margin: 0;
}

.faq-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 3.5rem;
}

.faq-item {
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  background: #f8fafc;
  overflow: hidden;
  transition: all 0.25s ease;
}

.faq-item--open {
  border-color: #028cdf;
  background: #ffffff;
  box-shadow: 0 8px 24px rgba(2, 140, 223, 0.08);
}

.faq-question {
  width: 100%;
  text-align: left;
  background: none;
  border: none;
  padding: 1.35rem 1.75rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  cursor: pointer;
}

.faq-question__text {
  font-size: 1.05rem;
  font-weight: 700;
  color: #0f172a;
  line-height: 1.4;
}

.faq-question__icon {
  color: #64748b;
  transition: transform 0.3s ease;
  flex-shrink: 0;
}

.faq-item--open .faq-question__icon {
  transform: rotate(180deg);
  color: #028cdf;
}

.faq-answer {
  padding: 0 1.75rem 1.5rem;
  color: #475569;
  font-size: 0.94rem;
  line-height: 1.65;
  border-top: 1px solid #f1f5f9;
  margin-top: -0.25rem;
  padding-top: 1rem;
}

.faq-answer p {
  margin: 0;
}

/* ── CTA Card ── */
.faq-cta-card {
  background: linear-gradient(135deg, #07192e 0%, #0d3861 100%);
  border-radius: 20px;
  padding: 2.25rem 2.5rem;
  color: #ffffff;
  box-shadow: 0 12px 32px rgba(7, 25, 46, 0.2);
}

.cta-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
}

.cta-text {
  flex: 1;
}

.cta-title {
  color: #ffffff;
  font-size: 1.25rem;
  font-weight: 800;
  margin: 0 0 0.4rem;
}

.cta-desc {
  color: rgba(255, 255, 255, 0.78);
  font-size: 0.9rem;
  line-height: 1.55;
  margin: 0;
}

.cta-btn {
  background: #028cdf;
  border: 1px solid #38bdf8;
  color: #ffffff;
  padding: 0.85rem 1.6rem;
  border-radius: 10px;
  font-weight: 700;
  font-size: 0.9rem;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  white-space: nowrap;
  transition: all 0.2s;
  flex-shrink: 0;
}

.cta-btn:hover {
  background: #0277bd;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(2, 140, 223, 0.4);
}

@media (max-width: 768px) {
  .cta-inner {
    flex-direction: column;
    align-items: flex-start;
    gap: 1.5rem;
  }
  .cta-btn {
    width: 100%;
    justify-content: center;
  }
}
</style>
