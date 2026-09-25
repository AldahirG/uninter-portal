<script setup lang="ts">
import { ref, computed } from "vue";
import {
  Globe,
  Award,
  Building2,
  Languages,
  CheckCircle2,
  Clock,
  Sparkles,
  X,
  ArrowRight,
  ShieldCheck,
  FileCheck,
  Calendar,
  Users,
  MapPin,
  BookOpen,
  MessageCircle,
} from "lucide-vue-next";
import alianzasData from "@/assets/data/bachilleratoAlianzas.json";

const props = withDefaults(
  defineProps<{
    mode?: "all" | "bilingue" | "multicultural";
  }>(),
  {
    mode: "all",
  }
);

const WA_PHONE = "5217776154241";

// Estadísticas clave de apertura
const globalStats = [
  { value: "10+", label: "Meses de intercambio oficial con revalidación SEP", icon: Calendar },
  { value: "25+", label: "Países con certificación International House", icon: Globe },
  { value: "4", label: "Idiomas con certificación oficial (EN, FR, IT, ES)", icon: Languages },
  { value: "ISO", label: "9001:2015 con recertificación anual en Didáctica", icon: ShieldCheck },
];

// Lista de intercambios
const intercambios = computed(() => {
  if (props.mode === "all") return alianzasData.intercambios;
  return alianzasData.intercambios.filter((item) =>
    item.programas.includes(props.mode)
  );
});

// Lista de certificaciones
const certificaciones = computed(() => {
  if (props.mode === "all") return alianzasData.certificaciones;
  return alianzasData.certificaciones.filter((item) =>
    item.programas.includes(props.mode)
  );
});

// Modal state
const modalOpen = ref(false);
const selectedItem = ref<any>(null);
const selectedCategory = ref<"intercambio" | "certificacion">("intercambio");

function openModal(item: any, category: "intercambio" | "certificacion") {
  selectedItem.value = item;
  selectedCategory.value = category;
  modalOpen.value = true;
  if (typeof document !== "undefined") {
    document.body.style.overflow = "hidden";
  }
}

function closeModal() {
  modalOpen.value = false;
  selectedItem.value = null;
  if (typeof document !== "undefined") {
    document.body.style.overflow = "";
  }
}

function openWhatsAppForProgram() {
  if (!selectedItem.value) return;
  let text = "";
  if (selectedCategory.value === "intercambio") {
    text = `¡Hola! Vengo del portal de Bachillerato BIU UNINTER y me interesa recibir información detallada sobre el programa de movilidad/intercambio de *${selectedItem.value.nombre}* (${selectedItem.value.badge || selectedItem.value.duracion}). ¿Podrían orientarme sobre los requisitos y proceso de postulación?`;
  } else {
    text = `¡Hola! Vengo del portal de Bachillerato BIU UNINTER y me gustaría recibir información sobre la certificación oficial de *${selectedItem.value.nombre}* (${selectedItem.value.idioma} · ${selectedItem.value.nivel}). ¿Podrían orientarme sobre las fechas y el proceso de preparación/evaluación?`;
  }
  const url = `https://wa.me/${WA_PHONE}?text=${encodeURIComponent(text)}`;
  window.open(url, "_blank");
}

function openWhatsAppForTour() {
  const text =
    "¡Hola! Vengo del portal de Bachillerato BIU UNINTER. Me gustaría agendar un recorrido en el campus para conocer las instalaciones, talleres y resolver dudas con un asesor académico sobre los programas de estudio. ¿Qué días y horarios tienen disponibles para la visita guiada?";
  const url = `https://wa.me/${WA_PHONE}?text=${encodeURIComponent(text)}`;
  window.open(url, "_blank");
}
</script>

