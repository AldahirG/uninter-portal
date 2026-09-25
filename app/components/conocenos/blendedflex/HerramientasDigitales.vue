<script setup lang="ts">
import {
  GraduationCap,
  Video,
  BookOpen,
  Sparkles,
  Gamepad2,
  ExternalLink,
  ArrowRight,
  ShieldCheck,
} from "lucide-vue-next";
import data from "@/assets/data/blendedLearning.json";

const herramientas = data.herramientas;
</script>

<template>
  <section class="tools-section" id="herramientas">
    <div class="uninter-container">
      <div class="section-heading">
        <div class="section-eyebrow">
          <span class="eyebrow-line"></span>
          ECOSISTEMA DIGITAL DEL ESTUDIANTE
        </div>
        <h2 class="section-title">
          Herramientas que Acompañan a <em>UninterVirtual</em>
        </h2>
        <p class="section-subtitle">
          El estudiante "nativo digital" de UNINTER cuenta con un ecosistema tecnológico integrado para aprender, investigar, colaborar internacionalmente y aplicar la Inteligencia Artificial de forma productiva y ética.
        </p>
      </div>

      <div class="tools-grid">
        <div
          v-for="tool in herramientas"
          :key="tool.id"
          class="tool-card"
          :class="{ 'tool-card--featured': tool.id === 'unintervirtual', 'tool-card--ia': tool.id === 'ia-academica' }"
        >
          <div class="tool-card__header">
            <span class="tool-badge">{{ tool.badge }}</span>
            <span class="tool-cat">{{ tool.categoria }}</span>
          </div>

          <div class="tool-card__main">
            <div class="tool-icon-wrap">
              <GraduationCap v-if="tool.id === 'unintervirtual'" :size="28" />
              <Video v-else-if="tool.id === 'teams'" :size="28" />
              <BookOpen v-else-if="tool.id === 'elibro'" :size="28" />
              <Sparkles v-else-if="tool.id === 'ia-academica'" :size="28" />
              <Gamepad2 v-else :size="28" />
            </div>

            <h3 class="tool-name">{{ tool.nombre }}</h3>
            <p class="tool-desc">{{ tool.descripcion }}</p>

            <div class="tool-focus">
              <span class="focus-title">Enfoque formativo:</span>
              <p class="focus-text">{{ tool.enfoque }}</p>
            </div>
          </div>

          <div class="tool-card__footer" v-if="tool.enlace !== '#'">
            <a
              :href="tool.enlace"
              :target="tool.enlace.startsWith('http') ? '_blank' : '_self'"
              class="tool-btn"
            >
              <span>{{ tool.textoEnlace }}</span>
              <ExternalLink v-if="tool.enlace.startsWith('http')" :size="15" />
              <ArrowRight v-else :size="15" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.tools-section {
  padding: 5rem 0;
  background-color: #ffffff;
  border-bottom: 1px solid #e2e8f0;
}

.uninter-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.section-heading {
  max-width: 820px;
  margin-bottom: 3.5rem;
}

.section-eyebrow {
  display: flex;
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

.tools-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.75rem;
}

.tool-card {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 20px;
  padding: 2.25rem;
  display: flex;
  flex-direction: column;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.03);
}

.tool-card:hover {
  transform: translateY(-4px);
  border-color: #028cdf;
  box-shadow: 0 16px 36px rgba(2, 140, 223, 0.12);
}

.tool-card--featured {
  border-color: #028cdf;
  background: linear-gradient(180deg, #f0f9ff 0%, #ffffff 40%);
}

.tool-card--ia {
  border-color: #5eead4;
  background: linear-gradient(180deg, #f0fdfa 0%, #ffffff 40%);
}

.tool-card__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.tool-badge {
  background: #028cdf18;
  color: #028cdf;
  font-size: 0.72rem;
  font-weight: 800;
  padding: 0.3rem 0.75rem;
  border-radius: 20px;
}

.tool-card--ia .tool-badge {
  background: #ccfbf1;
  color: #0f766e;
}

.tool-cat {
  font-size: 0.74rem;
  color: #64748b;
  font-weight: 600;
}

.tool-card__main {
  flex: 1;
}

.tool-icon-wrap {
  width: 56px;
  height: 56px;
  border-radius: 14px;
  background: #028cdf12;
  color: #028cdf;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.25rem;
}

.tool-card--ia .tool-icon-wrap {
  background: #ccfbf1;
  color: #0d9488;
}

.tool-name {
  color: #0f172a;
  font-size: 1.35rem;
  font-weight: 800;
  margin: 0 0 0.65rem;
  font-family: var(--font-serif, Georgia, serif);
}

.tool-desc {
  color: #475569;
  font-size: 0.9rem;
  line-height: 1.6;
  margin: 0 0 1.25rem;
}

.tool-focus {
  background: #f8fafc;
  border-left: 3px solid #028cdf;
  padding: 0.85rem 1rem;
  border-radius: 0 8px 8px 0;
  margin-bottom: 1.5rem;
}

.tool-card--ia .tool-focus {
  border-left-color: #0d9488;
  background: #f0fdfa;
}

.focus-title {
  display: block;
  font-size: 0.72rem;
  font-weight: 800;
  color: #0f172a;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  margin-bottom: 0.25rem;
}

.focus-text {
  font-size: 0.84rem;
  color: #475569;
  line-height: 1.45;
  margin: 0;
}

.tool-card__footer {
  padding-top: 1.25rem;
  border-top: 1px solid #f1f5f9;
}

.tool-btn {
  color: #028cdf;
  font-size: 0.88rem;
  font-weight: 700;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: gap 0.2s, color 0.2s;
}

.tool-card--ia .tool-btn {
  color: #0d9488;
}

.tool-btn:hover {
  gap: 0.75rem;
  color: #0277bd;
}

@media (max-width: 1024px) {
  .tools-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 680px) {
  .tools-grid {
    grid-template-columns: 1fr;
  }
}
</style>
