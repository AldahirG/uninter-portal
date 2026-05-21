<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";

const chatOpen      = ref(false);
const chatDismissed = ref(false);
const showButtons   = ref(false);

// Particles per button (12 bubbles each)
const PARTICLES = Array.from({ length: 12 });

let autoTimer: ReturnType<typeof setTimeout>;
onMounted(() => {
  setTimeout(() => { showButtons.value = true; }, 600);
  // Auto-open only on desktop (≥768px) after 5s
  if (typeof window !== "undefined" && window.innerWidth >= 768) {
    autoTimer = setTimeout(() => {
      if (!chatDismissed.value) chatOpen.value = true;
    }, 5000);
  }
});
onBeforeUnmount(() => clearTimeout(autoTimer));

function toggleChat() {
  chatOpen.value = !chatOpen.value;
  if (!chatOpen.value) chatDismissed.value = true;
}
function closeChat() {
  chatOpen.value  = false;
  chatDismissed.value = true;
}
</script>

<template>
  <!-- Floating sidebar -->
  <div class="fc-sidebar" :class="{ 'fc-sidebar--visible': showButtons }" aria-label="Contacto rápido">

    <!-- Becas -->
    <a href="https://universidad.uninter.edu.mx/Calcula-Tu-Beca" target="_blank"
       class="fc-fab fc-fab--becas" aria-label="Calcula tu Beca">
      <span v-for="_ in PARTICLES" class="fc-particle" aria-hidden="true"></span>
      <span class="fc-fab__icon"><Icon name="mdi:calculator-variant-outline" size="20" /></span>
      <span class="fc-fab__label">Becas</span>
    </a>

    <!-- WhatsApp -->
    <a href="https://wa.me/527773579000?text=Hola%2C%20quisiera%20informes%20sobre%20UNINTER." target="_blank"
       class="fc-fab fc-fab--wa" aria-label="WhatsApp">
      <span v-for="_ in PARTICLES" class="fc-particle" aria-hidden="true"></span>
      <span class="fc-fab__icon"><Icon name="mdi:whatsapp" size="20" /></span>
      <span class="fc-fab__label">WhatsApp</span>
    </a>

    <!-- Informes -->
    <button class="fc-fab fc-fab--informes" :class="{ 'fc-fab--active': chatOpen }"
            aria-label="Informes" @click="toggleChat">
      <span v-for="_ in PARTICLES" class="fc-particle" aria-hidden="true"></span>
      <span class="fc-fab__icon">
        <Icon :name="chatOpen ? 'mdi:close' : 'mdi:message-text-outline'" size="20" />
      </span>
      <span class="fc-fab__label">{{ chatOpen ? 'Cerrar' : 'Informes' }}</span>
    </button>
  </div>

  <!-- Chat popup -->
  <Transition name="fc-chat">
    <div v-if="chatOpen" class="fc-chat" role="dialog" aria-label="Informes UNINTER">
      <div class="fc-chat__head">
        <div class="fc-chat__head-info">
          <div class="fc-chat__avatar"><Icon name="mdi:school" size="18" /></div>
          <div>
            <p class="fc-chat__name">Asesor UNINTER</p>
            <span class="fc-chat__status"><span class="fc-chat__dot"></span>En línea</span>
          </div>
        </div>
        <button class="fc-chat__close" @click="closeChat" aria-label="Cerrar">
          <Icon name="mdi:close" size="16" />
        </button>
      </div>

      <div class="fc-chat__body">
        <div class="fc-chat__bubble">
          <p>¡Hola! 👋 ¿Buscas información sobre programas o becas?</p>
          <span class="fc-chat__time">ahora</span>
        </div>
        <div class="fc-chat__bubble fc-chat__bubble--delay">
          <p>Estamos listos para acompañarte. 🎓</p>
          <span class="fc-chat__time">ahora</span>
        </div>
      </div>

      <div class="fc-chat__actions">
        <a href="https://wa.me/527773579000?text=Hola%2C%20quisiera%20informes%20sobre%20UNINTER."
           target="_blank" class="fc-chat__btn fc-chat__btn--wa">
          <Icon name="mdi:whatsapp" size="16" /> WhatsApp
        </a>
        <a href="tel:7773579000" class="fc-chat__btn fc-chat__btn--call">
          <Icon name="mdi:phone-outline" size="16" /> 777 357 9000
        </a>
        <a href="https://universidad.uninter.edu.mx/Calcula-Tu-Beca" target="_blank"
           class="fc-chat__btn fc-chat__btn--beca">
          <Icon name="mdi:calculator-variant-outline" size="16" /> Calcula tu Beca
        </a>
      </div>
      <p class="fc-chat__footer">Lun–Vie 8:00–18:00 · Sáb 9:00–13:00</p>
    </div>
  </Transition>