<template>
  <section class="inter-section" id="alianzas-certificaciones">
    <!-- 1. HERO BANNER DE PROYECCIÓN INTERNACIONAL -->
    <div class="inter-banner">
      <img
        src="/images/stock/Inter.jpg"
        alt="Internacionalización BIU UNINTER"
        class="inter-banner__img"
        onerror="this.src='/images/hero/Inter.svg'"
      />
      <div class="inter-banner__overlay"></div>
      <div class="biu-container inter-banner__content">
        <div class="inter-banner__inner">
          <div class="inter-eyebrow">
            <span class="eyebrow-line"></span>
            PROYECCIÓN GLOBAL & VALIDEZ OFICIAL
          </div>
          <h2 class="inter-title">
            Alianzas globales y<br />
            <em>certificaciones oficiales</em>
          </h2>
          <p class="inter-desc">
            En BIU UNINTER tu formación trasciende las fronteras. Accede a estancias académicas en Estados Unidos,
            intercambios escolares con valor oficial de 10 meses y certificaciones avaladas por Cambridge, la SEP,
            el Ministerio Francés y la Unión Europea.
          </p>
        </div>
      </div>
    </div>

    <!-- 2. FRANJA DE INDICADORES DE IMPACTO -->
    <div class="inter-stats-bar">
      <div class="biu-container">
        <div class="inter-stats-grid">
          <div v-for="st in globalStats" :key="st.label" class="stat-pill">
            <div class="stat-pill__icon">
              <component :is="st.icon" :size="22" />
            </div>
            <div class="stat-pill__info">
              <span class="stat-pill__value">{{ st.value }}</span>
              <span class="stat-pill__label">{{ st.label }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 3. BLOQUE 1: MOVILIDAD & INTERCAMBIOS INTERNACIONALES -->
    <div class="inter-block inter-block--movilidad">
      <div class="biu-container">
        <div class="section-heading">
          <div class="biu-eyebrow">
            <span class="eyebrow-line"></span> ALIANZAS Y CONVENIOS VIGENTES
          </div>
          <h3 class="section-title">
            Movilidad e intercambios <em>académico-culturales</em>
          </h3>
          <p class="section-subtitle">
            Convenios activos con instituciones internacionales de prestigio para cursar estancias académicas reales con revalidación oficial, desarrollo multicultural y aprendizaje vivencial.
          </p>
        </div>

        <div class="inter-grid">
          <div
            v-for="item in intercambios"
            :key="item.id"
            class="inter-card"
            @click="openModal(item, 'intercambio')"
          >
            <div class="inter-card__header">
              <span class="inter-card__badge">{{ item.badge }}</span>
              <span class="inter-card__type">{{ item.tipo }}</span>
            </div>

            <div class="inter-card__body">
              <h4 class="inter-card__title">{{ item.nombre }}</h4>
              <p class="inter-card__tagline">{{ item.tagline }}</p>
              <p class="inter-card__desc">{{ item.descripcionCorta }}</p>
            </div>

            <div class="inter-card__footer">
              <button
                type="button"
                class="btn-card-action"
                @click.stop="openModal(item, 'intercambio')"
              >
                <span>Ver requisitos y alcance</span>
                <ArrowRight :size="16" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 4. BLOQUE 2: CERTIFICACIONES OFICIALES & CALIDAD DIDÁCTICA (DEBAJO DE INTERCAMBIOS) -->
    <div class="inter-block inter-block--certificaciones">
      <div class="biu-container">
        <div class="section-heading">
          <div class="biu-eyebrow">
            <span class="eyebrow-line"></span> VALIDEZ CURRICULAR & EXCELENCIA
          </div>
          <h3 class="section-title">
            Certificaciones oficiales de <em>idiomas y calidad</em>
          </h3>
          <p class="section-subtitle">
            Acredita tus competencias en inglés, francés e italiano con reconocimiento permanente de la SEP, Cambridge y organismos internacionales, respaldado por la norma ISO 9001 en Didáctica.
          </p>
        </div>

        <div class="cert-grid">
          <div
            v-for="cert in certificaciones"
            :key="cert.id"
            class="cert-card"
            :style="{ '--accent-color': cert.color }"
            @click="openModal(cert, 'certificacion')"
          >
            <div class="cert-card__top">
              <span class="cert-badge">{{ cert.badge }}</span>
              <span class="cert-lang">{{ cert.idioma }}</span>
            </div>

            <div class="cert-card__main">
              <h4 class="cert-title">{{ cert.nombre }}</h4>
              <p class="cert-level">
                <ShieldCheck :size="16" class="cert-level__icon" />
                <span>{{ cert.nivel }}</span>
              </p>
              <p class="cert-aval">
                <strong>Aval:</strong> {{ cert.aval }}
              </p>
              <p class="cert-desc">{{ cert.tagline }}</p>
            </div>

            <div class="cert-card__bottom">
              <button
                type="button"
                class="btn-cert-detail"
                @click.stop="openModal(cert, 'certificacion')"
              >
                <span>Conocer beneficios y trámite</span>
                <Sparkles :size="15" />
              </button>
            </div>
          </div>
        </div>

        <!-- NOTA INFORMATIVA DE RESPALDO INSTITUCIONAL -->
        <div class="inter-footnote">
          <div class="footnote-inner">
            <div class="footnote-icon">
              <FileCheck :size="24" />
            </div>
            <div class="footnote-text">
              <p class="footnote-title">
                Asesoría personalizada y recorridos guiados en campus
              </p>
              <p class="footnote-desc">
                Todos los trámites de registro a exámenes, validación de expedientes para intercambios y gestión de certificaciones oficiales se coordinan de forma personalizada. Conoce las instalaciones y laboratorios agendando una visita guiada.
              </p>
            </div>
            <button
              type="button"
              class="footnote-btn"
              @click="openWhatsAppForTour"
            >
              <MessageCircle :size="18" />
              <span>Agendar recorrido en campus</span>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- 5. MODAL DETALLADO REUTILIZABLE (BAJO DEMANDA) -->
    <Transition name="modal-fade">
      <div
        v-if="modalOpen && selectedItem"
        class="inter-modal-overlay"
        @click.self="closeModal"
      >
        <div class="inter-modal-card" role="dialog" aria-modal="true">
          <!-- Botón de Cerrar -->
          <button
            type="button"
            class="modal-close"
            @click="closeModal"
            aria-label="Cerrar modal"
          >
            <X :size="22" />
          </button>

          <!-- Cabecera del Modal -->
          <div class="modal-header">
            <div class="modal-header__badge-wrap">
              <span class="modal-badge">{{ selectedItem.badge }}</span>
              <span class="modal-category">
                {{ selectedCategory === 'intercambio' ? 'Movilidad Internacional' : 'Certificación Oficial' }}
              </span>
            </div>
            <h3 class="modal-title">{{ selectedItem.nombre }}</h3>
            <p class="modal-tagline">{{ selectedItem.tagline }}</p>
          </div>

          <!-- Contenido del Modal -->
          <div class="modal-body">
            <!-- Caso Intercambio -->
            <template v-if="selectedCategory === 'intercambio'">
              <div class="modal-info-bar">
                <div class="info-item">
                  <Clock :size="18" class="info-icon" />
                  <div>
                    <span class="info-label">DURACIÓN</span>
                    <span class="info-value">{{ selectedItem.duracion }}</span>
                  </div>
                </div>
                <div class="info-item" v-if="selectedItem.ubicacion">
                  <MapPin :size="18" class="info-icon" />
                  <div>
                    <span class="info-label">DESTINO</span>
                    <span class="info-value">{{ selectedItem.ubicacion }}</span>
                  </div>
                </div>
                <div class="info-item">
                  <ShieldCheck :size="18" class="info-icon" />
                  <div>
                    <span class="info-label">TIPO</span>
                    <span class="info-value">{{ selectedItem.tipo }}</span>
                  </div>
                </div>
              </div>

              <div class="modal-desc-block">
                <p>{{ selectedItem.descripcionCorta }}</p>
                <div class="desc-highlight" v-if="selectedItem.acreditacion">
                  <Award :size="20" class="highlight-icon" />
                  <p><strong>Acreditación escolar:</strong> {{ selectedItem.acreditacion }}</p>
                </div>
              </div>

              <!-- Requisitos / Compromisos -->
              <div class="modal-reqs" v-if="selectedItem.requisitos?.length">
                <h4 class="reqs-title">
                  <CheckCircle2 :size="18" class="reqs-icon" />
                  Requisitos, proceso y compromisos
                </h4>
                <ul class="reqs-list">
                  <li v-for="(req, rIdx) in selectedItem.requisitos" :key="rIdx">
                    <span class="req-bullet"></span>
                    <span>{{ req }}</span>
                  </li>
                </ul>
              </div>

              <!-- Carácter formativo -->
              <div class="modal-note" v-if="selectedItem.caracter">
                <p><strong>Enfoque formativo:</strong> {{ selectedItem.caracter }}</p>
              </div>

              <!-- Contacto interno -->
              <div class="modal-contact">
                <Users :size="18" class="contact-icon" />
                <p>
                  <strong>Área responsable de vinculación:</strong> {{ selectedItem.contacto }}
                </p>
              </div>
            </template>

            <!-- Caso Certificación -->
            <template v-else>
              <div class="modal-info-bar">
                <div class="info-item">
                  <Languages :size="18" class="info-icon" />
                  <div>
                    <span class="info-label">IDIOMA / ÁREA</span>
                    <span class="info-value">{{ selectedItem.idioma }}</span>
                  </div>
                </div>
                <div class="info-item">
                  <Award :size="18" class="info-icon" />
                  <div>
                    <span class="info-label">NIVEL / FORMATO</span>
                    <span class="info-value">{{ selectedItem.nivel }}</span>
                  </div>
                </div>
                <div class="info-item">
                  <ShieldCheck :size="18" class="info-icon" />
                  <div>
                    <span class="info-label">INSTANCIA EVALUADORA</span>
                    <span class="info-value">{{ selectedItem.aval }}</span>
                  </div>
                </div>
              </div>

              <div class="modal-desc-block">
                <p>{{ selectedItem.descripcion }}</p>
              </div>

              <!-- Beneficios de la certificación -->
              <div class="modal-reqs" v-if="selectedItem.beneficios?.length">
                <h4 class="reqs-title">
                  <CheckCircle2 :size="18" class="reqs-icon" />
                  Valor y beneficios para el alumno
                </h4>
                <ul class="reqs-list">
                  <li v-for="(ben, bIdx) in selectedItem.beneficios" :key="bIdx">
                    <span class="req-bullet"></span>
                    <span>{{ ben }}</span>
                  </li>
                </ul>
              </div>

              <!-- Contacto interno -->
              <div class="modal-contact">
                <Building2 :size="18" class="contact-icon" />
                <p>
                  <strong>Gestión y aplicación del examen:</strong> {{ selectedItem.contacto }}
                </p>
              </div>
            </template>
          </div>

          <!-- Pie del Modal -->
          <div class="modal-footer">
            <button
              type="button"
              class="btn-modal-action"
              @click="openWhatsAppForProgram"
            >
              <MessageCircle :size="18" />
              <span>{{ selectedCategory === 'intercambio' ? 'Me interesa este programa' : 'Me interesa esta certificación' }}</span>
              <ArrowRight :size="16" />
            </button>
          </div>
        </div>
      </div>
    </Transition>
  </section>
</template>

<style scoped>
.inter-section {
  position: relative;
  background-color: #ffffff;
  color: #1e293b;
  overflow: hidden;
}

.biu-container {
  margin: 0 auto;
  max-width: 1280px;
  padding: 0 1.5rem;
}

/* ── 1. Hero Banner ── */
.inter-banner {
  align-items: center;
  background: #08210f;
  display: flex;
  min-height: clamp(340px, 46vh, 460px);
  overflow: hidden;
  position: relative;
}

.inter-banner__img {
  height: 100%;
  inset: 0;
  object-fit: cover;
  object-position: center center;
  position: absolute;
  width: 100%;
  opacity: 0.45;
}

.inter-banner__overlay {
  background: linear-gradient(
    115deg,
    rgba(8, 33, 15, 0.95) 0%,
    rgba(8, 33, 15, 0.88) 45%,
    rgba(8, 33, 15, 0.55) 100%
  );
  inset: 0;
  position: absolute;
}

.inter-banner__content {
  position: relative;
  width: 100%;
  z-index: 2;
  padding-top: 3.5rem;
  padding-bottom: 3.5rem;
}

.inter-banner__inner {
  max-width: 660px;
}

.inter-eyebrow {
  color: #9fe43a;
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 0.14em;
  margin: 0 0 1rem;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.eyebrow-line {
  background: #9fe43a;
  display: block;
  flex-shrink: 0;
  height: 2px;
  width: 26px;
}

.inter-title {
  color: #ffffff;
  font-family: var(--font-serif, Georgia, serif);
  font-size: clamp(2.1rem, 4.2vw, 3.4rem);
  font-weight: 800;
  letter-spacing: -0.02em;
  line-height: 1.12;
  margin: 0 0 1.25rem;
}

.inter-title em {
  color: #a3e635;
  font-style: normal;
}

.inter-desc {
  color: rgba(255, 255, 255, 0.88);
  font-size: 1rem;
  line-height: 1.65;
  margin: 0;
}

/* ── 2. Franja de Estadísticas ── */
.inter-stats-bar {
  background: #f1f8ee;
  border-top: 1px solid #dcf0d3;
  border-bottom: 1px solid #dcf0d3;
  padding: 1.5rem 0;
}

.inter-stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.25rem;
}

.stat-pill {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.5rem 0.75rem;
}

.stat-pill__icon {
  width: 46px;
  height: 46px;
  border-radius: 12px;
  background: #e2f5d7;
  color: #4a7a02;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.stat-pill__info {
  display: flex;
  flex-direction: column;
}

.stat-pill__value {
  font-size: 1.35rem;
  font-weight: 800;
  color: #2d5500;
  line-height: 1.1;
  font-family: var(--font-serif, Georgia, serif);
}

.stat-pill__label {
  font-size: 0.78rem;
  color: #475569;
  line-height: 1.35;
  margin-top: 2px;
}

/* ── 3. Bloques de Contenido Secuenciales ── */
.inter-block {
  padding: 5rem 0;
}

.inter-block--movilidad {
  background: #ffffff;
}

.inter-block--certificaciones {
  background: #f8fafc;
  border-top: 1px solid #e2e8f0;
}

.section-heading {
  margin-bottom: 3.25rem;
  max-width: 820px;
}

.section-heading .biu-eyebrow {
  color: #4a7a02;
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.14em;
  margin-bottom: 0.75rem;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.section-heading .eyebrow-line {
  background: #6baf04;
}

.section-title {
  color: #0f172a;
  font-family: var(--font-serif, Georgia, serif);
  font-size: clamp(1.85rem, 3.2vw, 2.75rem);
  font-weight: 800;
  line-height: 1.18;
  letter-spacing: -0.02em;
  margin: 0 0 1rem;
}

.section-title em {
  color: #558b03;
  font-style: normal;
}

.section-subtitle {
  color: #475569;
  font-size: 1rem;
  line-height: 1.65;
  margin: 0;
}

/* ── Grid de Intercambios (Bloque 1) ── */
.inter-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.75rem;
}

.inter-card {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  cursor: pointer;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.03);
  position: relative;
}

