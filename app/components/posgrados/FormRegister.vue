<script setup lang="ts">
import { CheckCircle2 } from "lucide-vue-next";

const form = reactive({
  nombre: "",
  apellido: "",
  telefono: "",
  email: "",
  programa: "",
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
  Object.assign(form, { nombre: "", apellido: "", telefono: "", email: "", programa: "", privacidad: false });
  submitted.value = false;
}
</script>

<template>
  <section class="pg-form-section">
    <div class="pg-container pg-form-layout">

      <!-- Izquierda: LEGI + info -->
      <div class="pg-form-left">
        <div class="pg-form-left__mascot">
          <img
            src="/images/hero/licenciaturasPresenciales.jpg"
            alt="LEGI - Mascota UNINTER"
            class="pg-form-left__img"
            onerror="this.style.display='none'"
          />
          <div class="pg-form-left__badge">LEGI</div>
        </div>
        <div class="pg-form-left__info">
          <p class="pg-form-left__eyebrow">¡Bienvenido a UNINTER!</p>
          <h3 class="pg-form-left__title">Formulario de registro</h3>
          <p class="pg-form-left__sub">Posgrados UNINTER</p>
          <p class="pg-form-left__text">
            Completa el formulario y uno de nuestros asesores educativos se
            pondrá en contacto contigo para guiarte en tu proceso de admisión
            a nivel Posgrado.
          </p>
          <div class="pg-form-left__contact">
            <span>☎ 777 357 9000</span>
            <span>Admisiones: 777 357 9001</span>
          </div>
        </div>
      </div>

      <!-- Derecha: formulario -->
      <div class="pg-form-right">
        <div class="pg-form-card">
          <div v-if="submitted" class="pg-form-success">
            <CheckCircle2 :size="52" class="success-icon" />
            <h3 class="success-title">¡Registro enviado!</h3>
            <p class="success-msg">Un asesor de Posgrados se pondrá en contacto contigo a la brevedad.</p>
            <button class="pg-btn pg-btn--primary" @click="reiniciar">Nuevo registro</button>
          </div>
          <form v-else @submit.prevent="enviar" class="pg-form">
            <div class="pg-form-row">
              <div class="pg-form-group">
                <label for="pg-nombre">Nombre</label>
                <input id="pg-nombre" v-model="form.nombre" type="text" placeholder="Tu nombre" required />
              </div>
              <div class="pg-form-group">
                <label for="pg-apellido">Apellido</label>
                <input id="pg-apellido" v-model="form.apellido" type="text" placeholder="Tu apellido" required />
              </div>
            </div>
            <div class="pg-form-group">
              <label for="pg-tel">Teléfono</label>
              <input id="pg-tel" v-model="form.telefono" type="tel" placeholder="10 dígitos" required />
            </div>
            <div class="pg-form-group">
              <label for="pg-email">Correo electrónico</label>
              <input id="pg-email" v-model="form.email" type="email" placeholder="correo@ejemplo.com" required />
            </div>
            <div class="pg-form-group">
              <label for="pg-prog">Programa de interés</label>
              <select id="pg-prog" v-model="form.programa" required>
                <option value="" disabled>Selecciona un programa</option>
                <option value="esp-mad">Especialidad – Alta Dirección</option>
                <option value="mae-made">Maestría – Administración de Empresas</option>
                <option value="mae-tecnologia">Maestría – Tecnología y Transformación Digital</option>
                <option value="mae-marketing">Maestría – Marketing Estratégico</option>
                <option value="mae-educacion">Maestría – Educación y Docencia</option>
                <option value="doc-ca">Doctorado – Ciencias Administrativas</option>
                <option value="doc-hum">Doctorado – Humanidades</option>
              </select>
            </div>
            <label class="pg-check">
              <input v-model="form.privacidad" type="checkbox" />
              <span class="pg-check__box"></span>
              <span class="pg-check__lbl">
                Acepto el
                <a href="https://uninter.edu.mx/politicas-privacidad/" target="_blank">Aviso de Privacidad</a>
              </span>
            </label>
            <button
              type="submit"
              class="pg-btn pg-btn--primary pg-btn--full"
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
.pg-form-section {
  --p: #546E7A;
  --pd: #37474F;
  --pl: #78909C;
  background: #eceff1;
  padding: 5.5rem 0;
}
.pg-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.5rem;
}
.pg-form-layout {
  display: grid;
  grid-template-columns: 1fr 1.1fr;
  gap: 4rem;
  align-items: center;
}

