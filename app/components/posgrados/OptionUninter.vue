<script setup lang="ts">
import { Check } from "lucide-vue-next";

const nosotros = [
  "Más de 40 años de experiencia educativa a nivel internacional",
  "Más de 71,000 egresados en todo el mundo",
  "Red de más de 130 universidades socias en 25 países",
  "Reconocimiento oficial SEP y validez internacional",
  "Cuerpo docente con grado de Doctor o equivalente",
  "Modelo Blended-Flex: presencial y en línea",
  "Convenios de movilidad estudiantil activos",
  "Campus con infraestructura de última generación",
];

const ellos = [
  "Experiencia educativa limitada al ámbito nacional",
  "Menor vinculación con el sector empresarial global",
  "Programas sin actualización curricular frecuente",
  "Sin opciones de intercambio o doble titulación",
  "Docentes sin experiencia internacional activa",
  "Solo modalidad presencial o en línea, no híbrida",
  "Sin convenios de movilidad estudiantil",
  "Infraestructura básica",
];
</script>

<template>
  <section class="pg-option">
    <div class="pg-container">
      <div class="pg-option__head">
        <p class="pg-eyebrow">UNINTER la mejor opción</p>
        <h2 class="pg-section-title">Conócenos<em> y Compáranos</em></h2>
      </div>

      <div class="pg-option__table">
        <!-- Nosotros -->
        <div class="pg-col pg-col--us">
          <div class="pg-col__head">
            <img src="/images/logo-uninter.png" alt="UNINTER" class="pg-col__logo" />
            <span class="pg-col__badge">UNINTER Posgrados</span>
          </div>
          <ul class="pg-col__list">
            <li v-for="item in nosotros" :key="item" class="pg-col__item pg-col__item--yes">
              <Check :size="15" class="pg-col__icon pg-col__icon--yes" aria-hidden="true" />
              {{ item }}
            </li>
          </ul>
        </div>

        <!-- Ellos -->
        <div class="pg-col pg-col--them">
          <div class="pg-col__head">
            <span class="pg-col__badge pg-col__badge--them">Otras Instituciones</span>
          </div>
          <ul class="pg-col__list">
            <li v-for="item in ellos" :key="item" class="pg-col__item pg-col__item--no">
              <span class="pg-col__icon pg-col__icon--no" aria-hidden="true">✕</span>
              {{ item }}
            </li>
          </ul>
        </div>
      </div>

      <div class="pg-option__cta">
        <a href="https://posgrados.uninter.edu.mx/Admisiones" target="_blank" class="pg-btn">
          Inicia tu proceso de admisión
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.pg-option {
  --p: #546E7A;
  --pd: #37474F;
  background: #fff;
  padding: 5.5rem 0;
}
.pg-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.5rem;
}
.pg-option__head {
  text-align: center;
  margin-bottom: 3rem;
}
.pg-eyebrow {
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--p);
  margin: 0 0 0.5rem;
}
.pg-section-title {
  font-family: var(--font-serif, Georgia, serif);
  font-size: clamp(1.8rem, 3.5vw, 2.5rem);
  font-weight: 800;
  color: #1a2530;
  margin: 0;
}
.pg-section-title em { font-style: italic; color: var(--p); }

.pg-option__table {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2px;
  background: #e8ecee;
  border-radius: 16px;
  overflow: hidden;
}
.pg-col { background: #fff; padding: 2rem; }
.pg-col--us { background: #f4f6f7; }

.pg-col__head {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding-bottom: 1.25rem;
  border-bottom: 2px solid var(--p);
  margin-bottom: 1.25rem;
}
.pg-col__logo { height: 28px; object-fit: contain; }
.pg-col__badge {
  font-size: 0.82rem;
  font-weight: 800;
  color: var(--p);
  text-transform: uppercase;
  letter-spacing: 0.06em;
}
.pg-col__badge--them {
  font-size: 0.82rem;
  font-weight: 800;
  color: #999;
  text-transform: uppercase;
  letter-spacing: 0.06em;
}
.pg-col__list {
  list-style: none;
  margin: 0; padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
}
.pg-col__item {
  display: flex;
  align-items: flex-start;
  gap: 0.625rem;
  font-size: 0.85rem;
  line-height: 1.5;
}
.pg-col__item--yes { color: #333; }
.pg-col__item--no  { color: #aaa; }
.pg-col__icon--yes { color: var(--p); flex-shrink: 0; margin-top: 0.1rem; }
.pg-col__icon--no  { color: #ccc; font-size: 0.75rem; flex-shrink: 0; margin-top: 0.15rem; font-weight: 700; }

.pg-option__cta {
  text-align: center;
  margin-top: 2.5rem;
}
.pg-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.88rem;
  font-weight: 700;
  padding: 0.85rem 2rem;
  border-radius: 999px;
  background: var(--p);
  color: #fff;
  text-decoration: none;
  transition: background 0.2s, transform 0.2s;
  cursor: pointer;
}
.pg-btn:hover { background: var(--pd); transform: translateY(-1px); }

@media (max-width: 768px) {
  .pg-option__table { grid-template-columns: 1fr; }
}
</style>
