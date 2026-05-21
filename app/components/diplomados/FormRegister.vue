<script setup lang="ts">
const form = reactive({ nombre: "", email: "", telefono: "", programa: "", modalidad: "" });
const sent = ref(false);
const programas = [
  "Contabilidad y Finanzas", "Certificaciones ICPM", "Inteligencia Artificial",
  "Innovación Digital", "Era Digital", "Psicología", "Startup y Profesional",
  "Comunicación y RRHH", "Formación Docente", "Idiomas y ELE",
  "Diseño y Arte", "Arquitectura y Construcción",
];
function submit() { sent.value = true; }
</script>

<template>
  <section class="dp-form">
    <div class="dp-container dp-form__inner">
      <!-- Mascot -->
      <div class="dp-form__mascot">
        <div class="dp-form__legi-icon"><Icon name="mdi:shield-star-outline" size="80" /></div>
        <div class="dp-form__mascot-text">
          <p class="dp-form__mascot-title">¡Bienvenido a UNINTER!</p>
          <p class="dp-form__mascot-sub">Comunidad de Egresados<br />Diplomados UNINTER</p>
        </div>
      </div>

      <!-- Form card -->
      <div class="dp-form__card">
        <Transition name="dp-sent" mode="out-in">
          <div v-if="sent" class="dp-form__success">
            <Icon name="mdi:check-circle-outline" size="52" class="dp-form__success-icon" />
            <h3>¡Solicitud enviada!</h3>
            <p>Un asesor se pondrá en contacto contigo en menos de 24 horas.</p>
            <button class="dp-form__reset" @click="sent = false">Enviar otra solicitud</button>
          </div>
          <form v-else @submit.prevent="submit" class="dp-form__fields">
            <div class="dp-form__head">
              <p class="dp-form__eyebrow">Inicia tu proceso</p>
              <h2 class="dp-form__title">¡Solicita información!</h2>
            </div>
            <div class="dp-form__group">
              <label class="dp-form__label">Nombre completo</label>
              <input v-model="form.nombre" type="text" required placeholder="Tu nombre" class="dp-form__input" />
            </div>
            <div class="dp-form__row">
              <div class="dp-form__group">
                <label class="dp-form__label">Correo electrónico</label>
                <input v-model="form.email" type="email" required placeholder="correo@ejemplo.com" class="dp-form__input" />
              </div>
              <div class="dp-form__group">
                <label class="dp-form__label">Teléfono</label>
                <input v-model="form.telefono" type="tel" placeholder="10 dígitos" class="dp-form__input" />
              </div>
            </div>
            <div class="dp-form__group">
              <label class="dp-form__label">Programa de interés</label>
              <select v-model="form.programa" class="dp-form__input dp-form__select">
                <option value="" disabled>Selecciona un área</option>
                <option v-for="p in programas" :key="p" :value="p">{{ p }}</option>
              </select>
            </div>
            <div class="dp-form__group">
              <label class="dp-form__label">Modalidad</label>
              <div class="dp-form__radios">
                <label class="dp-form__radio"><input type="radio" v-model="form.modalidad" value="Presencial" /><span>Presencial</span></label>
                <label class="dp-form__radio"><input type="radio" v-model="form.modalidad" value="En Línea" /><span>En Línea</span></label>
                <label class="dp-form__radio"><input type="radio" v-model="form.modalidad" value="Híbrida" /><span>Híbrida</span></label>
              </div>
            </div>
            <button type="submit" class="dp-form__submit">Solicitar información →</button>
            <p class="dp-form__privacy">Al enviar aceptas el <a href="#">aviso de privacidad</a> de UNINTER.</p>
          </form>
        </Transition>
      </div>
    </div>
  </section>
</template>