/* Left */
.pg-form-left { display: flex; flex-direction: column; gap: 2rem; }
.pg-form-left__mascot {
  position: relative;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;
  background: var(--p);
  box-shadow: 0 8px 32px rgba(84,110,122,0.3);
  margin: 0 auto;
}
.pg-form-left__img { width: 100%; height: 100%; object-fit: cover; }
.pg-form-left__badge {
  position: absolute;
  bottom: 12px;
  left: 50%;
  transform: translateX(-50%);
  background: #0f1c24;
  color: var(--pl);
  font-size: 0.85rem;
  font-weight: 900;
  letter-spacing: 0.1em;
  padding: 0.3rem 1rem;
  border-radius: 999px;
  text-transform: uppercase;
}
.pg-form-left__info { text-align: center; }
.pg-form-left__eyebrow {
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--p);
  margin: 0 0 0.4rem;
}
.pg-form-left__title {
  font-family: var(--font-serif, Georgia, serif);
  font-size: 1.5rem;
  font-weight: 800;
  color: #1a2530;
  margin: 0 0 0.3rem;
}
.pg-form-left__sub {
  font-size: 0.82rem;
  font-weight: 600;
  color: #888;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  margin: 0 0 0.875rem;
}
.pg-form-left__text { font-size: 0.88rem; color: #555; line-height: 1.65; margin: 0 0 1rem; }
.pg-form-left__contact { display: flex; flex-direction: column; gap: 0.25rem; font-size: 0.8rem; color: #777; }

/* Right / card */
.pg-form-card {
  background: #fff;
  border-radius: 20px;
  padding: 2.5rem;
  box-shadow: 0 8px 32px rgba(0,0,0,0.08);
  border: 1px solid rgba(0,0,0,0.06);
}

/* Success */
.pg-form-success {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 2rem 0;
  text-align: center;
}
.success-icon { color: var(--p); }
.success-title {
  font-family: var(--font-serif, Georgia, serif);
  font-size: 1.4rem;
  font-weight: 800;
  color: #1a2530;
  margin: 0;
}
.success-msg { font-size: 0.9rem; color: #555; line-height: 1.6; margin: 0; }

/* Form */
.pg-form { display: flex; flex-direction: column; gap: 1.125rem; }
.pg-form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
.pg-form-group { display: flex; flex-direction: column; gap: 0.375rem; }
.pg-form-group label { font-size: 0.78rem; font-weight: 700; color: #444; text-transform: uppercase; letter-spacing: 0.06em; }
.pg-form-group input,
.pg-form-group select {
  border: 1.5px solid #ddd;
  border-radius: 8px;
  padding: 0.7rem 0.9rem;
  font-size: 0.9rem;
  color: #333;
  background: #fff;
  transition: border-color 0.2s;
  outline: none;
}
.pg-form-group input:focus,
.pg-form-group select:focus { border-color: var(--p); }

/* Checkbox */
.pg-check {
  display: flex;
  align-items: flex-start;
  gap: 0.625rem;
  cursor: pointer;
}
.pg-check input { display: none; }
.pg-check__box {
  width: 18px;
  height: 18px;
  min-width: 18px;
  border: 2px solid #ccc;
  border-radius: 4px;
  margin-top: 0.05rem;
  transition: background 0.2s, border-color 0.2s;
  position: relative;
}
.pg-check input:checked ~ .pg-check__box {
  background: var(--p);
  border-color: var(--p);
}
.pg-check input:checked ~ .pg-check__box::after {
  content: '';
  position: absolute;
  top: 2px; left: 5px;
  width: 5px; height: 9px;
  border: 2px solid #fff;
  border-top: none;
  border-left: none;
  transform: rotate(45deg);
}
.pg-check__lbl { font-size: 0.8rem; color: #666; line-height: 1.5; }
.pg-check__lbl a { color: var(--p); }

/* Buttons */
.pg-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-size: 0.88rem;
  font-weight: 700;
  padding: 0.8rem 1.75rem;
  border-radius: 999px;
  text-decoration: none;
  transition: background 0.2s;
  cursor: pointer;
  border: none;
}
.pg-btn--primary { background: var(--p); color: #fff; }
.pg-btn--primary:hover:not(:disabled) { background: var(--pd); }
.pg-btn--primary:disabled { opacity: 0.55; cursor: not-allowed; }
.pg-btn--full { width: 100%; }

@media (max-width: 1024px) {
  .pg-form-layout { grid-template-columns: 1fr; gap: 2.5rem; }
  .pg-form-row { grid-template-columns: 1fr; }
}
</style>
