<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";

const chatOpen = ref(false);
const chatDismissed = ref(false);
const showButtons = ref(false);
const redesOpen = ref(false);

// Particles per button (12 bubbles each)
const PARTICLES = Array.from({ length: 12 });

let autoTimer: ReturnType<typeof setTimeout>;

function toggleRedes(event: Event) {
  event.stopPropagation();
  redesOpen.value = !redesOpen.value;
}

function handleOutsideClick() {
  if (redesOpen.value) {
    redesOpen.value = false;
  }
}

onMounted(() => {
  setTimeout(() => {
    showButtons.value = true;
  }, 600);
  // Auto-open only on desktop (≥768px) after 5s
  if (typeof window !== "undefined" && window.innerWidth >= 768) {
    autoTimer = setTimeout(() => {
      if (!chatDismissed.value) chatOpen.value = true;
    }, 5000);
  }
  window.addEventListener("click", handleOutsideClick);
});

onBeforeUnmount(() => {
  clearTimeout(autoTimer);
  window.removeEventListener("click", handleOutsideClick);
});

function toggleChat() {
  chatOpen.value = !chatOpen.value;
  if (!chatOpen.value) chatDismissed.value = true;
}
function closeChat() {
  chatOpen.value = false;
  chatDismissed.value = true;
}
</script>

<template>
  <!-- Floating sidebar -->
  <div
    class="fc-sidebar"
    :class="{ 'fc-sidebar--visible': showButtons }"
    aria-label="Contacto rápido"
  >
    <!-- Becas -->
    <a
      href="https://universidad.uninter.edu.mx/Calcula-Tu-Beca"
      target="_blank"
      class="fc-fab fc-fab--becas"
      aria-label="Calcula tu Beca"
    >
      <span
        v-for="_ in PARTICLES"
        class="fc-particle"
        aria-hidden="true"
      ></span>
      <span class="fc-fab__icon"
        ><Icon name="mdi:calculator-variant-outline" size="20"
      /></span>
      <span class="fc-fab__label">Becas</span>
    </a>

    <!-- WhatsApp -->
    <a
      href="https://wa.me/527773579000?text=Hola%2C%20quisiera%20informes%20sobre%20UNINTER."
      target="_blank"
      class="fc-fab fc-fab--wa"
      aria-label="WhatsApp"
    >
      <span
        v-for="_ in PARTICLES"
        class="fc-particle"
        aria-hidden="true"
      ></span>
      <span class="fc-fab__icon"><Icon name="mdi:whatsapp" size="20" /></span>
      <span class="fc-fab__label">WhatsApp</span>
    </a>

    <!-- Redes -->
    <div
      class="fc-fab fc-fab--redes"
      :class="{ 'fc-fab--redes-open': redesOpen }"
      aria-label="Redes Sociales"
      @click="toggleRedes"
      @mouseenter="redesOpen = true"
      @mouseleave="redesOpen = false"
    >
      <span
        v-for="_ in PARTICLES"
        class="fc-particle"
        aria-hidden="true"
      ></span>
      <span class="fc-fab__icon"
        ><Icon name="mdi:share-variant-outline" size="20"
      /></span>
      <span class="fc-fab__label">Redes</span>

      <!-- Social links tray -->
      <div class="fc-social-tray" @click.stop>
        <a
          href="https://www.facebook.com/uninteredu"
          target="_blank"
          rel="noopener"
          class="fc-social-link fc-social-link--fb"
          aria-label="Facebook"
        >
          <Icon name="mdi:facebook" size="18" />
        </a>
        <a
          href="https://www.instagram.com/uninter.cuerna"
          target="_blank"
          rel="noopener"
          class="fc-social-link fc-social-link--ig"
          aria-label="Instagram"
        >
          <Icon name="mdi:instagram" size="18" />
        </a>
      </div>
    </div>
  </div>
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
.fc-sidebar--visible {
  transform: translateY(-50%) translateX(0);
}

/* ── FAB base ── */
.fc-fab {
  position: relative;
  display: flex;
  align-items: center;
  overflow: visible; /* particles escape */
  width: 52px;
  height: 52px;
  border-radius: 12px 0 0 12px;
  border: none;
  outline: none;
  cursor: pointer;
  text-decoration: none;
  transition:
    width 0.35s cubic-bezier(0.34, 1.56, 0.64, 1),
    box-shadow 0.25s ease;
}
.fc-fab:hover {
  width: 148px;
}

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
.fc-fab:hover .fc-fab__icon {
  transform: scale(1.18) rotate(-8deg);
}

