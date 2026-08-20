<script setup lang="ts">
import { Microscope, Activity, Music4, MonitorSmartphone, Target, ArrowRight } from "lucide-vue-next";
import { ref, onMounted, onUnmounted } from 'vue';

const images = ["/images/bachillerato/6.jpg", "/images/bachillerato/7.jpg", "/images/bachillerato/9.1.jpg"];
const currentIndex = ref(0);
let timer: ReturnType<typeof setInterval> | null = null;
onMounted(() => {
  timer = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % images.length;
  }, 3500);
});
onUnmounted(() => {
  if(timer) clearInterval(timer);
});

const acts = [
  { icon: Microscope, nombre: "Laboratorios de ciencias", desc: "Química, biología, física y tecnología con equipamiento de vanguardia." },
  { icon: Target, nombre: "Proyectos transversales", desc: "Problemáticas reales resueltas con enfoque multidisciplinario." },
  { icon: Music4, nombre: "Arte y cultura", desc: "Talleres de teatro, música, danza y expresión artística." },
  { icon: Activity, nombre: "Deporte competitivo", desc: "Equipos representativos y activación física diaria." }
];

const modalidades = [
  { titulo: "Presencial", desc: "Clases en campus con profesores especializados y actividades prácticas que refuerzan el aprendizaje.", color: "#6BAF04" },
  { titulo: "En línea", desc: "Plataforma digital con recursos multimedia, foros y actividades asíncronas para aprender a tu ritmo.", color: "#4A7A02" },
  { titulo: "Flex", desc: "Combina lo mejor de ambos mundos: mayor autonomía, horarios flexibles y soporte académico continuo.", color: "#7BC905" }
];
</script>

<template>
  <section class="modelo-section">
    <div class="actividades-block">
      <div class="biu-container">
        <div class="actividades-layout">
          <div class="actividades-text">
            <div class="biu-eyebrow">
              <span class="eyebrow-line"></span> ACTIVIDADES ACADÉMICAS
            </div>
            <h2 class="actividades-title">
              Aprendizaje que<br />
              <em>inspira y transforma</em>
            </h2>
            <p class="actividades-desc">
              En BIU cada día es una oportunidad de descubrir, crear y crecer. Nuestro programa académico integra actividades prácticas, artísticas y deportivas que forman estudiantes completos y preparados para la universidad y la vida.
            </p>
            <div class="act-list">
              <div v-for="u in acts" :key="u.nombre" class="act-item">
                <div class="act-item__icon">
                  <component :is="u.icon" :size="20" />
                </div>
                <div>
                  <p class="act-item__name">{{ u.nombre }}</p>
                  <p class="act-item__desc">{{ u.desc }}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="actividades-img-wrap">
            <Transition name="fade" mode="out-in">
              <img :key="images[currentIndex]" :src="images[currentIndex]" alt="Actividades académicas BIU" class="actividades-img" />
            </Transition>
            <div class="act-badge">
              <MonitorSmartphone :size="16" />
              <span>Modelo Blended</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="flex-block">
      <div class="biu-container">
        <div class="flex-header">
          <div class="biu-eyebrow biu-eyebrow--light">
            <span class="eyebrow-line eyebrow-line--light"></span> MODELO EDUCATIVO
          </div>
          <h2 class="flex-title">Blended / Flex Learning</h2>
          <p class="flex-subtitle">
            Un modelo educativo innovador que adapta la enseñanza a las necesidades y ritmos de cada estudiante.
          </p>
        </div>
        <div class="flex-grid">
          <div v-for="u in modalidades" :key="u.titulo" class="flex-card">
            <div class="flex-card__bar" :style="`background: ${u.color}`"></div>
            <h3 class="flex-card__title" :style="`color: ${u.color}`">{{ u.titulo }}</h3>
            <p class="flex-card__desc">{{ u.desc }}</p>
          </div>
        </div>
        <div class="flex-cta-wrap">
          <a href="https://biu.uninter.edu.mx/" target="_blank" class="flex-cta">
            Conoce el modelo educativo completo <ArrowRight :size="16" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.fade-enter-active,.fade-leave-active{transition:opacity .5s ease}