.inter-card:hover {
  transform: translateY(-4px);
  border-color: #84cc16;
  box-shadow: 0 16px 36px rgba(107, 175, 4, 0.12);
}

.inter-card__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.25rem;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.inter-card__badge {
  background: #e8f7dc;
  color: #3f6e02;
  font-size: 0.74rem;
  font-weight: 700;
  padding: 0.3rem 0.75rem;
  border-radius: 20px;
  letter-spacing: 0.02em;
}

.inter-card__type {
  font-size: 0.76rem;
  color: #64748b;
  font-weight: 600;
}

.inter-card__body {
  flex: 1;
}

.inter-card__title {
  color: #0f172a;
  font-size: 1.35rem;
  font-weight: 800;
  margin: 0 0 0.5rem;
  font-family: var(--font-serif, Georgia, serif);
}

.inter-card__tagline {
  color: #3b6b02;
  font-size: 0.9rem;
  font-weight: 600;
  line-height: 1.45;
  margin: 0 0 0.85rem;
}

.inter-card__desc {
  color: #64748b;
  font-size: 0.88rem;
  line-height: 1.55;
  margin: 0;
}

.inter-card__footer {
  margin-top: 1.5rem;
  padding-top: 1.25rem;
  border-top: 1px solid #f1f5f9;
}

