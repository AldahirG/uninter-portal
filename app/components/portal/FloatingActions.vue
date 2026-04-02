<script setup lang="ts">
import { ref } from 'vue'

const expanded = ref(false)
const chatOpen = ref(false)
const chatMessage = ref('')
const messages = ref<{ from: 'user' | 'bot'; text: string }[]>([
  { from: 'bot', text: '¡Hola! Soy el asistente de UNINTER 👋 ¿En qué puedo ayudarte hoy?' },
])

const toggleChat = () => { chatOpen.value = !chatOpen.value; if (chatOpen.value) expanded.value = false }
const sendMessage = () => {
  const t = chatMessage.value.trim()
  if (!t) return
  messages.value.push({ from: 'user', text: t })
  chatMessage.value = ''
  setTimeout(() => { messages.value.push({ from: 'bot', text: 'Gracias por tu mensaje. Un asesor te contactará en breve. También puedes llamarnos al 777 357 9000.' }) }, 900)
}

const waUrl = 'https://wa.me/5217776154241?text=Hola%20vengo%20de%20la%20p%C3%A1gina%20de%20Universidad%2C%20necesito%20m%C3%A1s%20informaci%C3%B3n%20%E2%9C%8C%EF%B8%8F.?text=Hola%2C%20me%20interesa%20informaci%C3%B3n%20sobre%20los%20programas%20de%20UNINTER'
</script>

<template>
  <div class="fa-root">
    <Transition name="fa-chat">
      <div v-if="chatOpen" class="fa-widget">
        <div class="fa-widget__header">
          <div class="fa-widget__av"><Icon name="mdi:school" size="16" /></div>
          <div class="fa-widget__info">
            <p class="fa-widget__name">Asistente UNINTER</p>
            <p class="fa-widget__status"><span class="fa-dot"></span>En línea</p>
          </div>
          <button class="fa-widget__close" @click="chatOpen = false"><Icon name="mdi:close" size="15" /></button>
        </div>
        <div class="fa-widget__body">
          <div v-for="(m, i) in messages" :key="i" class="fa-msg" :class="`fa-msg--${m.from}`">{{ m.text }}</div>
        </div>
        <div class="fa-widget__footer">
          <input v-model="chatMessage" type="text" placeholder="Escribe tu mensaje..." class="fa-input" @keydown.enter="sendMessage" />
          <button class="fa-send" @click="sendMessage"><Icon name="mdi:send" size="15" /></button>
        </div>
      </div>
    </Transition>

    <div class="fa-stack">
      <Transition name="fa-pop">
        <a v-if="expanded" :href="waUrl" target="_blank" rel="noopener" class="fa-btn fa-btn--wa" aria-label="WhatsApp">
          <Icon name="mdi:whatsapp" size="20" />
          <span class="fa-tooltip">WhatsApp</span>
        </a>
      </Transition>

      <Transition name="fa-pop">
        <button v-if="expanded" class="fa-btn fa-btn--chat" :class="{'fa-btn--chat-open': chatOpen}" @click="toggleChat" aria-label="Chat">
          <Icon name="mdi:chat-outline" size="19" />
          <span class="fa-tooltip">Chat en vivo</span>
        </button>
      </Transition>

      <button class="fa-btn fa-btn--main" :class="{'fa-btn--main-open': expanded}" @click="expanded = !expanded" aria-label="Contacto">
        <Transition name="fa-icon" mode="out-in">
          <Icon v-if="!expanded" key="q" name="mdi:comment-question-outline" size="20" />
          <Icon v-else           key="x" name="mdi:close"                    size="19" />
        </Transition>
        <span v-if="!expanded" class="fa-pulse"></span>
      </button>
    </div>
  </div>
</template>

<style scoped>
.fa-root {
  position: fixed;
  bottom: calc(1.75rem + env(safe-area-inset-bottom, 0px));
  right: 1.75rem;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: .75rem;
}

.fa-stack { display: flex; flex-direction: column; align-items: flex-end; gap: .625rem; }

.fa-btn {
  position: relative;
  display: flex; align-items: center; justify-content: center;
  width: 50px; height: 50px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  color: #fff;
  text-decoration: none;
  transition: transform .2s, filter .2s;
}
.fa-btn:hover { transform: scale(1.1); }

