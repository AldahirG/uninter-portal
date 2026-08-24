
<script setup lang="ts">
import { ref } from "vue";
import { X, ArrowRight, Trophy, Download } from "lucide-vue-next";

const offerData = [
  {
    title: "LICENCIATURAS EN CIENCIAS SOCIALES Y HUMANIDADES",
    bachelors: [
      {title:"Comunicacion (LCO)", href:"/carreras/comunicacion", trophy:true, brochure:"https://uninter.edu.mx/folletos/lco/"},
      {title:"Comunicación y Relaciones Públicas (CORP)", href:"/carreras/comunicacion-y-relaciones-publicas", trophy:true, brochure:"https://uninter.edu.mx/folletos/corp/"},
      {title:"Relaciones Internacionales (LRI)", href:"/carreras/relaciones-internacionales", trophy:true, brochure:"https://uninter.edu.mx/folletos/lri/"},
      {title:"Relaciones Internacionales y Ciencias Politicas (RICP)", href:"/carreras/relaciones-internacionales-y-ciencias-politicas", trophy:true, brochure:"https://uninter.edu.mx/folletos/ricp/"},
      {title:"Relaciones Internacionales y Economía (RIEC)", href:"/carreras/relaciones-internacionales-y-economia", trophy:true, brochure:"https://uninter.edu.mx/folletos/riec/"},
      {title:"Ciencias Politicas y Gestión Pública (LCP)", href:"/carreras/ciencias-politicas-y-gestion-publica", trophy:false, brochure:"https://uninter.edu.mx/folletos/lcp/"},
      {title:"Derecho (LED)", href:"/carreras/derecho", trophy:false, brochure:"https://uninter.edu.mx/folletos/led/"},
      {title:"Idiomas (LID)", href:"/carreras/idiomas", trophy:false, brochure:"https://uninter.edu.mx/folletos/lid/"},
      {title:"Pedagogía (LPE)", href:"/carreras/pedagogia", trophy:false, brochure:"https://uninter.edu.mx/folletos/lpe/"},
      {title:"Psicología (LPS)", href:"/carreras/psicologia", trophy:false, brochure:"https://uninter.edu.mx/folletos/lps/"}
    ]
  },
  {
    title:"LICENCIATURAS EN NEGOCIOS Y ADMINISTRACIÓN",
    bachelors:[
      {title:"Administración de Empresas (LAE)", href:"/carreras/administracion-de-empresas", trophy:true, brochure:"https://uninter.edu.mx/folletos/lae/"},
      {title:"Administración de Empresas Turísticas (LAET)", href:"/carreras/administracion-de-empresas-turisticas", trophy:true, brochure:"https://uninter.edu.mx/folletos/laet/"},
      {title:"Administración de Negocios Internacionales (LANI)", href:"/carreras/administracion-de-negocios-internacionales", trophy:true, brochure:"https://uninter.edu.mx/folletos/lani/"},
      {title:"Administracion y Mercadotecnia (LAM)", href:"/carreras/administracion-y-mercadotecnia", trophy:true, brochure:"https://uninter.edu.mx/folletos/lam/"},
      {title:"Comercio Exterior (LCE)", href:"/carreras/comercio-exterior", trophy:false, brochure:"https://uninter.edu.mx/folletos/lce/"},
      {title:"Economia y Finanzas (LEF)", href:"/carreras/economia-y-finanzas", trophy:true, brochure:"https://uninter.edu.mx/folletos/lef/"},
      {title:"Mercadotecnia (LME)", href:"/carreras/mercadotecnia", trophy:true, brochure:"https://uninter.edu.mx/folletos/lme/"},
      {title:"Mercadotecnia y Publicidad (LEMP)", href:"/carreras/mercadotecnia-y-publicidad", trophy:true, brochure:"https://uninter.edu.mx/folletos/lemp/"}
    ]
  },
  {
    title:"LICENCIATURAS EN DISEÑO Y ARTES",
    bachelors:[
      {title:"Arquitectura (ARQ)", href:"/carreras/arquitectura", trophy:true, brochure:"https://uninter.edu.mx/folletos/arq/"},
      {title:"Animación y Diseño Digital (LADD)", href:"/carreras/animacion-y-diseno-digital", trophy:true, brochure:"https://uninter.edu.mx/folletos/ladd/"},
      {title:"Diseño Gráfico (LDG)", href:"/carreras/diseno-grafico", trophy:true, brochure:"https://uninter.edu.mx/folletos/ldg/"},
      {title:"Diseño Industrial (LDI)", href:"/carreras/diseno-industrial", trophy:true, brochure:"https://uninter.edu.mx/folletos/ldi/"},
      {title:"Diseño de Modas y Tendencias Internacionales (LDM)", href:"/carreras/diseno-de-modas-y-tendencias-internacionales", trophy:true, brochure:"https://uninter.edu.mx/folletos/ldm/"}
    ]
  },
  {
    title:"LICENCIATURAS EN INGENIERÍA",
    bachelors:[
      {title:"Ambiental (IAM)", href:"/carreras/ingenieria-ambiental", trophy:false, brochure:"https://uninter.edu.mx/folletos/iam/"},
      {title:"Civil (ICI)", href:"/carreras/ingenieria-civil", trophy:true, brochure:"https://uninter.edu.mx/folletos/ici/"},
      {title:"Industrial y de Sistemas de Calidad (IISCA)", href:"/carreras/ingenieria-industrial-y-de-sistemas-de-calidad", trophy:false, brochure:"https://uninter.edu.mx/folletos/iisca/"},
      {title:"Mecatronica (IME)", href:"/carreras/mecatronica", trophy:false, brochure:"https://uninter.edu.mx/folletos/ime/"},
      {title:"Mecanica Industrial (IMI)", href:"/carreras/ingenieria-mecanica-industrial", trophy:false, brochure:"https://uninter.edu.mx/folletos/imi/"},
      {title:"Sistemas Computacionales (ISC)", href:"/carreras/sistemas-computacionales", trophy:false, brochure:"https://uninter.edu.mx/folletos/isc/"}
    ]
  }
];

