<script setup lang="ts">
import { ref } from "vue";
import {
  ChevronRight,
  User,
  Mail,
  Phone,
  CheckCircle2,
  RefreshCcw,
  Award,
  BookOpen,
  Globe,
  Clock,
  Check,
} from "lucide-vue-next";

const step = ref(1);

const form = ref({
  nivel: "Licenciatura",
  nombre: "",
  paterno: "",
  materno: "",
  correo: "",
  telefono: "",
});

const simularBeca = () => {
  step.value = 2;
};

const reiniciar = () => {
  form.value.nombre = "";
  form.value.paterno = "";
  form.value.materno = "";
  form.value.correo = "";
  form.value.telefono = "";
  step.value = 1;
};

const highlights = [
  { icon: Award, value: "Hasta 60%", label: "de beca disponible" },
  { icon: BookOpen, value: "23", label: "licenciaturas presenciales" },
  { icon: Globe, value: "71,000+", label: "egresados en México y el mundo" },
  { icon: Clock, value: "4 años", label: "duración promedio" },
];

const benefits = [
  "Colegiatura mensual con descuento garantizado",
  "Acceso a instalaciones de clase mundial",
  "Movilidad e intercambio internacional",
  "Bolsa de trabajo Enlace Profesional UNINTER",
  "Talleres deportivos y culturales incluidos",
];
</script>

<template>
  <section class="beca-section">
    <div class="beca-container">

      <!-- Columna izquierda: información -->
      <div class="beca-info">
        <p class="beca-eyebrow">Apoyo económico</p>
        <h2 class="beca-title">Calcula tu<br /><em>porcentaje de beca</em></h2>
        <p class="beca-desc">
          En UNINTER creemos que el talento no debe tener límites económicos.
          Completa el formulario y descubre de inmediato qué porcentaje de beca
          puedes obtener para iniciar tu licenciatura presencial.
        </p>

        <!-- Métricas destacadas -->
        <div class="beca-highlights">
          <div v-for="h in highlights" :key="h.label" class="beca-hl">
            <div class="beca-hl__icon">
              <component :is="h.icon" :size="20" />
            </div>
            <div>
              <p class="beca-hl__value">{{ h.value }}</p>
              <p class="beca-hl__label">{{ h.label }}</p>
            </div>
          </div>
        </div>

        <!-- Lista de beneficios -->
        <div class="beca-benefits">
          <p class="beca-benefits__heading">Beneficios incluidos con tu beca</p>
          <ul class="beca-benefits__list">
            <li v-for="b in benefits" :key="b" class="beca-benefits__item">
              <Check :size="14" class="beca-benefits__check" />
              {{ b }}
            </li>
          </ul>
        </div>
      </div>

      <!-- Columna derecha: formulario / resultado -->
      <div class="beca-form-wrap">
        <div class="beca-form-card">
          <div class="beca-form-card__header">
            <img src="/images/logo-uninter.png" alt="UNINTER" class="beca-form-logo" />
            <p class="beca-form-card__title">Descubre tu beca</p>
          </div>

          <Transition name="fade" mode="out-in">
            <!-- PASO 1: Formulario -->
            <div v-if="step === 1" key="form">
              <form @submit.prevent="simularBeca" class="beca-form">
                <div class="beca-field">
                  <label class="beca-label">Nivel de interés</label>
                  <div class="beca-input-wrap">
                    <ChevronRight :size="16" class="beca-icon" />
                    <select v-model="form.nivel" class="beca-input beca-select">
                      <option value="Secundaria Bilingüe">Secundaria Bilingüe</option>
                      <option value="Bachillerato">Bachillerato</option>
                      <option value="Licenciatura">Licenciatura</option>
                      <option value="Posgrado">Posgrado</option>
                    </select>
                  </div>
                </div>

                <div class="beca-field">
                  <label class="beca-label">Datos del aspirante</label>
                  <div class="beca-grid-3">
                    <div class="beca-input-wrap">
                      <User :size="15" class="beca-icon" />
                      <input type="text" v-model="form.nombre" placeholder="Nombre(s)" class="beca-input" required />
                    </div>
                    <div class="beca-input-wrap">
                      <User :size="15" class="beca-icon" />
                      <input type="text" v-model="form.paterno" placeholder="Ap. Paterno" class="beca-input" required />
                    </div>
                    <div class="beca-input-wrap">
                      <User :size="15" class="beca-icon" />
                      <input type="text" v-model="form.materno" placeholder="Ap. Materno" class="beca-input" />
                    </div>
                  </div>
                  <div class="beca-grid-2">
                    <div class="beca-input-wrap">
                      <Mail :size="15" class="beca-icon" />
                      <input type="email" v-model="form.correo" placeholder="Correo electrónico" class="beca-input" required />
                    </div>
                    <div class="beca-input-wrap">
                      <Phone :size="15" class="beca-icon" />
                      <input type="tel" v-model="form.telefono" placeholder="Teléfono" class="beca-input" required />
                    </div>
                  </div>
                </div>

                <p class="beca-disclaimer">
                  Al enviar autorizo el tratamiento de mis datos conforme al
                  <a href="#">Aviso de Privacidad</a> de Universidad Internacional.
                </p>

                <button type="submit" class="beca-btn">
                  Calcular mi beca
                </button>
              </form>
            </div>

            <!-- PASO 2: Resultado -->
            <div v-else key="result" class="beca-result">
              <CheckCircle2 :size="52" class="beca-result__icon" />
              <h3 class="beca-result__title">
                ¡Felicidades{{ form.nombre ? ", " + form.nombre : "" }}!
              </h3>
              <p class="beca-result__desc">
                Para el nivel <strong>{{ form.nivel }}</strong> eres candidato a:
              </p>
              <div class="beca-badge">
                <span class="beca-badge__pct">60%</span>
                <span class="beca-badge__label">de beca</span>
              </div>
              <p class="beca-result__footer">
                Un asesor se pondrá en contacto contigo para confirmar tu beneficio y
                guiarte en el proceso de admisión.
              </p>
              <button @click="reiniciar" class="beca-btn beca-btn--outline">
                <RefreshCcw :size="14" /> Volver a calcular
              </button>
            </div>
          </Transition>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