.fc-fab__label {
  font-size: 0.78rem;
  font-weight: 800;
  color: #fff;
  white-space: nowrap;
  padding-right: 1rem;
  opacity: 0;
  transform: translateX(-6px);
  transition:
    opacity 0.2s 0.1s,
    transform 0.25s 0.05s;
  position: relative;
  z-index: 2;
  letter-spacing: 0.04em;
}
.fc-fab:hover .fc-fab__label {
  opacity: 1;
  transform: translateX(0);
}

/* Colors */
.fc-fab--becas {
  background: #0f3c61;
  box-shadow: -3px 3px 14px rgba(15, 60, 97, 0.45);
}
.fc-fab--wa {
  background: #25d366;
  box-shadow: -3px 3px 14px rgba(37, 211, 102, 0.45);
}
.fc-fab--informes {
  background: #c62828;
  box-shadow: -3px 3px 14px rgba(198, 40, 40, 0.45);
}
.fc-fab--redes {
  background: linear-gradient(135deg, #6366f1, #4f46e5);
  box-shadow: -3px 3px 14px rgba(99, 102, 241, 0.45);
}
.fc-fab--redes:hover {
  width: 52px !important;
}
.fc-fab--redes-open {
  width: 52px !important;
}
.fc-fab--active {
  width: 148px;
}
.fc-fab--active .fc-fab__label {
  opacity: 1;
  transform: translateX(0);
}

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
.fc-fab--becas .fc-particle:nth-child(1) {
  background: #90caf9;
}
.fc-fab--becas .fc-particle:nth-child(2) {
  background: #bbdefb;
}
.fc-fab--becas .fc-particle:nth-child(3) {
  background: #64b5f6;
  width: 5px;
  height: 5px;
}
.fc-fab--becas .fc-particle:nth-child(4) {
  background: #e3f2fd;
  width: 4px;
  height: 4px;
}
.fc-fab--becas .fc-particle:nth-child(5) {
  background: #42a5f5;
}
.fc-fab--becas .fc-particle:nth-child(6) {
  background: #fff;
  width: 5px;
  height: 5px;
}
.fc-fab--becas .fc-particle:nth-child(7) {
  background: #1565c0;
  width: 9px;
  height: 9px;
}
.fc-fab--becas .fc-particle:nth-child(8) {
  background: #90caf9;
  width: 4px;
  height: 4px;
}
.fc-fab--becas .fc-particle:nth-child(9) {
  background: #e1f5fe;
  width: 6px;
  height: 6px;
}
.fc-fab--becas .fc-particle:nth-child(10) {
  background: #29b6f6;
  width: 5px;
  height: 5px;
}
.fc-fab--becas .fc-particle:nth-child(11) {
  background: #fff;
  width: 4px;
  height: 4px;
}
.fc-fab--becas .fc-particle:nth-child(12) {
  background: #42a5f5;
  width: 8px;
  height: 8px;
}

.fc-fab--wa .fc-particle:nth-child(1) {
  background: #b9f6ca;
}
.fc-fab--wa .fc-particle:nth-child(2) {
  background: #69f0ae;
}
.fc-fab--wa .fc-particle:nth-child(3) {
  background: #fff;
  width: 5px;
  height: 5px;
}
.fc-fab--wa .fc-particle:nth-child(4) {
  background: #00e676;
  width: 4px;
  height: 4px;
}
.fc-fab--wa .fc-particle:nth-child(5) {
  background: #a5d6a7;
}
.fc-fab--wa .fc-particle:nth-child(6) {
  background: #ccff90;
  width: 5px;
  height: 5px;
}
.fc-fab--wa .fc-particle:nth-child(7) {
  background: #1b5e20;
  width: 9px;
  height: 9px;
}
.fc-fab--wa .fc-particle:nth-child(8) {
  background: #b9f6ca;
  width: 4px;
  height: 4px;
}
.fc-fab--wa .fc-particle:nth-child(9) {
  background: #fff;
  width: 6px;
  height: 6px;
}
.fc-fab--wa .fc-particle:nth-child(10) {
  background: #00c853;
  width: 5px;
  height: 5px;
}
.fc-fab--wa .fc-particle:nth-child(11) {
  background: #76ff03;
  width: 4px;
  height: 4px;
}
.fc-fab--wa .fc-particle:nth-child(12) {
  background: #69f0ae;
  width: 8px;
  height: 8px;
}

.fc-fab--redes .fc-particle:nth-child(1) {
  background: #c7d2fe;
}
.fc-fab--redes .fc-particle:nth-child(2) {
  background: #a5b4fc;
}
.fc-fab--redes .fc-particle:nth-child(3) {
  background: #fff;
  width: 5px;
  height: 5px;
}
.fc-fab--redes .fc-particle:nth-child(4) {
  background: #818cf8;
  width: 4px;
  height: 4px;
}
.fc-fab--redes .fc-particle:nth-child(5) {
  background: #ddd6fe;
}
.fc-fab--redes .fc-particle:nth-child(6) {
  background: #c4b5fd;
  width: 5px;
  height: 5px;
}
.fc-fab--redes .fc-particle:nth-child(7) {
  background: #4f46e5;
  width: 9px;
  height: 9px;
}
.fc-fab--redes .fc-particle:nth-child(8) {
  background: #c7d2fe;
  width: 4px;
  height: 4px;
}
.fc-fab--redes .fc-particle:nth-child(9) {
  background: #fff;
  width: 6px;
  height: 6px;
}
.fc-fab--redes .fc-particle:nth-child(10) {
  background: #6366f1;
  width: 5px;
  height: 5px;
}
.fc-fab--redes .fc-particle:nth-child(11) {
  background: #a78bfa;
  width: 4px;
  height: 4px;
}
.fc-fab--redes .fc-particle:nth-child(12) {
  background: #818cf8;
  width: 8px;
  height: 8px;
}

.fc-fab--informes .fc-particle:nth-child(1) {
  background: #ffcdd2;
}
.fc-fab--informes .fc-particle:nth-child(2) {
  background: #ef9a9a;
}
.fc-fab--informes .fc-particle:nth-child(3) {
  background: #fff;
  width: 5px;
  height: 5px;
}
.fc-fab--informes .fc-particle:nth-child(4) {
  background: #e53935;
  width: 4px;
  height: 4px;
}
.fc-fab--informes .fc-particle:nth-child(5) {
  background: #ff8a80;
}
.fc-fab--informes .fc-particle:nth-child(6) {
  background: #ff5252;
  width: 5px;
  height: 5px;
}
.fc-fab--informes .fc-particle:nth-child(7) {
  background: #b71c1c;
  width: 9px;
  height: 9px;
}
.fc-fab--informes .fc-particle:nth-child(8) {
  background: #ffcdd2;
  width: 4px;
  height: 4px;
}
.fc-fab--informes .fc-particle:nth-child(9) {
  background: #fff;
  width: 6px;
  height: 6px;
}
.fc-fab--informes .fc-particle:nth-child(10) {
  background: #ff1744;
  width: 5px;
  height: 5px;
}
.fc-fab--informes .fc-particle:nth-child(11) {
  background: #ff8a80;
  width: 4px;
  height: 4px;
}
.fc-fab--informes .fc-particle:nth-child(12) {
  background: #ef9a9a;
  width: 8px;
  height: 8px;
}

/* Trigger on hover — each particle gets unique keyframe */
.fc-fab:hover .fc-particle:nth-child(1) {
  animation: p1 0.7s 0s cubic-bezier(0.22, 1, 0.36, 1) forwards;
}
.fc-fab:hover .fc-particle:nth-child(2) {
  animation: p2 0.65s 0.04s cubic-bezier(0.22, 1, 0.36, 1) forwards;
}
.fc-fab:hover .fc-particle:nth-child(3) {
  animation: p3 0.8s 0.02s cubic-bezier(0.22, 1, 0.36, 1) forwards;
}
.fc-fab:hover .fc-particle:nth-child(4) {
  animation: p4 0.6s 0.07s cubic-bezier(0.22, 1, 0.36, 1) forwards;
}
.fc-fab:hover .fc-particle:nth-child(5) {
  animation: p5 0.75s 0.01s cubic-bezier(0.22, 1, 0.36, 1) forwards;
}
.fc-fab:hover .fc-particle:nth-child(6) {
  animation: p6 0.7s 0.05s cubic-bezier(0.22, 1, 0.36, 1) forwards;
}
.fc-fab:hover .fc-particle:nth-child(7) {
  animation: p7 0.65s 0.03s cubic-bezier(0.22, 1, 0.36, 1) forwards;
}
.fc-fab:hover .fc-particle:nth-child(8) {
  animation: p8 0.8s 0.06s cubic-bezier(0.22, 1, 0.36, 1) forwards;
}
.fc-fab:hover .fc-particle:nth-child(9) {
  animation: p9 0.7s 0.02s cubic-bezier(0.22, 1, 0.36, 1) forwards;
}
.fc-fab:hover .fc-particle:nth-child(10) {
  animation: p10 0.6s 0.08s cubic-bezier(0.22, 1, 0.36, 1) forwards;
}
.fc-fab:hover .fc-particle:nth-child(11) {
  animation: p11 0.75s 0.04s cubic-bezier(0.22, 1, 0.36, 1) forwards;
}
.fc-fab:hover .fc-particle:nth-child(12) {
  animation: p12 0.65s 0.01s cubic-bezier(0.22, 1, 0.36, 1) forwards;
}

/* 12 unique trajectories — left/up/down spread */
@keyframes p1 {
  0% {
    opacity: 0.9;
    transform: translate(-50%, -50%);
  }
  100% {
    opacity: 0;
    transform: translate(-38px, -34px) scale(0.4);
  }
}
@keyframes p2 {
  0% {
    opacity: 0.9;
    transform: translate(-50%, -50%);
  }
  100% {
    opacity: 0;
    transform: translate(-20px, -42px) scale(0.5);
  }
}
@keyframes p3 {
  0% {
    opacity: 0.9;
    transform: translate(-50%, -50%);
  }
  100% {
    opacity: 0;
    transform: translate(-44px, -18px) scale(0.3);
  }
}
@keyframes p4 {
  0% {
    opacity: 0.9;
    transform: translate(-50%, -50%);
  }
  100% {
    opacity: 0;
    transform: translate(-32px, 28px) scale(0.6);
  }
}
@keyframes p5 {
  0% {
    opacity: 0.9;
    transform: translate(-50%, -50%);
  }
  100% {
    opacity: 0;
    transform: translate(-46px, 8px) scale(0.4);
  }
}
@keyframes p6 {
  0% {
    opacity: 0.9;
    transform: translate(-50%, -50%);
  }
  100% {
    opacity: 0;
    transform: translate(-14px, -48px) scale(0.5);
  }
}
@keyframes p7 {
  0% {
    opacity: 0.9;
    transform: translate(-50%, -50%);
  }
  100% {
    opacity: 0;
    transform: translate(-40px, 36px) scale(0.3);
  }
}
@keyframes p8 {
  0% {
    opacity: 0.9;
    transform: translate(-50%, -50%);
  }
  100% {
    opacity: 0;
    transform: translate(-26px, -40px) scale(0.6);
  }
}
@keyframes p9 {
  0% {
    opacity: 0.9;
    transform: translate(-50%, -50%);
  }
  100% {
    opacity: 0;
    transform: translate(-50px, -10px) scale(0.4);
  }
}
@keyframes p10 {
  0% {
    opacity: 0.9;
    transform: translate(-50%, -50%);
  }
  100% {
    opacity: 0;
    transform: translate(-18px, 44px) scale(0.5);
  }
}
@keyframes p11 {
  0% {
    opacity: 0.9;
    transform: translate(-50%, -50%);
  }
  100% {
    opacity: 0;
    transform: translate(-36px, 16px) scale(0.3);
  }
}
@keyframes p12 {
  0% {
    opacity: 0.9;
    transform: translate(-50%, -50%);
  }
  100% {
    opacity: 0;
    transform: translate(-10px, -30px) scale(0.7);
  }
}

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
  box-shadow:
    0 20px 60px rgba(0, 0, 0, 0.18),
    0 4px 16px rgba(0, 0, 0, 0.1);
  z-index: 901;
  overflow: hidden;
  transform-origin: bottom right;
}

