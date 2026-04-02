<script setup lang="ts">
</script>

<template>
  <section class="cb-section uninter-section">
    <div class="uninter-container">
      <div class="cb-banner">
        <div class="cb-deco cb-deco--1"></div>
        <div class="cb-deco cb-deco--2"></div>

        <div class="cb-left">
          <div class="cb-eyebrow">
            <Icon name="mdi:percent" size="14" />
            Becas y financiamiento
          </div>
          <h2 class="cb-title">Calcula tu beca</h2>
          <p class="cb-desc">
            Descubre cuánto puedes ahorrar en tu inscripción.
            Sin costo, sin compromiso — en menos de 2 minutos.
          </p>
          <ul class="cb-list">
            <li><Icon name="mdi:check-circle" size="14" class="cb-check" /> Becas por mérito académico</li>
            <li><Icon name="mdi:check-circle" size="14" class="cb-check" /> Descuentos para familiares UNINTER</li>
            <li><Icon name="mdi:check-circle" size="14" class="cb-check" /> Planes de financiamiento flexibles</li>
          </ul>
        </div>

        <div class="cb-right">
          <a
            href="https://universidad.uninter.edu.mx/Calcula-Tu-Beca"
            target="_blank"
            rel="noopener"
            class="cb-btn-primary"
          >
            <Icon name="mdi:calculator-variant-outline" size="18" />
            Calcular mi beca ahora
          </a>
          <a
            href="https://universidad.uninter.edu.mx/Admisiones"
            target="_blank"
            rel="noopener"
            class="cb-btn-ghost"
          >
            Solicitar información
          </a>
          <a
            href="https://wa.me/5217776154241?text=Hola%20vengo%20de%20la%20p%C3%A1gina%20de%20Universidad%2C%20necesito%20m%C3%A1s%20informaci%C3%B3n%20%E2%9C%8C%EF%B8%8F."
            target="_blank"
            rel="noopener"
            class="cb-whatsapp"
          >
            <Icon name="mdi:whatsapp" size="15" />
            Preguntar por WhatsApp
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.cb-section { background: #f8f9fb; padding: 3rem 0; }

.cb-banner {
  background: #0F3C61;
  border-radius: 16px;
  padding: 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3rem;
  position: relative;
  overflow: hidden;
  flex-wrap: wrap;
}

.cb-deco {
  position: absolute;
  border-radius: 50%;
  background: rgba(255,255,255,.05);
}
.cb-deco--1 { width: 260px; height: 260px; top: -80px; right: 300px; }
.cb-deco--2 { width: 180px; height: 180px; bottom: -60px; right: 100px; }

.cb-left { position: relative; z-index: 1; flex: 1; min-width: 260px; }

.cb-eyebrow {
  display: inline-flex;
  align-items: center;
  gap: .4rem;
  font-size: .7rem;
  font-weight: 700;
  letter-spacing: .12em;
  text-transform: uppercase;
  color: #93c5fd;
  margin-bottom: .875rem;
}

.cb-title {
  font-family: var(--font-serif, Georgia, serif);
  font-size: clamp(1.6rem, 3vw, 2.4rem);
  font-weight: 700;
  color: #fff;
  line-height: 1.1;
  margin: 0 0 .875rem;
}

.cb-desc {
  font-size: .9rem;
  color: rgba(255,255,255,.72);
  line-height: 1.65;
  max-width: 400px;
  margin: 0 0 1.25rem;
}

.cb-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: .5rem;
}

.cb-list li {
  display: flex;
  align-items: center;
  gap: .5rem;
  font-size: .84rem;
  color: rgba(255,255,255,.85);
}

.cb-check { color: #4ade80; flex-shrink: 0; }

.cb-right {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: .75rem;
  flex-shrink: 0;
  min-width: 220px;
}

.cb-btn-primary {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .5rem;
  background: #fff;
  color: #0F3C61;
  font-size: .88rem;
  font-weight: 800;
  padding: .875rem 1.5rem;
  border-radius: 8px;
  text-decoration: none;
  transition: background .2s;
  text-align: center;
}
.cb-btn-primary:hover { background: #e8f0fd; }

.cb-btn-ghost {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(255,255,255,.3);
  color: #fff;
  font-size: .82rem;
  font-weight: 600;
  padding: .7rem 1.5rem;
  border-radius: 8px;
  text-decoration: none;
  transition: background .2s;
  text-align: center;
}
.cb-btn-ghost:hover { background: rgba(255,255,255,.08); }

.cb-whatsapp {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .4rem;
  color: #4ade80;
  font-size: .78rem;
  font-weight: 600;
  text-decoration: none;
  padding: .5rem;
  transition: opacity .2s;
}
.cb-whatsapp:hover { opacity: .8; }

@media (max-width: 768px) {
  .cb-banner { padding: 2rem 1.5rem; flex-direction: column; gap: 2rem; }
  .cb-right { width: 100%; }
}
@media (max-width: 480px) {
  .cb-banner { padding: 1.5rem 1.25rem; border-radius: 12px; }
}
</style>