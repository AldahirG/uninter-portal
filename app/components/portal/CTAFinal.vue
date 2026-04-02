<script setup lang="ts">
import { ref, reactive } from 'vue'
import { ArrowRight, CheckCircle, User, Mail, Phone, BookOpen } from 'lucide-vue-next'

const submitted = ref(false)
const loading = ref(false)

const form = reactive({
  nombre: '',
  email: '',
  telefono: '',
  programa: '',
})

const programas = [
  'Administración de Empresas',
  'Contaduría Pública',
  'Mercadotecnia',
  'Derecho',
  'Psicología',
  'Ingeniería en Sistemas',
  'Nutrición',
  'Diseño Gráfico',
  'Arquitectura',
  'Otro / No sé aún',
]

const handleSubmit = async () => {
  if (!form.nombre || !form.email) return
  loading.value = true
  await new Promise(r => setTimeout(r, 1200))
  loading.value = false
  submitted.value = true
}
</script>

<template>
  <section class="cta-section">

    <!-- Background elements -->
    <div class="cta-bg">
      <div class="cta-bg__blob cta-bg__blob--1"></div>
      <div class="cta-bg__blob cta-bg__blob--2"></div>
      <div class="cta-bg__grid"></div>
    </div>

    <div class="cta-container">
      <div class="cta-inner">

        <!-- ── Left copy ─────────────────────────── -->
        <div class="cta-copy">
          <div class="cta-eyebrow">
            <span class="cta-eyebrow__line"></span>
            <span>Da el siguiente paso</span>
          </div>

          <h2 class="cta-title">
            Tu futuro<br>
            <em>empieza hoy</em>
          </h2>

          <p class="cta-subtitle">
            Llena el formulario y un asesor académico
            te contactará en menos de 24 horas con toda
            la información que necesitas.
          </p>

          <ul class="cta-checklist">
            <li v-for="item in [
              'Sin costo ni compromiso',
              'Asesoría personalizada',
              'Información sobre becas disponibles',
              'Proceso de admisión paso a paso',
            ]" :key="item" class="cta-check">
              <CheckCircle :size="16" class="cta-check__icon" />
              {{ item }}
            </li>
          </ul>

          <!-- Trust row -->
          <div class="cta-trust">
            <div class="cta-trust__item">
              <span class="cta-trust__n">4,500+</span>
              <span class="cta-trust__l">Egresados</span>
            </div>
            <div class="cta-trust__sep"></div>
            <div class="cta-trust__item">
              <span class="cta-trust__n">30+</span>
              <span class="cta-trust__l">Años</span>
            </div>
            <div class="cta-trust__sep"></div>
            <div class="cta-trust__item">
              <span class="cta-trust__n">RVOE</span>
              <span class="cta-trust__l">Acreditado</span>
            </div>
          </div>
        </div>

        <!-- ── Form card ─────────────────────────── -->
        <div class="cta-card">

          <!-- Success state -->
          <Transition name="cta-success">
            <div v-if="submitted" class="cta-success">
              <div class="cta-success__icon">
                <CheckCircle :size="40" />
              </div>
              <h3 class="cta-success__title">¡Solicitud enviada!</h3>
              <p class="cta-success__text">
                Un asesor académico se pondrá en contacto contigo
                en menos de 24 horas. Revisa tu correo electrónico.
              </p>
              <a href="/universidad" class="cta-btn cta-btn--solid" style="margin-top: 1rem; display: inline-flex;">
                Explorar programas
                <ArrowRight :size="15" />
              </a>
            </div>
          </Transition>

          <!-- Form -->
          <template v-if="!submitted">
            <div class="cta-card__header">
              <h3 class="cta-card__title">Solicita información</h3>
              <p class="cta-card__sub">Gratis, sin compromiso</p>
            </div>

            <div class="cta-form">
              <!-- Nombre -->
              <div class="cta-field">
                <label class="cta-label">Nombre completo</label>
                <div class="cta-input-wrap">
                  <User :size="14" class="cta-input-icon" />
                  <input
                    v-model="form.nombre"
                    type="text"
                    placeholder="Ej. María García"
                    class="cta-input"
                    required
                  />
                </div>
              </div>

              <!-- Email -->
              <div class="cta-field">
                <label class="cta-label">Correo electrónico</label>
                <div class="cta-input-wrap">
                  <Mail :size="14" class="cta-input-icon" />
                  <input
                    v-model="form.email"
                    type="email"
                    placeholder="correo@ejemplo.com"
                    class="cta-input"
                    required
                  />
                </div>
              </div>

              <!-- Teléfono -->
              <div class="cta-field">
                <label class="cta-label">Teléfono <span class="cta-label--opt">(opcional)</span></label>
                <div class="cta-input-wrap">
                  <Phone :size="14" class="cta-input-icon" />
                  <input
                    v-model="form.telefono"
                    type="tel"
                    placeholder="(777) 000 0000"
                    class="cta-input"
                  />
                </div>
              </div>

              <!-- Programa -->
              <div class="cta-field">
                <label class="cta-label">Programa de interés</label>
                <div class="cta-input-wrap">
                  <BookOpen :size="14" class="cta-input-icon" />
                  <select v-model="form.programa" class="cta-input cta-select">
                    <option value="" disabled>Selecciona un programa</option>
                    <option v-for="p in programas" :key="p" :value="p">{{ p }}</option>
                  </select>
                </div>
              </div>

              <!-- Submit -->
              <button
                class="cta-submit"
                :class="{ 'cta-submit--loading': loading }"
                :disabled="loading || !form.nombre || !form.email"
                @click="handleSubmit"
              >
                <span v-if="!loading">
                  Quiero información gratuita
                  <ArrowRight :size="16" />
                </span>
                <span v-else class="cta-spinner"></span>
              </button>

              <p class="cta-privacy">
                <Icon name="mdi:lock-outline" size="11" />
                Tus datos están protegidos. No compartimos tu información.
              </p>
            </div>
          </template>

        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.cta-section {
  --cta-bg:      #04080f;
  --cta-surface: #0a1220;
  --cta-border:  rgba(255,255,255,0.08);
  --cta-text:    #dde6f4;
  --cta-muted:   #6a85a8;
  --cta-primary: #0F3C61;
  --cta-light:   #4A90C4;
  --cta-radius:  12px;

  background: var(--cta-bg);
  padding: 6rem 0;
  position: relative;
  overflow: hidden;
}