.fc-chat__head {
  background: #0f3c61;
  padding: 0.8rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.fc-chat__head-info {
  display: flex;
  align-items: center;
  gap: 0.625rem;
}
.fc-chat__avatar {
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.18);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
}
.fc-chat__name {
  font-size: 0.82rem;
  font-weight: 700;
  color: #fff;
  margin: 0;
}
.fc-chat__status {
  display: flex;
  align-items: center;
  gap: 0.3rem;
  font-size: 0.68rem;
  color: rgba(255, 255, 255, 0.7);
}
.fc-chat__dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #4ade80;
  animation: blink 2s infinite;
}
@keyframes blink {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.4;
  }
}
.fc-chat__close {
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.15);
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  transition: background 0.2s;
}
.fc-chat__close:hover {
  background: rgba(255, 255, 255, 0.3);
}

.fc-chat__body {
  padding: 0.875rem 1rem;
  background: #f5f7f9;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.fc-chat__bubble {
  max-width: 90%;
  padding: 0.55rem 0.8rem;
  border-radius: 12px 12px 12px 4px;
  background: #fff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.07);
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  animation: bubbleIn 0.35s ease both;
}
.fc-chat__bubble--delay {
  animation-delay: 0.18s;
}
@keyframes bubbleIn {
  from {
    opacity: 0;
    transform: translateY(8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.fc-chat__bubble p {
  font-size: 0.82rem;
  color: #1a2530;
  line-height: 1.5;
  margin: 0;
}
.fc-chat__time {
  font-size: 0.62rem;
  color: #bbb;
  align-self: flex-end;
}

.fc-chat__actions {
  padding: 0.75rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}
.fc-chat__btn {
  display: flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.55rem 0.875rem;
  border-radius: 8px;
  font-size: 0.78rem;
  font-weight: 700;
  text-decoration: none;
  transition:
    filter 0.2s,
    transform 0.15s;
}
.fc-chat__btn:hover {
  filter: brightness(1.1);
  transform: translateY(-1px);
}
.fc-chat__btn--wa {
  background: #25d366;
  color: #fff;
}
.fc-chat__btn--call {
  background: #0f3c61;
  color: #fff;
}
.fc-chat__btn--beca {
  background: #f0f2f4;
  color: #0f3c61;
}

.fc-chat__footer {
  text-align: center;
  font-size: 0.68rem;
  color: #aaa;
  padding: 0 1rem 0.75rem;
  margin: 0;
}

/* ── Chat transition ── */
.fc-chat-enter-active {
  animation: chatIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.fc-chat-leave-active {
  animation: chatOut 0.22s ease-in forwards;
}
@keyframes chatIn {
  from {
    opacity: 0;
    transform: scale(0.65) translateY(24px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}
@keyframes chatOut {
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(0.8) translateY(8px);
  }
}

/* ═══════════════════════════════════════════
   SOCIAL MEDIA TRAY
═══════════════════════════════════════════ */
.fc-social-tray {
  position: absolute;
  right: 58px; /* 52px button width + 6px gap */
  top: 50%;
  transform: translateY(-50%) translateX(12px);
  display: flex;
  gap: 8px;
  background: rgba(15, 60, 97, 0.96);
  backdrop-filter: blur(10px);
  padding: 6px 8px;
  border-radius: 30px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  box-shadow: -4px 4px 16px rgba(0, 0, 0, 0.2);
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transition:
    opacity 0.3s cubic-bezier(0.25, 0.8, 0.25, 1),
    transform 0.3s cubic-bezier(0.25, 0.8, 0.25, 1),
    visibility 0.3s;
  z-index: 10;
}

.fc-fab--redes:hover .fc-social-tray,
.fc-fab--redes-open .fc-social-tray {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
  transform: translateY(-50%) translateX(0);
}

.fc-social-link {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  transition:
    transform 0.2s,
    filter 0.2s;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
}
.fc-social-link:hover {
  transform: scale(1.15);
  filter: brightness(1.1);
}
.fc-social-link--fb {
  background: #1877f2;
}
.fc-social-link--ig {
  background: radial-gradient(
    circle at 30% 107%,
    #fdf497 0%,
    #fdf497 5%,
    #fd5949 45%,
    #d6249f 60%,
    #285aeb 90%
  );
}

/* ═══════════════════════════════════════════
   MOBILE  — botones se quedan, chat OCULTO
═══════════════════════════════════════════ */
@media (max-width: 767px) {
  /* Sidebar centrado verticalmente, mismo lado derecho */
  .fc-sidebar {
    top: 50%;
    transform: translateY(-50%) translateX(110%);
  }
  .fc-sidebar--visible {
    transform: translateY(-50%) translateX(0);
  }

  /* No expandir en mobile — tap directo */
  .fc-fab {
    width: 44px;
    height: 44px;
  }
  .fc-fab:hover {
    width: 44px;
  }
  .fc-fab--redes:hover {
    width: 44px !important;
  }
  .fc-fab--redes-open {
    width: 44px !important;
  }
  .fc-fab__label {
    display: none;
  }

  /* Ajustes responsive para el tray */
  .fc-social-tray {
    right: 50px; /* 44px button width + 6px gap */
    padding: 4px 6px;
    gap: 6px;
  }
  .fc-social-link {
    width: 28px;
    height: 28px;
  }

  /* Chat completamente oculto en mobile */
  .fc-chat {
    display: none !important;
  }
}
</style>
