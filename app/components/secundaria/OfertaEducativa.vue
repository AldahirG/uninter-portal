<script setup lang="ts">
import { Check } from "lucide-vue-next";

const programas = [
  {
    id: "multicultural",
    nombre: "Secundaria Multicultural",
    sigla: "SIU MULTICULTURAL",
    color: "#B88A00",
    colorLight: "#FFD44D",
    desc: "Eje enseñanza formadora de jóvenes inclusivos preparados para vivirla educación del futuro. Desarrolla el carácter del discente, propicia culturas, actitudes, competencias y desarrollo sostenible. El uso de manera integral a los jóvenes, entendiendo y aceptando sus diferencias, culturas, razas y realidades.",
    features: [
      "Intercambio cultural internacional",
      "Aprendizaje de idiomas",
      "Actividades deportivas y artísticas",
      "Metodología activa e innovadora",
      "Certificaciones internacionales",
    ],
    imagen: "/images/hero/licenciaturasPresenciales.jpg",
    href: "https://siu.uninter.edu.mx/",
  },
  {
    id: "bilingue",
    nombre: "Secundaria Bilingüe",
    sigla: "SIU BILINGÜE",
    color: "#ECAB00",
    colorLight: "#F5C842",
    desc: "Contamos con el programa educativo en SIU Uninter para apoyar, ayudar y obtener los mejores beneficios que en el medio pueden hacer, pues los alumnos pueden hacer.",
    features: [
      "Clases 100% en inglés y español",
      "Profesores nativos certificados",
      "Preparación para exámenes internacionales",
      "Inmersión lingüística total",
      "Programas de intercambio",
    ],
    imagen: "/images/hero/ejecutivas.jpg",
    href: "https://siu.uninter.edu.mx/",
  },
];
</script>

<template>
  <section id="oferta-siu" class="oferta-section">
    <div class="siu-container">
      <div class="oferta-header">
        <p class="oferta-eyebrow">Programas SIU</p>
        <h2 class="oferta-title">Oferta Educativa</h2>
        <p class="oferta-sub">Elige la modalidad que mejor se adapte a tu visión y metas</p>
      </div>

      <div class="oferta-grid">
        <div
          v-for="p in programas"
          :key="p.id"
          class="prog-card"
          :style="{ '--pc': p.color, '--pcl': p.colorLight }"
        >
          <!-- Imagen -->
          <div class="prog-card__img-wrap">
            <img :src="p.imagen" :alt="p.nombre" class="prog-card__img" loading="lazy" />
            <div class="prog-card__img-overlay"></div>
            <div class="prog-card__tag">{{ p.sigla }}</div>
          </div>

          <!-- Cuerpo -->
          <div class="prog-card__body">
            <h3 class="prog-card__nombre">{{ p.nombre }}</h3>
            <p class="prog-card__desc">{{ p.desc }}</p>

            <ul class="prog-card__features">
              <li v-for="f in p.features" :key="f" class="prog-card__feat">
                <Check :size="15" class="feat-icon" />
                {{ f }}
              </li>
            </ul>

            <a :href="p.href" target="_blank" class="prog-card__cta">
              A SIU {{ p.sigla.split(" ").pop() }} →
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.oferta-section {
  background: #f8f5ee;
  padding: 5.5rem 0;
}
.siu-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.oferta-header {
  text-align: center;
  margin-bottom: 3rem;
}
.oferta-eyebrow {
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #ECAB00;
  margin: 0 0 0.5rem;
}
.oferta-title {
  font-family: var(--font-serif, Georgia, serif);
  font-size: clamp(1.8rem, 4vw, 2.6rem);
  font-weight: 800;
  color: #1a1500;
  margin: 0 0 0.5rem;
  letter-spacing: -0.01em;
}
.oferta-sub {
  font-size: 1rem;
  color: #666;
  margin: 0;
}

.oferta-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}

.prog-card {
  background: #fff;
  border-radius: 18px;
  overflow: hidden;
  border: 2px solid rgba(0,0,0,0.06);
  box-shadow: 0 4px 20px rgba(0,0,0,0.06);
  transition: transform 0.3s, box-shadow 0.3s, border-color 0.3s;
  display: flex;
  flex-direction: column;
}
.prog-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 16px 40px rgba(0,0,0,0.12);
  border-color: var(--pc);
}

.prog-card__img-wrap {
  position: relative;
  aspect-ratio: 16/9;
  overflow: hidden;
}
.prog-card__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}
.prog-card:hover .prog-card__img { transform: scale(1.05); }

.prog-card__img-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 50%);
}

.prog-card__tag {
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  background: var(--pc);
  color: #fff;
  font-size: 0.7rem;
  font-weight: 800;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding: 0.35rem 0.9rem;
  border-radius: 6px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.25);
}

.prog-card__body {
  padding: 1.75rem;
  display: flex;
  flex-direction: column;
  flex: 1;
}
.prog-card__nombre {
  font-family: var(--font-serif, Georgia, serif);
  font-size: 1.3rem;
  font-weight: 800;
  color: var(--pc);
  margin: 0 0 0.75rem;
}
.prog-card__desc {
  font-size: 0.88rem;
  color: #555;
  line-height: 1.65;
  margin: 0 0 1.25rem;
  flex: 1;
}

.prog-card__features {
  list-style: none;
  padding: 0;
  margin: 0 0 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.prog-card__feat {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.85rem;
  color: #444;
}
.feat-icon {
  color: var(--pc);
  flex-shrink: 0;
}

.prog-card__cta {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: var(--pc);
  color: #fff;
  font-size: 0.9rem;
  font-weight: 700;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  text-decoration: none;
  transition: background 0.2s, transform 0.2s;
  cursor: pointer;
}
.prog-card__cta:hover {
  background: var(--pcl);
  color: #1a1500;
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .oferta-grid { grid-template-columns: 1fr; }
}
</style>