/* ── Sección ───────────────────────────────────────────────── */
.beca-section {
  background: linear-gradient(160deg, #0d2f4f 0%, #0f3c61 55%, #1565c0 100%);
  padding: 5rem 0;
  position: relative;
  overflow: hidden;
}

.beca-section::before {
  content: "";
  position: absolute;
  inset: 0;
  background-image: radial-gradient(circle at 20% 80%, rgba(255,255,255,0.04) 0%, transparent 50%),
                    radial-gradient(circle at 80% 20%, rgba(255,255,255,0.06) 0%, transparent 50%);
  pointer-events: none;
}

.beca-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  position: relative;
}

/* ── Columna info ──────────────────────────────────────────── */
.beca-eyebrow {
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.55);
  margin: 0 0 0.75rem;
}

.beca-title {
  font-family: var(--font-serif, Georgia, serif);
  font-size: clamp(2rem, 3.5vw, 2.8rem);
  font-weight: 800;
  color: #ffffff;
  line-height: 1.15;
  margin: 0 0 1.25rem;
}

.beca-title em {
  font-style: normal;
  color: #60a5fa;
}

.beca-desc {
  font-size: 0.95rem;
  color: rgba(255,255,255,0.72);
  line-height: 1.7;
  margin: 0 0 2.25rem;
  max-width: 440px;
}

/* Métricas */
.beca-highlights {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 2.25rem;
}

.beca-hl {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  background: rgba(255,255,255,0.07);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 10px;
  padding: 0.875rem 1rem;
}

.beca-hl__icon {
  width: 38px;
  height: 38px;
  border-radius: 8px;
  background: rgba(96,165,250,0.18);
  color: #60a5fa;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.beca-hl__value {
  font-size: 1.05rem;
  font-weight: 800;
  color: #fff;
  margin: 0;
  line-height: 1.1;
}

.beca-hl__label {
  font-size: 0.68rem;
  color: rgba(255,255,255,0.55);
  margin: 0.1rem 0 0;
}

/* Beneficios */
.beca-benefits__heading {
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.45);
  margin: 0 0 0.75rem;
}

.beca-benefits__list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.beca-benefits__item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.85rem;
  color: rgba(255,255,255,0.78);
}

.beca-benefits__check {
  color: #34d399;
  flex-shrink: 0;
}

/* ── Tarjeta del formulario ────────────────────────────────── */
.beca-form-wrap {
  display: flex;
  justify-content: center;
}

