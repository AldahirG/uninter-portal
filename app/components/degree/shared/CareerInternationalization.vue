<script setup lang="ts">
import { ref, nextTick } from "vue";
import { Globe, ArrowRight, ExternalLink, X, MapPin } from "lucide-vue-next";

const props = defineProps<{
  data: {
    title: string;
    description: string;
    program_details?: string;
    benefits?: string[];
    destinations: {
      country: string;
      image: string;
      activities: string;
      universities: { name: string; url: string }[];
    }[];
  };
}>();

// Estado del Modal de Info (Izquierda)
const infoModalOpen = ref(false);
const activeInfoTab = ref<"details" | "benefits">("details");

const openInfoModal = (tab: "details" | "benefits") => {
  activeInfoTab.value = tab;
  infoModalOpen.value = true;
};

const closeInfoModal = () => {
  infoModalOpen.value = false;
};

// Estado del Destino Activo (Derecha)
const activeDestination = ref<number | null>(null);
const wrapperRef = ref<HTMLElement | null>(null);

const selectDestination = async (index: number) => {
  if (!wrapperRef.value) return;
  const cards = wrapperRef.value.querySelectorAll('.floating-card');
  const card = cards[index] as HTMLElement;
  
  // 1. FIRST: Get initial bounds
  const firstRect = card.getBoundingClientRect();
  
  // 2. Change state to expand
  activeDestination.value = index;
  
  // Wait for DOM update
  await nextTick();
  
  // 3. LAST: Get final bounds (expanded)
  const lastRect = card.getBoundingClientRect();
  
  // 4. INVERT: Calculate difference
  const deltaX = firstRect.left - lastRect.left;
  const deltaY = firstRect.top - lastRect.top;
  const deltaW = firstRect.width / lastRect.width;
  const deltaH = firstRect.height / lastRect.height;
  
  // Apply invert instantly
  card.style.transformOrigin = 'top left';
  card.style.transform = `translate(${deltaX}px, ${deltaY}px) scale(${deltaW}, ${deltaH})`;
  card.style.transition = 'none';
  card.style.zIndex = '20';
  card.style.borderRadius = `${20 / deltaW}px`;
  
  // 5. PLAY: Animate to final state
  requestAnimationFrame(() => {
    card.style.transition = 'transform 0.6s cubic-bezier(0.25, 1, 0.5, 1), border-radius 0.6s cubic-bezier(0.25, 1, 0.5, 1)';
    card.style.transform = 'translate(0, 0) scale(1, 1)';
    card.style.borderRadius = '20px';
    
    // Centrar en pantalla el componente para que el usuario no pierda el foco
    wrapperRef.value?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });
};

const closeDestination = async () => {
  if (activeDestination.value === null || !wrapperRef.value) return;
  
  const index = activeDestination.value;
  const cards = wrapperRef.value.querySelectorAll('.floating-card');
  const card = cards[index] as HTMLElement;
  
  // FIRST: Get expanded bounds
  const firstRect = card.getBoundingClientRect();
  
  // Change state back
  activeDestination.value = null;
  
  // Wait for DOM to shrink card
  await nextTick();
  
  // LAST: Get shrunken bounds
  const lastRect = card.getBoundingClientRect();
  
  // INVERT
  const deltaX = firstRect.left - lastRect.left;
  const deltaY = firstRect.top - lastRect.top;
  const deltaW = firstRect.width / lastRect.width;
  const deltaH = firstRect.height / lastRect.height;
  
  // Force it back to expanded size instantly
  card.style.transformOrigin = 'top left';
  card.style.transform = `translate(${deltaX}px, ${deltaY}px) scale(${deltaW}, ${deltaH})`;
  card.style.transition = 'none';
  card.style.zIndex = '20';
  card.style.animation = 'none'; // Previene que la animación CSS 'float' lo sobreescriba
  
  // PLAY: Animate back to real small size
  requestAnimationFrame(() => {
    card.style.transition = 'transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)';
    card.style.transform = 'translate(0, 0) scale(1, 1)';
    
    setTimeout(() => {
      card.style.transition = '';
      card.style.transform = '';
      card.style.transformOrigin = '';
      card.style.zIndex = '';
      card.style.animation = ''; // Restaura la animación CSS
    }, 600);
  });
};
</script>