const isDrawerOpen = ref(false);
const activeProgram = ref<any>(null);

const openDrawer = (program: any) => {
  activeProgram.value = program;
  isDrawerOpen.value = true;
  if (typeof document !== 'undefined') {
    document.body.style.overflow = "hidden";
  }
};

const closeDrawer = () => {
  isDrawerOpen.value = false;
  setTimeout(() => {
    activeProgram.value = null;
  }, 400);
  if (typeof document !== 'undefined') {
    document.body.style.overflow = "";
  }
};
</script>

<template>
  <section id="oferta-educativa" class="oe-section uninter-section">
    <div class="uninter-container">
      <div class="oe-header">
        <div>
          <div class="uninter-eyebrow">PROGRAMAS ACADÉMICOS</div>
          <h2 class="uninter-section-title">
            Elige tu<br />
            <em>licenciatura</em>
          </h2>
        </div>
      </div>
      <div class="oe-grid">
        <div v-for="(category, j) in offerData" :key="j" class="oe-card">
          <div class="oe-card__content-wrapper">
            <h3 class="oe-card__title">{{ category.title }}</h3>
            <ul class="oe-card__list">
              <li v-for="(bach, z) in category.bachelors" :key="'bach-'+z">
                <button @click.prevent="openDrawer(bach)" class="oe-card__link">
                  <span class="oe-card__bullet">•</span>
                  <span class="oe-card__text">{{ bach.title }}</span>
                  <div v-if="bach.trophy" class="oe-badge-excellence">
                    <Trophy :size="14" />
                  </div>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- Drawer -->
    <Teleport to="body">
      <div class="oe-drawer-overlay" :class="{ 'is-open': isDrawerOpen }" @click="closeDrawer">
        <div class="oe-drawer" :class="{ 'is-open': isDrawerOpen }" @click.stop>
          <button class="oe-drawer-close" @click="closeDrawer">
            <X :size="24" />
          </button>
          
          <div v-if="activeProgram && activeProgram.href === '/carreras/comunicacion'" class="oe-drawer-banner">
            <img src="/images/oferta/ARQHOR.jpg" alt="Banner promocional" class="oe-drawer-banner-img" />
          </div>

          <div v-if="activeProgram" class="oe-drawer-content" :class="{ 'has-banner': activeProgram.href === '/carreras/comunicacion' }">
            <div class="oe-drawer-header">
              <div v-if="activeProgram.trophy" class="oe-drawer-badge">
                <Trophy :size="16" /> Programa de Excelencia
              </div>
              <h3 class="oe-detail-title">{{ activeProgram.title }}</h3>
            </div>
            
            <p class="oe-detail-desc">Conoce todos los detalles sobre {{ activeProgram.title }}. Descubre el perfil de ingreso, plan de estudios y las oportunidades profesionales que te esperan al estudiar en UNINTER.</p>
            
            <div v-if="activeProgram.href === '/carreras/arquitectura'" class="oe-drawer-mid-media">
              <img src="/images/oferta/ARQ.jpg" alt="Banner de Arquitectura" class="oe-drawer-mid-img" />
            </div>

            <div class="oe-detail-actions">
              <a :href="activeProgram.brochure" target="_blank" class="oe-btn oe-btn--outline">
                <Download :size="16" /> Ver Folleto
              </a>
              <NuxtLink v-if="activeProgram.href.startsWith('/')" :to="activeProgram.href" class="oe-btn oe-btn--solid" @click="closeDrawer">
                Ver Detalles Completos <ArrowRight :size="16" />
              </NuxtLink>
              <a v-else :href="activeProgram.href" target="_blank" class="oe-btn oe-btn--solid">
                Ver Detalles Completos <ArrowRight :size="16" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </Teleport>
  </section>