.fade-enter-from,.fade-leave-to{opacity:0}
.biu-container{margin:0 auto;max-width:1280px;padding:0 1.5rem}
.actividades-block{background:#f1f8f0;padding:5.5rem 0}
.actividades-layout{align-items:center;display:grid;gap:4rem;grid-template-columns:1fr 1fr}
.biu-eyebrow{align-items:center;color:#6baf04;display:flex;font-size:.72rem;font-weight:800;gap:.75rem;letter-spacing:.14em;margin-bottom:1rem;text-transform:uppercase}
.biu-eyebrow--light{color:#ffffff8c}
.eyebrow-line{background:#6baf04;display:block;flex-shrink:0;height:2px;width:24px}
.eyebrow-line--light{background:#ffffff73}
.actividades-title{color:#1e293b;font-family:var(--font-serif,Georgia,serif);font-size:clamp(1.9rem,3.5vw,2.8rem);font-weight:800;letter-spacing:-.02em;line-height:1.12;margin:0 0 1.25rem}
.actividades-title em{color:#6baf04;font-style:italic}
.actividades-desc{color:#475569;font-size:.95rem;line-height:1.7;margin:0 0 2rem}
.act-list{flex-direction:column}
.act-item,.act-list{display:flex;gap:1rem}
.act-item{align-items:flex-start}
.act-item__icon{align-items:center;background:#e8f5e9;border-radius:10px;color:#6baf04;display:flex;flex-shrink:0;height:42px;justify-content:center;width:42px}
.act-item__name{color:#4a7a02;font-size:.9rem;font-weight:700;margin:0 0 .2rem}
.act-item__desc{color:#64748b;font-size:.8rem;line-height:1.5;margin:0}
.actividades-img-wrap{position:relative}
.actividades-img{aspect-ratio:4/5;background:#c8e6c9;border-radius:20px;display:block;-o-object-fit:cover;object-fit:cover;width:100%}
.act-badge{align-items:center;background:#4a7a02;border-radius:20px;bottom:1.25rem;box-shadow:0 4px 14px #0000004d;color:#fff;display:flex;font-size:.75rem;font-weight:700;gap:.5rem;padding:.45rem 1rem;position:absolute;right:1.25rem}
.flex-block{background:#0d1f0e;padding:5rem 0 5.5rem}
.flex-header{margin-bottom:3rem;text-align:center}
.flex-title{color:#fff;font-family:var(--font-serif,Georgia,serif);font-size:clamp(2rem,4vw,3rem);font-weight:800;letter-spacing:-.02em;margin:0 0 1rem}
.flex-subtitle{color:#fff9;font-size:1rem;line-height:1.65;margin:0 auto;max-width:540px}
.flex-grid{display:grid;gap:1.5rem;grid-template-columns:repeat(3,1fr);margin-bottom:2.5rem}
.flex-card{background:#ffffff0f;border:1px solid hsla(0,0%,100%,.08);border-radius:16px;overflow:hidden;padding:0 1.75rem 2rem;transition:background .2s,transform .2s}
.flex-card:hover{background:#ffffff1a;transform:translateY(-3px)}
.flex-card__bar{border-radius:0;height:4px;margin:0 -1.75rem 1.75rem}
.flex-card__title{font-family:var(--font-serif,Georgia,serif);font-size:1.4rem;font-weight:800;margin:0 0 .875rem}
.flex-card__desc{color:#ffffff9e;font-size:.88rem;line-height:1.65;margin:0}
.flex-cta-wrap{text-align:center}
.flex-cta{align-items:center;color:#a8d86e;display:inline-flex;font-size:.88rem;font-weight:700;gap:.4rem;text-decoration:none;transition:color .2s}
.flex-cta:hover{color:#a5d6a7}
@media(max-width:900px){.actividades-layout{gap:2.5rem}
.actividades-layout,.flex-grid{grid-template-columns:1fr}
.actividades-img{aspect-ratio:16/9}
}
</style>