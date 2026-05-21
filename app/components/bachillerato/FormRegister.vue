<script setup lang="ts">
import { ref } from "vue";
import { User, Phone, Mail, BookOpen, Send, RefreshCcw, GraduationCap, CheckCircle2 } from "lucide-vue-next";

const form = ref({
  nombre: "",
  telefono: "",
  correo: "",
  modalidad: "",
  avisoPrivacidad: false,
});

const isSubmitting = ref(false);
const submitted = ref(false);

const enviar = () => {
  isSubmitting.value = true;
  setTimeout(() => {
    isSubmitting.value = false;
    submitted.value = true;
  }, 1500);
};

const reiniciar = () => {
  submitted.value = false;
  form.value = { nombre: "", telefono: "", correo: "", modalidad: "", avisoPrivacidad: false };
};
</script>

<template>
  <section class="reg-section">
    <div class="biu-container">
      <div class="reg-card">

        <!-- Lado formulario -->
        <div class="reg-form-side">
          <Transition name="fade" mode="out-in">
            <!-- Éxito -->
            <div v-if="submitted" key="success" class="reg-success">
              <CheckCircle2 :size="54" class="success-icon" />
              <h2 class="success-title">¡Registro enviado!</h2>
              <p class="success-desc">
                Gracias, <strong>{{ form.nombre || "aspirante" }}</strong>. Un asesor
                BIU se pondrá en contacto contigo para acompañarte en tu proceso.
              </p>
              <button @click="reiniciar" class="reg-btn reg-btn--outline">
                <RefreshCcw :size="14" /> Nuevo registro
              </button>
            </div>

            <!-- Formulario -->
            <div v-else key="form">
              <div class="reg-header">
                <div class="reg-eyebrow">
                  <GraduationCap :size="14" />
                  <span>¡Únete a la legión!</span>
                </div>
                <h2 class="reg-title">¡Bienvenido a BIU!</h2>
                <p class="reg-subtitle">
                  Completa el formulario y comienza tu camino en el Bachillerato
                  Bilingüe &amp; Multicultural de UNINTER.
                </p>
              </div>

              <form @submit.prevent="enviar" class="reg-form">
                <!-- Nombre -->
                <div class="reg-field">
                  <label class="reg-label" for="biu-nombre">Nombre completo</label>
                  <div class="reg-input-wrap">
                    <User :size="16" class="reg-icon" />
                    <input id="biu-nombre" type="text" v-model="form.nombre" placeholder="Tu nombre completo" required class="reg-input" />
                  </div>
                </div>

                <!-- Teléfono -->
                <div class="reg-field">
                  <label class="reg-label" for="biu-tel">Teléfono</label>
                  <div class="reg-input-wrap">
                    <span class="reg-prefix">MX +52</span>
                    <input id="biu-tel" type="tel" v-model="form.telefono" placeholder="10 dígitos" required class="reg-input reg-input--prefix" />
                  </div>
                </div>

                <!-- Correo -->
                <div class="reg-field">
                  <label class="reg-label" for="biu-email">Correo electrónico</label>
                  <div class="reg-input-wrap">
                    <Mail :size="16" class="reg-icon" />
                    <input id="biu-email" type="email" v-model="form.correo" placeholder="correo@ejemplo.com" required class="reg-input" />
                  </div>
                </div>

                <!-- Modalidad -->
                <div class="reg-field">
                  <label class="reg-label" for="biu-mod">Modalidad de interés</label>
                  <div class="reg-input-wrap">
                    <BookOpen :size="16" class="reg-icon" />
                    <select id="biu-mod" v-model="form.modalidad" required class="reg-input reg-select">
                      <option value="" disabled>Selecciona una modalidad</option>
                      <option value="bilingue">BIU Bilingüe</option>
                      <option value="multicultural">BIU Multicultural</option>
                    </select>
                  </div>
                </div>

                <!-- Checkbox -->
                <label class="reg-checkbox">
                  <input type="checkbox" v-model="form.avisoPrivacidad" class="reg-check-input" />
                  <span class="reg-check-box"></span>
                  <span class="reg-check-label">
                    Acepto el tratamiento de mis datos conforme a la
                    <a href="#" class="reg-link">política de privacidad</a>
                    de Universidad Internacional.
                  </span>
                </label>

                <!-- reCAPTCHA mock -->
                <div class="reg-captcha">
                  <label class="captcha-inner">
                    <input type="checkbox" class="captcha-check" />
                    <span>No soy un robot</span>
                  </label>
                  <div class="captcha-brand">
                    <img src="https://www.gstatic.com/recaptcha/api2/logo_48.png" alt="reCAPTCHA" width="24" />
                    <small>reCAPTCHA</small>
                  </div>
                </div>

                <button type="submit" :disabled="isSubmitting || !form.avisoPrivacidad" class="reg-btn">
                  <span v-if="!isSubmitting">Enviar registro</span>
                  <span v-else>Enviando...</span>
                  <Send v-if="!isSubmitting" :size="15" />
                  <RefreshCcw v-else :size="15" class="spin" />
                </button>
              </form>
            </div>
          </Transition>
        </div>

        <!-- Lado mascota -->
        <div class="reg-mascot-side">
          <div class="mascot-wrap">
            <img src="/images/forms/legi-mascot.png" alt="Mascota Legi UNINTER" class="mascot-img" />
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
.biu-container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.reg-section {
  background: #f1f8f0;
  padding: 5rem 0;
}

