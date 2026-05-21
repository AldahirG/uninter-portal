<script setup lang="ts">
import { CheckCircle2 } from "lucide-vue-next";

const form = reactive({
  nombre: "",
  apellido: "",
  telefono: "",
  email: "",
  modalidad: "",
  privacidad: false,
});

const submitted = ref(false);
const loading = ref(false);

async function enviar() {
  if (!form.privacidad) return;
  loading.value = true;
  await new Promise(r => setTimeout(r, 900));
  loading.value = false;
  submitted.value = true;
}

function reiniciar() {
  Object.assign(form, {
    nombre: "", apellido: "", telefono: "",
    email: "", modalidad: "", privacidad: false,
  });
  submitted.value = false;
}
</script>

<template>
  <section class="siu-form-section">
    <div class="siu-container siu-form-layout">

      <!-- Izquierda: LEGI mascot + info -->
      <div class="siu-form-left">
        <div class="siu-form-left__mascot">
          <img
            src="/images/hero/licenciaturasPresenciales.jpg"
            alt="LEGI - Mascota SIU UNINTER"
            class="siu-form-left__img"
            onerror="this.style.display='none'"
          />
          <div class="siu-form-left__badge">
            <span class="badge-name">LEGI</span>
          </div>
        </div>
        <div class="siu-form-left__info">
          <p class="siu-form-left__eyebrow">¡Bienvenido a UNINTER!</p>
          <h3 class="siu-form-left__title">Formulario de registro</h3>
          <p class="siu-form-left__sub">Secundaria Internacional UNINTER</p>
          <p class="siu-form-left__text">
            Completa el formulario y uno de nuestros asesores educativos
            se pondrá en contacto contigo para guiarte en el proceso de admisión.
          </p>
          <div class="siu-form-left__contact">
            <span>☎ 777 327 8687</span>
            <span>Admisiones: 777 327 8688</span>
          </div>
        </div>
      </div>

      <!-- Derecha: formulario -->
      <div class="siu-form-right">
        <div class="siu-form-card">

          <!-- Estado de éxito -->
          <div v-if="submitted" class="siu-form-success">
            <CheckCircle2 :size="52" class="success-icon" />
            <h3 class="success-title">¡Registro enviado!</h3>
            <p class="success-msg">
              Gracias por tu interés en SIU UNINTER. Un asesor se pondrá en
              contacto contigo a la brevedad.
            </p>
            <button class="siu-btn siu-btn--primary" @click="reiniciar">
              Nuevo registro
            </button>
          </div>

          <!-- Formulario -->
          <form v-else @submit.prevent="enviar" class="siu-form">
            <div class="siu-form-row">
              <div class="siu-form-group">
                <label for="siu-nombre">Nombre</label>
                <input id="siu-nombre" v-model="form.nombre" type="text" placeholder="Tu nombre" required />
              </div>
              <div class="siu-form-group">
                <label for="siu-apellido">Apellido</label>
                <input id="siu-apellido" v-model="form.apellido" type="text" placeholder="Tu apellido" required />
              </div>
            </div>

            <div class="siu-form-group">
              <label for="siu-tel">Teléfono</label>
              <input id="siu-tel" v-model="form.telefono" type="tel" placeholder="10 dígitos" required />
            </div>

            <div class="siu-form-group">
              <label for="siu-email">Correo electrónico</label>
              <input id="siu-email" v-model="form.email" type="email" placeholder="correo@ejemplo.com" required />
            </div>

            <div class="siu-form-group">
              <label for="siu-modalidad">Modalidad de interés</label>
              <select id="siu-modalidad" v-model="form.modalidad" required>
                <option value="" disabled>Selecciona una modalidad</option>
                <option value="bilingue">SIU Bilingüe</option>
                <option value="multicultural">SIU Multicultural</option>
              </select>
            </div>

            <label class="siu-check">
              <input v-model="form.privacidad" type="checkbox" />
              <span class="siu-check__box"></span>
              <span class="siu-check__lbl">
                Acepto el
                <a href="https://uninter.edu.mx/politicas-privacidad/" target="_blank">Aviso de Privacidad</a>
              </span>
            </label>

            <button
              type="submit"
              class="siu-btn siu-btn--primary siu-btn--full"
              :disabled="loading || !form.privacidad"
            >
              <span v-if="!loading">Enviar registro →</span>
              <span v-else>Enviando…</span>
            </button>
          </form>

        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
.siu-form-section {
  --s: #ECAB00;
  --sd: #C49000;
  --sbg: #1a1500;
  background: #f5f0e8;
  padding: 5.5rem 0;
}
.siu-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.siu-form-layout {
  display: grid;
  grid-template-columns: 1fr 1.1fr;
  gap: 4rem;
  align-items: center;
}