.btn-card-action {
  background: none;
  border: none;
  color: #4a7a02;
  font-size: 0.88rem;
  font-weight: 700;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  padding: 0;
  transition: gap 0.2s, color 0.2s;
}

.inter-card:hover .btn-card-action {
  gap: 0.75rem;
  color: #2e5500;
}

/* ── Grid de Certificaciones (Bloque 2) ── */
.cert-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.cert-card {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  padding: 1.75rem;
  display: flex;
  flex-direction: column;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  cursor: pointer;
  position: relative;
  box-shadow: 0 3px 12px rgba(0, 0, 0, 0.03);
}

.cert-card:hover {
  transform: translateY(-4px);
  border-color: #cbd5e1;
  box-shadow: 0 14px 30px rgba(0, 0, 0, 0.08);
}

.cert-card__top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.15rem;
  gap: 0.5rem;
}

.cert-badge {
  background: #f1f5f9;
  color: #1e293b;
  font-size: 0.72rem;
  font-weight: 700;
  padding: 0.28rem 0.65rem;
  border-radius: 6px;
  border-left: 3px solid var(--accent-color, #6baf04);
}

.cert-lang {
  font-size: 0.74rem;
  font-weight: 700;
  color: #64748b;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.cert-card__main {
  flex: 1;
}

.cert-title {
  color: #0f172a;
  font-size: 1.15rem;
  font-weight: 800;
  margin: 0 0 0.5rem;
  line-height: 1.3;
}

.cert-level {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  color: var(--accent-color, #4a7a02);
  font-size: 0.8rem;
  font-weight: 700;
  margin: 0 0 0.6rem;
}

.cert-aval {
  color: #475569;
  font-size: 0.8rem;
  line-height: 1.4;
  margin: 0 0 0.85rem;
}

.cert-desc {
  color: #64748b;
  font-size: 0.84rem;
  line-height: 1.5;
  margin: 0;
}

.cert-card__bottom {
  margin-top: 1.4rem;
  padding-top: 1.1rem;
  border-top: 1px solid #f1f5f9;
}

.btn-cert-detail {
  background: none;
  border: none;
  color: #0f172a;
  font-size: 0.82rem;
  font-weight: 700;
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  cursor: pointer;
  padding: 0;
  transition: color 0.2s;
}

.cert-card:hover .btn-cert-detail {
  color: #4a7a02;
}

/* ── Nota al Pie Institucional ── */
.inter-footnote {
  margin-top: 3.5rem;
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);
}

.footnote-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
}