</template>

<style scoped>
/* ═══════════════════════════════════════════
   SIDEBAR
═══════════════════════════════════════════ */
.fc-sidebar {
  position: fixed;
  right: 0;
  top: 50%;
  transform: translateY(-50%) translateX(110%);
  z-index: 900;
  display: flex;
  flex-direction: column;
  gap: 6px;
  transition: transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.fc-sidebar--visible { transform: translateY(-50%) translateX(0); }

/* ── FAB base ── */
.fc-fab {
  position: relative;
  display: flex;
  align-items: center;
  overflow: visible;      /* particles escape */
  width: 52px;
  height: 52px;
  border-radius: 12px 0 0 12px;
  border: none;
  outline: none;
  cursor: pointer;
  text-decoration: none;
  transition:
    width  0.35s cubic-bezier(0.34, 1.56, 0.64, 1),
    box-shadow 0.25s ease;
}
.fc-fab:hover { width: 148px; }

.fc-fab__icon {
  flex-shrink: 0;
  width: 52px;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  position: relative;
  z-index: 2;
  transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.fc-fab:hover .fc-fab__icon { transform: scale(1.18) rotate(-8deg); }

.fc-fab__label {
  font-size: 0.78rem;
  font-weight: 800;
  color: #fff;
  white-space: nowrap;
  padding-right: 1rem;
  opacity: 0;
  transform: translateX(-6px);
  transition: opacity 0.2s 0.1s, transform 0.25s 0.05s;
  position: relative;
  z-index: 2;
  letter-spacing: 0.04em;
}
.fc-fab:hover .fc-fab__label { opacity: 1; transform: translateX(0); }

/* Colors */
.fc-fab--becas    { background: #0F3C61; box-shadow: -3px 3px 14px rgba(15,60,97,.45); }
.fc-fab--wa       { background: #25D366; box-shadow: -3px 3px 14px rgba(37,211,102,.45); }
.fc-fab--informes { background: #C62828; box-shadow: -3px 3px 14px rgba(198,40,40,.45); }
.fc-fab--active   { width: 148px; }
.fc-fab--active .fc-fab__label { opacity: 1; transform: translateX(0); }

/* ═══════════════════════════════════════════
   PARTICLES  (efervescente)
═══════════════════════════════════════════ */
.fc-particle {
  position: absolute;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  opacity: 0;
  pointer-events: none;
  top: 50%;
  left: 26px;
  z-index: 1;
  transform: translate(-50%, -50%);
}

/* Individual colors per nth-child */
.fc-fab--becas  .fc-particle:nth-child(1)  { background: #90CAF9; }
.fc-fab--becas  .fc-particle:nth-child(2)  { background: #BBDEFB; }
.fc-fab--becas  .fc-particle:nth-child(3)  { background: #64B5F6; width:5px;height:5px; }
.fc-fab--becas  .fc-particle:nth-child(4)  { background: #E3F2FD; width:4px;height:4px; }
.fc-fab--becas  .fc-particle:nth-child(5)  { background: #42A5F5; }
.fc-fab--becas  .fc-particle:nth-child(6)  { background: #fff; width:5px;height:5px; }
.fc-fab--becas  .fc-particle:nth-child(7)  { background: #1565C0; width:9px;height:9px; }
.fc-fab--becas  .fc-particle:nth-child(8)  { background: #90CAF9; width:4px;height:4px; }
.fc-fab--becas  .fc-particle:nth-child(9)  { background: #E1F5FE; width:6px;height:6px; }
.fc-fab--becas  .fc-particle:nth-child(10) { background: #29B6F6; width:5px;height:5px; }
.fc-fab--becas  .fc-particle:nth-child(11) { background: #fff; width:4px;height:4px; }
.fc-fab--becas  .fc-particle:nth-child(12) { background: #42A5F5; width:8px;height:8px; }

.fc-fab--wa  .fc-particle:nth-child(1)  { background: #B9F6CA; }
.fc-fab--wa  .fc-particle:nth-child(2)  { background: #69F0AE; }
.fc-fab--wa  .fc-particle:nth-child(3)  { background: #fff; width:5px;height:5px; }
.fc-fab--wa  .fc-particle:nth-child(4)  { background: #00E676; width:4px;height:4px; }
.fc-fab--wa  .fc-particle:nth-child(5)  { background: #A5D6A7; }
.fc-fab--wa  .fc-particle:nth-child(6)  { background: #CCFF90; width:5px;height:5px; }
.fc-fab--wa  .fc-particle:nth-child(7)  { background: #1B5E20; width:9px;height:9px; }
.fc-fab--wa  .fc-particle:nth-child(8)  { background: #B9F6CA; width:4px;height:4px; }
.fc-fab--wa  .fc-particle:nth-child(9)  { background: #fff; width:6px;height:6px; }
.fc-fab--wa  .fc-particle:nth-child(10) { background: #00C853; width:5px;height:5px; }
.fc-fab--wa  .fc-particle:nth-child(11) { background: #76FF03; width:4px;height:4px; }
.fc-fab--wa  .fc-particle:nth-child(12) { background: #69F0AE; width:8px;height:8px; }

.fc-fab--informes  .fc-particle:nth-child(1)  { background: #FFCDD2; }
.fc-fab--informes  .fc-particle:nth-child(2)  { background: #EF9A9A; }
.fc-fab--informes  .fc-particle:nth-child(3)  { background: #fff; width:5px;height:5px; }
.fc-fab--informes  .fc-particle:nth-child(4)  { background: #E53935; width:4px;height:4px; }
.fc-fab--informes  .fc-particle:nth-child(5)  { background: #FF8A80; }
.fc-fab--informes  .fc-particle:nth-child(6)  { background: #FF5252; width:5px;height:5px; }
.fc-fab--informes  .fc-particle:nth-child(7)  { background: #B71C1C; width:9px;height:9px; }
.fc-fab--informes  .fc-particle:nth-child(8)  { background: #FFCDD2; width:4px;height:4px; }
.fc-fab--informes  .fc-particle:nth-child(9)  { background: #fff; width:6px;height:6px; }
.fc-fab--informes  .fc-particle:nth-child(10) { background: #FF1744; width:5px;height:5px; }
.fc-fab--informes  .fc-particle:nth-child(11) { background: #FF8A80; width:4px;height:4px; }
.fc-fab--informes  .fc-particle:nth-child(12) { background: #EF9A9A; width:8px;height:8px; }

/* Trigger on hover — each particle gets unique keyframe */
.fc-fab:hover .fc-particle:nth-child(1)  { animation: p1  0.7s 0.00s cubic-bezier(0.22,1,0.36,1) forwards; }
.fc-fab:hover .fc-particle:nth-child(2)  { animation: p2  0.65s 0.04s cubic-bezier(0.22,1,0.36,1) forwards; }
.fc-fab:hover .fc-particle:nth-child(3)  { animation: p3  0.8s 0.02s cubic-bezier(0.22,1,0.36,1) forwards; }
.fc-fab:hover .fc-particle:nth-child(4)  { animation: p4  0.6s 0.07s cubic-bezier(0.22,1,0.36,1) forwards; }
.fc-fab:hover .fc-particle:nth-child(5)  { animation: p5  0.75s 0.01s cubic-bezier(0.22,1,0.36,1) forwards; }
.fc-fab:hover .fc-particle:nth-child(6)  { animation: p6  0.7s 0.05s cubic-bezier(0.22,1,0.36,1) forwards; }
.fc-fab:hover .fc-particle:nth-child(7)  { animation: p7  0.65s 0.03s cubic-bezier(0.22,1,0.36,1) forwards; }
.fc-fab:hover .fc-particle:nth-child(8)  { animation: p8  0.8s 0.06s cubic-bezier(0.22,1,0.36,1) forwards; }
.fc-fab:hover .fc-particle:nth-child(9)  { animation: p9  0.7s 0.02s cubic-bezier(0.22,1,0.36,1) forwards; }
.fc-fab:hover .fc-particle:nth-child(10) { animation: p10 0.6s 0.08s cubic-bezier(0.22,1,0.36,1) forwards; }
.fc-fab:hover .fc-particle:nth-child(11) { animation: p11 0.75s 0.04s cubic-bezier(0.22,1,0.36,1) forwards; }
.fc-fab:hover .fc-particle:nth-child(12) { animation: p12 0.65s 0.01s cubic-bezier(0.22,1,0.36,1) forwards; }

/* 12 unique trajectories — left/up/down spread */
@keyframes p1  { 0%{opacity:.9;transform:translate(-50%,-50%)} 100%{opacity:0;transform:translate(-38px,-34px) scale(.4)} }
@keyframes p2  { 0%{opacity:.9;transform:translate(-50%,-50%)} 100%{opacity:0;transform:translate(-20px,-42px) scale(.5)} }
@keyframes p3  { 0%{opacity:.9;transform:translate(-50%,-50%)} 100%{opacity:0;transform:translate(-44px,-18px) scale(.3)} }
@keyframes p4  { 0%{opacity:.9;transform:translate(-50%,-50%)} 100%{opacity:0;transform:translate(-32px, 28px) scale(.6)} }
@keyframes p5  { 0%{opacity:.9;transform:translate(-50%,-50%)} 100%{opacity:0;transform:translate(-46px,  8px) scale(.4)} }
@keyframes p6  { 0%{opacity:.9;transform:translate(-50%,-50%)} 100%{opacity:0;transform:translate(-14px,-48px) scale(.5)} }
@keyframes p7  { 0%{opacity:.9;transform:translate(-50%,-50%)} 100%{opacity:0;transform:translate(-40px, 36px) scale(.3)} }
@keyframes p8  { 0%{opacity:.9;transform:translate(-50%,-50%)} 100%{opacity:0;transform:translate(-26px,-40px) scale(.6)} }
@keyframes p9  { 0%{opacity:.9;transform:translate(-50%,-50%)} 100%{opacity:0;transform:translate(-50px,-10px) scale(.4)} }
@keyframes p10 { 0%{opacity:.9;transform:translate(-50%,-50%)} 100%{opacity:0;transform:translate(-18px, 44px) scale(.5)} }
@keyframes p11 { 0%{opacity:.9;transform:translate(-50%,-50%)} 100%{opacity:0;transform:translate(-36px, 16px) scale(.3)} }
@keyframes p12 { 0%{opacity:.9;transform:translate(-50%,-50%)} 100%{opacity:0;transform:translate(-10px,-30px) scale(.7)} }

/* ═══════════════════════════════════════════
   CHAT POPUP
═══════════════════════════════════════════ */
.fc-chat {
  position: fixed;
  bottom: 1.5rem;
  right: 4.25rem;
  width: 300px;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 20px 60px rgba(0,0,0,.18), 0 4px 16px rgba(0,0,0,.1);
  z-index: 901;
  overflow: hidden;
  transform-origin: bottom right;
}

.fc-chat__head {
  background: #0F3C61;
  padding: 0.8rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.fc-chat__head-info { display: flex; align-items: center; gap: 0.625rem; }
.fc-chat__avatar {
  width: 34px; height: 34px; border-radius: 50%;
  background: rgba(255,255,255,.18);
  display: flex; align-items: center; justify-content: center; color: #fff;
}
.fc-chat__name  { font-size:.82rem; font-weight:700; color:#fff; margin:0; }
.fc-chat__status{ display:flex; align-items:center; gap:.3rem; font-size:.68rem; color:rgba(255,255,255,.7); }
.fc-chat__dot   { width:7px; height:7px; border-radius:50%; background:#4ade80; animation:blink 2s infinite; }
@keyframes blink { 0%,100%{opacity:1} 50%{opacity:.4} }
.fc-chat__close {
  width:26px; height:26px; border-radius:50%;
  background:rgba(255,255,255,.15); border:none; cursor:pointer;
  display:flex; align-items:center; justify-content:center;
  color:#fff; transition:background .2s;
}
.fc-chat__close:hover { background:rgba(255,255,255,.3); }

.fc-chat__body  { padding:.875rem 1rem; background:#f5f7f9; display:flex; flex-direction:column; gap:.5rem; }
.fc-chat__bubble{
  max-width:90%; padding:.55rem .8rem;
  border-radius:12px 12px 12px 4px;
  background:#fff; box-shadow:0 2px 6px rgba(0,0,0,.07);
  display:flex; flex-direction:column; gap:.2rem;
  animation: bubbleIn .35s ease both;
}
.fc-chat__bubble--delay { animation-delay:.18s; }
@keyframes bubbleIn {
  from { opacity:0; transform:translateY(8px); }
  to   { opacity:1; transform:translateY(0);   }
}
.fc-chat__bubble p { font-size:.82rem; color:#1a2530; line-height:1.5; margin:0; }
.fc-chat__time    { font-size:.62rem; color:#bbb; align-self:flex-end; }

.fc-chat__actions { padding:.75rem 1rem; display:flex; flex-direction:column; gap:.4rem; }
.fc-chat__btn {
  display:flex; align-items:center; gap:.45rem;
  padding:.55rem .875rem; border-radius:8px;
  font-size:.78rem; font-weight:700; text-decoration:none;
  transition:filter .2s, transform .15s;
}
.fc-chat__btn:hover { filter:brightness(1.1); transform:translateY(-1px); }
.fc-chat__btn--wa   { background:#25D366; color:#fff; }
.fc-chat__btn--call { background:#0F3C61; color:#fff; }
.fc-chat__btn--beca { background:#f0f2f4; color:#0F3C61; }

.fc-chat__footer {
  text-align:center; font-size:.68rem; color:#aaa;
  padding:0 1rem .75rem; margin:0;
}

/* ── Chat transition ── */
.fc-chat-enter-active { animation: chatIn .4s cubic-bezier(0.34,1.56,0.64,1); }
.fc-chat-leave-active { animation: chatOut .22s ease-in forwards; }
@keyframes chatIn  { from{opacity:0;transform:scale(.65) translateY(24px)} to{opacity:1;transform:scale(1) translateY(0)} }
@keyframes chatOut { from{opacity:1;transform:scale(1)} to{opacity:0;transform:scale(.8) translateY(8px)} }

/* ═══════════════════════════════════════════
   MOBILE  — botones se quedan, chat OCULTO
═══════════════════════════════════════════ */
@media (max-width: 767px) {
  /* Sidebar centrado verticalmente, mismo lado derecho */
  .fc-sidebar {
    top: 50%;
    transform: translateY(-50%) translateX(110%);
  }
  .fc-sidebar--visible { transform: translateY(-50%) translateX(0); }

  /* No expandir en mobile — tap directo */
  .fc-fab        { width: 44px; height: 44px; }
  .fc-fab:hover  { width: 44px; }
  .fc-fab__label { display: none; }

  /* Chat completamente oculto en mobile */
  .fc-chat { display: none !important; }
}
</style>