<template>
  <section class="intl-section">
    <div class="uninter-container">
      
      <div class="intl-layout">
        <!-- LADO IZQUIERDO: Información -->
        <div class="intl-info">
          <div class="intl-eyebrow">
            <Globe :size="16" class="globe-icon" />
            <span>Internacionalización</span>
          </div>
          <h2 class="intl-title">{{ data.title }}</h2>
          <p class="intl-desc">{{ data.description }}</p>

          <div class="intl-actions">
            <button class="btn-primary" @click="openInfoModal('details')">
              Más específico en qué consiste <ArrowRight :size="16" />
            </button>
            <button class="btn-outline" @click="openInfoModal('benefits')">
              Beneficios
            </button>
          </div>
        </div>

        <!-- LADO DERECHO: Tarjetas Flotantes -->
        <div class="intl-destinations-wrapper" ref="wrapperRef">
          <div class="floating-grid" :class="{ 'has-active': activeDestination !== null }">
            <div 
              v-for="(dest, index) in data.destinations" 
              :key="index"
              class="floating-card"
              :class="[
                `float-anim-${index % 3}`, 
                { 'is-active': activeDestination === index, 'is-hidden': activeDestination !== null && activeDestination !== index }
              ]"
              @click="activeDestination === null && selectDestination(index)"
            >
              <!-- IMAGEN Y CAPA BASE -->
              <img :src="dest.image" :alt="dest.country" class="dest-img" />
              <div class="dest-overlay"></div>
              
              <!-- Vista Miniatura -->
              <div class="dest-mini-info" :class="{'fade-out': activeDestination === index}">
                <MapPin :size="14" />
                <span>{{ dest.country }}</span>
              </div>

              <!-- Vista Expandida (Aparece después) -->
              <div class="dest-expanded-info" v-if="activeDestination === index">
                <button class="close-dest-btn" @click.stop="closeDestination">
                  <X :size="20" />
                </button>
                <div class="dest-expanded-content">
                  <div class="dest-badge"><MapPin :size="14" /> {{ dest.country }}</div>
                  <p class="dest-activities">{{ dest.activities }}</p>
                  
                  <div class="universities-list">
                    <p class="uni-title">Universidades Convenio:</p>
                    <a 
                      v-for="(uni, uIdx) in dest.universities" 
                      :key="uIdx" 
                      :href="uni.url" 
                      target="_blank" 
                      class="uni-link"
                    >
                      {{ uni.name }} <ExternalLink :size="12" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>

    <!-- MODAL DE INFO (Lado Izquierdo) -->
    <Teleport to="body">
      <Transition name="fade">
        <div v-if="infoModalOpen" class="intl-modal-overlay" @click="closeInfoModal">
          <div class="intl-modal-content" @click.stop>
            <button class="modal-close" @click="closeInfoModal">
              <X :size="20" />
            </button>

            <div class="modal-tabs">
              <button 
                :class="{ active: activeInfoTab === 'details' }" 
                @click="activeInfoTab = 'details'"
              >
                ¿En qué consiste?
              </button>
              <button 
                :class="{ active: activeInfoTab === 'benefits' }" 
                @click="activeInfoTab = 'benefits'"
              >
                Beneficios
              </button>
            </div>

            <div class="modal-body">
              <Transition name="slide-fade" mode="out-in">
                <div v-if="activeInfoTab === 'details'" key="details">
                  <h3>Acerca del programa</h3>
                  <p>{{ data.program_details || 'Información detallada sobre el programa de intercambio no disponible en este momento.' }}</p>
                </div>
                <div v-else key="benefits">
                  <h3>Beneficios del Intercambio</h3>
                  <ul v-if="data.benefits && data.benefits.length > 0" class="benefits-list">
                    <li v-for="(ben, i) in data.benefits" :key="i">
                      <span class="ben-bullet"></span> {{ ben }}
                    </li>
                  </ul>
                  <p v-else>No hay beneficios específicos listados.</p>
                </div>
              </Transition>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </section>
</template>

<style scoped>
/* =========================================
   VARIABLES Y CONTENEDOR
========================================= */
.intl-section {
  --p: #0f3c61;
  --p-light: #e6f0f9;
  --p-accent: #0099cc;
  padding: 6rem 0;
  background-color: #f8fafc;
  overflow: hidden;
  font-family: var(--font-sans, system-ui, -apple-system, sans-serif);
}

.uninter-container {
  max-width: 1250px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.intl-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

/* =========================================
   LADO IZQUIERDO: INFO
========================================= */
.intl-info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  z-index: 2;
}

