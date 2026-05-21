<script setup lang="ts">
const form = reactive({ nombre: "", email: "", telefono: "", programa: "", modalidad: "" });
const sent = ref(false);
const programas = ["Contabilidad y Finanzas", "Certificaciones ICPM", "Inteligencia Artificial", "Innovación Digital", "Era Digital", "Psicología", "Startup y Profesional", "Comunicación y RRHH", "Formación Docente", "Idiomas y ELE", "Diseño y Arte", "Arquitectura y Construcción"];
function submit() { sent.value = true; }
</script>

<template>
  <section class="adp-form">
    <div class="adp-container adp-form__inner">
      <div class="adp-form__mascot">
        <div class="dp-form__legi-icon"><Icon name="mdi:shield-star-outline" size="80" /></div>
        <div class="adp-form__mascot-text">
          <p class="adp-form__mascot-title">¡Inicia tu proceso!</p>
          <p class="adp-form__mascot-sub">Admisiones Diplomados<br />UNINTER</p>
        </div>
      </div>
      <div class="adp-form__card">
        <Transition name="adp-sent" mode="out-in">
          <div v-if="sent" class="adp-form__success">
            <Icon name="mdi:check-circle-outline" size="52" class="adp-form__success-icon" />
            <h3>¡Solicitud enviada!</h3>
            <p>Un asesor se pondrá en contacto en menos de 24 horas.</p>
            <button class="adp-form__reset" @click="sent = false">Enviar otra solicitud</button>
          </div>
          <form v-else @submit.prevent="submit" class="adp-form__fields">
            <div class="adp-form__head">
              <p class="adp-form__eyebrow">Admisiones Diplomados</p>
              <h2 class="adp-form__title">¡Solicita información!</h2>
            </div>
            <div class="adp-form__group">
              <label class="adp-form__label">Nombre completo</label>
              <input v-model="form.nombre" type="text" required placeholder="Tu nombre" class="adp-form__input" />
            </div>
            <div class="adp-form__row">
              <div class="adp-form__group">
                <label class="adp-form__label">Correo electrónico</label>
                <input v-model="form.email" type="email" required placeholder="correo@ejemplo.com" class="adp-form__input" />
              </div>
              <div class="adp-form__group">
                <label class="adp-form__label">Teléfono</label>
                <input v-model="form.telefono" type="tel" placeholder="10 dígitos" class="adp-form__input" />
              </div>
            </div>
            <div class="adp-form__group">
              <label class="adp-form__label">Programa de interés</label>
              <select v-model="form.programa" class="adp-form__input adp-form__select">
                <option value="" disabled>Selecciona un área</option>
                <option v-for="p in programas" :key="p" :value="p">{{ p }}</option>
              </select>
            </div>
            <div class="adp-form__group">
              <label class="adp-form__label">Modalidad</label>
              <div class="adp-form__radios">
                <label class="adp-form__radio"><input type="radio" v-model="form.modalidad" value="Presencial" /><span>Presencial</span></label>
                <label class="adp-form__radio"><input type="radio" v-model="form.modalidad" value="En Línea" /><span>En Línea</span></label>
                <label class="adp-form__radio"><input type="radio" v-model="form.modalidad" value="Híbrida" /><span>Híbrida</span></label>
              </div>
            </div>
            <button type="submit" class="adp-form__submit">Solicitar información →</button>
            <p class="adp-form__privacy">Al enviar aceptas el <a href="#">aviso de privacidad</a> de UNINTER.</p>
          </form>
        </Transition>
      </div>
    </div>
  </section>
</template>