.fa-btn--wa { background: #25D366; box-shadow: 0 4px 16px rgba(37,211,102,.35); }
.fa-btn--chat { background: #0F3C61; box-shadow: 0 4px 16px rgba(15,60,97,.35); }
.fa-btn--chat-open { background: #1565C0; }
.fa-btn--main { width: 54px; height: 54px; background: #0F3C61; box-shadow: 0 6px 24px rgba(15,60,97,.45); }
.fa-btn--main-open { background: #1e293b; }

.fa-pulse {
  position: absolute;
  inset: -4px;
  border-radius: 50%;
  border: 2px solid rgba(15,60,97,.4);
  animation: fa-pulse 2.2s ease-out infinite;
  pointer-events: none;
}
@keyframes fa-pulse {
  0% { opacity: 1; transform: scale(1); }
  70% { opacity: 0; transform: scale(1.5); }
  100% { opacity: 0; }
}

.fa-tooltip {
  position: absolute;
  right: calc(100% + 10px);
  top: 50%;
  transform: translateY(-50%);
  background: #0F3C61;
  color: #fff;
  font-size: .72rem;
  font-weight: 600;
  padding: .28rem .65rem;
  border-radius: 5px;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition: opacity .15s;
}
.fa-btn:hover .fa-tooltip { opacity: 1; }

/* Chat widget */
.fa-widget {
  width: 310px;
  background: #fff;
  border: 1px solid #e2e8f0;
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 12px 40px rgba(0,0,0,.14);
}

.fa-widget__header {
  display: flex; align-items: center; gap: .625rem;
  padding: .875rem 1rem;
  background: #0F3C61;
}

.fa-widget__av {
  width: 34px; height: 34px;
  border-radius: 50%;
  background: rgba(255,255,255,.2);
  display: flex; align-items: center; justify-content: center;
  color: #fff;
  flex-shrink: 0;
}

.fa-widget__info { flex: 1; }
.fa-widget__name { font-size: .82rem; font-weight: 700; color: #fff; margin: 0; line-height: 1.2; }
.fa-widget__status { display: flex; align-items: center; gap: 4px; font-size: .65rem; color: rgba(255,255,255,.7); margin: 2px 0 0; }
.fa-dot { width: 6px; height: 6px; border-radius: 50%; background: #4ade80; flex-shrink: 0; }
.fa-widget__close {
  background: rgba(255,255,255,.15); border: none; border-radius: 50%;
  width: 26px; height: 26px; display: flex; align-items: center; justify-content: center;
  color: #fff; cursor: pointer; transition: background .2s;
}
.fa-widget__close:hover { background: rgba(255,255,255,.28); }

.fa-widget__body {
  height: 200px;
  overflow-y: auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: .625rem;
  background: #f8f9fb;
}

.fa-msg {
  max-width: 85%;
  padding: .5rem .75rem;
  border-radius: 10px;
  font-size: .78rem;
  line-height: 1.5;
}
.fa-msg--bot { background: #fff; color: #1e293b; border: 1px solid #e2e8f0; align-self: flex-start; border-bottom-left-radius: 3px; }
.fa-msg--user { background: #0F3C61; color: #fff; align-self: flex-end; border-bottom-right-radius: 3px; }

.fa-widget__footer {
  display: flex; gap: .5rem;
  padding: .75rem;
  border-top: 1px solid #e2e8f0;
  background: #fff;
}
.fa-input {
  flex: 1;
  background: #f8f9fb;
  border: 1px solid #e2e8f0;
  border-radius: 7px;
  padding: .5rem .75rem;
  font-size: .78rem;
  color: #1e293b;
  outline: none;
  transition: border-color .2s;
}
.fa-input::placeholder { color: #94a3b8; }
.fa-input:focus { border-color: #0F3C61; }
.fa-send {
  width: 34px; height: 34px;
  border-radius: 7px;
  background: #0F3C61;
  border: none; color: #fff;
  display: flex; align-items: center; justify-content: center;
  cursor: pointer; flex-shrink: 0;
  transition: background .2s;
}
.fa-send:hover { background: #1565C0; }

/* Transitions */
.fa-pop-enter-active { transition: opacity .2s ease, transform .2s ease; }
.fa-pop-leave-active { transition: opacity .15s ease, transform .15s ease; }
.fa-pop-enter-from, .fa-pop-leave-to { opacity: 0; transform: scale(.6) translateY(8px); }
.fa-chat-enter-active { transition: opacity .22s ease, transform .22s ease; }
.fa-chat-leave-active { transition: opacity .18s ease, transform .18s ease; }
.fa-chat-enter-from, .fa-chat-leave-to { opacity: 0; transform: translateY(10px) scale(.97); }
.fa-icon-enter-active, .fa-icon-leave-active { transition: opacity .15s, transform .15s; }
.fa-icon-enter-from { opacity: 0; transform: rotate(-45deg) scale(.8); }
.fa-icon-leave-to { opacity: 0; transform: rotate(45deg) scale(.8); }

@media (max-width: 640px) {
  .fa-root { right: 1.25rem; bottom: calc(1.25rem + env(safe-area-inset-bottom, 0px)); }
  .fa-widget { width: calc(100vw - 2.5rem); max-width: 320px; }
  .fa-tooltip { display: none; }
}
</style>