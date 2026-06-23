<script setup lang="ts">
import { ArrowRight, MapPin, Award, Users, HeartHandshake } from 'lucide-vue-next';
</script>

<template>
  <section class="ss-interactive-section">
    <div class="uninter-container">
      
      <!-- ENCABEZADO -->
      <div class="ss-header">
        <span class="ss-eyebrow"><MapPin :size="14" /> Cuernavaca, México</span>
        <h2 class="ss-main-title">Spanish School <em>UNINTER</em></h2>
      </div>

      <!-- BANNER PRINCIPAL (Fondo completo) -->
      <div class="ss-hero-banner">
        
        <!-- Fondo y Overlay -->
        <div 
          class="ss-hero__bg" 
          style="background-image: url('https://images.unsplash.com/photo-1528605248644-14dd04022da1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80');"
        ></div>
        <div class="ss-hero__overlay"></div>

        <!-- CONTENIDO DIVIDIDO -->
        <div class="ss-hero__content-wrap">
          
          <!-- LADO IZQUIERDO: TEXTOS -->
          <div class="ss-hero__left">
            <div class="ss-badge">Inmersión Cultural 🇲🇽</div>
            <h3 class="ss-hero__title">
              Domina el español.<br>
              <span class="text-highlight">Transforma tu vida.</span>
            </h3>
            <p class="ss-hero__desc">
              Más que clases de idiomas, te ofrecemos una experiencia inolvidable. Aprende con nativos, vive con familias mexicanas y haz amigos de todo el mundo.
            </p>
            
            <div class="ss-actions">
              <a href="https://spanishschool.uninter.edu.mx/" target="_blank" class="ss-btn-primary">
                Explorar Programas <ArrowRight :size="18" class="btn-arrow" />
              </a>
            </div>
          </div>

          <!-- LADO DERECHO: BURBUJAS FLOTANTES -->
          <div class="ss-hero__right">
            
            <!-- Burbuja 1 -->
            <a href="https://kids.uninter.edu.mx/" target="_blank" class="ss-bubble bubble-1">
              <div class="bubble-icon bg-blue"><Users :size="24" /></div>
              <div class="bubble-text">
                <h4>Verano Kids & Teens</h4>
                <p>Campamentos bilingües y culturales</p>
              </div>
              <ArrowRight :size="16" class="bubble-arrow" />
            </a>

            <!-- Burbuja 2 -->
            <div class="ss-bubble bubble-2">
              <div class="bubble-icon bg-pink"><HeartHandshake :size="24" /></div>
              <div class="bubble-text">
                <h4>Hospedaje Familiar</h4>
                <p>Inmersión total 24/7 con nativos</p>
              </div>
            </div>

            <!-- Burbuja 3 -->
            <div class="ss-bubble bubble-3">
              <div class="bubble-icon bg-gold"><Award :size="24" /></div>
              <div class="bubble-text">
                <h4>Centro Certificador</h4>
                <p>Exámenes oficiales DELE y SIELE</p>
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
/* =========================================================
   CONTENEDOR BASE
========================================================= */
.ss-interactive-section {
  background-color: #f8fafc;
  padding: 5rem 0;
  font-family: system-ui, -apple-system, sans-serif;
}

.uninter-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.ss-header {
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
}

.ss-eyebrow {
  display: flex; align-items: center; gap: 6px; font-size: 0.8rem; font-weight: 800;
  text-transform: uppercase; letter-spacing: 0.12em; color: #D84315; 
  background: #fff0eb; padding: 0.4rem 0.8rem; border-radius: 999px;
}

.ss-main-title {
  font-family: var(--font-serif, Georgia, serif); font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 800; color: #0F3C61; margin: 0; line-height: 1.1;
}
.ss-main-title em { color: #1565C0; font-style: italic; }

/* =========================================================
   BANNER (FONDO Y OVERLAY)
========================================================= */
.ss-hero-banner {
  position: relative;
  width: 100%;
  min-height: 550px;
  border-radius: 24px;
  overflow: hidden;
  background-color: #0F3C61; 
  display: flex;
  align-items: center;
  box-shadow: 0 25px 50px -12px rgba(15, 60, 97, 0.25);
}

.ss-hero__bg {
  position: absolute; inset: 0; width: 100%; height: 100%;
  background-size: cover; background-position: center; z-index: 1;
}

.ss-hero__overlay {
  position: absolute; inset: 0; z-index: 2;
  /* Degradado fuerte a la izquierda para el texto, casi transparente a la derecha para las burbujas */
  background: linear-gradient(
    90deg,
    rgba(15, 60, 97, 0.95) 0%,
    rgba(15, 60, 97, 0.8) 45%,
    rgba(15, 60, 97, 0.3) 100%
  );
}

/* =========================================================
   CONTENEDOR DIVIDIDO (IZQUIERDA Y DERECHA)
========================================================= */
.ss-hero__content-wrap {
  position: relative;
  z-index: 3;
  display: flex;
  width: 100%;
  height: 100%;
  padding: 4rem;
  align-items: center;
}

/* --- LADO IZQUIERDO (TEXTO) --- */
.ss-hero__left {
  flex: 1;
  max-width: 550px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.25rem;
}

.ss-badge {
  background: rgba(255, 255, 255, 0.15); backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.3); color: #fff; font-size: 0.75rem;
  font-weight: 700; letter-spacing: 0.08em; padding: 0.4rem 1rem; 
  border-radius: 999px; text-transform: uppercase;
}

