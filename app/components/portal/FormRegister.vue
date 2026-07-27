<script setup lang="ts">
import { ref } from "vue";
import {
  User,
  Phone,
  Mail,
  BookOpen,
  Send,
  RefreshCcw,
  HandshakeIcon,
  CheckCircle2,
} from "lucide-vue-next";

const form = ref({
  nombre: "",
  telefono: "",
  correo: "",
  programa: "",
  avisoPrivacidad: false,
});

const isSubmitting = ref(false);
const submitted = ref(false);

const enviarRegistro = () => {
  isSubmitting.value = true;
  setTimeout(() => {
    isSubmitting.value = false;
    submitted.value = true;
  }, 1500);
};

const reiniciar = () => {
  submitted.value = false;
  form.value = {
    nombre: "",
    telefono: "",
    correo: "",
    programa: "",
    avisoPrivacidad: false,
  };
};

const programas = [
  "Ciencias Sociales y Humanidades",
  "Negocios y Administración",
  "Diseño y Artes",
  "Ingeniería",
];

useHead({
  script: [
    { src: "https://link.superleads.mx/js/form_embed.js", defer: true }
  ]
});
</script>

<template>
  <section id="registro" class="reg-section">
    <div class="uninter-container">
      <div class="reg-card">
        <!-- Lado formulario -->
        <div class="reg-form-side">
          <iframe
            src="https://link.superleads.mx/widget/form/6rkDqSG2V8BZNsczD2wL"
            style="width: 100%; height: 560px; border: none; border-radius: 4px; overflow: hidden;"
            id="inline-6rkDqSG2V8BZNsczD2wL"
            data-layout="{'id':'INLINE'}"
            data-trigger-type="alwaysShow"
            data-trigger-value=""
            data-activation-type="alwaysActivated"
            data-activation-value=""
            data-deactivation-type="neverDeactivate"
            data-deactivation-value=""
            data-form-name="FormUniversidad"
            data-height="844"
            data-layout-iframe-id="inline-6rkDqSG2V8BZNsczD2wL"
            data-form-id="6rkDqSG2V8BZNsczD2wL"
            title="FormUniversidad"
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
.uninter-container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

/* ── Sección ───────────────────────────────────────────────── */
.reg-section {
  background: #eef2f6;
  padding: 5rem 0;
}

/* ── Tarjeta ───────────────────────────────────────────────── */
.reg-card {
  display: flex;
  background: #fff;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 24px 60px rgba(15, 60, 97, 0.12);
  min-height: 580px;
}

/* ── Lado formulario ───────────────────────────────────────── */
.reg-form-side {
  flex: 1.25;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

/* Éxito */
.reg-success {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 0.875rem;
  padding: 2rem 0;
}
.success-icon-wrap {
}
.success-icon {
  color: #10b981;
}
.success-title {
  font-family: var(--font-serif, Georgia, serif);
  font-size: 1.8rem;
  font-weight: 800;
  color: #0f3c61;
  margin: 0;
}
.success-desc {
  font-size: 0.95rem;
  color: #475569;
  line-height: 1.6;
  margin: 0;
  max-width: 340px;
}
.success-desc strong {
  color: #0f3c61;
}

/* Header */
.reg-eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  background: #f0f6fc;
  color: #1565c0;
  font-size: 0.75rem;
  font-weight: 700;
  padding: 0.35rem 0.75rem;
  border-radius: 20px;
  margin-bottom: 1rem;
}

.reg-title {
  font-family: var(--font-serif, Georgia, serif);
  font-size: clamp(1.7rem, 3vw, 2.2rem);
  font-weight: 800;
  color: #0f3c61;
  margin: 0 0 0.5rem;
  line-height: 1.15;
}

.reg-subtitle {
  font-size: 0.9rem;
  color: #64748b;
  margin: 0 0 2rem;
  line-height: 1.55;
}

