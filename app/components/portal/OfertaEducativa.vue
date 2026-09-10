<script setup lang="ts">
import { ArrowRight } from "lucide-vue-next";

const niveles = [
  {
    label: "Universidad",
    slug: "universidad",
    color: "#0f3c61",
    bg: "#f0f6fc",
    text: "#0f3c61",
    href: "/LicenciaturasPresenciales",
    desc: "23 licenciaturas · 6 ingenierías",
    icon: "mdi:school-outline",
    stats: ["Presencial", "Ejecutiva"],
  },
  {
    label: "Bachillerato",
    slug: "bachillerato",
    color: "#6BAF04",
    bg: "#f4f9eb",
    text: "#6BAF04",
    href: "/bachillerato",
    desc: "Bachillerato Internacional BIU",
    icon: "mdi:book-open-outline",
    stats: ["Presencial"],
  },
  {
    label: "Secundaria",
    slug: "secundaria",
    color: "#FFCA00",
    bg: "#fffce5",
    text: "#0091D7",
    href: "/secundaria",
    desc: "Secundaria Internacional SIU",
    icon: "mdi:pencil-outline",
    stats: ["Presencial"],
  },
  {
    label: "Posgrados",
    slug: "posgrados",
    color: "#828829",
    bg: "#f5f6ed",
    text: "#828829",
    href: "/posgrados",
    desc: "Especialidades, maestrías y doctorados",
    icon: "mdi:certificate-outline",
    stats: ["Presencial", "En línea"],
  },
  {
    label: "Diplomados",
    slug: "diplomados",
    color: "#f28b22",
    bg: "#fef4eb",
    text: "#f28b22",
    href: "/diplomados",
    desc: "Capacitación profesional",
    icon: "mdi:briefcase-outline",
    stats: ["Presencial"],
  },
  {
    label: "Prepa Abierta",
    slug: "prepa-abierta",
    color: "#53CCBB",
    bg: "#effaf9",
    text: "#348A81",
    href: "/Prep-a",
    desc: "Bachillerato flexible y autoplaneado",
    icon: "mdi:book-open-page-variant-outline",
    stats: ["Flexible", "Acelerado"],
  },
];
</script>

<template>
  <section id="oferta" class="oe-section uninter-section">
    <div class="uninter-container">
      <div class="oe-header">
        <div>
          <div class="uninter-eyebrow">Oferta Educativa</div>
          <h2 class="uninter-section-title">
            Elige tu<br /><em>nivel educativo</em>
          </h2>
          <p class="oe-desc">
            Cada nivel cuenta con su propio campus digital. Haz clic para
            conocer la oferta completa de cada programa.
          </p>
        </div>
      </div>

      <div class="oe-grid">
        <template v-for="nivel in niveles" :key="nivel.slug">
          <!-- Internal Link -->
          <NuxtLink
            v-if="nivel.href.startsWith('/')"
            :to="nivel.href"
            class="oe-card"
            :style="`--c:${nivel.color};--bg:${nivel.bg};--tx:${nivel.text}`"
          >
            <div class="oe-card__icon-wrap">
              <Icon :name="nivel.icon" size="26" />
            </div>

            <div class="oe-card__content">
              <h3 class="oe-card__title">{{ nivel.label }}</h3>
              <p class="oe-card__desc">{{ nivel.desc }}</p>
            </div>

            <div class="oe-card__bottom">
              <div class="oe-card__pills">
                <span v-for="s in nivel.stats" :key="s" class="oe-pill">{{
                  s
                }}</span>
              </div>

              <div class="oe-card__link">
                Conocer más <ArrowRight :size="15" />
              </div>
            </div>
          </NuxtLink>

          <!-- External Link -->
          <a
            v-else
            :href="nivel.href"
            target="_blank"
            rel="noopener"
            class="oe-card"
            :style="`--c:${nivel.color};--bg:${nivel.bg};--tx:${nivel.text}`"
          >
            <div class="oe-card__icon-wrap">
              <Icon :name="nivel.icon" size="26" />
            </div>

            <div class="oe-card__content">
              <h3 class="oe-card__title">{{ nivel.label }}</h3>
              <p class="oe-card__desc">{{ nivel.desc }}</p>
            </div>

            <div class="oe-card__bottom">
              <div class="oe-card__pills">
                <span v-for="s in nivel.stats" :key="s" class="oe-pill">{{
                  s
                }}</span>
              </div>

              <div class="oe-card__link">
                Ir al sitio <ArrowRight :size="15" />
              </div>
            </div>
          </a>
        </template>
      </div>
    </div>
  </section>
</template>

<style scoped>
.oe-section {
  background: #f8fafc;
  padding: 5rem 0;
}

.oe-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 3.5rem;
  flex-wrap: wrap;
  gap: 1rem;
}

.oe-desc {
  font-size: 0.95rem;
  color: #64748b;
  line-height: 1.7;
  max-width: 480px;
  margin: 1rem 0 0;
}

.oe-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.oe-card {
  background: linear-gradient(
    0deg,
    color-mix(in srgb, var(--c) 8%, #ffffff) 0%,
    color-mix(in srgb, var(--c) 2.5%, #ffffff) 30%,
    #ffffff 65%
  );
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  padding: 2rem;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);
}

.oe-card::after {
  content: "";
  position: absolute;
  inset: 0;
  background: radial-gradient(
    ellipse at 50% 105%,
    color-mix(in srgb, var(--c) 24%, transparent) 0%,
    color-mix(in srgb, var(--c) 8%, transparent) 45%,
    transparent 75%
  );
  opacity: 0;
  transition: opacity 0.35s ease;
  pointer-events: none;
  border-radius: 16px;
  z-index: 1;
}

.oe-card:hover {
  transform: translateY(-6px);
  box-shadow:
    0 18px 36px -6px color-mix(in srgb, var(--c) 26%, transparent),
    0 0 25px 0 color-mix(in srgb, var(--c) 16%, transparent);
  border-color: color-mix(in srgb, var(--c) 45%, #ffffff);
}

.oe-card:hover::after {
  opacity: 1;
}

.oe-card__icon-wrap {
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  border-radius: 14px;
  background: var(--bg);
  color: var(--c);
  margin-bottom: 1.5rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.oe-card:hover .oe-card__icon-wrap {
  transform: scale(1.08) rotate(-3deg);
  box-shadow: 0 6px 18px color-mix(in srgb, var(--c) 20%, transparent);
}

.oe-card__content {
  position: relative;
  z-index: 2;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.oe-card__title {
  font-size: 1.3rem;
  font-weight: 800;
  color: #0f172a;
  margin: 0;
  line-height: 1.2;
}

.oe-card__desc {
  font-size: 0.9rem;
  color: #64748b;
  line-height: 1.5;
  margin: 0;
}

.oe-card__bottom {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  border-top: 1px solid #f1f5f9;
  padding-top: 1.25rem;
}

.oe-card__pills {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.oe-pill {
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.02em;
  padding: 0.35rem 0.75rem;
  border-radius: 8px;
  background: #f8fafc;
  color: #475569;
  border: 1px solid #e2e8f0;
  transition: border-color 0.2s ease, background 0.2s ease;
}

.oe-card:hover .oe-pill {
  background: #ffffff;
  border-color: color-mix(in srgb, var(--c) 25%, #e2e8f0);
}

.oe-card__link {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--tx);
  transition: gap 0.2s ease;
}

.oe-card:hover .oe-card__link {
  gap: 0.6rem;
}

@media (max-width: 1024px) {
  .oe-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .oe-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  .oe-card {
    padding: 1.5rem;
  }
}
</style>
