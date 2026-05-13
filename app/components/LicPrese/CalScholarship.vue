<script setup lang="ts">
import { ref } from "vue";
import {
  ChevronRight,
  User,
  Mail,
  Phone,
  CheckCircle2,
  RefreshCcw,
} from "lucide-vue-next";

// Estado para controlar qué pantalla se muestra (1 = Formulario, 2 = Resultado)
const step = ref(1);

// Objeto reactivo para guardar los datos (aunque sea simulación, da el efecto real)
const form = ref({
  nivel: "Secundaria Bilingüe",
  nombre: "",
  paterno: "",
  materno: "",
  correo: "",
  telefono: "",
});

// Función para simular el envío
const simularBeca = () => {
  // Aquí podrías agregar validaciones si lo deseas.
  // Por ahora, simplemente pasamos a la pantalla de resultados.
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
</script>

<template>
  <section class="calc-section">
    <div class="calc-container">
      <!-- Logo y Título -->
      <div class="calc-header">
        <img src="/images/logo-uninter.png" alt="UNINTER" class="calc-logo" />
        <h2 class="calc-main-title">Calcula tu porcentaje de beca</h2>
      </div>

      <!-- PASO 1: FORMULARIO -->
      <Transition name="fade" mode="out-in">
        <div v-if="step === 1" class="calc-box">
          <form @submit.prevent="simularBeca">
            <!-- Nivel de Interés -->
            <div class="calc-group">
              <h3 class="calc-subtitle">Selecciona tu Nivel de Interés</h3>
              <div class="calc-input-wrapper">
                <ChevronRight :size="18" class="calc-icon" />
                <select v-model="form.nivel" class="calc-input calc-select">
                  <option value="Secundaria Bilingüe">
                    Secundaria Bilingüe
                  </option>
                  <option value="Bachillerato">Bachillerato</option>
                  <option value="Licenciatura">Licenciatura</option>
                  <option value="Posgrado">Posgrado</option>
                </select>
              </div>
            </div>

            <!-- Datos del Aspirante -->
            <div class="calc-group">
              <h3 class="calc-subtitle">Datos del Aspirante</h3>

              <!-- Fila de 3 (Nombres y Apellidos) -->
              <div class="calc-grid-3">
                <div class="calc-input-wrapper">
                  <User :size="18" class="calc-icon" />
                  <input
                    type="text"
                    v-model="form.nombre"
                    placeholder="Nombre(s)"
                    class="calc-input"
                    required
                  />
                </div>
                <div class="calc-input-wrapper">
                  <User :size="18" class="calc-icon" />
                  <input
                    type="text"
                    v-model="form.paterno"
                    placeholder="Apellido Paterno"
                    class="calc-input"
                    required
                  />
                </div>
                <div class="calc-input-wrapper">
                  <User :size="18" class="calc-icon" />
                  <input
                    type="text"
                    v-model="form.materno"
                    placeholder="Apellido Materno"
                    class="calc-input"
                  />
                </div>
              </div>

              <!-- Fila de 2 (Contacto) -->
              <div class="calc-grid-2">
                <div class="calc-input-wrapper">
                  <Mail :size="18" class="calc-icon" />
                  <input
                    type="email"
                    v-model="form.correo"
                    placeholder="Correo Electrónico"
                    class="calc-input"
                    required
                  />
                </div>
                <div class="calc-input-wrapper">
                  <Phone :size="18" class="calc-icon" />
                  <input
                    type="tel"
                    v-model="form.telefono"
                    placeholder="Teléfono"
                    class="calc-input"
                    required
                  />
                </div>
              </div>
            </div>

            <!-- Aviso de Privacidad -->
            <p class="calc-disclaimer">
              Al enviar este formulario consiento y autorizo que mis datos
              personales sean tratados conforme a lo previsto en el aviso de
              Privacidad de Universidad Internacional. Si usted desea conocer el
              texto completo de nuestro aviso de privacidad, por favor haga
              <a href="#">click aquí</a>.
            </p>

            <!-- Botón Siguiente -->
            <div class="calc-actions">
              <button type="submit" class="calc-btn">Siguiente</button>
            </div>
          </form>
        </div>

        <!-- PASO 2: RESULTADO SIMULADO -->
        <div v-else class="calc-box calc-result">
          <div class="result-icon-box">
            <CheckCircle2 :size="60" class="result-icon" />
          </div>

          <h3 class="result-title">
            ¡Felicidades{{ form.nombre ? ", " + form.nombre : "" }}!
          </h3>
          <p class="result-desc">
            De acuerdo a tu perfil simulado para el nivel
            <strong>{{ form.nivel }}</strong
            >, eres candidato para obtener una beca del:
          </p>

          <div class="result-badge">
            <span class="badge-number">60%</span>
          </div>

          <p class="result-footer">
            Un asesor se pondrá en contacto contigo pronto para indicarte los
            siguientes pasos y hacer válido tu beneficio.
          </p>

          <button @click="reiniciar" class="calc-btn calc-btn--outline">
            <RefreshCcw :size="16" /> Volver a calcular
          </button>
        </div>
      </Transition>
    </div>
  </section>
</template>

<style scoped>
/* Contenedor General */
.calc-section {
  background-color: #f4f5f7; /* Gris claro de la imagen */
  padding: 4rem 0;
  min-height: 80vh;
  display: flex;
  align-items: center;
}

.calc-container {
  max-width: 900px;
  margin: 0 auto;
  padding: 0 1.5rem;
  width: 100%;
}

/* Header (Logo y Título) */
.calc-header {
  text-align: center;
  margin-bottom: 2.5rem;
}

.calc-logo {
  height: 80px;
  margin-bottom: 1.5rem;
}

.calc-main-title {
  font-family: var(--font-serif, Georgia, serif);
  font-size: clamp(2rem, 4vw, 2.6rem);
  font-weight: 800;
  color: #0f3c61; /* Azul marino */
  margin: 0;
}

/* Caja del Formulario */
.calc-box {
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
}

/* Grupos y Subtítulos */
.calc-group {
  margin-bottom: 2rem;
}

.calc-subtitle {
  font-size: 1.1rem;
  font-weight: 600;
  color: #1565c0; /* Azul más claro */
  margin-bottom: 1rem;
}

/* Inputs y Grids */
.calc-grid-3 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-bottom: 1.5rem;
}