.intl-eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 0.8rem;
  font-weight: 800;
  text-transform: uppercase;
  color: var(--p-accent);
  background: rgba(0, 153, 204, 0.1);
  padding: 0.4rem 1rem;
  border-radius: 50px;
  margin-bottom: 1.5rem;
}

.intl-title {
  font-family: var(--font-serif, Georgia, serif);
  font-size: clamp(2rem, 4vw, 3.2rem);
  color: var(--p);
  line-height: 1.1;
  margin: 0 0 1.5rem 0;
  font-weight: 800;
}

.intl-desc {
  font-size: 1.05rem;
  line-height: 1.7;
  color: #475569;
  margin-bottom: 2.5rem;
  max-width: 90%;
}

.intl-actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: var(--p);
  color: white;
  padding: 0.8rem 1.5rem;
  border-radius: 12px;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
}
.btn-primary:hover {
  background: #0b2e4a;
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(15, 60, 97, 0.2);
}

.btn-outline {
  display: inline-flex;
  align-items: center;
  background: transparent;
  color: var(--p);
  padding: 0.8rem 1.5rem;
  border-radius: 12px;
  font-weight: 600;
  border: 1px solid rgba(15, 60, 97, 0.2);
  cursor: pointer;
  transition: all 0.2s ease;
}
.btn-outline:hover {
  background: rgba(15, 60, 97, 0.05);
  border-color: var(--p);
}

/* =========================================
   LADO DERECHO: TARJETAS FLOTANTES
========================================= */
.intl-destinations-wrapper {
  position: relative;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  perspective: 1000px;
}

.floating-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  width: 100%;
  height: 100%;
  position: relative;
  transition: all 0.5s
}

/* Tarjeta individual (estado base) */
.floating-card {
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 15px 35px rgba(0,0,0,0.1);
  cursor: pointer;
  transition: all 0.6s cubic-bezier(0.25, 1, 0.5, 1);
  background: #fff;
  z-index: 1;
  min-height: 220px; /* Previene colapso en responsive */
}

.dest-img {
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
}

.floating-card:not(.is-active):hover .dest-img {
  transform: scale(1.05);
}

.dest-overlay {
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.1) 60%, rgba(0,0,0,0) 100%);
  transition: opacity 0.4s ease;
}

.dest-mini-info {
  position: absolute;
  bottom: 1.5rem;
  left: 1.5rem;
  color: white;
  display: flex;
  align-items: center;
  gap: 6px;
  font-weight: 700;
  font-size: 1rem;
  text-shadow: 0 2px 4px rgba(0,0,0,0.5);
  background: rgba(255,255,255,0.2);
  backdrop-filter: blur(8px);
  padding: 0.4rem 1rem;
  border-radius: 50px;
  border: 1px solid rgba(255,255,255,0.3);
  transition: opacity 0.3s ease;
}

.dest-mini-info.fade-out {
  opacity: 0;
}

/* Animaciones flotantes */
@keyframes float0 { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
@keyframes float1 { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(12px); } }
@keyframes float2 { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-15px); } }

.floating-grid:not(.has-active) .float-anim-0 { animation: float0 6s ease-in-out infinite; }
.floating-grid:not(.has-active) .float-anim-1 { animation: float1 7s ease-in-out infinite; animation-delay: 1s; }
.floating-grid:not(.has-active) .float-anim-2 { animation: float2 5s ease-in-out infinite; animation-delay: 2s; }

/* =========================================
   ESTADO ACTIVO (EXPANDIDO)
========================================= */
.floating-card.is-hidden {
  opacity: 0;
  transform: scale(0.8) translateY(20px);
  pointer-events: none;
}
.floating-card.is-active {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  cursor: default;
  box-shadow: 0 30px 60px rgba(0,0,0,0.3);
}

.floating-card.is-active .dest-overlay {
  animation: fadeInBlur 0.7s ease 0.3s both;
}

@keyframes fadeInBlur {
  from {
    background: rgba(0,0,0,0);
    backdrop-filter: blur(0px);
  }
  to {
    background: rgba(15, 60, 97, 0.85);
    backdrop-filter: blur(12px);
  }
}

.dest-expanded-info {
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  display: flex;
  flex-direction: column;
  color: white;
  animation: fadeIn 0.5s ease 0.5s both;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(15px); }
  to { opacity: 1; transform: translateY(0); }
}

