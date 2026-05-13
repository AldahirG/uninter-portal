<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue"
import { Menu, X, ChevronDown, Phone, Mail } from "lucide-vue-next"

const mobileOpen = ref(false)
const activeDropdown = ref<string | null>(null)
const scrolled = ref(false)

const handleScroll = () => { scrolled.value = window.scrollY > 10 }
onMounted(() => window.addEventListener("scroll", handleScroll))
onUnmounted(() => window.removeEventListener("scroll", handleScroll))

interface Child { label: string; href: string }
interface Program { label: string; slug: string; color: string; href: string; children: Child[] }

const programs: Program[] = [
  { label: "Universidad",          slug: "universidad",          color: "#1565C0", href: "https://universidad.uninter.edu.mx/",                          children: [{ label: "Licenciaturas Presenciales", href: "https://universidad.uninter.edu.mx/" }, { label: "Licenciaturas Ejecutivas", href: "https://universidad.uninter.edu.mx/ejecutivas" }, { label: "Folletos", href: "https://universidad.uninter.edu.mx/Folletos-Digitales" }, { label: "Admisiones", href: "https://universidad.uninter.edu.mx/Admisiones" }, { label: "Test Vocacional", href: "https://universidad.uninter.edu.mx/test-vocacional" }, { label: "Calcula tu Beca", href: "https://universidad.uninter.edu.mx/Calcula-Tu-Beca" }] },
  { label: "Bachillerato",         slug: "bachillerato",         color: "#2E7D32", href: "https://biu.uninter.edu.mx/",                                  children: [{ label: "Sitio Web", href: "https://biu.uninter.edu.mx/" }, { label: "Folleto", href: "https://biu.uninter.edu.mx/" }] },
  { label: "Secundaria",           slug: "secundaria",           color: "#E65100", href: "https://siu.uninter.edu.mx/",                                  children: [{ label: "Sitio Web", href: "https://siu.uninter.edu.mx/" }, { label: "Folleto", href: "https://uninter.edu.mx/folletos/revistas/siurevista/" }] },
  { label: "Posgrados",            slug: "posgrados",            color: "#546E7A", href: "https://posgrados.uninter.edu.mx/",                            children: [{ label: "Sitio Web", href: "https://posgrados.uninter.edu.mx/" }, { label: "Admisiones", href: "https://posgrados.uninter.edu.mx/Admisiones" }] },
  { label: "Diplomados",           slug: "diplomados",           color: "#6D4C41", href: "https://diplomados.uninter.edu.mx/",                           children: [{ label: "Sitio Web", href: "https://diplomados.uninter.edu.mx/" }, { label: "Folletos", href: "https://diplomados.uninter.edu.mx/folletos-Digitales" }, { label: "Admisiones", href: "https://diplomados.uninter.edu.mx/admisiones" }] },
  { label: "Spanish School",       slug: "spanish-school",       color: "#BF360C", href: "https://spanishschool.uninter.edu.mx/",                        children: [{ label: "Sitio Web", href: "https://spanishschool.uninter.edu.mx/" }, { label: "Admissions", href: "https://spanishschool.uninter.edu.mx/Home" }] },
  { label: "Verano Kids",          slug: "verano-kids",          color: "#6A1B9A", href: "https://kids.uninter.edu.mx/",                                 children: [{ label: "Spanish", href: "https://kids.uninter.edu.mx/" }, { label: "English", href: "https://spanishschool.uninter.edu.mx/Kids-Program" }] },
  { label: "Prepa Abierta",        slug: "prepa-abierta",        color: "#00695C", href: "https://uninter.edu.mx/prep-a/",                               children: [] },
  { label: "Eventos",              slug: "eventos",              color: "#1A237E", href: "https://uninter.edu.mx/sesiones-informativas/",                 children: [{ label: "Sesiones Informativas", href: "https://uninter.edu.mx/sesiones-informativas/" }, { label: "Eventos", href: "https://uninter.edu.mx/eventos/" }, { label: "On Demand", href: "https://uninter.edu.mx/ondemand/" }, { label: "Calendario Cultural", href: "https://uninter.edu.mx/difusion-cultural/" }] },
  { label: "Internacionalización", slug: "internacionalizacion", color: "#C62828", href: "https://universidad.uninter.edu.mx/Internacionalizaci%C3%B3n", children: [] },
  { label: "Centro de Idiomas",    slug: "centro-idiomas",       color: "#0277BD", href: "https://uninter.edu.mx/centroidiomas/",                        children: [] },
]

