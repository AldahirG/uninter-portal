<script setup lang="ts">
const mapsUrl = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.4!2d-99.2341!3d18.9242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce73b5b2d8a0f7%3A0x1!2sUniversidad+Internacional+UNINTER!5e0!3m2!1ses!2smx!4v1'

const contactInfo = [
  { icon: 'mdi:map-marker-outline', label: 'Dirección', value: 'San Jerónimo No. 304, Col. San Jerónimo, Cuernavaca, Morelos, México' },
  { icon: 'mdi:phone-outline',      label: 'Teléfonos',  value: '777 357 9000  ·  777 357 9001' },
  { icon: 'mdi:whatsapp',           label: 'WhatsApp',   value: 'Escríbenos directamente', href: 'https://wa.me/5217776154241?text=Hola%20vengo%20de%20la%20p%C3%A1gina%20de%20Universidad%2C%20necesito%20m%C3%A1s%20informaci%C3%B3n%20%E2%9C%8C%EF%B8%8F.' },
  { icon: 'mdi:clock-outline',      label: 'Horario',    value: 'Lunes a viernes 8:00 – 20:00 h' },
]
</script>

<template>
  <section class="en-section uninter-section">
    <div class="uninter-container">

      <div class="en-header">
        <div class="uninter-eyebrow">Visítanos</div>
        <h2 class="uninter-section-title">Encuéntranos</h2>
      </div>

      <div class="en-layout">

        <!-- Mapa -->
        <div class="en-map">
          <iframe
            :src="mapsUrl"
            width="100%"
            height="100%"
            style="border:0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="Ubicación UNINTER Cuernavaca"
          ></iframe>
        </div>

        <!-- Info -->
        <div class="en-info">
          <div v-for="c in contactInfo" :key="c.label" class="en-row">
            <div class="en-row__icon">
              <Icon :name="c.icon" size="18" />
            </div>
            <div class="en-row__text">
              <p class="en-row__label">{{ c.label }}</p>
              <a v-if="c.href" :href="c.href" target="_blank" class="en-row__value en-row__value--link">
                {{ c.value }}
              </a>
              <p v-else class="en-row__value">{{ c.value }}</p>
            </div>
          </div>

          <div class="en-ctas">
            <a
              href="https://goo.gl/maps/uninter"
              target="_blank"
              rel="noopener"
              class="en-btn en-btn--outline"
            >
              <Icon name="mdi:google-maps" size="16" />
              Abrir en Google Maps
            </a>
            <a
              href="https://wa.me/5217776154241?text=Hola%20vengo%20de%20la%20p%C3%A1gina%20de%20Universidad%2C%20necesito%20m%C3%A1s%20informaci%C3%B3n%20%E2%9C%8C%EF%B8%8F."
              target="_blank"
              rel="noopener"
              class="en-btn en-btn--wa"
            >
              <Icon name="mdi:whatsapp" size="16" />
              WhatsApp
            </a>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
.en-section { background: #f8f9fb; }
.en-header { margin-bottom: 2rem; }

.en-layout {
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: 1.5rem;
  align-items: start;
}

.en-map {
  height: 380px;
  border-radius: 14px;
  overflow: hidden;
  border: 1px solid #e2e8f0;
  background: #e8f0fd;
}

.en-info {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.en-row {
  display: flex;
  align-items: flex-start;
  gap: .875rem;
  padding: 1rem 1.125rem;
  background: #fff;
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  border-left: 3px solid #0F3C61;
}

.en-row__icon {
  width: 38px; height: 38px;
  border-radius: 7px;
  background: #e8f0fd;
  display: flex; align-items: center; justify-content: center;
  color: #0F3C61;
  flex-shrink: 0;
}

.en-row__label {
  font-size: .68rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: .07em;
  color: #64748b;
  margin: 0 0 3px;
}

.en-row__value {
  font-size: .84rem;
  color: #1e293b;
  margin: 0;
  line-height: 1.4;
}

.en-row__value--link {
  color: #0F3C61;
  text-decoration: none;
  font-weight: 600;
}
.en-row__value--link:hover { text-decoration: underline; }

.en-ctas {
  display: flex;
  gap: .75rem;
  flex-wrap: wrap;
  margin-top: .25rem;
}

.en-btn {
  display: inline-flex;
  align-items: center;
  gap: .4rem;
  font-size: .8rem;
  font-weight: 700;
  padding: .65rem 1.1rem;
  border-radius: 7px;
  text-decoration: none;
  transition: all .2s;
  flex: 1;
  justify-content: center;
}

.en-btn--outline {
  border: 1.5px solid #0F3C61;
  color: #0F3C61;
  background: transparent;
}
.en-btn--outline:hover { background: #0F3C61; color: #fff; }

.en-btn--wa {
  background: #25D366;
  color: #fff;
  border: 1.5px solid #25D366;
}
.en-btn--wa:hover { filter: brightness(1.08); }

@media (max-width: 768px) {
  .en-layout { grid-template-columns: 1fr; }
  .en-map { height: 260px; }
}
</style>