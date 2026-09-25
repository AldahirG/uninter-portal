<script setup lang="ts">
import {
  Brain,
  FileCheck,
  CheckCheck,
  ShieldCheck,
  HeartHandshake,
  Sparkles,
} from "lucide-vue-next";
import data from "@/assets/data/blendedLearning.json";

const manifiesto = data.manifiestoIA;
</script>

<template>
  <section class="ia-manifesto-section" id="manifiesto-ia">
    <div class="uninter-container">
      <div class="manifesto-card">
        <div class="manifesto-header">
          <div class="ia-badge">
            <Sparkles :size="16" />
            <span>POSTURA INSTITUCIONAL UNINTER</span>
          </div>
          <h2 class="manifesto-title">{{ manifiesto.titulo }}</h2>
          <p class="manifesto-lead">
            {{ manifiesto.declaracion }}
          </p>
        </div>

        <div class="principles-grid">
          <div
            v-for="p in manifiesto.principios"
            :key="p.id"
            class="principle-card"
          >
            <div class="principle-icon">
              <Brain v-if="p.id === 'pensamiento-critico'" :size="24" />
              <FileCheck v-else-if="p.id === 'honestidad-transparencia'" :size="24" />
              <CheckCheck v-else-if="p.id === 'verificacion-fuentes'" :size="24" />
              <ShieldCheck v-else-if="p.id === 'privacidad-datos'" :size="24" />
              <HeartHandshake v-else :size="24" />
            </div>

            <div class="principle-content">
              <h3 class="principle-title">{{ p.titulo }}</h3>
              <p class="principle-desc">{{ p.desc }}</p>
            </div>
          </div>
        </div>

        <div class="manifesto-footer">
          <p class="footer-quote">
            "El alumno desarrolla la competencia de convivir con la tecnología de manera crítica, responsable y profundamente humana."
          </p>
          <span class="footer-author">— Modelo Pedagógico UNINTER 4.0</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.ia-manifesto-section {
  padding: 5rem 0;
  background-color: #07192e;
  position: relative;
  overflow: hidden;
}

.uninter-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.manifesto-card {
  background: radial-gradient(circle at 10% 10%, #0d3861 0%, #081d33 90%);
  border: 1px solid rgba(56, 189, 248, 0.25);
  border-radius: 28px;
  padding: 3.5rem;
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.4);
  position: relative;
}

.manifesto-header {
  max-width: 820px;
  margin-bottom: 3.5rem;
}

.ia-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(13, 148, 136, 0.25);
  color: #2dd4bf;
  border: 1px solid rgba(45, 212, 191, 0.4);
  padding: 0.4rem 0.95rem;
  border-radius: 20px;
  font-size: 0.74rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  margin-bottom: 1.25rem;
  text-transform: uppercase;
}

.manifesto-title {
  color: #ffffff;
  font-family: var(--font-serif, Georgia, serif);
  font-size: clamp(2rem, 3.5vw, 2.75rem);
  font-weight: 800;
  line-height: 1.2;
  letter-spacing: -0.02em;
  margin: 0 0 1.25rem;
}

.manifesto-lead {
  color: rgba(255, 255, 255, 0.85);
  font-size: 1.05rem;
  line-height: 1.7;
  margin: 0;
}

.principles-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.75rem;
  margin-bottom: 3rem;
}

.principle-card {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 18px;
  padding: 1.75rem;
  display: flex;
  align-items: flex-start;
  gap: 1.25rem;
  transition: all 0.3s ease;
}

.principle-card:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(56, 189, 248, 0.4);
  transform: translateY(-3px);
}

.principle-icon {
  width: 50px;
  height: 50px;
  border-radius: 14px;
  background: rgba(2, 140, 223, 0.2);
  color: #38bdf8;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.principle-content {
  flex: 1;
}

.principle-title {
  color: #ffffff;
  font-size: 1.12rem;
  font-weight: 800;
  margin: 0 0 0.45rem;
}

.principle-desc {
  color: rgba(255, 255, 255, 0.72);
  font-size: 0.88rem;
  line-height: 1.55;
  margin: 0;
}

.manifesto-footer {
  border-top: 1px solid rgba(255, 255, 255, 0.12);
  padding-top: 2rem;
  text-align: center;
}

.footer-quote {
  color: #93c5fd;
  font-family: var(--font-serif, Georgia, serif);
  font-style: italic;
  font-size: 1.15rem;
  line-height: 1.6;
  margin: 0 0 0.5rem;
}

.footer-author {
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

@media (max-width: 900px) {
  .manifesto-card {
    padding: 2.25rem 1.5rem;
  }
  .principles-grid {
    grid-template-columns: 1fr;
  }
}
</style>