.footnote-icon {
  width: 52px;
  height: 52px;
  border-radius: 14px;
  background: #edf8e7;
  color: #4a7a02;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.footnote-text {
  flex: 1;
}

.footnote-title {
  color: #0f172a;
  font-size: 1.05rem;
  font-weight: 800;
  margin: 0 0 0.25rem;
}

.footnote-desc {
  color: #64748b;
  font-size: 0.88rem;
  line-height: 1.55;
  margin: 0;
}

.footnote-btn {
  background: #4a7a02;
  color: #ffffff;
  padding: 0.85rem 1.6rem;
  border-radius: 10px;
  font-weight: 700;
  font-size: 0.88rem;
  border: none;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  white-space: nowrap;
  transition: background 0.2s, transform 0.2s;
  flex-shrink: 0;
}

.footnote-btn:hover {
  background: #3b6301;
  transform: translateY(-2px);
}

/* ── 5. Modal Interactivo Reutilizable ── */
.inter-modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(15, 23, 42, 0.7);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
}

.inter-modal-card {
  background: #ffffff;
  border-radius: 20px;
  max-width: 680px;
  width: 100%;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  position: relative;
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  animation: modalPop 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

@keyframes modalPop {
  from {
    opacity: 0;
    transform: scale(0.95) translateY(10px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

.modal-close {
  position: absolute;
  top: 1.25rem;
  right: 1.25rem;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  border: none;
  background: #f1f5f9;
  color: #64748b;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s;
  z-index: 10;
}

.modal-close:hover {
  background: #e2e8f0;
  color: #0f172a;
}

.modal-header {
  padding: 2.25rem 2.25rem 1.25rem;
  border-bottom: 1px solid #f1f5f9;
}

.modal-header__badge-wrap {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
}

.modal-badge {
  background: #ecfccb;
  color: #3f6212;
  font-size: 0.72rem;
  font-weight: 700;
  padding: 0.25rem 0.65rem;
  border-radius: 12px;
}

.modal-category {
  font-size: 0.75rem;
  font-weight: 600;
  color: #64748b;
  text-transform: uppercase;
}

.modal-title {
  color: #0f172a;
  font-size: 1.65rem;
  font-weight: 800;
  margin: 0 0 0.5rem;
  font-family: var(--font-serif, Georgia, serif);
  padding-right: 2rem;
}

.modal-tagline {
  color: #475569;
  font-size: 0.95rem;
  line-height: 1.45;
  margin: 0;
}

.modal-body {
  padding: 1.75rem 2.25rem;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.modal-info-bar {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  background: #f8fafc;
  padding: 1rem 1.25rem;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
}

.info-item {
  display: flex;
  align-items: flex-start;
  gap: 0.6rem;
}

.info-icon {
  color: #4a7a02;
  flex-shrink: 0;
  margin-top: 2px;
}

.info-label {
  display: block;
  font-size: 0.68rem;
  font-weight: 700;
  color: #64748b;
  letter-spacing: 0.05em;
}

.info-value {
  display: block;
  font-size: 0.85rem;
  font-weight: 700;
  color: #0f172a;
  line-height: 1.3;
}

.modal-desc-block p {
  color: #334155;
  font-size: 0.95rem;
  line-height: 1.6;
  margin: 0;
}

.desc-highlight {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  background: #f0fdf4;
  border: 1px solid #bbf7d0;
  padding: 1rem 1.25rem;
  border-radius: 10px;
  margin-top: 1rem;
  color: #166534;
  font-size: 0.9rem;
  line-height: 1.5;
}

.highlight-icon {
  color: #16a34a;
  flex-shrink: 0;
  margin-top: 2px;
}

.modal-reqs {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 1.25rem 1.5rem;
}

.reqs-title {
  color: #0f172a;
  font-size: 0.95rem;
  font-weight: 800;
  margin: 0 0 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.reqs-icon {
  color: #4a7a02;
}

.reqs-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.reqs-list li {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  color: #475569;
  font-size: 0.88rem;
  line-height: 1.55;
}

.req-bullet {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #65a30d;
  flex-shrink: 0;
  margin-top: 8px;
}

.modal-note {
  background: #fefce8;
  border-left: 4px solid #eab308;
  padding: 0.85rem 1.15rem;
  border-radius: 0 8px 8px 0;
  color: #713f12;
  font-size: 0.86rem;
  line-height: 1.5;
}

.modal-note p {
  margin: 0;
}

.modal-contact {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.85rem 1.15rem;
  background: #f1f5f9;
  border-radius: 10px;
  color: #334155;
  font-size: 0.86rem;
}

.modal-contact p {
  margin: 0;
}

.contact-icon {
  color: #475569;
  flex-shrink: 0;
}

.modal-footer {
  padding: 1.25rem 2.25rem;
  border-top: 1px solid #f1f5f9;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background: #f8fafc;
}

.btn-modal-action {
  background: #4a7a02;
  border: none;
  color: #ffffff;
  padding: 0.8rem 1.6rem;
  border-radius: 10px;
  font-weight: 700;
  font-size: 0.9rem;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  transition: background 0.2s, transform 0.2s;
}

.btn-modal-action:hover {
  background: #3b6301;
  transform: translateY(-2px);
}

/* Modal Transition */
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.25s ease;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}

/* ── Responsividad ── */
@media (max-width: 1024px) {
  .inter-stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .cert-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .inter-block {
    padding: 3.5rem 0;
  }
  .inter-grid {
    grid-template-columns: 1fr;
  }
  .cert-grid {
    grid-template-columns: 1fr;
  }
  .footnote-inner {
    flex-direction: column;
    align-items: flex-start;
    gap: 1.25rem;
  }
  .footnote-btn {
    width: 100%;
    text-align: center;
  }
  .modal-info-bar {
    grid-template-columns: 1fr;
    gap: 0.75rem;
  }
  .modal-header,
  .modal-body,
  .modal-footer {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
  .btn-modal-action {
    width: 100%;
    justify-content: center;
  }
}

@media (max-width: 560px) {
  .inter-stats-grid {
    grid-template-columns: 1fr;
  }
  .inter-banner {
    min-height: 300px;
  }
  .inter-title {
    font-size: 1.9rem;
  }
}
</style>
