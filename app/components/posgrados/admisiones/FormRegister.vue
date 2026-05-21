<script setup lang="ts">
import { CheckCircle2 } from "lucide-vue-next";

const form = reactive({
  nombre: "", apellido: "", telefono: "", email: "",
  programa: "", modalidad: "", privacidad: false,
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
  Object.assign(form, { nombre: "", apellido: "", telefono: "", email: "", programa: "", modalidad: "", privacidad: false });
  submitted.value = false;
}
</script>

<template>
  <section class="adm-form-section">
    <div class="adm-container adm-form-layout">

      <!-- Izquierda -->
      <div class="adm-form-left">
        <div class="adm-form-left__mascot">
          <img
            src="/images/hero/licenciaturasPresenciales.jpg"
            alt="LEGI UNINTER"
            class="adm-form-left__img"
            onerror="this.style.display='none'"
          />
          <div class="adm-form-left__badge">LEGI</div>
        </div>
        <div class="adm-form-left__info">
          <p class="adm-form-left__eyebrow">¡Bienvenido a UNINTER!</p>
          <h3 class="adm-form-left__title">Formulario de registro</h3>
          <p class="adm-form-left__sub">Posgrados</p>
          <p class="adm-form-left__text">
            Llena el formulario y un asesor de Posgrados se comunicará
            contigo para orientarte sobre el programa ideal y el proceso
            de admisión que mejor se adapte a ti.
          </p>
          <div class="adm-form-left__contact">
            <span>☎ 777 357 9000</span>
            <span>Admisiones: 777 357 9001</span>
          </div>
        </div>
      </div>

      <!-- Derecha -->
      <div class="adm-form-right">
        <div class="adm-form-card">
          <div v-if="submitted" class="adm-form-success">
            <CheckCircle2 :size="52" class="success-icon" />
            <h3 class="success-title">¡Registro enviado!</h3>
            <p class="success-msg">Tu solicitud ha sido recibida. Un asesor de Posgrados te contactará a la brevedad.</p>
            <button class="adm-btn adm-btn--primary" @click="reiniciar">Nuevo registro</button>
          </div>

          <form v-else @submit.prevent="enviar" class="adm-form">
            <div class="adm-form-row">
              <div class="adm-form-group">
                <label for="adm-nombre">Nombre</label>
                <input id="adm-nombre" v-model="form.nombre" type="text" placeholder="Tu nombre" required />
              </div>
              <div class="adm-form-group">
                <label for="adm-apellido">Apellido</label>
                <input id="adm-apellido" v-model="form.apellido" type="text" placeholder="Tu apellido" required />
              </div>
            </div>
            <div class="adm-form-group">
              <label for="adm-tel">Teléfono</label>
              <input id="adm-tel" v-model="form.telefono" type="tel" placeholder="10 dígitos" required />
            </div>
            <div class="adm-form-group">
              <label for="adm-email">Correo electrónico</label>
              <input id="adm-email" v-model="form.email" type="email" placeholder="correo@ejemplo.com" required />
            </div>
            <div class="adm-form-group">
              <label for="adm-prog">Programa de interés</label>
              <select id="adm-prog" v-model="form.programa" required>
                <option value="" disabled>Selecciona un programa</option>
                <option>Especialidad – Alta Dirección</option>
                <option>Maestría – Administración de Empresas</option>
                <option>Maestría – Tecnología y Transformación Digital</option>
                <option>Maestría – Marketing Estratégico</option>
                <option>Maestría – Educación y Docencia</option>
                <option>Doctorado – Ciencias Administrativas</option>
                <option>Doctorado – Humanidades</option>
              </select>
            </div>
            <div class="adm-form-group">
              <label for="adm-mod">Modalidad de admisión</label>
              <select id="adm-mod" v-model="form.modalidad" required>
                <option value="" disabled>Selecciona una modalidad</option>
                <option value="presencial">Presencial</option>
                <option value="linea">En Línea</option>
              </select>
            </div>
            <label class="adm-check">
              <input v-model="form.privacidad" type="checkbox" />
              <span class="adm-check__box"></span>
              <span class="adm-check__lbl">
                Acepto el <a href="https://uninter.edu.mx/politicas-privacidad/" target="_blank">Aviso de Privacidad</a>
              </span>
            </label>
            <button type="submit" class="adm-btn adm-btn--primary adm-btn--full" :disabled="loading || !form.privacidad">
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
.adm-form-section {
  --p: #546E7A;
  --pd: #37474F;
  --pl: #78909C;
  background: #eceff1;
  padding: 5.5rem 0;
}
.adm-container { max-width: 1280px; margin: 0 auto; padding: 0 1.5rem; }
.adm-form-layout { display: grid; grid-template-columns: 1fr 1.1fr; gap: 4rem; align-items: center; }

.adm-form-left { display: flex; flex-direction: column; gap: 2rem; }
.adm-form-left__mascot {
  position: relative; width: 200px; height: 200px; border-radius: 50%;
  overflow: hidden; background: var(--p);
  box-shadow: 0 8px 32px rgba(84,110,122,0.3); margin: 0 auto;
}
.adm-form-left__img { width: 100%; height: 100%; object-fit: cover; }
.adm-form-left__badge {
  position: absolute; bottom: 12px; left: 50%; transform: translateX(-50%);
  background: #0f1c24; color: var(--pl);
  font-size: 0.85rem; font-weight: 900; letter-spacing: 0.1em;
  padding: 0.3rem 1rem; border-radius: 999px; text-transform: uppercase;
}
.adm-form-left__info { text-align: center; }
.adm-form-left__eyebrow { font-size: 0.78rem; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: var(--p); margin: 0 0 0.4rem; }
.adm-form-left__title { font-family: var(--font-serif, Georgia, serif); font-size: 1.5rem; font-weight: 800; color: #1a2530; margin: 0 0 0.3rem; }
.adm-form-left__sub { font-size: 0.82rem; font-weight: 600; color: #888; text-transform: uppercase; letter-spacing: 0.06em; margin: 0 0 0.875rem; }
.adm-form-left__text { font-size: 0.88rem; color: #555; line-height: 1.65; margin: 0 0 1rem; }
.adm-form-left__contact { display: flex; flex-direction: column; gap: 0.25rem; font-size: 0.8rem; color: #777; }

.adm-form-card { background: #fff; border-radius: 20px; padding: 2.5rem; box-shadow: 0 8px 32px rgba(0,0,0,0.08); border: 1px solid rgba(0,0,0,0.06); }
.adm-form-success { display: flex; flex-direction: column; align-items: center; gap: 1rem; padding: 2rem 0; text-align: center; }
.success-icon { color: var(--p); }
.success-title { font-family: var(--font-serif, Georgia, serif); font-size: 1.4rem; font-weight: 800; color: #1a2530; margin: 0; }
.success-msg { font-size: 0.9rem; color: #555; line-height: 1.6; margin: 0; }

.adm-form { display: flex; flex-direction: column; gap: 1.125rem; }
.adm-form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
.adm-form-group { display: flex; flex-direction: column; gap: 0.375rem; }
.adm-form-group label { font-size: 0.78rem; font-weight: 700; color: #444; text-transform: uppercase; letter-spacing: 0.06em; }
.adm-form-group input, .adm-form-group select {
  border: 1.5px solid #ddd; border-radius: 8px; padding: 0.7rem 0.9rem;
  font-size: 0.9rem; color: #333; background: #fff; transition: border-color 0.2s; outline: none;
}
.adm-form-group input:focus, .adm-form-group select:focus { border-color: var(--p); }

.adm-check { display: flex; align-items: flex-start; gap: 0.625rem; cursor: pointer; }
.adm-check input { display: none; }
.adm-check__box {
  width: 18px; height: 18px; min-width: 18px; border: 2px solid #ccc;
  border-radius: 4px; margin-top: 0.05rem; transition: background 0.2s, border-color 0.2s; position: relative;
}
.adm-check input:checked ~ .adm-check__box { background: var(--p); border-color: var(--p); }
.adm-check input:checked ~ .adm-check__box::after {
  content: ''; position: absolute; top: 2px; left: 5px;
  width: 5px; height: 9px; border: 2px solid #fff;
  border-top: none; border-left: none; transform: rotate(45deg);
}
.adm-check__lbl { font-size: 0.8rem; color: #666; line-height: 1.5; }
.adm-check__lbl a { color: var(--p); }

.adm-btn {
  display: inline-flex; align-items: center; justify-content: center; gap: 0.5rem;
  font-size: 0.88rem; font-weight: 700; padding: 0.8rem 1.75rem; border-radius: 999px;
  text-decoration: none; transition: background 0.2s; cursor: pointer; border: none;
}
.adm-btn--primary { background: var(--p); color: #fff; }
.adm-btn--primary:hover:not(:disabled) { background: var(--pd); }
.adm-btn--primary:disabled { opacity: 0.55; cursor: not-allowed; }
.adm-btn--full { width: 100%; }

@media (max-width: 1024px) {
  .adm-form-layout { grid-template-columns: 1fr; gap: 2.5rem; }
  .adm-form-row { grid-template-columns: 1fr; }
}
</style>
