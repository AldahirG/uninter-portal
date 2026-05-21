<script setup lang="ts">
import { computed } from "vue";
const route  = useRoute();
const router = useRouter();

const LABELS: Record<string, string> = {
  secundaria:                    "Secundaria",
  bachillerato:                  "Bachillerato",
  "biu-bilingue":                "BIU Bilingüe",
  LicenciaturasPresenciales:     "Licenciaturas Presenciales",
  posgrados:                     "Posgrados",
  diplomados:                    "Diplomados",
  admisiones:                    "Admisiones",
};

const crumbs = computed(() => {
  const segs = route.path.split("/").filter(Boolean);
  const list: { label: string; href: string; current: boolean }[] = [
    { label: "Portal", href: "/", current: false },
  ];
  let acc = "";
  segs.forEach((s, i) => {
    acc += "/" + s;
    list.push({ label: LABELS[s] ?? s, href: acc, current: i === segs.length - 1 });
  });
  return list;
});

const isHome = computed(() => route.path === "/");

// Parent route = one level up from current
const parentHref = computed(() => {
  const parts = route.path.split("/").filter(Boolean);
  if (parts.length <= 1) return "/";
  parts.pop();
  return "/" + parts.join("/");
});

const canGoBack = computed(() => crumbs.value.length > 2); // more than Portal > Page
</script>

<template>
  <!-- Only render on sub-pages, desktop only -->
  <nav v-if="!isHome" class="bc-bar" aria-label="Navegación de migas de pan">
    <div class="bc-inner">
      <!-- Back button -->
      <button
        v-if="canGoBack"
        class="bc-back"
        @click="router.back()"
        :title="'Volver a ' + crumbs[crumbs.length - 2].label"
      >
        <Icon name="mdi:arrow-left" size="13" />
        <span>Volver</span>
      </button>
      <div v-if="canGoBack" class="bc-sep-pipe"></div>

      <!-- Breadcrumb trail -->
      <ol class="bc-list" itemscope itemtype="https://schema.org/BreadcrumbList">
        <li
          v-for="(c, i) in crumbs"
          :key="c.href"
          class="bc-item"
          itemprop="itemListElement"
          itemscope
          itemtype="https://schema.org/ListItem"
        >
          <NuxtLink
            v-if="!c.current"
            :to="c.href"
            class="bc-link"
            itemprop="item"
          >
            <Icon v-if="i === 0" name="mdi:home-outline" size="12" class="bc-home-icon" />
            <span itemprop="name">{{ c.label }}</span>
          </NuxtLink>
          <span v-else class="bc-current" itemprop="name" aria-current="page">
            {{ c.label }}
          </span>
          <Icon
            v-if="i < crumbs.length - 1"
            name="mdi:chevron-right"
            size="12"
            class="bc-arrow"
          />
        </li>
      </ol>
    </div>
  </nav>

  <!-- Home floating button — desktop only -->
  <Teleport to="body">
    <NuxtLink
      v-if="!isHome"
      to="/"
      class="bc-home-fab"
      aria-label="Regresar al portal"
      title="Regresar al portal"
    >
      <span class="bc-home-fab__icon"><Icon name="mdi:home-variant-outline" size="22" /></span>
      <span class="bc-home-fab__label">Portal</span>
    </NuxtLink>
  </Teleport>
</template>

<style scoped>
/* ── Breadcrumb bar ── */
.bc-bar {
  position: fixed;
  top: 90px;           /* below navbar — adjust if navbar height changes */
  left: 0;
  right: 0;
  z-index: 700;
  pointer-events: none; /* clicks pass through except on interactive children */
}

.bc-inner {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(15, 26, 34, 0.72);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255,255,255,0.08);
  border-left: none;
  border-radius: 0 8px 8px 0;
  padding: 0.35rem 0.875rem 0.35rem 1rem;
  margin-left: 3.75rem; /* clear home-fab button on left */
  pointer-events: all;
  max-width: calc(100vw - 6rem);
}

/* Back button */
.bc-back {
  display: flex;
  align-items: center;
  gap: 0.3rem;
  background: none;
  border: none;
  cursor: pointer;
  color: rgba(255,255,255,0.65);
  font-size: 0.72rem;
  font-weight: 700;
  padding: 0;
  transition: color 0.2s;
  white-space: nowrap;
}
.bc-back:hover { color: #fff; }

.bc-sep-pipe {
  width: 1px;
  height: 12px;
  background: rgba(255,255,255,0.2);
  flex-shrink: 0;
}

/* Breadcrumb list */
.bc-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  gap: 0.2rem;
  flex-wrap: wrap;
}
.bc-item {
  display: flex;
  align-items: center;
  gap: 0.2rem;
}
.bc-link {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.72rem;
  color: rgba(255,255,255,0.55);
  text-decoration: none;
  transition: color 0.2s;
  font-weight: 600;
  white-space: nowrap;
}
.bc-link:hover { color: #fff; }
.bc-home-icon { flex-shrink: 0; }

.bc-current {
  font-size: 0.72rem;
  color: rgba(255,255,255,0.9);
  font-weight: 700;
  white-space: nowrap;
}
.bc-arrow { color: rgba(255,255,255,0.25); flex-shrink: 0; }

/* ── Home FAB (left) ── */
.bc-home-fab {
  position: fixed;
  left: 0;
  top: 50%;
  transform: translateY(-50%) translateX(0);
  z-index: 900;
  display: flex;
  align-items: center;
  gap: 0;
  overflow: hidden;
  width: 52px;
  height: 52px;
  border-radius: 0 12px 12px 0;
  background: #0F3C61;
  color: #fff;
  text-decoration: none;
  box-shadow: 3px 3px 14px rgba(15,60,97,0.45);
  transition:
    width 0.35s cubic-bezier(0.34, 1.56, 0.64, 1),
    box-shadow 0.25s ease;
}
.bc-home-fab:hover {
  width: 130px;
  box-shadow: 4px 4px 20px rgba(15,60,97,0.55);
}

.bc-home-fab__icon {
  flex-shrink: 0;
  width: 52px;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.bc-home-fab:hover .bc-home-fab__icon { transform: scale(1.2) rotate(-5deg); }

.bc-home-fab__label {
  font-size: 0.78rem;
  font-weight: 800;
  color: #fff;
  white-space: nowrap;
  padding-right: 1rem;
  opacity: 0;
  transform: translateX(-6px);
  transition: opacity 0.2s 0.1s, transform 0.25s 0.05s;
  letter-spacing: 0.04em;
}
.bc-home-fab:hover .bc-home-fab__label { opacity: 1; transform: translateX(0); }

/* ── Hide everything on mobile ── */
@media (max-width: 767px) {
  .bc-bar      { display: none; }
  .bc-home-fab { display: none; }
}
</style>
