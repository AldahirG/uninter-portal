
<script setup lang="ts">
import { Trophy, BookOpen, Users, Clock, CheckCircle2 } from "lucide-vue-next";
import CalculaBeca from "@/components/portal/Calculabeca.vue";

const highlights = [
  { icon: Trophy, value: "Hasta 60%", label: "de beca disponible" },
  { icon: BookOpen, value: "23", label: "licenciaturas presenciales" },
  { icon: Users, value: "71,000+", label: "egresados en México y el mundo" },
  { icon: Clock, value: "4 años", label: "duración promedio" }
];

const benefits = [
  "Colegiatura mensual con descuento garantizado",
  "Acceso a instalaciones de clase mundial",
  "Movilidad e intercambio internacional",
  "Bolsa de trabajo Enlace Profesional UNINTER",
  "Talleres deportivos y culturales incluidos"
];
</script>

<template>
  <section class="beca-section">
    <div class="beca-container">
      <div class="beca-info">
        <p class="beca-eyebrow">Apoyo económico</p>
        <h2 class="beca-title">Calcula tu<br /><em>porcentaje de beca</em></h2>
        <p class="beca-desc">
          En UNINTER creemos que el talento no debe tener límites económicos. Completa el formulario y descubre de inmediato qué porcentaje de beca puedes obtener para iniciar tu licenciatura presencial.
        </p>
        
        <div class="beca-highlights">
          <div v-for="hl in highlights" :key="hl.label" class="beca-hl">
            <div class="beca-hl__icon">
              <component :is="hl.icon" :size="20" />
            </div>
            <div>
              <p class="beca-hl__value">{{ hl.value }}</p>
              <p class="beca-hl__label">{{ hl.label }}</p>
            </div>
          </div>
        </div>
        
        <div class="beca-benefits">
          <p class="beca-benefits__heading">Beneficios incluidos con tu beca</p>
          <ul class="beca-benefits__list">
            <li v-for="ben in benefits" :key="ben" class="beca-benefits__item">
              <CheckCircle2 :size="14" class="beca-benefits__check" />
              <span>{{ ben }}</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div class="beca-form-wrap">
        <CalculaBeca />
      </div>
    </div>
  </section>
</template>

<style scoped>
.beca-section{background:linear-gradient(160deg,#0d2f4f,#003b5c 55%,#0073b4);overflow:hidden;padding:5rem 0;position:relative}
.beca-section:before{background-image:radial-gradient(circle at 20% 80%,hsla(0,0%,100%,.04) 0,transparent 50%),radial-gradient(circle at 80% 20%,hsla(0,0%,100%,.06) 0,transparent 50%);content:"";inset:0;pointer-events:none;position:absolute}
.beca-container{align-items:center;display:grid;gap:4rem;grid-template-columns:1fr 1fr;margin:0 auto;max-width:1200px;padding:0 2rem;position:relative}
.beca-eyebrow{color:#ffffff8c;font-size:.72rem;font-weight:700;letter-spacing:.14em;margin:0 0 .75rem;text-transform:uppercase}
.beca-title{color:#fff;font-family:var(--font-serif,Georgia,serif);font-size:clamp(2rem,3.5vw,2.8rem);font-weight:800;line-height:1.15;margin:0 0 1.25rem}
.beca-title em{color:#00b2e3;font-style:normal}
.beca-desc{color:#ffffffb8;font-size:.95rem;line-height:1.7;margin:0 0 2.25rem;max-width:440px}
.beca-highlights{display:grid;gap:1rem;grid-template-columns:1fr 1fr;margin-bottom:2.25rem}
.beca-hl{background:#ffffff12;border:1px solid hsla(0,0%,100%,.1);border-radius:10px;gap:.75rem;padding:.875rem 1rem}
.beca-hl,.beca-hl__icon{align-items:center;display:flex}
.beca-hl__icon{background:#60a5fa2e;border-radius:8px;color:#00b2e3;flex-shrink:0;height:38px;justify-content:center;width:38px}
.beca-hl__value{color:#fff;font-size:1.05rem;font-weight:800;line-height:1.1;margin:0}
.beca-hl__label{color:#ffffff8c;font-size:.68rem;margin:.1rem 0 0}
.beca-benefits__heading{color:#ffffff73;font-size:.72rem;font-weight:700;letter-spacing:.1em;margin:0 0 .75rem;text-transform:uppercase}
.beca-benefits__list{display:flex;flex-direction:column;gap:.5rem;list-style:none;margin:0;padding:0}
.beca-benefits__item{align-items:center;color:#ffffffc7;display:flex;font-size:.85rem;gap:.5rem}
.beca-benefits__check{color:#34d399;flex-shrink:0}
.beca-form-wrap{display:flex;justify-content:center}
@media(max-width:900px){.beca-container{gap:2.5rem;grid-template-columns:1fr}
.beca-title{font-size:2rem}
.beca-desc{max-width:100%}
.beca-form-wrap{width:100%}
@media(max-width:560px){.beca-section{padding:3.5rem 0}
.beca-highlights{gap:.625rem;grid-template-columns:1fr 1fr}

}
}
</style>