.ss-hero__title {
  font-family: var(--font-serif, Georgia, serif); font-size: clamp(2.2rem, 4vw, 3.5rem);
  font-weight: 800; color: #ffffff !important; line-height: 1.1; margin: 0;
}
.text-highlight { color: #fbbf24 !important; }

.ss-hero__desc {
  font-size: 1.1rem; color: rgba(255, 255, 255, 0.9) !important;
  line-height: 1.6; margin: 0 0 0.5rem 0;
}

.ss-actions { display: flex; gap: 1rem; margin-top: 1rem; }
.ss-btn-primary {
  display: flex; align-items: center; justify-content: center; gap: 8px; 
  background: #D84315; color: #fff; font-size: 0.95rem; font-weight: 700; 
  padding: 0.9rem 2rem; border-radius: 12px; text-decoration: none; transition: all 0.2s;
}
.ss-btn-primary:hover {
  background: #f97316; transform: translateY(-2px); color: #fff;
  box-shadow: 0 8px 20px rgba(216, 67, 21, 0.4);
}
.ss-btn-primary:hover .btn-arrow { transform: translateX(4px); }


/* --- LADO DERECHO (ZONA DE BURBUJAS) --- */
.ss-hero__right {
  flex: 1;
  position: relative;
  height: 500px; /* Altura para que las burbujas floten */
  display: flex;
  justify-content: center;
}

/* =========================================================
   LAS BURBUJAS (Estilo Glassmorphism)
========================================================= */
.ss-bubble {
  position: absolute;
  background: rgba(255, 255, 255, 0.12); /* Cristal transparente */
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 100px; /* Forma de píldora para albergar el texto */
  padding: 0.75rem 1.5rem 0.75rem 0.75rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  color: #fff;
  text-decoration: none;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15), inset 0 0 0 1px rgba(255, 255, 255, 0.1);
  transition: background 0.3s, border-color 0.3s, transform 0.3s;
  cursor: pointer;
  width: max-content;
  max-width: 320px;
}

/* Efecto al pasar el mouse: se aclara, brilla y pausa su flotación */
.ss-bubble:hover {
  background: rgba(255, 255, 255, 0.25);
  border-color: rgba(255, 255, 255, 0.8);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2), 0 0 20px rgba(255, 255, 255, 0.2);
  z-index: 10;
  animation-play-state: paused !important; /* Detiene la burbuja para poder leerla/dar clic */
}

/* Diseño interno de la burbuja */
.bubble-icon {
  width: 46px; height: 46px; border-radius: 50%;
  display: flex; align-items: center; justify-content: center; flex-shrink: 0;
  box-shadow: 0 4px 10px rgba(0,0,0,0.2);
}
.bg-blue { background: #3b82f6; color: #fff; }
.bg-pink { background: #ec4899; color: #fff; }
.bg-gold { background: #f59e0b; color: #fff; }

.bubble-text { display: flex; flex-direction: column; gap: 2px; }
.bubble-text h4 { font-size: 0.95rem; font-weight: 800; margin: 0; color: #fff; }
.bubble-text p { font-size: 0.75rem; margin: 0; color: rgba(255,255,255,0.8); line-height: 1.2; }

.bubble-arrow { opacity: 0.5; margin-left: 0.5rem; transition: opacity 0.2s, transform 0.2s; }
.ss-bubble:hover .bubble-arrow { opacity: 1; transform: translateX(4px); }


/* =========================================================
   POSICIONES Y ANIMACIONES (EL FLOTADO INDEPENDIENTE)
========================================================= */

/* Burbuja 1: Arriba a la derecha */
.bubble-1 {
  top: 10%; right: 5%;
  animation: float1 7s ease-in-out infinite;
}
/* Burbuja 2: Centro desplazada a la izquierda */
.bubble-2 {
  top: 42%; left: 0%;
  animation: float2 9s ease-in-out infinite;
}
/* Burbuja 3: Abajo a la derecha */
.bubble-3 {
  bottom: 12%; right: 15%;
  animation: float3 8s ease-in-out infinite;
}

@keyframes float1 {
  0%, 100% { transform: translateY(0px) translateX(0px); }
  50% { transform: translateY(-18px) translateX(12px); }
}
@keyframes float2 {
  0%, 100% { transform: translateY(0px) translateX(0px); }
  50% { transform: translateY(22px) translateX(-15px); }
}
@keyframes float3 {
  0%, 100% { transform: translateY(0px) translateX(0px); }
  50% { transform: translateY(-25px) translateX(-8px); }
}


/* =========================================================
   RESPONSIVE (Adaptación para móviles)
========================================================= */
@media (max-width: 1024px) {
  .ss-hero__content-wrap {
    flex-direction: column;
    padding: 3rem;
    gap: 3rem;
  }
  
  .ss-hero__overlay {
    background: linear-gradient(to bottom, rgba(15, 60, 97, 0.95) 0%, rgba(15, 60, 97, 0.8) 50%, rgba(15, 60, 97, 0.4) 100%);
  }

  .ss-hero__left { max-width: 100%; align-items: center; text-align: center; }
  
  /* En tablets/móviles quitamos el flotado absoluto porque no cabe y las apilamos bonito */
  .ss-hero__right {
    height: auto; width: 100%; display: flex; flex-direction: column; align-items: center; gap: 1rem;
  }
  
  .ss-bubble {
    position: relative; top: auto !important; left: auto !important; right: auto !important; bottom: auto !important;
    animation: none !important; /* Desactivamos el flotado para no marear en móvil */
    width: 100%; max-width: 400px;
  }
}

@media (max-width: 640px) {
  .ss-hero__content-wrap { padding: 2.5rem 1.5rem; }
  .ss-hero__title { font-size: 2rem; }
  .ss-btn-primary { width: 100%; }
}
</style>