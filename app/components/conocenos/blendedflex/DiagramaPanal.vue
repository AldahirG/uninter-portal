<script setup lang="ts">
import { ref } from "vue";
import {
  Sparkles,
  Bot,
  Users,
  Compass,
  MonitorCheck,
  HeartHandshake,
  Laptop2,
  ClipboardCheck,
  Wifi,
  Cpu,
  Laptop,
  ArrowRight,
} from "lucide-vue-next";
import data from "@/assets/data/blendedLearning.json";

const activeTab = ref<"profesor" | "alumno">("profesor");
const activeNode = ref<any>(null);

function selectNode(node: any) {
  activeNode.value = node;
}
</script>

<template>
  <section class="panal-section" id="diagrama-modelo">
    <div class="uninter-container">
      <!-- Encabezado de la Sección -->
      <div class="section-heading text-center">
        <div class="section-eyebrow">
          <span class="eyebrow-line"></span>
          ARQUITECTURA DEL MODELO PEDAGÓGICO
          <span class="eyebrow-line"></span>
        </div>
        <h2 class="section-title">
          Ecosistema Conectado: <em>Profesor, Alumno e IA</em>
        </h2>
        <p class="section-subtitle">
          Visualiza cómo interactúan los dos roles clave de nuestro modelo educativo híbrido, impulsados por competencias digitales y la adopción ética de la Inteligencia Artificial.
        </p>
      </div>

      <!-- Diagrama de Panal Integrado (CSS Grid / Hexagon Nodes) -->
      <div class="panal-diagram-wrap">
        <!-- Bloque Izquierdo: Profesor Facilitador -->
        <div class="panal-cluster panal-cluster--profesor">
          <div class="cluster-badge">
            <Users :size="16" />
            <span>EL PROFESOR: FACILITADOR</span>
          </div>

          <div class="nodes-grid">
            <div
              v-for="comp in data.roles.profesor.competencias"
              :key="comp.id"
              class="node-card"
              :class="{ 'node-card--ia': comp.id === 'etica-ia', 'node-card--active': activeNode?.id === comp.id }"
              @mouseenter="selectNode(comp)"
              @click="selectNode(comp)"
            >
              <div class="node-icon" :style="{ backgroundColor: `${comp.color}15`, color: comp.color }">
                <Bot v-if="comp.id === 'etica-ia'" :size="20" />
                <HeartHandshake v-else-if="comp.id === 'engagement'" :size="20" />
                <MonitorCheck v-else-if="comp.id === 'alfabetizacion-digital-prof'" :size="20" />
                <Compass v-else-if="comp.id === 'metodologia-ensenanza'" :size="20" />
                <Laptop2 v-else-if="comp.id === 'hardware-software-prof'" :size="20" />
                <ClipboardCheck v-else :size="20" />
              </div>
              <div class="node-info">
                <span class="node-name">{{ comp.nombre }}</span>
                <span v-if="comp.id === 'etica-ia'" class="node-tag">¡Nueva Competencia!</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Núcleo Central: Blended Learning 4.0 -->
        <div class="panal-core">
          <div class="core-hexagon">
            <div class="core-hexagon__inner">
              <span class="core-pill">CONVERGENCIA</span>
              <h3 class="core-title">Blended Learning 4.0</h3>
              <p class="core-desc">Aulas Híbridas + UninterVirtual LMS</p>
              <div class="core-pulse"></div>
            </div>
          </div>
        </div>

        <!-- Bloque Derecho: Alumno Protagonista -->
        <div class="panal-cluster panal-cluster--alumno">
          <div class="cluster-badge cluster-badge--alumno">
            <Sparkles :size="16" />
            <span>EL ALUMNO: ROL PRINCIPAL</span>
          </div>

          <div class="nodes-grid">
            <div
              v-for="pilar in data.roles.alumno.pilares"
              :key="pilar.id"
              class="node-card"
              :class="{ 'node-card--ia': pilar.id === 'ia-estudiante', 'node-card--active': activeNode?.id === pilar.id }"
              @mouseenter="selectNode(pilar)"
              @click="selectNode(pilar)"
            >
              <div class="node-icon node-icon--alumno">
                <Laptop v-if="pilar.id === 'alfabetizacion-alumno'" :size="20" />
                <Wifi v-else-if="pilar.id === 'brecha-digital'" :size="20" />
                <Users v-else-if="pilar.id === 'experiencia-aprendizaje'" :size="20" />
                <Cpu v-else-if="pilar.id === 'hardware-software-alumno'" :size="20" />
                <Sparkles v-else :size="20" />
              </div>
              <div class="node-info">
                <span class="node-name">{{ pilar.nombre }}</span>
                <span v-if="pilar.id === 'ia-estudiante'" class="node-tag node-tag--ia">Co-Piloto Ético</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Tarjeta Interactiva de Detalle Dinámico al pasar el cursor o hacer clic -->
      <div class="panal-detail-card" v-if="activeNode">
        <div class="detail-icon">
          <Sparkles :size="24" />
        </div>
        <div class="detail-text">
          <h4 class="detail-title">{{ activeNode.nombre }}</h4>
          <p class="detail-desc">{{ activeNode.desc }}</p>
        </div>
      </div>
      <div class="panal-tip" v-else>
        <span>💡 Pasa el cursor o pulsa cualquier elemento del diagrama para conocer su impacto formativo.</span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.panal-section {
  padding: 5rem 0;
  background-color: #ffffff;
  position: relative;
  border-bottom: 1px solid #e2e8f0;
}