/* Background decorations */
.cta-bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.cta-bg__blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(90px);
  opacity: 0.18;
}

.cta-bg__blob--1 {
  width: 500px;
  height: 500px;
  background: #0F3C61;
  top: -100px;
  left: -100px;
}

.cta-bg__blob--2 {
  width: 400px;
  height: 400px;
  background: #1565C0;
  bottom: -80px;
  right: -80px;
  opacity: 0.12;
}

.cta-bg__grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
  background-size: 60px 60px;
}

.cta-container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;
}

.cta-inner {
  display: grid;
  grid-template-columns: 1fr 420px;
  gap: 4rem;
  align-items: center;
}

@media (max-width: 900px) {
  .cta-inner {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
}

/* Copy */
.cta-eyebrow {
  display: flex;
  align-items: center;
  gap: 0.625rem;
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--cta-light);
  margin-bottom: 1rem;
}

.cta-eyebrow__line {
  display: block;
  width: 26px;
  height: 2px;
  background: var(--cta-light);
}

.cta-title {
  font-family: var(--font-serif, Georgia, serif);
  font-size: clamp(2rem, 4vw, 3.2rem);
  font-weight: 700;
  color: var(--cta-text);
  line-height: 1.1;
  letter-spacing: -0.02em;
  margin: 0 0 1.25rem;
}

.cta-title em {
  font-style: italic;
  color: var(--cta-light);
}

.cta-subtitle {
  font-size: 0.9rem;
  color: var(--cta-muted);
  line-height: 1.7;
  max-width: 440px;
  margin: 0 0 2rem;
}

.cta-checklist {
  list-style: none;
  padding: 0;
  margin: 0 0 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
}

.cta-check {
  display: flex;
  align-items: center;
  gap: 0.625rem;
  font-size: 0.85rem;
  color: var(--cta-text);
}

.cta-check__icon { color: var(--cta-light); flex-shrink: 0; }

/* Trust row */
.cta-trust {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 1.25rem 1.5rem;
  background: rgba(255,255,255,0.03);
  border: 1px solid var(--cta-border);
  border-radius: var(--cta-radius);
  max-width: 380px;
}

.cta-trust__item {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.cta-trust__n {
  font-family: var(--font-serif, Georgia, serif);
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--cta-text);
  line-height: 1;
}

.cta-trust__l {
  font-size: 0.62rem;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: var(--cta-muted);
}

.cta-trust__sep {
  width: 1px;
  height: 30px;
  background: var(--cta-border);
}

/* Card */
.cta-card {
  background: var(--cta-surface);
  border: 1px solid var(--cta-border);
  border-radius: var(--cta-radius);
  padding: 2rem;
  position: relative;
  box-shadow: 0 24px 64px rgba(0,0,0,0.45);
}

.cta-card__header {
  margin-bottom: 1.5rem;
  padding-bottom: 1.25rem;
  border-bottom: 1px solid var(--cta-border);
}

.cta-card__title {
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--cta-text);
  margin: 0 0 4px;
}