/* Izquierda */
.siu-form-left {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
.siu-form-left__mascot {
  position: relative;
  width: 220px;
  height: 220px;
  border-radius: 50%;
  overflow: hidden;
  background: var(--s);
  box-shadow: 0 8px 32px rgba(236,171,0,0.35);
  margin: 0 auto;
}
.siu-form-left__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.siu-form-left__badge {
  position: absolute;
  bottom: 12px;
  left: 50%;
  transform: translateX(-50%);
  background: var(--sbg);
  color: var(--s);
  font-size: 0.85rem;
  font-weight: 900;
  letter-spacing: 0.1em;
  padding: 0.3rem 1rem;
  border-radius: 999px;
}
.badge-name { text-transform: uppercase; }

.siu-form-left__info { text-align: center; }
.siu-form-left__eyebrow {
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--s);
  margin: 0 0 0.4rem;
}
.siu-form-left__title {
  font-family: var(--font-serif, Georgia, serif);
  font-size: 1.6rem;
  font-weight: 800;
  color: #1a1500;
  margin: 0 0 0.3rem;
}
.siu-form-left__sub {
  font-size: 0.85rem;
  font-weight: 600;
  color: #888;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  margin: 0 0 1rem;
}
.siu-form-left__text {
  font-size: 0.9rem;
  color: #555;
  line-height: 1.65;
  margin: 0 0 1rem;
}
.siu-form-left__contact {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  font-size: 0.82rem;
  color: #777;
}

/* Derecha */
.siu-form-card {
  background: #fff;
  border-radius: 20px;
  padding: 2.5rem;
  box-shadow: 0 8px 32px rgba(0,0,0,0.08);
  border: 1px solid rgba(0,0,0,0.06);
}

/* Form */
.siu-form { display: flex; flex-direction: column; gap: 1.125rem; }
.siu-form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
.siu-form-group { display: flex; flex-direction: column; gap: 0.375rem; }
.siu-form-group label {
  font-size: 0.8rem;
  font-weight: 700;
  color: #444;
  text-transform: uppercase;
  letter-spacing: 0.06em;
}
.siu-form-group input,
.siu-form-group select {
  border: 1.5px solid #ddd;
  border-radius: 8px;
  padding: 0.7rem 0.9rem;
  font-size: 0.9rem;
  color: #333;
  background: #fff;
  outline: none;
  transition: border-color 0.2s, box-shadow 0.2s;
  appearance: none;
  -webkit-appearance: none;
}
.siu-form-group input:focus,
.siu-form-group select:focus {
  border-color: var(--s);
  box-shadow: 0 0 0 3px rgba(236,171,0,0.12);
}

/* Checkbox */
.siu-check {
  display: flex;
  align-items: flex-start;
  gap: 0.625rem;
  cursor: pointer;
}
.siu-check input { position: absolute; opacity: 0; width: 0; height: 0; }
.siu-check__box {
  width: 18px;
  height: 18px;
  border: 2px solid #ccc;
  border-radius: 4px;
  flex-shrink: 0;
  margin-top: 1px;
  position: relative;
  transition: background 0.2s, border-color 0.2s;
}
.siu-check input:checked ~ .siu-check__box {
  background: var(--s);
  border-color: var(--s);
}
.siu-check__box::after {
  content: "";
  position: absolute;
  left: 4px;
  top: 1px;
  width: 6px;
  height: 10px;
  border: 2px solid #fff;
  border-top: none;
  border-left: none;
  transform: rotate(45deg) scaleY(0);
  transform-origin: bottom;
  transition: transform 0.15s ease;
}
.siu-check input:checked ~ .siu-check__box::after {
  transform: rotate(45deg) scaleY(1);
}
.siu-check__lbl { font-size: 0.82rem; color: #666; line-height: 1.5; }
.siu-check__lbl a { color: var(--s); text-decoration: underline; }

/* Botones */
.siu-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.8rem 2rem;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 700;
  text-decoration: none;
  transition: all 0.2s;
  cursor: pointer;
  border: none;
}
.siu-btn--primary {
  background: var(--s);
  color: #1a1500;
}
.siu-btn--primary:hover:not(:disabled) {
  background: var(--sd);
  transform: translateY(-2px);
}
.siu-btn--primary:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
.siu-btn--full { width: 100%; }

/* Success */
.siu-form-success {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1rem;
  padding: 1rem 0;
}
.success-icon { color: var(--s); }
.success-title {
  font-family: var(--font-serif, Georgia, serif);
  font-size: 1.5rem;
  font-weight: 800;
  color: #1a1500;
  margin: 0;
}
.success-msg {
  font-size: 0.9rem;
  color: #666;
  line-height: 1.65;
  margin: 0;
  max-width: 320px;
}

@media (max-width: 1024px) {
  .siu-form-layout { grid-template-columns: 1fr; gap: 2.5rem; }
  .siu-form-left { align-items: center; }
}
@media (max-width: 480px) {
  .siu-form-row { grid-template-columns: 1fr; }
  .siu-form-card { padding: 1.75rem 1.25rem; }
}
</style>