.uninter-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.section-heading {
  max-width: 780px;
  margin: 0 auto 3.5rem;
  text-align: center;
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
  font-size: 0.98rem;
  line-height: 1.6;
  margin: 0;
}

/* ── Envoltorio del Panal ── */
.panal-diagram-wrap {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 2rem;
  align-items: center;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 24px;
  padding: 2.5rem 2rem;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.03);
}

.panal-cluster {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.cluster-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: #e0f2fe;
  color: #0369a1;
  font-size: 0.75rem;
  font-weight: 800;
  padding: 0.4rem 0.85rem;
  border-radius: 20px;
  width: fit-content;
  letter-spacing: 0.04em;
}

.cluster-badge--alumno {
  background: #ecfccb;
  color: #3f6212;
}

.nodes-grid {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.node-card {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 14px;
  padding: 0.9rem 1.15rem;
  display: flex;
  align-items: center;
  gap: 0.85rem;
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.02);
}

.node-card:hover,
.node-card--active {
  transform: translateX(4px);
  border-color: #028cdf;
  box-shadow: 0 6px 18px rgba(2, 140, 223, 0.15);
}

.panal-cluster--alumno .node-card:hover,
.panal-cluster--alumno .node-card--active {
  transform: translateX(-4px);
  border-color: #84cc16;
  box-shadow: 0 6px 18px rgba(132, 204, 22, 0.18);
}

.node-card--ia {
  background: linear-gradient(135deg, #ffffff 0%, #f0fdfa 100%);
  border-color: #99f6e4;
}

.node-icon {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.node-icon--alumno {
  background: #f1f8ee;
  color: #4a7a02;
}

.node-info {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.node-name {
  color: #1e293b;
  font-size: 0.88rem;
  font-weight: 700;
  line-height: 1.25;
}

.node-tag {
  font-size: 0.68rem;
  font-weight: 800;
  color: #0d9488;
  letter-spacing: 0.02em;
}

.node-tag--ia {
  color: #65a30d;
}

/* ── Núcleo Central Hexagonal ── */
.panal-core {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
}

.core-hexagon {
  width: 220px;
  height: 220px;
  background: linear-gradient(135deg, #07192e 0%, #0d3861 100%);
  border-radius: 28px;
  padding: 8px;
  box-shadow: 0 16px 40px rgba(7, 25, 46, 0.35);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.core-hexagon__inner {
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 22px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 1.5rem;
  color: #ffffff;
}

.core-pill {
  font-size: 0.65rem;
  font-weight: 800;
  color: #38bdf8;
  letter-spacing: 0.15em;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
}

.core-title {
  font-family: var(--font-serif, Georgia, serif);
  font-size: 1.3rem;
  font-weight: 800;
  line-height: 1.15;
  color: #ffffff;
  margin: 0 0 0.5rem;
}

.core-desc {
  font-size: 0.72rem;
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
  line-height: 1.35;
}

/* ── Detalle Dinámico Inferior ── */
.panal-detail-card {
  margin-top: 2rem;
  background: #07192e;
  color: #ffffff;
  border-radius: 16px;
  padding: 1.5rem 2rem;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  box-shadow: 0 10px 30px rgba(7, 25, 46, 0.15);
  animation: slideUp 0.3s ease-out;
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.detail-icon {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: rgba(2, 140, 223, 0.2);
  color: #38bdf8;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.detail-title {
  font-size: 1.05rem;
  font-weight: 800;
  color: #ffffff;
  margin: 0 0 0.25rem;
}

.detail-desc {
  font-size: 0.88rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.5;
  margin: 0;
}

.panal-tip {
  margin-top: 1.5rem;
  text-align: center;
  color: #64748b;
  font-size: 0.82rem;
}

/* ── Responsividad ── */
@media (max-width: 1024px) {
  .panal-diagram-wrap {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
  .panal-core {
    order: -1;
  }
  .core-hexagon {
    width: 100%;
    max-width: 320px;
    height: auto;
    min-height: 160px;
  }
}
</style>