.calc-grid-2 {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}

.calc-input-wrapper {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.calc-icon {
  color: #0f3c61; /* Color azul de los iconos de la imagen */
  flex-shrink: 0;
}

.calc-input {
  width: 100%;
  background-color: #f3f4f6;
  border: 1px solid #d1d5db;
  border-radius: 999px; /* Forma de píldora de la imagen */
  padding: 0.6rem 1.25rem;
  font-size: 0.95rem;
  color: #374151;
  outline: none;
  transition:
    border-color 0.2s,
    background-color 0.2s;
}

.calc-input::placeholder {
  color: #9ca3af;
}

.calc-input:focus {
  border-color: #1565c0;
  background-color: #ffffff;
}

.calc-select {
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%234b5563'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 1rem center;
  background-size: 1.2em;
}

/* Disclaimer */
.calc-disclaimer {
  font-size: 0.7rem;
  color: #6b7280;
  text-align: center;
  line-height: 1.5;
  margin: 2rem auto;
  max-width: 90%;
}

.calc-disclaimer a {
  color: #1565c0;
  text-decoration: none;
}

.calc-disclaimer a:hover {
  text-decoration: underline;
}

/* Botón Siguiente */
.calc-actions {
  display: flex;
  justify-content: center;
}

.calc-btn {
  background-color: #2b78c5; /* Azul del botón */
  color: #ffffff;
  border: none;
  border-radius: 6px;
  padding: 0.75rem 3rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition:
    background-color 0.2s,
    transform 0.2s;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.calc-btn:hover {
  background-color: #1a5ea5;
  transform: translateY(-2px);
}

.calc-btn--outline {
  background-color: transparent;
  color: #1565c0;
  border: 1.5px solid #1565c0;
}
.calc-btn--outline:hover {
  background-color: #f0f6fc;
  color: #0f3c61;
}

/* PANTALLA DE RESULTADOS (SIMULACIÓN) */
.calc-result {
  text-align: center;
  background: #ffffff;
  padding: 4rem 2rem;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
}

.result-icon-box {
  display: flex;
  justify-content: center;
  margin-bottom: 1.5rem;
}

.result-icon {
  color: #10b981; /* Verde éxito */
}

.result-title {
  font-size: 2rem;
  font-weight: 800;
  color: #0f3c61;
  margin-bottom: 1rem;
}

.result-desc {
  font-size: 1.1rem;
  color: #4b5563;
  margin-bottom: 2rem;
}

.result-badge {
  display: inline-block;
  background: linear-gradient(135deg, #1565c0, #0f3c61);
  color: #ffffff;
  padding: 1.5rem 3rem;
  border-radius: 24px;
  box-shadow: 0 10px 20px rgba(21, 101, 192, 0.3);
  margin-bottom: 2rem;
}

.badge-number {
  font-size: 4rem;
  font-weight: 900;
  line-height: 1;
}

.result-footer {
  font-size: 0.95rem;
  color: #6b7280;
  margin-bottom: 2.5rem;
}

/* Animaciones */
.fade-enter-active,
.fade-leave-active {
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

/* Responsive */
@media (max-width: 768px) {
  .calc-grid-3,
  .calc-grid-2 {
    grid-template-columns: 1fr; /* Todo en una columna en celular */
    gap: 1.25rem;
  }

  .calc-main-title {
    font-size: 1.8rem;
  }

  .calc-result {
    padding: 2.5rem 1.5rem;
  }
}
</style>