.beca-form-card {
  background: #ffffff;
  border-radius: 20px;
  box-shadow: 0 30px 80px rgba(0,0,0,0.3);
  padding: 2rem 2rem 2.25rem;
  width: 100%;
  max-width: 460px;
}

.beca-form-card__header {
  display: flex;
  align-items: center;
  gap: 0.875rem;
  margin-bottom: 1.5rem;
  padding-bottom: 1.25rem;
  border-bottom: 1px solid #e2e8f0;
}

.beca-form-logo {
  height: 44px;
  object-fit: contain;
}

.beca-form-card__title {
  font-size: 1.15rem;
  font-weight: 800;
  color: #0f3c61;
  margin: 0;
}

/* Formulario */
.beca-form {
  display: flex;
  flex-direction: column;
  gap: 1.125rem;
}

.beca-field {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.beca-label {
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #64748b;
}

.beca-grid-3 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.625rem;
  margin-bottom: 0.625rem;
}

.beca-grid-2 {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.625rem;
}

.beca-input-wrap {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 0 0.75rem;
  transition: border-color 0.2s, box-shadow 0.2s;
}

.beca-input-wrap:focus-within {
  border-color: #1565c0;
  box-shadow: 0 0 0 3px rgba(21,101,192,0.1);
}

.beca-icon {
  color: #94a3b8;
  flex-shrink: 0;
}

.beca-input {
  width: 100%;
  background: transparent;
  border: none;
  outline: none;
  padding: 0.6rem 0;
  font-size: 0.82rem;
  color: #1e293b;
}

.beca-input::placeholder {
  color: #94a3b8;
}

.beca-select {
  cursor: pointer;
  appearance: none;
}

.beca-disclaimer {
  font-size: 0.65rem;
  color: #94a3b8;
  line-height: 1.5;
  text-align: center;
  margin: 0;
}

.beca-disclaimer a {
  color: #1565c0;
  text-decoration: none;
}

.beca-disclaimer a:hover {
  text-decoration: underline;
}

.beca-btn {
  width: 100%;
  background: #1565c0;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 0.8rem 1.5rem;
  font-size: 0.9rem;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: background 0.2s, transform 0.15s;
}

.beca-btn:hover {
  background: #0f3c61;
  transform: translateY(-1px);
}

.beca-btn--outline {
  background: transparent;
  color: #1565c0;
  border: 1.5px solid #1565c0;
}

.beca-btn--outline:hover {
  background: #f0f6fc;
  transform: translateY(-1px);
}

/* Resultado */
.beca-result {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 0.75rem;
  padding: 0.5rem 0;
}

.beca-result__icon {
  color: #10b981;
}

.beca-result__title {
  font-size: 1.5rem;
  font-weight: 800;
  color: #0f3c61;
  margin: 0;
}

.beca-result__desc {
  font-size: 0.9rem;
  color: #475569;
  margin: 0;
}

.beca-badge {
  background: linear-gradient(135deg, #1565c0, #0f3c61);
  border-radius: 16px;
  padding: 1.25rem 2.5rem;
  box-shadow: 0 10px 30px rgba(21,101,192,0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.beca-badge__pct {
  font-size: 3.5rem;
  font-weight: 900;
  color: #fff;
  line-height: 1;
}

.beca-badge__label {
  font-size: 0.8rem;
  color: rgba(255,255,255,0.7);
  font-weight: 600;
  letter-spacing: 0.06em;
}

.beca-result__footer {
  font-size: 0.8rem;
  color: #64748b;
  line-height: 1.6;
  margin: 0;
}

/* Animación */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(8px);
}

/* ── Responsive ────────────────────────────────────────────── */
@media (max-width: 900px) {
  .beca-container {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }

  .beca-title {
    font-size: 2rem;
  }

  .beca-desc {
    max-width: 100%;
  }

  .beca-form-wrap {
    width: 100%;
  }

  .beca-form-card {
    max-width: 100%;
  }
}

@media (max-width: 560px) {
  .beca-section {
    padding: 3.5rem 0;
  }

  .beca-highlights {
    grid-template-columns: 1fr 1fr;
    gap: 0.625rem;
  }

  .beca-grid-3 {
    grid-template-columns: 1fr;
  }

  .beca-grid-2 {
    grid-template-columns: 1fr;
  }
}
</style>