/* Formulario */
.reg-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.reg-field {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.reg-label {
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #64748b;
}

.reg-input-wrap {
  display: flex;
  align-items: center;
  background: #fff;
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  padding: 0 1rem;
  gap: 0.625rem;
  transition:
    border-color 0.2s,
    box-shadow 0.2s;
}
.reg-input-wrap:focus-within {
  border-color: #1565c0;
  box-shadow: 0 0 0 3px rgba(21, 101, 192, 0.1);
}

.reg-icon {
  color: #94a3b8;
  flex-shrink: 0;
}

.reg-input {
  width: 100%;
  border: none;
  outline: none;
  background: transparent;
  padding: 0.75rem 0;
  font-size: 0.9rem;
  color: #1e293b;
}
.reg-input::placeholder {
  color: #94a3b8;
}

.reg-prefix {
  font-size: 0.82rem;
  font-weight: 600;
  color: #334155;
  border-right: 1px solid #e2e8f0;
  padding-right: 0.75rem;
  white-space: nowrap;
  flex-shrink: 0;
}
.reg-input--prefix {
  padding-left: 0.5rem;
}

.reg-select {
  appearance: none;
  cursor: pointer;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%2394a3b8' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 1rem center;
  padding-right: 2.5rem;
}

/* Checkbox personalizado */
.reg-checkbox {
  display: flex;
  align-items: flex-start;
  gap: 0.625rem;
  cursor: pointer;
}
.reg-check-input {
  display: none;
}
.reg-check-box {
  width: 18px;
  height: 18px;
  border: 2px solid #cbd5e1;
  border-radius: 4px;
  flex-shrink: 0;
  margin-top: 1px;
  transition:
    border-color 0.2s,
    background 0.2s;
  position: relative;
}
.reg-check-input:checked + .reg-check-box {
  background: #1565c0;
  border-color: #1565c0;
}
.reg-check-input:checked + .reg-check-box::after {
  content: "";
  position: absolute;
  left: 3px;
  top: 0px;
  width: 5px;
  height: 9px;
  border: 2px solid white;
  border-top: none;
  border-left: none;
  transform: rotate(45deg);
}
.reg-check-label {
  font-size: 0.72rem;
  color: #64748b;
  line-height: 1.5;
}
.reg-link {
  color: #1565c0;
  text-decoration: underline;
}

/* reCAPTCHA */
.reg-captcha {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #f9f9f9;
  border: 1px solid #d3d3d3;
  border-radius: 4px;
  padding: 0.7rem 1rem;
  max-width: 300px;
}
.captcha-inner {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.85rem;
  color: #333;
  cursor: pointer;
}
.captcha-check {
  width: 22px;
  height: 22px;
  cursor: pointer;
}
.captcha-brand {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.captcha-brand small {
  font-size: 0.5rem;
  color: #555;
}

/* Botón */
.reg-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background: #1565c0;
  color: #fff;
  border: 2px solid #1565c0;
  border-radius: 10px;
  padding: 0.875rem 1.5rem;
  font-size: 0.92rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s;
}
.reg-btn:hover:not(:disabled) {
  background: #0f3c61;
  border-color: #0f3c61;
  transform: translateY(-1px);
}
.reg-btn:disabled {
  background: #cbd5e1;
  border-color: #cbd5e1;
  cursor: not-allowed;
}
.reg-btn--outline {
  background: transparent;
  color: #1565c0;
  border-color: #1565c0;
}
.reg-btn--outline:hover {
  background: #f0f6fc;
  transform: translateY(-1px);
}

.spin {
  animation: spin 1s linear infinite;
}
@keyframes spin {
  100% {
    transform: rotate(360deg);
  }
}

/* Animación fade */
.fade-enter-active,
.fade-leave-active {
  transition:
    opacity 0.25s ease,
    transform 0.25s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(8px);
}

/* ── Lado mascota ──────────────────────────────────────────── */
.reg-mascot-side {
  flex: 0.75;
  background: linear-gradient(145deg, #1a73e8 0%, #0f3c61 100%);
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
    rgba(255, 255, 255, 0.07) 0%,
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

/* ── Responsive ────────────────────────────────────────────── */
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
  .reg-captcha {
    max-width: 100%;
  }
}

@media (max-width: 560px) {
  .reg-section {
    padding: 3rem 0;
  }
  .reg-form-side {
    padding: 2rem 1.25rem;
  }
}
</style>