<style scoped>
.adp-form { --p: #6D4C41; --pd: #4E342E; --pl: #A1887F; background: #f0ebe8; padding: 5.5rem 0; }
.adp-container { max-width: 1280px; margin: 0 auto; padding: 0 1.5rem; }
.adp-form__inner { display: grid; grid-template-columns: 1fr 1.4fr; gap: 4rem; align-items: center; }
.adp-form__mascot { display: flex; flex-direction: column; align-items: center; gap: 1.5rem; text-align: center; }
.dp-form__legi-icon { width: 110px; height: 110px; border-radius: 50%; background: rgba(109,76,65,0.12); color: var(--p); display: flex; align-items: center; justify-content: center; }
.adp-form__mascot-title { font-family: var(--font-serif, Georgia, serif); font-size: 1.4rem; font-weight: 800; color: #2a1810; margin: 0; }
.adp-form__mascot-sub { font-size: 0.88rem; color: #777; line-height: 1.5; margin: 0; }
.adp-form__card { background: #fff; border-radius: 20px; padding: 2.5rem; box-shadow: 0 8px 40px rgba(109,76,65,0.1); border: 1px solid rgba(109,76,65,0.1); }
.adp-form__head { margin-bottom: 1.75rem; }
.adp-form__eyebrow { font-size: 0.72rem; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; color: var(--p); margin: 0 0 0.4rem; }
.adp-form__title { font-family: var(--font-serif, Georgia, serif); font-size: 1.6rem; font-weight: 800; color: #2a1810; margin: 0; }
.adp-form__fields { display: flex; flex-direction: column; gap: 1.125rem; }
.adp-form__row { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
.adp-form__group { display: flex; flex-direction: column; gap: 0.4rem; }
.adp-form__label { font-size: 0.78rem; font-weight: 700; color: #444; }
.adp-form__input { border: 1.5px solid #ddd; border-radius: 8px; padding: 0.65rem 0.875rem; font-size: 0.88rem; color: #333; outline: none; transition: border-color 0.2s; width: 100%; box-sizing: border-box; font-family: inherit; background: #fff; }
.adp-form__input:focus { border-color: var(--p); }
.adp-form__select { cursor: pointer; }
.adp-form__radios { display: flex; gap: 1rem; flex-wrap: wrap; }
.adp-form__radio { display: flex; align-items: center; gap: 0.4rem; font-size: 0.85rem; color: #444; cursor: pointer; }
.adp-form__radio input { accent-color: var(--p); }
.adp-form__submit { background: var(--p); color: #fff; border: none; border-radius: 8px; padding: 0.875rem 1.5rem; font-size: 0.92rem; font-weight: 700; cursor: pointer; transition: background 0.2s, transform 0.15s; font-family: inherit; }
.adp-form__submit:hover { background: var(--pd); transform: translateY(-1px); }
.adp-form__privacy { font-size: 0.72rem; color: #999; margin: 0; text-align: center; }
.adp-form__privacy a { color: var(--p); }
.adp-form__success { display: flex; flex-direction: column; align-items: center; gap: 1rem; text-align: center; padding: 1rem 0; }
.adp-form__success-icon { color: var(--p); }
.adp-form__success h3 { font-family: var(--font-serif, Georgia, serif); font-size: 1.4rem; font-weight: 800; color: #2a1810; margin: 0; }
.adp-form__success p { font-size: 0.88rem; color: #666; margin: 0; }
.adp-form__reset { background: none; border: 1.5px solid var(--p); color: var(--p); border-radius: 6px; padding: 0.5rem 1.25rem; font-size: 0.82rem; font-weight: 700; cursor: pointer; transition: all 0.2s; }
.adp-form__reset:hover { background: var(--p); color: #fff; }
.adp-sent-enter-active, .adp-sent-leave-active { transition: opacity 0.25s, transform 0.25s; }
.adp-sent-enter-from, .adp-sent-leave-to { opacity: 0; transform: translateY(8px); }
@media (max-width: 1024px) { .adp-form__inner { grid-template-columns: 1fr; } .adp-form__mascot { flex-direction: row; text-align: left; } }
@media (max-width: 640px) { .adp-form__row { grid-template-columns: 1fr; } .adp-form__mascot { flex-direction: column; text-align: center; } }
</style>