</template>

<style scoped>
.uninter-container{margin:0 auto;max-width:1280px;padding:0 1.5rem}
.uninter-section{padding:5rem 0}
.oe-section{background:#f8fafc}
.oe-header{align-items:flex-end;display:flex;flex-wrap:wrap;gap:1rem;justify-content:space-between;margin-bottom:2.5rem}
.uninter-eyebrow{color:#0073b4;font-size:.75rem;font-weight:800;letter-spacing:.12em;margin-bottom:.5rem;text-transform:uppercase}
.uninter-section-title{color:#0f3c61;font-family:var(--font-serif,Georgia,serif);font-size:clamp(2rem,4vw,3.2rem);font-weight:700;letter-spacing:-.02em;line-height:1.1;margin:0}
.uninter-section-title em{color:#00b2e3;font-style:italic}
.oe-grid{align-items:start;display:grid;gap:1.5rem;grid-template-columns:repeat(2,1fr)}
.oe-card{background:#fff;border:1px solid #e2e8f0;border-radius:16px;box-shadow:0 4px 15px #003b5c08;display:flex;flex-direction:column;transition:box-shadow .3s ease,transform .3s ease}
.oe-card:hover{box-shadow:0 15px 30px -5px #003b5c14;transform:translateY(-4px)}
.oe-card__content-wrapper{padding:2.5rem}
.oe-card__title{border-bottom:2px solid #f1f5f9;color:#003b5c;font-size:1.15rem;font-weight:800;letter-spacing:.02em;line-height:1.3;margin:0 0 1.5rem;padding-bottom:1rem;text-transform:uppercase}
.oe-card__list{display:flex;flex-direction:column;gap:.5rem;list-style:none;margin:0;padding:0}
.oe-card__link{align-items:center;background-color:transparent;border:1px solid transparent;border-radius:8px;cursor:pointer;display:flex;gap:.75rem;padding:.75rem 1rem;text-align:left;transition:all .2s cubic-bezier(.16,1,.3,1);width:100%}
.oe-card__link:hover{background-color:#f8fafc;border-color:#e2e8f0;transform:translate(6px)}
.oe-card__bullet{color:#cbd5e1;font-size:1.2rem;line-height:.8;transition:color .2s}
.oe-card__link:hover .oe-card__bullet{color:#0073b4}
.oe-card__text{color:#334155;flex-grow:1;font-size:.95rem;font-weight:500;line-height:1.4}
.oe-card__link:hover .oe-card__text{color:#003b5c}
.oe-badge-excellence{align-items:center;background:#eab3081a;border-radius:50%;color:#eab308;display:flex;justify-content:center;padding:6px}
.oe-drawer-overlay{-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px);background:#003b5c66;inset:0;opacity:0;position:fixed;transition:opacity .4s ease,visibility .4s ease;visibility:hidden;z-index:9999}
.oe-drawer-overlay.is-open{opacity:1;visibility:visible}
.oe-drawer{background:#fff;box-shadow:-10px 0 40px #0000001a;display:flex;flex-direction:column;height:100vh;max-width:500px;overflow-y:auto;position:fixed;right:0;top:0;transform:translate(100%);transition:transform .5s cubic-bezier(.16,1,.3,1);width:100%}
.oe-drawer.is-open{transform:translate(0)}
.oe-drawer-close{align-items:center;background:#f1f5f9;border:none;border-radius:50%;color:#4a657a;cursor:pointer;display:flex;height:40px;justify-content:center;position:absolute;right:1.5rem;top:1.5rem;transition:all .2s;width:40px;z-index:50}
.oe-drawer-close:hover{background:#e2e8f0;color:#003b5c;transform:rotate(90deg)}
.oe-drawer-content{display:flex;flex-direction:column;height:100%;padding:4rem 3rem}
.oe-drawer-header{margin-bottom:2rem}
.oe-drawer-badge{align-items:center;background:#fef9c3;border-radius:99px;color:#854d0e;display:inline-flex;font-size:.8rem;font-weight:700;gap:.5rem;margin-bottom:1.5rem;padding:.5rem 1rem;text-transform:uppercase}
.oe-detail-title{color:#003b5c;font-family:Poppins,"Poppins Fallback: Arial",sans-serif;font-size:1.8rem;font-weight:700;line-height:1.1;margin:0}
.oe-detail-desc{color:#475569;font-size:1.05rem;line-height:1.7;margin:0 0 3rem}
.oe-detail-actions{display:flex;flex-direction:column;gap:1rem;margin-top:2rem}
.oe-btn{align-items:center;border-radius:12px;cursor:pointer;display:inline-flex;font-size:1rem;font-weight:700;gap:10px;justify-content:center;padding:1rem 1.5rem;text-decoration:none;transition:all .3s;width:100%}
.oe-btn--solid{background:#d84315;border:none;box-shadow:0 4px 15px #d843154d;color:#fff}
.oe-btn--solid:hover{background:#bf360c;box-shadow:0 8px 25px #d8431566;transform:translateY(-2px)}
.oe-btn--outline{background:transparent;border:2px solid #0073b4;color:#0073b4}
.oe-btn--outline:hover{background:#f0f6fc}
.oe-drawer-banner{border-bottom:3px solid #e2e8f0;height:230px;overflow:hidden;position:relative;width:100%}
.oe-drawer-banner-img{height:100%;-o-object-fit:cover;object-fit:cover;-o-object-position:center;object-position:center;width:100%}
.oe-drawer-content.has-banner{padding-top:2rem}
.oe-drawer-mid-media{display:flex;justify-content:center;margin:1.5rem 0;width:100%}
.oe-drawer-mid-img{border:1px solid #e2e8f0;border-radius:12px;box-shadow:0 4px 12px #00000014;height:auto;width:100%}
@media(max-width:900px){.oe-grid{grid-template-columns:1fr}
@media(max-width:600px){.oe-drawer-content{padding:3rem 1.5rem}
.oe-card__content-wrapper{padding:1.5rem}

}
}
</style>