/* Tarjeta */
.reg-card {
  display: flex;
  background: #fff;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 24px 60px rgba(74,122,2,0.12);
  min-height: 560px;
}

/* Lado formulario */
.reg-form-side {
  flex: 1.25;
  padding: 3.5rem;
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
.success-icon { color: #6BAF04; }
.success-title {
  font-family: var(--font-serif, Georgia, serif);
  font-size: 1.8rem;
  font-weight: 800;
  color: #4A7A02;
  margin: 0;
}
.success-desc {
  font-size: 0.95rem;
  color: #475569;
  line-height: 1.6;
  margin: 0;
  max-width: 340px;
}
.success-desc strong { color: #4A7A02; }

/* Header */
.reg-eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  background: #e8f5e9;
  color: #6BAF04;
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
  color: #4A7A02;
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
.reg-form { display: flex; flex-direction: column; gap: 1rem; }
.reg-field { display: flex; flex-direction: column; gap: 0.35rem; }
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
  transition: border-color 0.2s, box-shadow 0.2s;
}
.reg-input-wrap:focus-within {
  border-color: #6BAF04;
  box-shadow: 0 0 0 3px rgba(107,175,4,0.12);
}
.reg-icon { color: #94a3b8; flex-shrink: 0; }
.reg-input {
  width: 100%;
  border: none;
  outline: none;
  background: transparent;
  padding: 0.75rem 0;
  font-size: 0.9rem;
  color: #1e293b;
}
.reg-input::placeholder { color: #94a3b8; }
.reg-prefix {
  font-size: 0.82rem;
  font-weight: 600;
  color: #334155;
  border-right: 1px solid #e2e8f0;
  padding-right: 0.75rem;
  white-space: nowrap;
  flex-shrink: 0;
}
.reg-input--prefix { padding-left: 0.5rem; }
.reg-select { appearance: none; cursor: pointer; }

/* Checkbox */
.reg-checkbox {
  display: flex;
  align-items: flex-start;
  gap: 0.625rem;
  cursor: pointer;
}
.reg-check-input { display: none; }
.reg-check-box {
  width: 18px;
  height: 18px;
  border: 2px solid #cbd5e1;
  border-radius: 4px;
  flex-shrink: 0;
  margin-top: 1px;
  transition: border-color 0.2s, background 0.2s;
  position: relative;
}
.reg-check-input:checked + .reg-check-box { background: #6BAF04; border-color: #6BAF04; }
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
.reg-check-label { font-size: 0.72rem; color: #64748b; line-height: 1.5; }
.reg-link { color: #6BAF04; text-decoration: underline; }

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
.captcha-check { width: 22px; height: 22px; cursor: pointer; }
.captcha-brand { display: flex; flex-direction: column; align-items: center; }
.captcha-brand small { font-size: 0.5rem; color: #555; }

/* Botón */
.reg-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background: #6BAF04;
  color: #fff;
  border: 2px solid #6BAF04;
  border-radius: 10px;
  padding: 0.875rem 1.5rem;
  font-size: 0.92rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s;
}
.reg-btn:hover:not(:disabled) { background: #4A7A02; border-color: #4A7A02; transform: translateY(-1px); }
.reg-btn:disabled { background: #cbd5e1; border-color: #cbd5e1; cursor: not-allowed; }
.reg-btn--outline { background: transparent; color: #6BAF04; border-color: #6BAF04; }
.reg-btn--outline:hover { background: #e8f5e9; transform: translateY(-1px); }

.spin { animation: spin 1s linear infinite; }
@keyframes spin { 100% { transform: rotate(360deg); } }

.fade-enter-active,
.fade-leave-active { transition: opacity 0.25s ease, transform 0.25s ease; }
.fade-enter-from,
.fade-leave-to { opacity: 0; transform: translateY(8px); }

/* Mascota */
.reg-mascot-side {
  flex: 0.75;
  background: linear-gradient(145deg, #6BAF04 0%, #0d1f0e 100%);
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
  background: radial-gradient(circle at 30% 70%, rgba(255,255,255,0.06) 0%, transparent 60%);
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
  filter: drop-shadow(0 20px 30px rgba(0,0,0,0.4));
}

/* Responsive */
@media (max-width: 900px) {
  .reg-card { flex-direction: column-reverse; }
  .reg-mascot-side { padding: 2.5rem 0; min-height: 200px; }
  .mascot-wrap { width: 50%; }
  .reg-form-side { padding: 2.5rem 1.75rem; }
  .reg-captcha { max-width: 100%; }
}
@media (max-width: 560px) {
  .reg-section { padding: 3rem 0; }
  .reg-form-side { padding: 2rem 1.25rem; }
}
</style>