.dest-expanded-content {
  padding: 3rem;
  color: white;
  height: 100%;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

/* Custom scrollbar for back card */
.dest-expanded-content::-webkit-scrollbar {
  width: 6px;
}
.dest-expanded-content::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
}
.dest-expanded-content::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.3);
  border-radius: 10px;
}

.close-dest-btn {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(255,255,255,0.1);
  border: 1px solid rgba(255,255,255,0.2);
  color: white;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s;
  z-index: 5;
}
.close-dest-btn:hover {
  background: rgba(255,255,255,0.2);
  transform: scale(1.1);
}

.dest-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: var(--p-accent);
  color: white;
  font-weight: 700;
  padding: 0.3rem 0.8rem;
  border-radius: 50px;
  margin-bottom: 1rem;
  margin-top: 0.5rem;
  font-size: 0.85rem;
  align-self: flex-start;
}

.dest-activities {
  font-size: 0.95rem;
  line-height: 1.5;
  margin-bottom: 1.5rem;
  color: rgba(255,255,255,0.9);
}

.uni-title {
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: rgba(255,255,255,0.6);
  margin-bottom: 0.5rem;
  font-weight: 700;
}

.universities-list {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.uni-link {
  display: flex;
  align-items: center;
  gap: 6px;
  color: white;
  text-decoration: none;
  font-size: 0.9rem;
  padding: 0.4rem 0;
  border-bottom: 1px solid rgba(255,255,255,0.1);
  transition: all 0.2s;
}
.uni-link:hover {
  background: rgba(255,255,255,0.2);
  border-color: rgba(255,255,255,0.3);
  transform: translateX(5px);
}

/* =========================================
   MODAL DE INFORMACIÓN (IZQUIERDA)
========================================= */
.intl-modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(15, 60, 97, 0.4);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 2rem;
}

.intl-modal-content {
  background: white;
  width: 100%;
  max-width: 600px;
  border-radius: 24px;
  padding: 2.5rem;
  position: relative;
  box-shadow: 0 25px 50px rgba(0,0,0,0.15);
}

.modal-close {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  background: #f1f5f9;
  border: none;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #64748b;
  cursor: pointer;
  transition: all 0.2s;
}
.modal-close:hover {
  background: #e2e8f0;
  color: #0f3c61;
}

.modal-tabs {
  display: flex;
  gap: 1rem;
  border-bottom: 1px solid #e2e8f0;
  margin-bottom: 2rem;
  padding-bottom: 0.5rem;
}

.modal-tabs button {
  background: transparent;
  border: none;
  padding: 0.5rem 0;
  font-weight: 600;
  color: #64748b;
  font-size: 1.05rem;
  cursor: pointer;
  position: relative;
}

.modal-tabs button.active {
  color: var(--p);
}

.modal-tabs button.active::after {
  content: '';
  position: absolute;
  bottom: -0.6rem;
  left: 0;
  width: 100%;
  height: 3px;
  background: var(--p-accent);
  border-radius: 3px 3px 0 0;
}

.modal-body h3 {
  font-family: var(--font-serif, Georgia, serif);
  font-size: 1.5rem;
  color: var(--p);
  margin-bottom: 1rem;
}

.modal-body p {
  line-height: 1.7;
  color: #475569;
}

.benefits-list {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.benefits-list li {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  color: #334155;
  line-height: 1.5;
}

.ben-bullet {
  width: 8px;
  height: 8px;
  background: var(--p-accent);
  border-radius: 50%;
  margin-top: 6px;
  flex-shrink: 0;
}

/* Transiciones del modal */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s ease;
}
.slide-fade-enter-from {
  opacity: 0;
  transform: translateX(20px);
}
.slide-fade-leave-to {
  opacity: 0;
  transform: translateX(-20px);
}

/* =========================================
   RESPONSIVE
========================================= */
@media (max-width: 900px) {
  .intl-layout {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
  
  .intl-destinations-wrapper {
    height: auto;
    min-height: 500px;
  }
}

@media (max-width: 560px) {
  .floating-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  .floating-card {
    height: 200px; /* Fixed height for stacked cards */
  }

  .floating-card.is-active {
    position: fixed;
    top: 5%;
    left: 5%;
    width: 90%;
    height: 90%;
    z-index: 1000;
  }

  .dest-expanded-content {
    padding: 1.5rem;
  }
  
  .dest-expanded-info {
    padding: 1rem;
  }

  .intl-actions {
    flex-direction: column;
    width: 100%;
  }

  .btn-primary, .btn-outline {
    width: 100%;
    justify-content: center;
  }
}
</style>