<style scoped>
.dp-form { --p: #6D4C41; --pd: #4E342E; --pl: #A1887F; background: #f0ebe8; padding: 5.5rem 0; }
.dp-container { max-width: 1280px; margin: 0 auto; padding: 0 1.5rem; }
.dp-form__inner { display: grid; grid-template-columns: 1fr 1.4fr; gap: 4rem; align-items: center; }

.dp-form__mascot { display: flex; flex-direction: column; align-items: center; gap: 1.5rem; text-align: center; }
.dp-form__legi-icon { width: 120px; height: 120px; border-radius: 50%; background: rgba(109,76,65,0.12); color: var(--p); display: flex; align-items: center; justify-content: center; }
.dp-form__mascot-title { font-family: var(--font-serif, Georgia, serif); font-size: 1.5rem; font-weight: 800; color: #2a1810; margin: 0; }
.dp-form__mascot-sub { font-size: 0.88rem; color: #777; line-height: 1.5; margin: 0; }

.dp-form__card { background: #fff; border-radius: 20px; padding: 2.5rem; box-shadow: 0 8px 40px rgba(109,76,65,0.1); border: 1px solid rgba(109,76,65,0.1); }
.dp-form__head { margin-bottom: 1.75rem; }
.dp-form__eyebrow { font-size: 0.72rem; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; color: var(--p); margin: 0 0 0.4rem; }
.dp-form__title { font-family: var(--font-serif, Georgia, serif); font-size: 1.6rem; font-weight: 800; color: #2a1810; margin: 0; }
.dp-form__fields { display: flex; flex-direction: column; gap: 1.125rem; }
.dp-form__row { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
.dp-form__group { display: flex; flex-direction: column; gap: 0.4rem; }
.dp-form__label { font-size: 0.78rem; font-weight: 700; color: #444; }
.dp-form__input { border: 1.5px solid #ddd; border-radius: 8px; padding: 0.65rem 0.875rem; font-size: 0.88rem; color: #333; outline: none; transition: border-color 0.2s; width: 100%; box-sizing: border-box; font-family: inherit; background: #fff; }
.dp-form__input:focus { border-color: var(--p); }
.dp-form__select { cursor: pointer; }
.dp-form__radios { display: flex; gap: 1rem; flex-wrap: wrap; }
.dp-form__radio { display: flex; align-items: center; gap: 0.4rem; font-size: 0.85rem; color: #444; cursor: pointer; }
.dp-form__radio input { accent-color: var(--p); }
.dp-form__submit { background: var(--p); color: #fff; border: none; border-radius: 8px; padding: 0.875rem 1.5rem; font-size: 0.92rem; font-weight: 700; cursor: pointer; transition: background 0.2s, transform 0.15s; font-family: inherit; }
.dp-form__submit:hover { background: var(--pd); transform: translateY(-1px); }
.dp-form__privacy { font-size: 0.72rem; color: #999; margin: 0; text-align: center; }
.dp-form__privacy a { color: var(--p); }

.dp-form__success { display: flex; flex-direction: column; align-items: center; gap: 1rem; text-align: center; padding: 1rem 0; }
.dp-form__success-icon { color: var(--p); }
.dp-form__success h3 { font-family: var(--font-serif, Georgia, serif); font-size: 1.4rem; font-weight: 800; color: #2a1810; margin: 0; }
.dp-form__success p { font-size: 0.88rem; color: #666; margin: 0; }
.dp-form__reset { background: none; border: 1.5px solid var(--p); color: var(--p); border-radius: 6px; padding: 0.5rem 1.25rem; font-size: 0.82rem; font-weight: 700; cursor: pointer; transition: all 0.2s; }
.dp-form__reset:hover { background: var(--p); color: #fff; }

.dp-sent-enter-active, .dp-sent-leave-active { transition: opacity 0.25s, transform 0.25s; }
.dp-sent-enter-from, .dp-sent-leave-to { opacity: 0; transform: translateY(8px); }

@media (max-width: 1024px) { .dp-form__inner { grid-template-columns: 1fr; } .dp-form__mascot { flex-direction: row; text-align: left; } }
@media (max-width: 640px) { .dp-form__row { grid-template-columns: 1fr; } .dp-form__mascot { flex-direction: column; text-align: center; } }
</style>