.cta-card__sub {
  font-size: 0.75rem;
  color: var(--cta-muted);
  margin: 0;
}

/* Form */
.cta-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.cta-field { display: flex; flex-direction: column; gap: 6px; }

.cta-label {
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  color: var(--cta-muted);
  text-transform: uppercase;
}

.cta-label--opt {
  font-weight: 400;
  text-transform: none;
  letter-spacing: 0;
  color: var(--cta-muted);
  opacity: 0.7;
}

.cta-input-wrap {
  position: relative;
  display: flex;
  align-items: center;
}

.cta-input-icon {
  position: absolute;
  left: 0.75rem;
  color: var(--cta-muted);
  pointer-events: none;
  flex-shrink: 0;
}

.cta-input {
  width: 100%;
  background: rgba(255,255,255,0.04);
  border: 1px solid var(--cta-border);
  border-radius: 8px;
  padding: 0.6rem 0.75rem 0.6rem 2.25rem;
  font-size: 0.82rem;
  color: var(--cta-text);
  outline: none;
  transition: border-color 0.2s;
  box-sizing: border-box;
}

.cta-input::placeholder { color: var(--cta-muted); }
.cta-input:focus { border-color: var(--cta-light); }

.cta-select {
  cursor: pointer;
  appearance: none;
}
.cta-select option { background: #0a1220; }

.cta-submit {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
  padding: 0.85rem;
  background: var(--cta-primary);
  color: #fff;
  font-size: 0.88rem;
  font-weight: 700;
  letter-spacing: 0.02em;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.2s, opacity 0.2s;
  margin-top: 0.5rem;
}

.cta-submit:hover:not(:disabled) { background: #1a5490; }
.cta-submit:disabled { opacity: 0.5; cursor: not-allowed; }

.cta-spinner {
  width: 18px;
  height: 18px;
  border: 2px solid rgba(255,255,255,0.3);
  border-top-color: #fff;
  border-radius: 50%;
  animation: spin 0.7s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.cta-privacy {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  font-size: 0.68rem;
  color: var(--cta-muted);
  margin: 0;
  text-align: center;
}

/* Success */
.cta-success {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 1rem 0;
}

.cta-success__icon {
  width: 72px;
  height: 72px;
  border-radius: 50%;
  background: rgba(15, 60, 97, 0.25);
  border: 1px solid rgba(74, 144, 196, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--cta-light);
  margin-bottom: 1.25rem;
}

.cta-success__title {
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--cta-text);
  margin: 0 0 0.625rem;
}

.cta-success__text {
  font-size: 0.85rem;
  color: var(--cta-muted);
  line-height: 1.6;
  max-width: 300px;
  margin: 0;
}

.cta-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  padding: 0.6rem 1.25rem;
  font-size: 0.82rem;
  font-weight: 700;
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.2s;
  cursor: pointer;
}

.cta-btn--solid {
  background: var(--cta-primary);
  color: #fff;
}
.cta-btn--solid:hover { background: #1a5490; }

/* Success transition */
.cta-success-enter-active { transition: opacity 0.3s ease; }
.cta-success-enter-from   { opacity: 0; }

/* ── RESPONSIVE ─────────────────────────────────────────── */
@media (max-width: 1024px) {
  .cta-inner {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
  .cta-section { padding: 4.5rem 0; }
}

@media (max-width: 768px) {
  .cta-section { padding: 3.5rem 0; }
  .cta-container { padding: 0 1rem; }

  .cta-title { font-size: clamp(1.75rem, 6vw, 2.6rem); }
  .cta-subtitle { font-size: 0.85rem; margin-bottom: 1.5rem; }

  .cta-checklist { margin-bottom: 1.5rem; }
  .cta-check { font-size: 0.82rem; }

  .cta-trust {
    max-width: 100%;
    gap: 1rem;
    padding: 1rem 1.25rem;
    justify-content: space-around;
  }
  .cta-trust__n { font-size: 1.25rem; }

  .cta-card { padding: 1.5rem; }
  .cta-card__title { font-size: 1rem; }
}

@media (max-width: 480px) {
  .cta-section { padding: 2.5rem 0; }
  .cta-container { padding: 0 0.875rem; }

  /* Ocultar checklist en mobile pequeño — reduce scroll */
  .cta-checklist { display: none; }

  .cta-trust { gap: 0.75rem; padding: 0.875rem 1rem; }
  .cta-trust__sep { display: none; }

  .cta-card { padding: 1.25rem; }
  .cta-submit { font-size: 0.82rem; padding: 0.75rem; }

  /* Blobs decorativos: reducir para no sobrecargar mobile */
  .cta-bg__blob--1 { width: 260px; height: 260px; }
  .cta-bg__blob--2 { display: none; }
}
</style>