const leftPrograms  = programs.slice(0, 5)
const rightPrograms = programs.slice(5)

const social = [
  { icon: "mdi:facebook",  href: "https://www.facebook.com/uninteredu" },
  { icon: "mdi:instagram", href: "https://www.instagram.com/uninter_cuerna" },
  { icon: "mdi:youtube",   href: "https://www.youtube.com/user/UniversidadUninter" },
  { icon: "mdi:linkedin",  href: "https://www.linkedin.com/in/egresados-uninter/" },
  { icon: "mdi:tiktok",    href: "https://www.tiktok.com/@uninter_cuerna" },
]
</script>

<template>
  <header class="nh" :class="{ 'nh--scrolled': scrolled }">

    <div class="nh-top">
      <div class="nh-c nh-top__inner">
        <div class="nh-top__left">
          <a href="tel:7773579000" class="nh-tl"><Phone :size="11" /><span>777 357 9000</span></a>
          <a href="tel:7773579001" class="nh-tl nh-tl--hide"><Phone :size="11" /><span>777 357 9001</span></a>
          <a href="/cdn-cgi/l/email-protection#eb8884859f8a889f84ab9e8582859f8e99c58e8f9ec58693" class="nh-tl nh-tl--hidesm"><Mail :size="11" /><span><span class="__cf_email__" data-cfemail="3d5e5253495c5e49527d4853545349584f13585948135045">[email&#160;protected]</span></span></a>
        </div>
        <div class="nh-top__right">
          <div class="nh-socials">
            <a v-for="s in social" :key="s.icon" :href="s.href" target="_blank" class="nh-soc">
              <Icon :name="s.icon" size="13" />
            </a>
          </div>
          <a href="https://universidad.uninter.edu.mx/Calcula-Tu-Beca" target="_blank" class="nh-beca">
            Calcula tu Beca
          </a>
        </div>
      </div>
    </div>

    <div class="nh-prog-bar">
      <div class="nh-c nh-prog-bar__inner">

        <ul class="nh-plist nh-plist--left">
          <li v-for="prog in leftPrograms" :key="prog.slug" class="nh-pitem"
              @mouseenter="prog.children.length ? activeDropdown = prog.slug : null"
              @mouseleave="activeDropdown = null">
            <a v-if="!prog.children.length" :href="prog.href" target="_blank"
               class="nh-pbtn" :style="`background:${prog.color}`">{{ prog.label }}</a>
            <button v-else class="nh-pbtn" :style="`background:${prog.color}`">
              {{ prog.label }}
              <ChevronDown :size="9" class="nh-chev" :class="{ 'nh-chev--open': activeDropdown === prog.slug }" />
            </button>
            <Transition name="nh-dd">
              <div v-if="prog.children.length && activeDropdown === prog.slug" class="nh-dropdown">
                <div class="nh-dd__bar" :style="`background:${prog.color}`"></div>
                <a :href="prog.href" target="_blank" class="nh-dd__head">
                  <span class="nh-dd__dot" :style="`background:${prog.color}`"></span>
                  {{ prog.label }}
                  <Icon name="mdi:open-in-new" size="10" class="nh-dd__ext" />
                </a>
                <div class="nh-dd__sep"></div>
                <ul class="nh-dd__list">
                  <li v-for="c in prog.children" :key="c.label">
                    <a :href="c.href" target="_blank" class="nh-dd__link">{{ c.label }}</a>
                  </li>
                </ul>
              </div>
            </Transition>
          </li>
        </ul>

        <div class="nh-medallion-spacer" aria-hidden="true"></div>

        <ul class="nh-plist nh-plist--right">
          <li v-for="prog in rightPrograms" :key="prog.slug" class="nh-pitem"
              @mouseenter="prog.children.length ? activeDropdown = prog.slug : null"
              @mouseleave="activeDropdown = null">
            <a v-if="!prog.children.length" :href="prog.href" target="_blank"
               class="nh-pbtn" :style="`background:${prog.color}`">{{ prog.label }}</a>
            <button v-else class="nh-pbtn" :style="`background:${prog.color}`">
              {{ prog.label }}
              <ChevronDown :size="9" class="nh-chev" :class="{ 'nh-chev--open': activeDropdown === prog.slug }" />
            </button>
            <Transition name="nh-dd">
              <div v-if="prog.children.length && activeDropdown === prog.slug" class="nh-dropdown">
                <div class="nh-dd__bar" :style="`background:${prog.color}`"></div>
                <a :href="prog.href" target="_blank" class="nh-dd__head">
                  <span class="nh-dd__dot" :style="`background:${prog.color}`"></span>
                  {{ prog.label }}
                  <Icon name="mdi:open-in-new" size="10" class="nh-dd__ext" />
                </a>
                <div class="nh-dd__sep"></div>
                <ul class="nh-dd__list">
                  <li v-for="c in prog.children" :key="c.label">
                    <a :href="c.href" target="_blank" class="nh-dd__link">{{ c.label }}</a>
                  </li>
                </ul>
              </div>
            </Transition>
          </li>
        </ul>

        <a href="https://universidad.uninter.edu.mx/Calcula-Tu-Beca" target="_blank" class="nh-beca nh-beca--mobile">
          Calcula tu Beca
        </a>
        <button class="nh-hamburger" @click="mobileOpen = !mobileOpen" aria-label="Menú">
          <X v-if="mobileOpen" :size="20" />
          <Menu v-else :size="20" />
        </button>

      </div>
    </div>

    <NuxtLink to="/" class="nh-medallion">
      <div class="nh-medallion__shell">
        <img src="/images/logo-uninter.png" alt="UNINTER" class="nh-medallion__logo" />
        <span class="nh-medallion__name">UNINTER</span>
      </div>
    </NuxtLink>

    <Transition name="nh-mob">
      <div v-if="mobileOpen" class="nh-mobile">
        <div class="nh-mobile__ctas">
          <a href="https://universidad.uninter.edu.mx/Calcula-Tu-Beca" target="_blank"
             class="nh-mcta nh-mcta--out" @click="mobileOpen=false">Calcula tu Beca</a>
          <a href="https://universidad.uninter.edu.mx/Admisiones" target="_blank"
             class="nh-mcta nh-mcta--solid" @click="mobileOpen=false">Admisiones</a>
        </div>
        <div v-for="prog in programs" :key="prog.slug" class="nh-mobile__section">
          <a v-if="!prog.children.length" :href="prog.href" target="_blank"
             class="nh-mobile__direct" @click="mobileOpen=false">
            <span class="nh-mbadge" :style="`background:${prog.color}`">{{ prog.label }}</span>
            <Icon name="mdi:open-in-new" size="12" class="nh-mobile__ext" />
          </a>
          <template v-else>
            <button class="nh-mobile__trigger"
                    @click="activeDropdown = activeDropdown===prog.slug ? null : prog.slug">
              <span class="nh-mbadge" :style="`background:${prog.color}`">{{ prog.label }}</span>
              <ChevronDown :size="13" class="nh-chev nh-chev--r"
                           :class="{ 'nh-chev--open': activeDropdown===prog.slug }" />
            </button>
            <Transition name="nh-acc">
              <ul v-if="activeDropdown===prog.slug" class="nh-mobile__children">
                <li v-for="c in prog.children" :key="c.label">
                  <a :href="c.href" target="_blank" class="nh-mobile__link" @click="mobileOpen=false">{{ c.label }}</a>
                </li>
              </ul>
            </Transition>
          </template>
        </div>
        <div class="nh-mobile__social">
          <a v-for="s in social" :key="s.icon" :href="s.href" target="_blank" class="nh-mobile__soc">
            <Icon :name="s.icon" size="17" />
          </a>
        </div>
      </div>
    </Transition>

  </header>
</template>

<style scoped>
.nh {
  --p:      #0F3C61;
  --pl:     #1565C0;
  --bd:     #e2e8f0;
  --txt:    #1e293b;
  --mut:    #64748b;
  --top-h:  34px;
  --prog-h: 48px;
  --med-w:  148px;
  position: sticky; top: 0; z-index: 100; width: 100%;
  isolation: isolate; transition: box-shadow .3s;
}
.nh--scrolled { box-shadow: 0 3px 20px rgba(0,0,0,.15); }
.nh-c { max-width: 1280px; margin: 0 auto; padding: 0 1.5rem; }

.nh-top { background: var(--p); height: var(--top-h); position: relative; z-index: 2; }
.nh-top__inner { display: flex; align-items: center; justify-content: space-between; height: 100%; }
.nh-top__left { display: flex; align-items: center; gap: 1.25rem; }
.nh-tl { display: flex; align-items: center; gap: 4px; font-size: .68rem; color: rgba(255,255,255,.75); text-decoration: none; transition: color .2s; }
.nh-tl:hover { color: #fff; }
.nh-top__right { display: flex; align-items: center; gap: .75rem; }
.nh-socials { display: flex; gap: 4px; }
.nh-soc { width: 24px; height: 24px; display: flex; align-items: center; justify-content: center; border-radius: 4px; color: rgba(255,255,255,.65); text-decoration: none; transition: color .2s, background .2s; }
.nh-soc:hover { color: #fff; background: rgba(255,255,255,.12); }
.nh-beca { font-size: .7rem; font-weight: 700; color: #fff; background: rgba(255,255,255,.15); border: 1px solid rgba(255,255,255,.3); padding: .22rem .8rem; border-radius: 3px; text-decoration: none; transition: background .2s; white-space: nowrap; }
.nh-beca:hover { background: rgba(255,255,255,.26); }

.nh-prog-bar { background: #fff; border-bottom: 1px solid var(--bd); height: var(--prog-h); position: relative; overflow: visible; z-index: 10; }
.nh-prog-bar__inner { display: flex; align-items: stretch; height: 100%; position: relative; }
.nh-medallion-spacer { flex-shrink: 0; width: var(--med-w); }
.nh-plist { display: flex; align-items: stretch; list-style: none; margin: 0; padding: 0; flex: 1; min-width: 0; }
.nh-plist--left  { justify-content: flex-end; }
.nh-plist--right { justify-content: flex-start; }
.nh-pitem { position: relative; display: flex; align-items: stretch; }
.nh-pbtn { display: flex; align-items: center; gap: 4px; height: 100%; padding: 0 .7rem; font-size: .65rem; font-weight: 700; letter-spacing: .05em; text-transform: uppercase; color: #fff; border: none; cursor: pointer; white-space: nowrap; text-decoration: none; transition: filter .15s; }
.nh-pbtn:hover { filter: brightness(1.18); }
.nh-chev { transition: transform .2s; opacity: .8; flex-shrink: 0; }
.nh-chev--open { transform: rotate(180deg); }
.nh-chev--r { margin-left: auto; }

.nh-medallion { position: absolute; left: 50%; transform: translateX(-50%); top: 0; z-index: 200; text-decoration: none; display: block; width: var(--med-w); }
.nh-medallion__shell { width: 100%; display: flex; flex-direction: column; align-items: center; border-radius: 0 0 46% 46% / 0 0 22% 22%; border: 2px solid #c8d8eb; box-shadow: 0 6px 28px rgba(0,0,0,.22), inset 0 1px 0 rgba(255,255,255,.6); background: #ffffff; padding-top: 6px; padding-bottom: 12px; transition: box-shadow .25s, transform .25s; }
.nh-medallion:hover .nh-medallion__shell { box-shadow: 0 10px 36px rgba(15,60,97,.32); transform: translateY(-2px); }
.nh-medallion__logo { width: 96px; height: 96px; object-fit: contain; display: block; filter: drop-shadow(0 2px 6px rgba(0,0,0,.3)); transition: transform .25s; }
.nh-medallion:hover .nh-medallion__logo { transform: scale(1.04); }
.nh-medallion__name { display: block; font-size: .82rem; font-weight: 800; color: #0F3C61; letter-spacing: .16em; font-family: Georgia, var(--font-serif, serif); margin-top: 2px; line-height: 1; padding-bottom: 2px; }

.nh-dropdown { position: absolute; top: 100%; left: 50%; transform: translateX(-50%); min-width: 215px; background: #fff; border: 1px solid var(--bd); border-radius: 8px; overflow: hidden; box-shadow: 0 12px 36px rgba(0,0,0,.13); z-index: 200; }
.nh-dd__bar { height: 3px; }
.nh-dd__head { display: flex; align-items: center; gap: 7px; padding: .6rem 1rem .35rem; font-size: .68rem; font-weight: 800; letter-spacing: .08em; text-transform: uppercase; color: var(--txt); text-decoration: none; transition: background .15s; }
.nh-dd__head:hover { background: #f8fafc; }
.nh-dd__dot { width: 7px; height: 7px; border-radius: 50%; flex-shrink: 0; }
.nh-dd__ext { margin-left: auto; opacity: .4; }
.nh-dd__sep { height: 1px; background: var(--bd); margin: 0 1rem .375rem; }
.nh-dd__list { list-style: none; padding: 0 0 .5rem; margin: 0; }
.nh-dd__link { display: flex; align-items: center; padding: .42rem 1rem; font-size: .8rem; color: var(--mut); text-decoration: none; transition: background .15s, color .15s; }
.nh-dd__link:hover { background: #f8fafc; color: var(--txt); }
.nh-dd-enter-active, .nh-dd-leave-active { transition: opacity .14s ease, transform .14s ease; }
.nh-dd-enter-from, .nh-dd-leave-to { opacity: 0; transform: translateX(-50%) translateY(-6px); }

.nh-hamburger { display: none; align-items: center; justify-content: center; width: 36px; height: 36px; background: transparent; border: 1.5px solid var(--bd); border-radius: 5px; color: var(--txt); cursor: pointer; margin: auto 0 auto auto; flex-shrink: 0; }

.nh-mobile { background: #fff; border-bottom: 1px solid var(--bd); max-height: calc(100dvh - 74px); overflow-y: auto; -webkit-overflow-scrolling: touch; }
.nh-mobile__ctas { display: flex; gap: .625rem; padding: .875rem 1.25rem; border-bottom: 1px solid var(--bd); }
.nh-mcta { flex: 1; display: flex; align-items: center; justify-content: center; font-size: .82rem; font-weight: 700; border-radius: 5px; padding: .55rem 1rem; text-decoration: none; transition: all .2s; border: none; cursor: pointer; }
.nh-mcta--out   { color: var(--p); border: 1.5px solid var(--p); background: transparent; }
.nh-mcta--out:hover  { background: var(--p); color: #fff; }
.nh-mcta--solid { background: var(--p); color: #fff; }
.nh-mcta--solid:hover { background: var(--pl); }
.nh-mobile__section { border-bottom: 1px solid var(--bd); }
.nh-mobile__direct { display: flex; align-items: center; gap: .625rem; padding: .62rem 1.25rem; text-decoration: none; }
.nh-mobile__trigger { display: flex; align-items: center; gap: .625rem; width: 100%; padding: .62rem 1.25rem; background: transparent; border: none; cursor: pointer; }
.nh-mobile__ext { margin-left: auto; color: var(--mut); opacity: .5; }
.nh-mbadge { display: inline-block; padding: .2rem .6rem; border-radius: 4px; font-size: .68rem; font-weight: 700; color: #fff; }
.nh-mobile__children { list-style: none; margin: 0; padding: 0; background: #f8f9fb; }
.nh-mobile__link { display: block; padding: .48rem 1.25rem .48rem 2.5rem; font-size: .78rem; color: var(--mut); text-decoration: none; transition: color .15s; }
.nh-mobile__link:hover { color: var(--txt); }
.nh-mobile__social { display: flex; justify-content: center; gap: .875rem; padding: 1rem 1.25rem; border-top: 1px solid var(--bd); }
.nh-mobile__soc { width: 34px; height: 34px; display: flex; align-items: center; justify-content: center; border-radius: 7px; background: #f0f4f8; color: var(--p); text-decoration: none; transition: background .2s; }
.nh-mobile__soc:hover { background: var(--p); color: #fff; }
.nh-mob-enter-active, .nh-mob-leave-active { transition: opacity .2s ease, transform .2s ease; }
.nh-mob-enter-from, .nh-mob-leave-to { opacity: 0; transform: translateY(-8px); }
.nh-acc-enter-active, .nh-acc-leave-active { transition: max-height .24s ease, opacity .2s ease; max-height: 300px; overflow: hidden; }
.nh-acc-enter-from, .nh-acc-leave-to { max-height: 0; opacity: 0; }

/* ── RESPONSIVE ──────────────────────────────────────────── */
@media (max-width: 1100px) {
  .nh-pbtn { padding: 0 .5rem; font-size: .6rem; }
  .nh { --med-w: 132px; }
  .nh-medallion__logo { width: 84px; height: 84px; }
}

/* Botón beca mobile: oculto por default, solo visible en mobile */
.nh-beca--mobile { display: none; }

@media (max-width: 860px) {
  .nh-plist { display: none; }
  .nh-hamburger { display: flex; }
  .nh-medallion-spacer { display: none; }

  /* Barra se vuelve azul como el topbar */
  .nh-prog-bar {
    background: var(--p);
    border-bottom: none;
    height: 56px;
  }
  .nh-prog-bar__inner {
    justify-content: space-between;
    align-items: center;
    padding: 0 1.25rem;
    position: relative;
  }

  /* Ocultar beca del topbar en mobile, mostrar la de la barra */
  .nh-top .nh-beca { display: none; }
  .nh-beca--mobile {
    display: inline-flex;
    font-size: .7rem;
    font-weight: 700;
    color: #fff;
    background: rgba(255,255,255,.15);
    border: 1px solid rgba(255,255,255,.3);
    padding: .22rem .75rem;
    border-radius: 3px;
    text-decoration: none;
    white-space: nowrap;
    transition: background .2s;
    position: relative;
    z-index: 2;
  }
  .nh-beca--mobile:hover { background: rgba(255,255,255,.26); }

  /* Hamburger: blanco sobre azul, a la derecha */
  .nh-hamburger {
    border-color: rgba(255,255,255,.3);
    color: #fff;
    position: relative;
    z-index: 2;
    margin: 0;
  }
  .nh-hamburger:hover { background: rgba(255,255,255,.1); }

  /* Medallón: centrado absolute, idéntico al desktop */
  .nh-medallion {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 0;
    width: var(--med-w);
    z-index: 1;
  }
  .nh-medallion__shell {
    flex-direction: column;
    align-items: center;
    padding-top: 6px;
    padding-bottom: 12px;
    border-radius: 0 0 46% 46% / 0 0 22% 22%;
    border: 2px solid #c8d8eb;
    background: #fff;
    box-shadow: 0 6px 28px rgba(0,0,0,.22), inset 0 1px 0 rgba(255,255,255,.6);
    transform: none;
  }
  .nh-medallion:hover .nh-medallion__shell {
    box-shadow: 0 10px 36px rgba(15,60,97,.32);
    transform: translateY(-2px);
  }
  .nh-medallion__logo { width: 64px; height: 64px; filter: drop-shadow(0 2px 6px rgba(0,0,0,.3)); }
  .nh-medallion__name { font-size: .72rem; font-weight: 800; color: #0F3C61; letter-spacing: .16em; margin-top: 2px; padding-bottom: 2px; }
}

@media (max-width: 640px) {
  .nh-tl--hide   { display: none; }
  .nh-tl--hidesm { display: none; }
  .nh-socials    { display: none; }
  .nh-prog-bar   { height: 50px; }
  .nh-medallion  { width: 110px; }
  .nh-medallion__logo { width: 52px; height: 52px; }
  .nh-medallion__name { font-size: .62rem; }
  .nh-beca--mobile { font-size: .65rem; padding: .2rem .6rem; }
}

@media (max-width: 380px) {
  .nh-tl { display: none; }
  .nh-medallion { width: 96px; }
  .nh-medallion__logo { width: 44px; height: 44px; }
  .nh-medallion__name { font-size: .56rem; }
  .nh-beca--mobile { font-size: .6rem; padding: .18rem .5rem; }
}

</style>