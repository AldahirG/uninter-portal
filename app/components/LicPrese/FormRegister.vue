<script setup lang="ts">
import { ref } from "vue";
import { User, Phone, Mail, BookOpen, Send, RefreshCcw } from "lucide-vue-next";

// Estado del formulario
const form = ref({
  nombre: "",
  telefono: "",
  correo: "",
  programa: "",
  avisoPrivacidad: false,
});

// Simulación de envío
const isSubmitting = ref(false);

const enviarRegistro = () => {
  isSubmitting.value = true;
  setTimeout(() => {
    alert("¡Registro enviado con éxito!");
    isSubmitting.value = false;
    // Limpiar formulario
    form.value = {
      nombre: "",
      telefono: "",
      correo: "",
      programa: "",
      avisoPrivacidad: false,
    };
  }, 1500);
};
</script>

<template>
  <section class="registro-section">
    <div class="uninter-container">
      <!-- TARJETA PRINCIPAL -->
      <div class="registro-card">
        <!-- MITAD IZQUIERDA: FORMULARIO -->
        <div class="registro-form-side">
          <div class="form-header">
            <div class="form-badge">👋 ¡Únete a la legión!</div>
            <h2 class="form-title">¡Bienvenido a UNINTER!</h2>
            <p class="form-subtitle">
              Completa el formulario de registro para iniciar tu proceso en la
              Universidad.
            </p>
          </div>

          <form @submit.prevent="enviarRegistro" class="uninter-form">
            <!-- Nombre Completo -->
            <div class="form-group">
              <div class="input-wrapper">
                <User :size="18" class="input-icon" />
                <input
                  type="text"
                  v-model="form.nombre"
                  placeholder="Nombre Completo"
                  required
                  class="form-input"
                />
              </div>
            </div>

            <!-- Teléfono (Con prefijo) -->
            <div class="form-group">
              <div class="input-wrapper">
                <div class="country-code">
                  <span class="code-text">MX +52</span>
                </div>
                <input
                  type="tel"
                  v-model="form.telefono"
                  placeholder="Teléfono *"
                  required
                  class="form-input input-with-prefix"
                />
              </div>
            </div>

            <!-- Correo -->
            <div class="form-group">
              <div class="input-wrapper">
                <Mail :size="18" class="input-icon" />
                <input
                  type="email"
                  v-model="form.correo"
                  placeholder="Correo *"
                  required
                  class="form-input"
                />
              </div>
            </div>

            <!-- Programa de Interés -->
            <div class="form-group">
              <div class="input-wrapper">
                <BookOpen :size="18" class="input-icon" />
                <select
                  v-model="form.programa"
                  required
                  class="form-input form-select"
                >
                  <option value="" disabled selected>
                    Programa de Interés *
                  </option>
                  <option value="licenciatura">Licenciatura</option>
                  <option value="ingenieria">Ingeniería</option>
                  <option value="posgrado">Posgrado</option>
                  <option value="bachillerato">Bachillerato</option>
                </select>
              </div>
            </div>

            <!-- Botón de Envío -->
            <button
              type="submit"
              :disabled="isSubmitting || !form.avisoPrivacidad"
              class="submit-btn"
            >
              <span v-if="!isSubmitting">Enviar registro</span>
              <span v-else>Enviando...</span>
              <Send v-if="!isSubmitting" :size="16" />
              <RefreshCcw v-else :size="16" class="spin-icon" />
            </button>

            <!-- Aviso de Privacidad -->
            <div class="checkbox-group">
              <input
                type="checkbox"
                id="aviso"
                v-model="form.avisoPrivacidad"
                class="custom-checkbox"
              />
              <label for="aviso" class="checkbox-label">
                Acepto y autorizo que Universidad Internacional utilice la
                información proporcionada para los fines señalados en nuestra
                <a href="#">política de privacidad</a>.
              </label>
            </div>

            <!-- Mock de reCAPTCHA -->
            <div class="recaptcha-mock">
              <div class="recaptcha-left">
                <input type="checkbox" class="recaptcha-check" />
                <span>No soy un robot</span>
              </div>
              <div class="recaptcha-right">
                <img
                  src="https://www.gstatic.com/recaptcha/api2/logo_48.png"
                  alt="reCAPTCHA"
                  class="recaptcha-logo"
                />
                <small>reCAPTCHA</small>
              </div>
            </div>
          </form>
        </div>

        <!-- MITAD DERECHA: MASCOTA LEGI -->
        <div class="registro-mascot-side">
          <div class="mascot-content">
            <!-- 
              NOTA: Cambia la ruta por la imagen real de Legi sin fondo (PNG transparente) 
            -->
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
/* Contenedor general */
.registro-section {
  background-color: #eef2f6;
  padding: 5rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.uninter-container {
  max-width: 1100px;
  width: 100%;
  margin: 0 auto;
  padding: 0 1.5rem;
}

/* =========================================================
   TARJETA FLOTANTE REDISEÑADA
========================================================= */
.registro-card {
  background: #ffffff;
  border-radius: 24px;
  overflow: hidden;
  display: flex;
  box-shadow: 0 20px 50px rgba(15, 60, 97, 0.1);
  min-height: 600px;
}

/* =========================================================
   MITAD IZQUIERDA: FORMULARIO
========================================================= */
.registro-form-side {
  flex: 1.2;
  padding: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.form-header {
  margin-bottom: 2rem;
}

.form-badge {
  display: inline-block;
  background: #f0f6fc;
  color: #1565c0;
  font-size: 0.8rem;
  font-weight: 700;
  padding: 0.4rem 0.8rem;
  border-radius: 20px;
  margin-bottom: 1rem;
}

.form-title {
  font-family: var(--font-serif, Georgia, serif);
  font-size: 2.2rem;
  font-weight: 800;
  color: #0f3c61;
  margin: 0 0 0.5rem 0;
  line-height: 1.2;
}

.form-subtitle {
  font-size: 0.95rem;
  color: #64748b;
  margin: 0;
}

/* Estilos de Inputs */
.uninter-form {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.input-icon {
  position: absolute;
  left: 1rem;
  color: #94a3b8;
  pointer-events: none;
}

.form-input {
  width: 100%;
  background-color: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  padding: 0.8rem 1rem 0.8rem 3rem; /* Espacio para el ícono */
  font-size: 0.95rem;
  color: #334155;
  transition: all 0.2s;
  outline: none;
}

.form-input::placeholder {
  color: #94a3b8;
}

.form-input:focus {
  border-color: #1565c0;
  box-shadow: 0 0 0 3px rgba(21, 101, 192, 0.1);
}

/* Selector Select */
.form-select {
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%2394a3b8' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 1rem center;
  cursor: pointer;
}

/* Prefijo de Teléfono */
.country-code {
  position: absolute;
  left: 1rem;
  display: flex;
  align-items: center;
  border-right: 1px solid #cbd5e1;
  padding-right: 0.5rem;
}
.code-text {
  font-size: 0.85rem;
  color: #334155;
  font-weight: 600;
}
.input-with-prefix {
  padding-left: 5.5rem; /* Espacio para el prefijo MX +52 */
}

/* Botón Enviar */
.submit-btn {
  background-color: #9ca3af; /* Gris claro por defecto como en la imagen */
  color: #ffffff;
  border: none;
  border-radius: 8px;
  padding: 1rem;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: all 0.2s;
  margin-top: 0.5rem;
}

/* Cuando los campos requeridos y el checkbox estén listos, el botón se activa */
form:valid .submit-btn:not(:disabled) {
  background-color: #1565c0;
}

.submit-btn:hover:not(:disabled) {
  background-color: #0f3c61;
  transform: translateY(-2px);
  box-shadow: 0 8px 15px rgba(15, 60, 97, 0.2);
}

.submit-btn:disabled {
  background-color: #cbd5e1;
  cursor: not-allowed;
}

.spin-icon {
  animation: spin 1s linear infinite;
}
@keyframes spin {
  100% {
    transform: rotate(360deg);
  }
}

/* Checkbox y Aviso */
.checkbox-group {
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  margin-top: 0.5rem;
}
.custom-checkbox {
  margin-top: 0.2rem;
  width: 16px;
  height: 16px;
  cursor: pointer;
}
.checkbox-label {
  font-size: 0.75rem;
  color: #64748b;
  line-height: 1.4;
}
.checkbox-label a {
  color: #1565c0;
  text-decoration: underline;
}

/* Mock de reCAPTCHA */
.recaptcha-mock {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #f9f9f9;
  border: 1px solid #d3d3d3;
  border-radius: 4px;
  padding: 0.8rem 1rem;
  margin-top: 0.5rem;
  max-width: 300px;
}
.recaptcha-left {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-size: 0.85rem;
  color: #333;
}
.recaptcha-check {
  width: 24px;
  height: 24px;
  cursor: pointer;
  background: #fff;
  border: 2px solid #c1c1c1;
  border-radius: 2px;
}
.recaptcha-right {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.recaptcha-logo {
  width: 24px;
}
.recaptcha-right small {
  font-size: 0.5rem;
  color: #555;
  margin-top: 2px;
}

/* =========================================================
   MITAD DERECHA: MASCOTA LEGI (Alineación Vertical)
========================================================= */
.registro-mascot-side {
  flex: 0.8;
  background: linear-gradient(135deg, #1a73e8, #0f3c61);
  position: relative;
  display: flex;
  /* ESTO CENTRA A LEGI VERTICALMENTE EN MEDIO DE LA PANTALLA AZUL */
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.mascot-content {
  position: relative;
  z-index: 2;
  width: 85%;
  max-width: 320px;
}

.mascot-img {
  width: 100%;
  height: auto;
  object-fit: contain;
  filter: drop-shadow(0 15px 25px rgba(0, 0, 0, 0.3));
}

/* =========================================================
   RESPONSIVE
========================================================= */
@media (max-width: 900px) {
  .registro-card {
    flex-direction: column-reverse;
  }

  .registro-mascot-side {
    padding: 3rem 0; /* Espacio para que respire en móvil */
  }

  .mascot-content {
    width: 60%;
  }

  .registro-form-side {
    padding: 2.5rem 1.5rem;
    border-radius: 24px 24px 0 0;
    z-index: 5;
    background: #fff;
    margin-top: -20px; /* Para que se solape levemente */
  }

  .form-title {
    font-size: 1.8rem;
  }

  .recaptcha-mock {
    max-width: 100%;
  }
}
</style>
