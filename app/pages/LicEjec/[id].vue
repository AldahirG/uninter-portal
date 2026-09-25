<template>
  <div class="career-executive-page">
    <NavbarIndex />

    <!-- Estado de Carrera No Encontrada -->
    <div v-if="!careerData" class="not-found-container">
      <div class="not-found-card">
        <span class="not-found-badge">404</span>
        <h2>Licenciatura Ejecutiva no encontrada</h2>
        <p>
          No encontramos el programa educativo que estás buscando. Te invitamos
          a conocer toda nuestra oferta ejecutiva con validez oficial SEP.
        </p>
        <NuxtLink to="/licenciaturasEjecutivas" class="btn-return">
          Ver Licenciaturas Ejecutivas
        </NuxtLink>
      </div>
    </div>

    <!-- Contenido Principal de la Licenciatura Ejecutiva -->
    <main v-else class="career-content">
      <!-- 1. HERO BANNER EXACTO AL ESTILO POSGRADOS / ESPECIALIDADES -->
      <div class="degree-hero-wrapper">
        <section class="degree-hero">
          <!-- FONDO RESPONSIVO -->
          <div class="degree-hero__bg">
            <picture class="degree-hero__picture">
              <source media="(max-width: 768px)" :srcset="heroImages.v" />
              <img
                :src="heroImages.h"
                :alt="careerData.name"
                class="degree-hero__img"
              />
            </picture>

            <div class="degree-hero__overlay"></div>
            <div class="degree-hero__overlay2"></div>
          </div>

          <!-- CONTENIDO DEL HERO -->
          <div class="degree-container degree-hero__content">
            <div class="degree-hero__inner">
              <!-- Eyebrow -->
              <p class="degree-hero__eyebrow">LICENCIATURA EJECUTIVA EN</p>

              <!-- Título principal -->
              <h1
                class="degree-hero__title"
                :class="{ 'long-title': careerData.shortName.length > 20 }"
              >
                {{ careerData.shortName }}
              </h1>

              <!-- Descripción -->
              <p class="degree-hero__desc">
                {{ careerData.descripcion }}
              </p>

              <!-- Botones de acción tipo tarjeta -->
              <div class="degree-hero__ctas">
                <a
                  href="#descripcion"
                  class="degree-btn-card"
                  @click.prevent="scrollToSection('descripcion')"
                >
                  <div class="btn-icon">
                    <Info :size="24" />
                  </div>
                  <span>Más Información</span>
                </a>
                <a
                  href="#plan-estudios"
                  class="degree-btn-card"
                  @click.prevent="scrollToSection('plan-estudios')"
                >
                  <div class="btn-icon">
                    <FileText :size="24" />
                  </div>
                  <span>Ver Plan de estudio</span>
                </a>
                <a
                  href="#admision"
                  class="degree-btn-card"
                  @click.prevent="scrollToSection('admision')"
                >
                  <div class="btn-icon">
                    <Phone :size="24" />
                  </div>
                  <span>Contacta un asesor</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        <!-- BARRA DE CARACTERÍSTICAS (LIQUID GLASS DE 5 COLUMNAS) -->
        <div class="degree-hero__stats-bar">
          <div class="degree-container degree-hero__stats-inner">
            <div class="degree-stat">
              <div class="degree-stat__icon">
                <Clock :size="26" />
              </div>
              <div class="degree-stat__text">
                <span class="degree-stat__value">{{
                  careerData.duracion || "9 Cuatrimestres"
                }}</span>
                <span class="degree-stat__label">DURACIÓN</span>
              </div>
            </div>

            <div class="degree-stat">
              <div class="degree-stat__icon">
                <Users :size="26" />
              </div>
              <div class="degree-stat__text">
                <span class="degree-stat__value">{{
                  careerData.modalidad?.includes("Mixta")
                    ? "Híbrido"
                    : "Híbrido"
                }}</span>
                <span class="degree-stat__label">FORMATO</span>
              </div>
            </div>

            <div class="degree-stat">
              <div class="degree-stat__icon">
                <MapPin :size="26" />
              </div>
              <div class="degree-stat__text">
                <span class="degree-stat__value">Cuernavaca</span>
                <span class="degree-stat__label">UBICACIÓN</span>
              </div>
            </div>

            <div class="degree-stat">
              <div class="degree-stat__icon">
                <Globe :size="26" />
              </div>
              <div class="degree-stat__text">
                <span class="degree-stat__value">Inglés / Francés</span>
                <span class="degree-stat__label">IDIOMA</span>
              </div>
            </div>

            <div class="degree-stat">
              <div class="degree-stat__icon">
                <ShieldCheck :size="26" />
              </div>
              <div class="degree-stat__text">
                <span class="degree-stat__value">SEP RVOE</span>
                <span class="degree-stat__label">VALIDEZ</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 1. DESCRIPCIÓN & VALOR AGREGADO EJECUTIVO -->
      <section id="descripcion" class="exec-section section-overview">
        <div class="uninter-container">
          <div class="overview-grid">
            <!-- Columna Izquierda: Introducción y Título -->
            <div class="overview-main">
              <span class="section-eyebrow"
                >FORMACIÓN PROFESIONAL DE ALTO NIVEL</span
              >
              <h2 class="section-title">
                Impulsa tu trayectoria con la<br />
                <em>Licenciatura Ejecutiva en {{ careerData.shortName }}</em>
              </h2>
              <p class="overview-lead-paragraph">
                {{ careerData.descripcion }}
              </p>
            </div>

            <!-- Columna Derecha: Cuadros con Características (en el lugar de la Ficha Técnica) -->
            <div class="overview-features">
              <div class="exec-pillars-grid">
                <div class="pillar-card">
                  <div class="pillar-icon">
                    <Clock :size="24" />
                  </div>
                  <h3>Flexibilidad Horaria</h3>
                  <p>
                    Modalidad mixta diseñada para quienes trabajan: actividades
                    en plataforma virtual y sesiones ejecutivas presenciales
                    sabatinas.
                  </p>
                </div>

                <div class="pillar-card">
                  <div class="pillar-icon">
                    <Award :size="24" />
                  </div>
                  <h3>Certificaciones Modulares</h3>
                  <p>
                    Adquiere diplomas curriculares conforme avanzas en tu
                    carrera para respaldar tu CV antes de graduarte.
                  </p>
                </div>

                <div class="pillar-card">
                  <div class="pillar-icon">
                    <Users :size="24" />
                  </div>
                  <h3>Networking Directivo</h3>
                  <p>
                    Comparte experiencia y desarrolla relaciones profesionales
                    con profesionistas y directores de distintas industrias.
                  </p>
                </div>

                <div class="pillar-card">
                  <div class="pillar-icon">
                    <TrendingUp :size="24" />
                  </div>
                  <h3>Titulación Acelerada</h3>
                  <p>
                    Seminario terminal y modalidades ágiles de titulación
                    avaladas ante la Secretaría de Educación Pública.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 2. PERFILES: INGRESO Y EGRESO -->
      <section id="perfiles" class="exec-section section-profiles">
        <div class="uninter-container">
          <div class="section-header text-center">
            <span class="section-eyebrow">COMPETENCIAS & VOCACIÓN</span>
            <h2 class="section-title">Perfiles de <em>Ingreso y Egreso</em></h2>
            <p class="section-subtitle">
              Conoce las cualidades con las que comienzas tu camino y las
              competencias profesionales con las que egresarás.
            </p>
          </div>

          <!-- Cards Simples de Perfiles -->
          <div class="profiles-simple-grid">
            <!-- Perfil de Ingreso -->
            <div class="profile-simple-card">
              <div class="profile-card-header">
                <div class="profile-card-icon">
                  <Target :size="24" />
                </div>
                <h3 class="profile-card-title">Perfil de <em>Ingreso</em></h3>
              </div>
              <p class="profile-card-text">
                {{ careerData.perfilIngreso?.general }}
              </p>
            </div>

            <!-- Perfil de Egreso -->
            <div class="profile-simple-card">
              <div class="profile-card-header">
                <div class="profile-card-icon">
                  <Award :size="24" />
                </div>
                <h3 class="profile-card-title">Perfil de <em>Egreso</em></h3>
              </div>
              <p class="profile-card-text">
                {{ careerData.perfilEgreso?.general }}
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- 3. MERCADO LABORAL -->
      <section id="mercado-laboral" class="exec-section section-jobmarket">
        <div class="uninter-container">
          <div class="jobmarket-intro">
            <div class="jobmarket-text">
              <span class="section-eyebrow">INSERCIÓN PROFESIONAL</span>
              <h2 class="section-title">Mercado y Campo <em>Laboral</em></h2>
              <p class="jobmarket-desc">
                {{ careerData.mercadoLaboral?.descripcion }}
              </p>
            </div>
          </div>

          <!-- Grid de Sectores y Roles -->
          <div class="job-sectors-grid">
            <div
              v-for="(sector, idx) in careerData.mercadoLaboral?.sectores || []"
              :key="idx"
              class="job-sector-card"
            >
              <div class="sector-badge-number">
                <span>0{{ idx + 1 }}</span>
              </div>
              <div class="sector-content">
                <Briefcase :size="20" class="sector-icon" />
                <h4 class="sector-title">{{ sector }}</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 4. PLAN DE ESTUDIOS -->
      <section id="plan-estudios" class="exec-section section-syllabus">
        <div class="uninter-container">
          <div class="section-header text-center">
            <span class="section-eyebrow">MALLA CURRICULAR ACTUALIZADA</span>
            <h2 class="section-title">Plan de <em>Estudios</em></h2>
            <p class="section-subtitle">
              Programa modular con ciclo cuatrimestral de 16 semanas. Optimizado
              para consolidar tus competencias profesionales en menor tiempo con
              validez oficial SEP.
            </p>
            <div class="syllabus-summary-pills">
              <span class="summary-pill">
                <Calendar :size="14" /> {{ countTerms }} Cuatrimestres
              </span>
              <span class="summary-pill" v-if="careerData.creditos">
                <Award :size="14" /> {{ careerData.creditos }} Créditos Totales
              </span>
              <span class="summary-pill" v-if="careerData.horasDocente">
                <Clock :size="14" /> {{ careerData.horasDocente }} hrs con
                Docente
              </span>
              <span class="summary-pill" v-if="careerData.horasIndependientes">
                <Clock :size="14" /> {{ careerData.horasIndependientes }} hrs
                Independientes
              </span>
            </div>
          </div>

          <!-- LAYOUT INTERACTIVO ESTILO LICENCIATURAS -->
          <div class="syllabus-layout">
            <!-- Barra Lateral con Cuatrimestres Pareados -->
            <div class="syllabus-sidebar">
              <div class="tabs-wrapper mobile-scroll">
                <button
                  v-for="(pair, index) in cuatrimestrePairs"
                  :key="pair.id"
                  class="tab-btn"
                  :class="{ 'is-active': activeSyllabusTab === index }"
                  @click="activeSyllabusTab = index"
                >
                  <div class="tab-content">
                    <span class="tab-number">0{{ index + 1 }}</span>
                    <span class="tab-label">{{ pair.tabLabel }}</span>
                  </div>
                  <ChevronRight :size="18" class="tab-arrow" />
                </button>
              </div>

              <!-- Tarjeta de Autoridad Ejecutiva -->
              <div class="sidebar-info-card dark-authority-card">
                <div class="icon-glow">
                  <GraduationCap :size="26" class="info-icon-gold" />
                </div>
                <h4>Titulación Ágil & RVOE SEP</h4>
                <p>
                  Programa modular cuatrimestral avalado ante la SEP. Múltiples opciones de titulación ejecutiva al concluir el 100% de tus créditos.
                </p>
              </div>
            </div>

            <!-- Contenedor Principal de Materias -->
            <div class="syllabus-content">
              <!-- Filtros de Áreas de Interés -->
              <div class="syllabus-filters-wrapper">
                <span class="filter-title">Visualizar por tu área de interés:</span>
                <div class="filter-chips">
                  <button
                    v-for="cat in careerCategories"
                    :key="cat.value"
                    class="filter-chip"
                    :class="{
                      'is-active': selectedSyllabusCategory === cat.value,
                      [cat.value]: true,
                    }"
                    @click="selectedSyllabusCategory = cat.value"
                  >
                    {{ cat.label }}
                  </button>
                </div>
              </div>

              <!-- Transición de Cuatrimestres Seleccionados -->
              <Transition name="slide-fade" mode="out-in">
                <div
                  :key="activeSyllabusTab"
                  class="content-blocks-wrapper"
                  :class="{ 'single-block-layout': activeTabBlocks.length === 1 }"
                >
                  <div
                    v-for="(block, bIndex) in activeTabBlocks"
                    :key="'block-' + bIndex"
                    class="cuatrimestre-block"
                  >
                    <div class="cuatrimestre-header">
                      <h3>{{ block.title }}</h3>
                      <span class="subject-count"
                        >{{ block.subjects.length }} Materias</span
                      >
                    </div>

                    <ul class="subjects-list">
                      <li
                        v-for="(subject, sIndex) in block.subjects"
                        :key="'subj-' + sIndex"
                        class="subject-item interactive-lift"
                        :class="{
                          'is-dimmed': isSubjectDimmed(subject),
                          'is-highlighted': isSubjectHighlighted(subject),
                          [subject.tag]: true,
                        }"
                      >
                        <div
                          class="subject-tag-dot"
                          :class="subject.tag"
                        ></div>
                        <BookText :size="18" class="subject-icon" />
                        <span class="subject-name">{{ subject.name }}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </Transition>
            </div>
          </div>
        </div>
      </section>

      <!-- 5. CERTIFICADOS CURRICULARES (CON MODAL INTERACTIVO) -->
      <section
        id="certificados"
        class="exec-section section-certificados"
        v-if="careerData.certificados && careerData.certificados.length"
      >
        <div class="uninter-container">
          <div class="section-header text-center">
            <span class="section-eyebrow">VENTAJA COMPETITIVA UNINTER</span>
            <h2 class="section-title">Certificados de <em>Alto Valor</em></h2>
            <p class="section-subtitle">
              Especialízate durante tu carrera y adquiere las credenciales y
              competencias prácticas que los directivos y reclutadores buscan en el
              mercado ejecutivo actual.
            </p>
          </div>

          <div class="certificados-grid">
            <div
              v-for="(cert, cIdx) in careerData.certificados"
              :key="cIdx"
              class="certificado-card"
              @click="openCertModal(cIdx)"
            >
              <div class="card-glow-border"></div>

              <!-- Elementos flotantes decorativos en hover (Outline & detrás de la card) -->
              <span class="float-shape float-icon-1">
                <component :is="careerIcons[0]" :size="32" stroke-width="1.5" />
              </span>
              <span class="float-shape float-icon-2">
                <component :is="careerIcons[1]" :size="32" stroke-width="1.5" />
              </span>
              <span class="float-shape float-icon-3">
                <component :is="careerIcons[2]" :size="32" stroke-width="1.5" />
              </span>
              <span class="float-shape float-icon-4">
                <component :is="careerIcons[3]" :size="32" stroke-width="1.5" />
              </span>
              <!-- Formas geométricas adicionales -->
              <span class="float-shape geom-shape geom-circle-1"></span>
              <span class="float-shape geom-shape geom-circle-2"></span>
              <span class="float-shape geom-shape geom-circle-3"></span>
              <span class="float-shape geom-shape geom-square-1"></span>
              <span class="float-shape geom-shape geom-square-2"></span>
              <span class="float-shape geom-shape geom-triangle-1"></span>

              <div class="cert-card-content">
                <div class="cert-card-header">
                  <span class="cert-badge">CERTIFICACIÓN</span>
                  <span class="cert-icon-visual">
                    <Star
                      :size="20"
                      fill="#E2B980"
                      color="#876D56"
                      stroke-width="2"
                    />
                  </span>
                </div>

                <div class="cert-info">
                  <h3 class="cert-name">{{ cert.nombre }}</h3>
                  <p class="cert-desc">{{ cert.descripcion }}</p>
                </div>

                <div class="cert-footer">
                  <button
                    class="cert-btn"
                    type="button"
                    @click.stop="openCertModal(cIdx)"
                  >
                    <span>Ver materias y alcance</span>
                    <Sparkles :size="16" class="btn-icon" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- MODAL DETALLADO DE CERTIFICACIÓN -->
        <Transition name="fade">
          <div
            v-if="activeCertIndex !== null && currentCert"
            class="modal-overlay"
            @click.self="closeCertModal"
          >
            <div class="modal-container">
              <!-- Botón de Cerrar -->
              <button
                class="modal-close-btn"
                @click="closeCertModal"
                aria-label="Cerrar ventana"
              >
                <X :size="20" />
              </button>

              <div class="modal-header">
                <div class="modal-cert-icon">
                  <Star
                    :size="28"
                    fill="#E2B980"
                    color="#876D56"
                    stroke-width="2"
                  />
                </div>
                <div class="modal-header-text">
                  <span class="modal-badge">Certificado Curricular</span>
                  <h3>{{ currentCert.nombre }}</h3>
                </div>
              </div>

              <div class="modal-desc-wrap">
                <p class="modal-desc">
                  {{ currentCert.descripcion }}
                </p>
              </div>

              <div
                class="modal-content-grid"
                v-if="currentCert.materias && currentCert.materias.length"
              >
                <div class="modal-section-block">
                  <h4>
                    <BookOpen :size="18" class="heading-icon" />
                    MATERIAS QUE INTEGRAN EL CERTIFICADO
                  </h4>
                  <ul class="modal-list">
                    <li
                      v-for="(sub, sIdx) in currentCert.materias"
                      :key="sIdx"
                    >
                      <CheckCircle2 :size="18" class="list-dot-icon" />
                      <span>{{ sub }}</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="modal-actions">
                <button class="modal-confirm-btn" @click="closeCertModal">
                  Entendido
                </button>
              </div>
            </div>
          </div>
        </Transition>
      </section>

      <!-- 6. LÍNEAS DE INVESTIGACIÓN -->
      <section id="lineas-investigacion" class="exec-section section-research">
        <div class="uninter-container">
          <div class="research-banner">
            <div class="research-content">
              <span class="section-eyebrow section-eyebrow--light"
                >DESARROLLO CIENTÍFICO Y ESTRATÉGICO</span
              >
              <h2 class="section-title section-title--light">
                Líneas de <em>Investigación</em>
              </h2>
              <p class="research-desc">
                Nuestros programas ejecutivos vinculan la práctica profesional
                con la investigación aplicada. Desarrollarás proyectos
                estratégicos y casos de estudio orientados a solucionar retos
                reales de organizaciones contemporáneas en las siguientes áreas:
              </p>

              <div class="research-tags-grid">
                <div
                  v-for="(linea, lIdx) in careerData.lineasInvestigacion || []"
                  :key="lIdx"
                  class="research-tag-card"
                >
                  <Compass :size="18" class="tag-icon" />
                  <span class="tag-name">{{ linea }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 7. ADMISIÓN & REGISTRO OFICIAL CON MASCOTA LEGI -->
      <section id="admision" class="exec-section section-admission">
        <div class="uninter-container">
          <div class="reg-card">
            <!-- Lado de la Mascota Legi (Izquierda) -->
            <div class="reg-mascot-side">
              <div class="mascot-wrap">
                <img
                  src="/images/forms/legi-mascot.png"
                  alt="Mascota Legi UNINTER"
                  class="mascot-img"
                />
              </div>
            </div>

            <!-- Lado del Formulario (Derecha) -->
            <div class="reg-form-side">
              <iframe
                src="https://link.superleads.mx/widget/form/4crDIop7ylztoeWZxtZ0"
                style="width: 100%; height: 613px; border: none; border-radius: 4px;"
                id="inline-4crDIop7ylztoeWZxtZ0"
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="FormEjecutivas"
                data-height="613"
                data-layout-iframe-id="inline-4crDIop7ylztoeWZxtZ0"
                data-form-id="4crDIop7ylztoeWZxtZ0"
                data-cookie-consent="true"
                data-cookie-consent-provider="auto"
                title="FormEjecutivas"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <!-- EXPLORAR OTRAS LICENCIATURAS EJECUTIVAS -->
      <section class="exec-section section-other-careers">
        <div class="uninter-container">
          <div class="section-header text-center">
            <span class="section-eyebrow">OFERTA ACADÉMICA</span>
            <h2 class="section-title">
              Otras Licenciaturas <em>Ejecutivas</em>
            </h2>
          </div>

          <div class="other-careers-grid">
            <NuxtLink
              v-for="other in otherCareers"
              :key="other.slug"
              :to="`/LicEjec/${other.slug}`"
              class="other-career-card"
            >
              <div class="other-career-sigla">{{ other.id }}</div>
              <div class="other-career-info">
                <h4>{{ other.name }}</h4>
                <span>{{ other.duracion }} • {{ other.modalidad }}</span>
              </div>
              <ArrowRight :size="18" class="other-career-arrow" />
            </NuxtLink>
          </div>
        </div>
      </section>
    </main>

    <PortalFooter />
    <FloatingActions />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from "vue";
import { useRoute } from "vue-router";
import {
  Clock,
  Calendar,
  Award,
  GraduationCap,
  Trophy,
  BookOpen,
  BookText,
  ChevronRight,
  Sparkles,
  MessageCircle,
  Users,
  TrendingUp,
  Target,
  CheckCircle2,
  Briefcase,
  ShieldCheck,
  Compass,
  Calculator,
  FileText,
  ArrowRight,
  Info,
  Percent,
  MapPin,
  Globe,
  Star,
  X,
  Scale,
  Landmark,
  ScrollText,
  Camera,
  Mic,
  PenTool,
  BarChart3,
  PieChart,
  Building2,
  Brain,
  HeartHandshake,
  Lightbulb,
  Phone,
} from "lucide-vue-next";

import NavbarIndex from "~/components/navbar/Index.vue";
import PortalFooter from "~/components/portal/Footer.vue";
import FloatingActions from "~/components/portal/FloatingActions.vue";

// JSON Base de Datos de Carreras Ejecutivas
import carrerasEjecutivasDB from "~/assets/data/carrerasEjecutivas.json";

const route = useRoute();

// Slug obtenido de la URL
const careerSlug = computed(() => {
  return (route.params.id as string) || "";
});

// Resolución robusta de la información de la carrera
const careerData = computed(() => {
  const rawId = (careerSlug.value || "").toLowerCase().trim();
  const db = carrerasEjecutivasDB as Record<string, any>;

  // 1. Coincidencia directa de llave
  if (db[rawId]) return db[rawId];

  // 2. Búsqueda por slug, id (sigla) o aliases
  for (const key in db) {
    const item = db[key];
    if (
      item.slug?.toLowerCase() === rawId ||
      item.id?.toLowerCase() === rawId ||
      (Array.isArray(item.aliases) && item.aliases.includes(rawId))
    ) {
      return item;
    }
  }

  // 3. Coincidencia parcial (por ejemplo 'derecho' dentro de 'derecho-ejecutiva')
  for (const key in db) {
    const item = db[key];
    const cleanSlug = (item.slug || "").replace("-ejecutiva", "");
    if (rawId.includes(cleanSlug) || cleanSlug.includes(rawId)) {
      return item;
    }
  }

  return null;
});

// Íconos flotantes dinámicos por carrera para los Certificados de Alto Valor
const careerIcons = computed(() => {
  const slug = (careerData.value?.slug || "").toLowerCase();

  if (slug.includes("derecho") || slug.includes("leyes")) {
    return [Scale, BookOpen, Landmark, ScrollText];
  }
  if (slug.includes("publicidad") || slug.includes("comunica")) {
    return [Camera, Mic, PenTool, MessageCircle];
  }
  if (slug.includes("comercio") || slug.includes("internacional")) {
    return [Globe, Compass, Briefcase, TrendingUp];
  }
  if (slug.includes("merca")) {
    return [Target, BarChart3, TrendingUp, PieChart];
  }
  if (slug.includes("psicologia")) {
    return [Brain, Users, HeartHandshake, Lightbulb];
  }
  if (
    slug.includes("gestion") ||
    slug.includes("administracion") ||
    slug.includes("empresa")
  ) {
    return [Building2, Briefcase, TrendingUp, Award];
  }

  return [Briefcase, Award, TrendingUp, GraduationCap];
});

// Asignación de imágenes fotográficas horizontales y verticales por carrera
const heroImages = computed(() => {
  const slug = (careerData.value?.slug || "").toLowerCase();
  if (slug.includes("derecho")) {
    return {
      h: encodeURI("/images/WebHorizontal/derrcho h.jpg"),
      v: encodeURI("/images/WebVertical/derrcho v.jpg"),
    };
  }
  if (slug.includes("comercio")) {
    return {
      h: encodeURI("/images/WebHorizontal/comercio h.jpg"),
      v: encodeURI("/images/WebVertical/comercio v.jpg"),
    };
  }
  if (slug.includes("internacional")) {
    return {
      h: encodeURI("/images/WebHorizontal/relaciones h.jpg"),
      v: encodeURI("/images/WebVertical/relaciones v.jpg"),
    };
  }
  if (slug.includes("publicidad")) {
    return {
      h: encodeURI("/images/WebHorizontal/comunica h.jpg"),
      v: encodeURI("/images/WebVertical/comunica v.jpg"),
    };
  }
  if (slug.includes("merca")) {
    return {
      h: encodeURI("/images/WebHorizontal/merca h.jpg"),
      v: encodeURI("/images/WebVertical/merca v.jpg"),
    };
  }
  if (slug.includes("gestion")) {
    return {
      h: encodeURI("/images/WebHorizontal/calidad h.jpg"),
      v: encodeURI("/images/WebVertical/calidad v.jpg"),
    };
  }
  // Default: Imagen de escritorio ejecutivo / profesional
  return {
    h: encodeURI("/images/posgrados/Web Horizontal/EAO copia.jpg"),
    v: encodeURI("/images/WebVertical/admin v.jpg"),
  };
});

// Número total de cuatrimestres
const countTerms = computed(() => {
  if (!careerData.value?.planEstudios) return 0;
  return Object.keys(careerData.value.planEstudios).length;
});

// ==========================================
// ESTADO Y LÓGICA DEL PLAN DE ESTUDIOS
// ==========================================
const activeSyllabusTab = ref(0);
const selectedSyllabusCategory = ref("all");

watch(
  () => careerData.value?.slug,
  () => {
    activeSyllabusTab.value = 0;
    selectedSyllabusCategory.value = "all";
    closeCertModal();
  },
);

// Categorías temáticas dinámicas por carrera
const careerCategories = computed(() => {
  const slug = (careerData.value?.slug || "").toLowerCase();

  if (slug.includes("derecho")) {
    return [
      { label: "Todas las materias", value: "all" },
      { label: "⚖️ Penal y Procesal", value: "penal" },
      { label: "📜 Civil, Mercantil y Corporativo", value: "civil" },
      { label: "🏛️ Público, Fiscal y Constitucional", value: "publico" },
      { label: "🌐 Formación Jurídica y Metodología", value: "general" },
    ];
  }

  if (slug.includes("psicologia")) {
    return [
      { label: "Todas las materias", value: "all" },
      { label: "👥 Gestión de Talento y RH", value: "talento" },
      { label: "🧠 Psicología y Comportamiento", value: "psicologia" },
      { label: "🚀 Liderazgo, Clima y Coaching", value: "liderazgo" },
      { label: "📋 Marco Laboral y Métodos", value: "metodos" },
    ];
  }

  if (slug.includes("comercio") || slug.includes("internacionales")) {
    return [
      { label: "Todas las materias", value: "all" },
      { label: "🚢 Comercio Exterior y Logística", value: "comercio" },
      { label: "💼 Dirección y Negocios Globales", value: "gestion" },
      { label: "📊 Finanzas, Economía y Costos", value: "finanzas" },
      { label: "🎯 Mercadotecnia y Mercados", value: "merca" },
    ];
  }

  if (slug.includes("publicidad")) {
    return [
      { label: "Todas las materias", value: "all" },
      { label: "🎨 Publicidad, Medios y Campañas", value: "publicidad" },
      { label: "🎯 Mercadotecnia y Consumidor", value: "merca" },
      { label: "💼 Gestión y Estrategia", value: "gestion" },
      { label: "📊 Finanzas y Métodos", value: "finanzas" },
    ];
  }

  if (slug.includes("mercadotecnia")) {
    return [
      { label: "Todas las materias", value: "all" },
      { label: "🎯 Mercadotecnia y Branding", value: "merca" },
      { label: "📈 Ventas y Comercialización", value: "ventas" },
      { label: "💼 Gestión y Estrategia", value: "gestion" },
      { label: "📊 Finanzas y Métodos Cuantitativos", value: "finanzas" },
    ];
  }

  // Administración / Gestión Empresarial
  return [
    { label: "Todas las materias", value: "all" },
    { label: "💼 Dirección y Alta Gerencia", value: "gestion" },
    { label: "📊 Finanzas, Contabilidad y Costos", value: "finanzas" },
    { label: "🎯 Mercadotecnia y Comercialización", value: "merca" },
    { label: "⚖️ Marco Legal y Factor Humano", value: "legal" },
  ];
});

// Normalizador de texto para clasificador
const normalizeText = (text: string) => {
  return (text || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
};

// Clasificador de materia en una categoría temática según la carrera
const getSubjectTag = (subjectName: string, slug: string): string => {
  const s = normalizeText(subjectName);

  if (slug.includes("derecho")) {
    if (
      s.includes("penal") ||
      s.includes("procesal") ||
      s.includes("juicio") ||
      s.includes("amparo") ||
      s.includes("proceso")
    ) {
      return "penal";
    }
    if (
      s.includes("civil") ||
      s.includes("familiar") ||
      s.includes("mercantil") ||
      s.includes("romano") ||
      s.includes("agrario") ||
      s.includes("corporativo")
    ) {
      return "civil";
    }
    if (
      s.includes("constitucional") ||
      s.includes("fiscal") ||
      s.includes("administrativo") ||
      s.includes("estado") ||
      s.includes("derechos humanos") ||
      s.includes("public")
    ) {
      return "publico";
    }
    return "general";
  }

  if (slug.includes("psicologia")) {
    if (
      s.includes("talento") ||
      s.includes("recursos humanos") ||
      s.includes("desempeno") ||
      s.includes("capacitacion") ||
      s.includes("compensaciones") ||
      s.includes("carrera")
    ) {
      return "talento";
    }
    if (
      s.includes("psicolog") ||
      s.includes("personalidad") ||
      s.includes("psicometr") ||
      s.includes("grupos")
    ) {
      return "psicologia";
    }
    if (
      s.includes("liderazgo") ||
      s.includes("coaching") ||
      s.includes("clima") ||
      s.includes("cultura") ||
      s.includes("cambio") ||
      s.includes("comportamiento") ||
      s.includes("organizacional")
    ) {
      return "liderazgo";
    }
    return "metodos";
  }

  if (slug.includes("comercio") || slug.includes("internacionales")) {
    if (
      s.includes("comercio") ||
      s.includes("aduan") ||
      s.includes("export") ||
      s.includes("import") ||
      s.includes("logistica") ||
      s.includes("tratados") ||
      s.includes("transfronter")
    ) {
      return "comercio";
    }
    if (
      s.includes("merca") ||
      s.includes("consumidor") ||
      s.includes("ventas") ||
      s.includes("precio") ||
      s.includes("electronicos")
    ) {
      return "merca";
    }
    if (
      s.includes("financ") ||
      s.includes("contab") ||
      s.includes("costo") ||
      s.includes("econom") ||
      s.includes("matemat") ||
      s.includes("estadist") ||
      s.includes("presupuesto")
    ) {
      return "finanzas";
    }
    return "gestion";
  }

  if (slug.includes("publicidad")) {
    if (
      s.includes("publicidad") ||
      s.includes("medio") ||
      s.includes("campana") ||
      s.includes("guion") ||
      s.includes("television") ||
      s.includes("impreso") ||
      s.includes("branding")
    ) {
      return "publicidad";
    }
    if (
      s.includes("merca") ||
      s.includes("consumidor") ||
      s.includes("producto") ||
      s.includes("ventas") ||
      s.includes("distribucion")
    ) {
      return "merca";
    }
    if (
      s.includes("financ") ||
      s.includes("contab") ||
      s.includes("econom") ||
      s.includes("estadist") ||
      s.includes("matemat")
    ) {
      return "finanzas";
    }
    return "gestion";
  }

  if (slug.includes("mercadotecnia")) {
    if (
      s.includes("merca") ||
      s.includes("branding") ||
      s.includes("consumidor") ||
      s.includes("producto") ||
      s.includes("servicio") ||
      s.includes("franquicia")
    ) {
      return "merca";
    }
    if (
      s.includes("ventas") ||
      s.includes("distribucion") ||
      s.includes("merchandising") ||
      s.includes("precio") ||
      s.includes("relaciones publicas")
    ) {
      return "ventas";
    }
    if (
      s.includes("financ") ||
      s.includes("contab") ||
      s.includes("econom") ||
      s.includes("costo") ||
      s.includes("matemat") ||
      s.includes("estadist")
    ) {
      return "finanzas";
    }
    return "gestion";
  }

  // Default: Gestión y Administración
  if (
    s.includes("financ") ||
    s.includes("contab") ||
    s.includes("costo") ||
    s.includes("econom") ||
    s.includes("presupuesto") ||
    s.includes("matemat") ||
    s.includes("estadist")
  ) {
    return "finanzas";
  }
  if (s.includes("merca") || s.includes("consumidor") || s.includes("ventas")) {
    return "merca";
  }
  if (
    s.includes("derecho") ||
    s.includes("laboral") ||
    s.includes("juridico") ||
    s.includes("recursos humanos") ||
    s.includes("talento") ||
    s.includes("humano")
  ) {
    return "legal";
  }
  return "gestion";
};

// Agrupación en pares de cuatrimestres
const cuatrimestrePairs = computed(() => {
  if (!careerData.value?.planEstudios) return [];
  const rawEntries = Object.entries(
    careerData.value.planEstudios as Record<string, string[]>,
  );
  const pairs: Array<{
    id: string;
    tabLabel: string;
    blocks: Array<{
      title: string;
      subjects: Array<{ name: string; tag: string }>;
    }>;
  }> = [];

  const slug = careerData.value.slug || "";

  for (let i = 0; i < rawEntries.length; i += 2) {
    const pairIndex = Math.floor(i / 2) + 1;
    const first = rawEntries[i];
    const second = rawEntries[i + 1];

    let tabLabel = "";
    if (second) {
      tabLabel = `${i + 1}º y ${i + 2}º Cuatrimestre`;
    } else {
      tabLabel = `${i + 1}º Cuatrimestre`;
    }

    const blocks = [];
    if (first) {
      blocks.push({
        title: first[0],
        subjects: (first[1] || []).map((name: string) => ({
          name,
          tag: getSubjectTag(name, slug),
        })),
      });
    }
    if (second) {
      blocks.push({
        title: second[0],
        subjects: (second[1] || []).map((name: string) => ({
          name,
          tag: getSubjectTag(name, slug),
        })),
      });
    }

    pairs.push({
      id: `pair-${pairIndex}`,
      tabLabel,
      blocks,
    });
  }

  return pairs;
});

// Bloques del par de cuatrimestres activo
const activeTabBlocks = computed(() => {
  return cuatrimestrePairs.value[activeSyllabusTab.value]?.blocks || [];
});

// Helper de resaltado por filtro de categoría
const isSubjectHighlighted = (subject: { name: string; tag: string }) => {
  if (selectedSyllabusCategory.value === "all") return false;
  return subject.tag === selectedSyllabusCategory.value;
};

// Helper de atenuación por filtro de categoría
const isSubjectDimmed = (subject: { name: string; tag: string }) => {
  if (selectedSyllabusCategory.value === "all") return false;
  return subject.tag !== selectedSyllabusCategory.value;
};

// ==========================================
// ESTADO Y MODAL DE CERTIFICADOS
// ==========================================
const activeCertIndex = ref<number | null>(null);

const openCertModal = (index: number) => {
  activeCertIndex.value = index;
  if (typeof document !== "undefined") {
    document.body.style.overflow = "hidden";
  }
};

const closeCertModal = () => {
  activeCertIndex.value = null;
  if (typeof document !== "undefined") {
    document.body.style.overflow = "";
  }
};

const currentCert = computed(() => {
  if (
    activeCertIndex.value === null ||
    !careerData.value?.certificados ||
    !careerData.value.certificados[activeCertIndex.value]
  ) {
    return null;
  }
  return careerData.value.certificados[activeCertIndex.value];
});

// Cerrar modal al presionar Escape
if (typeof window !== "undefined") {
  window.addEventListener("keydown", (e: KeyboardEvent) => {
    if (e.key === "Escape" && activeCertIndex.value !== null) {
      closeCertModal();
    }
  });
}

// Scroll suave a secciones
const scrollToSection = (id: string) => {
  if (typeof document === "undefined") return;
  const target = document.getElementById(id);
  if (target) {
    target.scrollIntoView({ behavior: "smooth" });
  }
};

// URL WhatsApp con mensaje personalizado
const whatsappUrl = computed(() => {
  const cName = careerData.value?.name || "Licenciatura Ejecutiva";
  const msg = encodeURIComponent(
    `Hola, solicito información y asesoría sobre la ${cName} en modalidad ejecutiva.`,
  );
  return `https://wa.me/527773576937?text=${msg}`;
});

// Lista de otras carreras ejecutivas para el carrusel/selector inferior
const otherCareers = computed(() => {
  const db = carrerasEjecutivasDB as Record<string, any>;
  const currentKey = careerData.value?.slug;
  return Object.values(db)
    .filter((c: any) => c.slug !== currentKey)
    .slice(0, 4);
});

// Configuración de SEO y metadatos dinámicos
useHead(() => ({
  title: careerData.value
    ? `${careerData.value.name} | Licenciaturas Ejecutivas UNINTER`
    : "Licenciaturas Ejecutivas | UNINTER",
  meta: [
    {
      name: "description",
      content: careerData.value
        ? `${careerData.value.descripcion.slice(0, 160)}... Estudia en UNINTER en modalidad mixta ejecutiva.`
        : "Estudia una Licenciatura Ejecutiva en UNINTER.",
    },
  ],
  script: [
    {
      src: "https://link.superleads.mx/js/form_embed.js",
      defer: true,
    },
  ],
}));
</script>

<style scoped>
/* ==========================================================================
   PALETA Y VARIABLES DE DISEÑO EJECUTIVO UNINTER
   Primario: #694E39 (Mocha Ejecutivo)
   Secundario: #876D56 (Cognac Cálido)
   Acento / Arena: #A78D75 / #D4B89E
   Fondo Oscuro: #07192e (Navy Profundo Institucional)
   Fondo Claro: #ffffff / #faf8f5
   ========================================================================== */
.career-executive-page {
  background-color: #ffffff;
  color: #2b2b2b;
  min-height: 100vh;
  font-family: var(
    --font-sans,
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    Roboto,
    sans-serif
  );
}

.uninter-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

/* ==========================================================================
   ESTADO 404 NOT FOUND
   ========================================================================== */
.not-found-container {
  min-height: 65vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 1.5rem;
  background: #faf8f5;
}

.not-found-card {
  background: #ffffff;
  border-radius: 20px;
  padding: 3.5rem 2.5rem;
  text-align: center;
  max-width: 580px;
  box-shadow: 0 12px 40px rgba(105, 78, 57, 0.08);
  border: 1px solid rgba(105, 78, 57, 0.15);
}

.not-found-badge {
  display: inline-block;
  font-size: 2.5rem;
  font-weight: 800;
  color: #694e39;
  letter-spacing: 0.1em;
  margin-bottom: 1rem;
}

.not-found-card h2 {
  font-family: var(--font-serif, "Playfair Display", Georgia, serif);
  font-size: 1.85rem;
  color: #1f1812;
  margin-bottom: 1rem;
}

.not-found-card p {
  color: #665a50;
  line-height: 1.6;
  margin-bottom: 2rem;
}

.btn-return {
  display: inline-block;
  background: #694e39;
  color: #ffffff;
  padding: 0.85rem 1.75rem;
  border-radius: 10px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
}

.btn-return:hover {
  background: #4e3827;
  transform: translateY(-2px);
}

/* ==========================================================================
   1. HERO BANNER TIPO POSGRADOS SHOWCASE
   ========================================================================== */
.degree-hero-wrapper {
  background-color: #07192e;
  position: relative;
  width: 100%;
}

.degree-container {
  margin: 0 auto;
  max-width: 1280px;
  padding: 0 1.5rem;
  width: 100%;
}

.degree-hero {
  align-items: center;
  background: transparent;
  display: flex;
  height: clamp(520px, 68vh, 680px);
  overflow: hidden;
  position: relative;
}

.degree-hero__bg {
  inset: 0;
  position: absolute;
}

.degree-hero__picture,
.degree-hero__img {
  height: 100%;
  object-fit: cover;
  object-position: center bottom;
  width: 100%;
}

/* Capa de contraste vertical */
.degree-hero__overlay {
  background: linear-gradient(
    180deg,
    rgba(7, 25, 46, 0.45) 0%,
    rgba(7, 25, 46, 0.15) 50%,
    rgba(7, 25, 46, 0.3) 100%
  );
  inset: 0;
  position: absolute;
}

/* Blur y gradiente horizontal que deja la fotografía nítida a la derecha */
.degree-hero__overlay2 {
  -webkit-backdrop-filter: blur(8px);
  backdrop-filter: blur(8px);
  background: linear-gradient(
    90deg,
    rgba(7, 25, 46, 0.96) 0%,
    rgba(7, 25, 46, 0.8) 35%,
    rgba(7, 25, 46, 0.2) 50%,
    transparent 65%
  );
  inset: 0;
  -webkit-mask-image: linear-gradient(
    90deg,
    #000 0%,
    #000 35%,
    transparent 60%
  );
  mask-image: linear-gradient(90deg, #000 0%, #000 35%, transparent 60%);
  position: absolute;
}

/* Contenido del Hero */
.degree-hero__content {
  position: relative;
  width: 100%;
  z-index: 3;
}

.degree-hero__inner {
  max-width: 640px;
}

.degree-hero__badge-wrap {
  margin-bottom: 1.25rem;
}

.degree-hero__badge {
  display: inline-block;
  background: rgba(245, 158, 11, 0.15);
  border: 1px solid rgba(245, 158, 11, 0.5);
  color: #fde68a;
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  padding: 0.35rem 0.9rem;
  border-radius: 6px;
  text-transform: uppercase;
}

.degree-hero__eyebrow {
  color: #ffffffb3;
  font-size: 0.82rem;
  font-weight: 800;
  letter-spacing: 0.16em;
  margin: 0 0 0.4rem 0;
  text-transform: uppercase;
}

.degree-hero__title {
  color: #ffffff;
  font-family: var(--font-serif, "Playfair Display", Georgia, serif);
  font-size: clamp(2.8rem, 5.5vw, 4.5rem);
  font-weight: 800;
  line-height: 1.08;
  margin: 0 0 1.25rem 0;
  letter-spacing: -0.01em;
  text-shadow: 0 4px 24px rgba(0, 0, 0, 0.5);
}

.degree-hero__title.long-title {
  font-size: clamp(2.2rem, 4.5vw, 3.5rem);
}

.degree-hero__desc {
  color: #ffffffc4;
  font-size: clamp(0.9rem, 1.3vw, 1rem);
  line-height: 1.6;
  margin: 0 0 2rem 0;
  max-width: 560px;
}

/* Botones de acción tipo tarjeta */
.degree-hero__ctas {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.degree-btn-card {
  align-items: center;
  background: rgba(7, 25, 46, 0.45);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 12px;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  font-size: 0.85rem;
  font-weight: 600;
  gap: 0.45rem;
  justify-content: center;
  min-width: 125px;
  padding: 0.85rem 1.4rem;
  text-decoration: none;
  transition: all 0.25s ease;
}

.degree-btn-card:hover {
  background: rgba(167, 141, 117, 0.22);
  border-color: #a78d75;
  color: #ffffff;
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(105, 78, 57, 0.35);
}

.btn-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  color: inherit;
}

/* ═══ STATS BAR (LIQUID GLASS TONOS CAFÉ/BRONCE DE 5 COLUMNAS) ═══ */
.degree-hero__stats-bar {
  backdrop-filter: blur(16px) saturate(150%);
  -webkit-backdrop-filter: blur(16px) saturate(150%);
  background-color: #07192ed9;
  background-image: radial-gradient(
    circle at 50% 50%,
    rgba(167, 141, 117, 0.25) 0%,
    rgba(105, 78, 57, 0.14) 45%,
    transparent 65%
  );
  background-attachment: fixed;
  border-top: 1px solid rgba(167, 141, 117, 0.28);
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.5);
  padding: 1.25rem 0;
  position: relative;
  z-index: 10;
}

.degree-hero__stats-inner {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  align-items: center;
}

.degree-stat {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.85rem;
  padding: 0 1rem;
  border-right: 1px solid rgba(167, 141, 117, 0.22);
}

.degree-stat:last-child {
  border-right: none;
}

.degree-stat__icon {
  color: #a78d75;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.degree-stat__text {
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
}

.degree-stat__value {
  color: #ffffff;
  font-size: 0.92rem;
  font-weight: 700;
  line-height: 1.2;
}

.degree-stat__label {
  color: #94a3b8;
  font-size: 0.72rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

/* ==========================================================================
   ESTILOS GENERALES DE SECCIONES
   ========================================================================== */
.exec-section {
  padding: 5rem 0;
  scroll-margin-top: 100px;
}

.section-eyebrow {
  display: block;
  font-size: 0.8rem;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #876d56;
  margin-bottom: 0.75rem;
}

.section-eyebrow--light {
  color: #d4b89e;
}

.section-title {
  font-family: var(--font-serif, "Playfair Display", Georgia, serif);
  font-size: clamp(2rem, 4vw, 2.75rem);
  font-weight: 800;
  line-height: 1.2;
  color: #0f3c61;
  margin: 0 0 1rem;
}

.section-title em {
  font-style: italic;
  color: #876d56;
}

.section-title--light {
  color: #ffffff;
}

.section-title--light em {
  color: #d4b89e;
}

.section-subtitle {
  font-size: 1.05rem;
  line-height: 1.6;
  color: #334155;
  max-width: 760px;
  margin: 0 auto;
}

.text-center {
  text-align: center;
}

/* ==========================================================================
   SECCIÓN 1: OVERVIEW & CARACTERÍSTICAS
   ========================================================================== */
.section-overview {
  background: #ffffff;
}

.overview-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.5rem;
  align-items: center;
}

@media (min-width: 980px) {
  .overview-grid {
    grid-template-columns: 1fr 1.25fr;
    gap: 4rem;
    align-items: center;
  }
}

.overview-main {
  display: flex;
  flex-direction: column;
}

.overview-lead-paragraph {
  font-size: 1.12rem;
  line-height: 1.75;
  color: #1e293b;
  margin: 0;
}

.overview-features {
  width: 100%;
}

.exec-pillars-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.25rem;
}

@media (max-width: 620px) {
  .exec-pillars-grid {
    grid-template-columns: 1fr;
  }
}

.pillar-card {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  padding: 1.6rem 1.4rem;
  box-shadow: 0 4px 20px rgba(15, 60, 97, 0.04);
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease,
    border-color 0.25s ease;
}

.pillar-card:hover {
  transform: translateY(-4px);
  border-color: rgba(15, 60, 97, 0.25);
  box-shadow: 0 12px 28px rgba(15, 60, 97, 0.08);
}

.pillar-icon {
  width: 46px;
  height: 46px;
  border-radius: 12px;
  background: rgba(15, 60, 97, 0.06);
  color: #0f3c61;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
}

.pillar-card h3 {
  font-size: 1.05rem;
  font-weight: 700;
  color: #0f3c61;
  margin-bottom: 0.5rem;
  line-height: 1.3;
}

.pillar-card p {
  font-size: 0.9rem;
  line-height: 1.55;
  color: #334155;
  margin: 0;
}

/* ==========================================================================
   SECCIÓN 2: PERFILES
   ========================================================================== */
.section-profiles {
  background: #f8fafc;
  border-top: 1px solid #e2e8f0;
  border-bottom: 1px solid #e2e8f0;
}

.profiles-simple-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-top: 3rem;
}

@media (min-width: 768px) {
  .profiles-simple-grid {
    grid-template-columns: 1fr 1fr;
    gap: 2.5rem;
  }
}

.profile-simple-card {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 18px;
  padding: 2.75rem 2.25rem;
  box-shadow: 0 4px 20px rgba(15, 60, 97, 0.04);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease,
    border-color 0.3s ease;
  display: flex;
  flex-direction: column;
}

.profile-simple-card:hover {
  transform: translateY(-4px);
  border-color: rgba(15, 60, 97, 0.25);
  box-shadow: 0 12px 32px rgba(15, 60, 97, 0.08);
}

.profile-card-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
  padding-bottom: 1.25rem;
  border-bottom: 1px solid #f1f5f9;
}

.profile-card-icon {
  width: 50px;
  height: 50px;
  border-radius: 12px;
  background: rgba(135, 109, 86, 0.1);
  color: #876d56;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.profile-card-title {
  font-family: var(--font-serif, "Playfair Display", Georgia, serif);
  font-size: 1.6rem;
  font-weight: 800;
  color: #0f3c61;
  margin: 0;
}

.profile-card-title em {
  font-style: italic;
  color: #876d56;
}

.profile-card-text {
  font-size: 1.05rem;
  line-height: 1.75;
  color: #334155;
  margin: 0;
}

/* ==========================================================================
   SECCIÓN 3: MERCADO LABORAL
   ========================================================================== */
.section-jobmarket {
  background: #ffffff;
}

.jobmarket-intro {
  max-width: 860px;
  margin: 0 auto 3.5rem;
  text-align: center;
}

.jobmarket-desc {
  font-size: 1.15rem;
  line-height: 1.7;
  color: #1e293b;
  margin: 0;
}

.job-sectors-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
}

.job-sector-card {
  position: relative;
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  padding: 1.85rem 1.6rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 4px 18px rgba(15, 60, 97, 0.04);
  transition: all 0.25s ease;
}

.job-sector-card:hover {
  background: #ffffff;
  transform: translateY(-4px);
  border-color: rgba(15, 60, 97, 0.25);
  box-shadow: 0 12px 28px rgba(15, 60, 97, 0.08);
}

.sector-badge-number {
  font-size: 0.78rem;
  font-weight: 800;
  color: #876d56;
  margin-bottom: 1.25rem;
  letter-spacing: 0.08em;
}

.sector-content {
  display: flex;
  align-items: flex-start;
  gap: 0.85rem;
}

.sector-icon {
  color: #0f3c61;
  flex-shrink: 0;
  margin-top: 0.15rem;
}

.sector-title {
  font-size: 1.02rem;
  font-weight: 700;
  line-height: 1.45;
  color: #0f3c61;
  margin: 0;
}

/* ==========================================================================
   SECCIÓN 4: PLAN DE ESTUDIOS
   ========================================================================== */
.section-syllabus {
  background: #f8fafc;
  border-top: 1px solid #e2e8f0;
}

.syllabus-summary-pills {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.75rem;
  margin-top: 1.75rem;
}

.summary-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  background: #ffffff;
  border: 1px solid #cbd5e1;
  padding: 0.45rem 1rem;
  border-radius: 999px;
  font-size: 0.85rem;
  font-weight: 700;
  color: #0f3c61;
  box-shadow: 0 2px 8px rgba(15, 60, 97, 0.04);
}

/* =========================================================
   LAYOUT INTERACTIVO DEL PLAN DE ESTUDIOS
   ========================================================= */
.syllabus-layout {
  display: grid;
  grid-template-columns: 320px 1fr;
  gap: 3rem;
  align-items: start;
  margin-top: 3.5rem;
}

/* Sidebar y Pestañas de Cuatrimestres */
.syllabus-sidebar {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: sticky;
  top: 100px;
}

.tabs-wrapper {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.tab-btn {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background: transparent;
  border: 1px solid transparent;
  padding: 1.25rem 1.5rem;
  border-radius: 16px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  text-align: left;
  position: relative;
  overflow: hidden;
}

.tab-content {
  display: flex;
  align-items: center;
  gap: 1rem;
  position: relative;
  z-index: 2;
}

.tab-number {
  font-family: var(--font-serif, "Playfair Display", Georgia, serif);
  font-size: 1.25rem;
  font-weight: 800;
  color: #94a3b8;
  transition: color 0.3s;
}

.tab-label {
  font-size: 1rem;
  font-weight: 600;
  color: #475569;
  transition: color 0.3s;
}

.tab-arrow {
  color: #94a3b8;
  transition: all 0.3s;
  transform: translateX(-10px);
  opacity: 0;
  position: relative;
  z-index: 2;
}

/* Hover de pestaña inactiva */
.tab-btn:hover:not(.is-active) {
  background: #ffffff;
  border-color: #e2e8f0;
  transform: translateX(5px);
  box-shadow: 0 4px 14px rgba(15, 60, 97, 0.04);
}

.tab-btn:hover:not(.is-active) .tab-arrow {
  opacity: 1;
  transform: translateX(0);
  color: #876d56;
}

.tab-btn:hover:not(.is-active) .tab-number {
  color: #876d56;
}

/* Pestaña Activa */
.tab-btn.is-active {
  background: #ffffff;
  border-color: #e2e8f0;
  box-shadow: 0 12px 28px -8px rgba(15, 60, 97, 0.1);
  transform: scale(1.02);
}

.tab-btn.is-active::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 4px;
  background-color: #876d56;
  border-radius: 4px 0 0 4px;
}

.tab-btn.is-active .tab-number {
  color: #876d56;
}

.tab-btn.is-active .tab-label {
  color: #0f3c61;
  font-weight: 700;
}

.tab-btn.is-active .tab-arrow {
  color: #876d56;
  opacity: 1;
  transform: translateX(0);
}

/* Tarjeta de Autoridad en Sidebar */
.dark-authority-card {
  background: linear-gradient(135deg, #0f3c61 0%, #174268 100%);
  border-radius: 20px;
  padding: 2.25rem 2rem;
  color: #ffffff;
  box-shadow: 0 20px 40px -10px rgba(15, 60, 97, 0.25);
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.dark-authority-card::after {
  content: "";
  position: absolute;
  top: -50px;
  right: -50px;
  width: 150px;
  height: 150px;
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 0.15) 0%,
    transparent 70%
  );
  border-radius: 50%;
}

.icon-glow {
  width: 50px;
  height: 50px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.2rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.info-icon-gold {
  color: #e2b980;
}

.dark-authority-card h4 {
  font-size: 1.15rem;
  font-weight: 800;
  margin: 0 0 0.5rem 0;
  letter-spacing: 0.02em;
  color: #ffffff;
}

.dark-authority-card p {
  font-size: 0.92rem;
  color: #cbd5e1;
  margin: 0;
  line-height: 1.6;
  position: relative;
  z-index: 1;
}

/* =========================================================
   CONTENEDOR PRINCIPAL DE MATERIAS
   ========================================================= */
.syllabus-content {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 24px;
  padding: 3rem;
  min-height: 480px;
  box-shadow: 0 10px 30px -15px rgba(0, 0, 0, 0.05);
}

/* Filtros por Área de Interés */
.syllabus-filters-wrapper {
  margin-bottom: 2.5rem;
  background: #f8fafc;
  padding: 1.35rem 1.75rem;
  border-radius: 18px;
  border: 1px solid #e2e8f0;
}

.filter-title {
  display: block;
  font-size: 0.82rem;
  font-weight: 800;
  color: #0f3c61;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-bottom: 0.85rem;
}

.filter-chips {
  display: flex;
  gap: 0.65rem;
  flex-wrap: wrap;
}

.filter-chip {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  padding: 0.55rem 1.1rem;
  border-radius: 99px;
  font-size: 0.85rem;
  font-weight: 700;
  color: #475569;
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
}

.filter-chip:hover {
  background: #f1f5f9;
  border-color: #cbd5e1;
  color: #0f3c61;
  transform: translateY(-2px);
}

.filter-chip.is-active {
  background-color: #0f3c61;
  border-color: #0f3c61;
  color: #ffffff;
  box-shadow: 0 5px 15px rgba(15, 60, 97, 0.2);
}

.filter-chip.is-active.penal,
.filter-chip.is-active.publicidad,
.filter-chip.is-active.comercio {
  background-color: #b45309;
  border-color: #b45309;
  box-shadow: 0 5px 15px rgba(180, 83, 9, 0.25);
}

.filter-chip.is-active.civil,
.filter-chip.is-active.gestion,
.filter-chip.is-active.liderazgo {
  background-color: #876d56;
  border-color: #876d56;
  box-shadow: 0 5px 15px rgba(135, 109, 86, 0.25);
}

.filter-chip.is-active.publico,
.filter-chip.is-active.finanzas,
.filter-chip.is-active.talento {
  background-color: #1565c0;
  border-color: #1565c0;
  box-shadow: 0 5px 15px rgba(21, 101, 192, 0.25);
}

.filter-chip.is-active.merca,
.filter-chip.is-active.ventas,
.filter-chip.is-active.psicologia {
  background-color: #0d9488;
  border-color: #0d9488;
  box-shadow: 0 5px 15px rgba(13, 148, 136, 0.25);
}

/* Grid de Bloques de Cuatrimestres */
.content-blocks-wrapper {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;
}

.content-blocks-wrapper.single-block-layout {
  grid-template-columns: 1fr;
  max-width: 650px;
  margin: 0 auto;
}

.cuatrimestre-block {
  transition: opacity 0.4s ease;
}

.cuatrimestre-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid #f1f5f9;
  padding-bottom: 1rem;
  margin-bottom: 1.75rem;
}

.cuatrimestre-header h3 {
  font-family: var(--font-serif, "Playfair Display", Georgia, serif);
  font-size: 1.3rem;
  font-weight: 800;
  color: #0f3c61;
  margin: 0;
}

.subject-count {
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  padding: 0.3rem 0.8rem;
  border-radius: 999px;
  color: #64748b;
}

/* =========================================================
   ASIGNATURAS / MATERIAS INTERACTIVAS
   ========================================================= */
.subjects-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
}

.subject-item {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 0.95rem;
  color: #334155;
  line-height: 1.45;
  background: #f8fafc;
  padding: 1rem 1.25rem;
  border-radius: 14px;
  border: 1px solid #e2e8f0;
  position: relative;
  overflow: hidden;
  transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
}

.subject-name {
  flex-grow: 1;
  font-weight: 500;
}

/* Puntos de color por categoría */
.subject-tag-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
  background-color: #876d56;
}

.subject-tag-dot.penal,
.subject-tag-dot.publicidad,
.subject-tag-dot.comercio {
  background-color: #b45309;
}

.subject-tag-dot.civil,
.subject-tag-dot.gestion,
.subject-tag-dot.liderazgo {
  background-color: #876d56;
}

.subject-tag-dot.publico,
.subject-tag-dot.finanzas,
.subject-tag-dot.talento {
  background-color: #1565c0;
}

.subject-tag-dot.merca,
.subject-tag-dot.ventas,
.subject-tag-dot.psicologia {
  background-color: #0d9488;
}

.subject-tag-dot.general,
.subject-tag-dot.metodos,
.subject-tag-dot.legal {
  background-color: #64748b;
}

.subject-icon {
  color: #876d56;
  flex-shrink: 0;
  transition: all 0.3s ease;
}

/* Hover interactivo */
.interactive-lift::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 4px;
  background-color: #876d56;
  transform: scaleY(0);
  transform-origin: bottom;
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.interactive-lift:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 24px -8px rgba(15, 60, 97, 0.12);
  background: #ffffff;
  border-color: #cbd5e1;
  color: #0f3c61;
}

.interactive-lift:hover::before {
  transform: scaleY(1);
}

.interactive-lift:hover .subject-icon {
  color: #0f3c61;
  transform: scale(1.1);
}

/* Efectos de Filtrado Dinámico */
.subject-item.is-dimmed {
  opacity: 0.2;
  filter: grayscale(0.85);
  pointer-events: none;
  transform: scale(0.98);
}

.subject-item.is-highlighted {
  border-color: rgba(135, 109, 86, 0.4);
  background: rgba(135, 109, 86, 0.05);
  box-shadow: 0 8px 20px -8px rgba(135, 109, 86, 0.2);
  font-weight: 600;
  color: #0f3c61;
}

.subject-item.is-highlighted::before {
  background-color: #876d56;
  transform: scaleY(1);
}

.subject-item.is-highlighted .subject-icon {
  color: #876d56;
}

.subject-item.is-highlighted.penal,
.subject-item.is-highlighted.publicidad,
.subject-item.is-highlighted.comercio {
  border-color: rgba(180, 83, 9, 0.4);
  background: rgba(180, 83, 9, 0.05);
  box-shadow: 0 8px 20px -8px rgba(180, 83, 9, 0.2);
}
.subject-item.is-highlighted.penal::before,
.subject-item.is-highlighted.publicidad::before,
.subject-item.is-highlighted.comercio::before {
  background-color: #b45309;
}
.subject-item.is-highlighted.penal .subject-icon,
.subject-item.is-highlighted.publicidad .subject-icon,
.subject-item.is-highlighted.comercio .subject-icon {
  color: #b45309;
}

.subject-item.is-highlighted.publico,
.subject-item.is-highlighted.finanzas,
.subject-item.is-highlighted.talento {
  border-color: rgba(21, 101, 192, 0.4);
  background: rgba(21, 101, 192, 0.05);
  box-shadow: 0 8px 20px -8px rgba(21, 101, 192, 0.2);
}
.subject-item.is-highlighted.publico::before,
.subject-item.is-highlighted.finanzas::before,
.subject-item.is-highlighted.talento::before {
  background-color: #1565c0;
}
.subject-item.is-highlighted.publico .subject-icon,
.subject-item.is-highlighted.finanzas .subject-icon,
.subject-item.is-highlighted.talento .subject-icon {
  color: #1565c0;
}

.subject-item.is-highlighted.merca,
.subject-item.is-highlighted.ventas,
.subject-item.is-highlighted.psicologia {
  border-color: rgba(13, 148, 136, 0.4);
  background: rgba(13, 148, 136, 0.05);
  box-shadow: 0 8px 20px -8px rgba(13, 148, 136, 0.2);
}
.subject-item.is-highlighted.merca::before,
.subject-item.is-highlighted.ventas::before,
.subject-item.is-highlighted.psicologia::before {
  background-color: #0d9488;
}
.subject-item.is-highlighted.merca .subject-icon,
.subject-item.is-highlighted.ventas .subject-icon,
.subject-item.is-highlighted.psicologia .subject-icon {
  color: #0d9488;
}

/* Transición slide-fade */
.slide-fade-enter-active {
  transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
}
.slide-fade-leave-active {
  transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
}
.slide-fade-enter-from {
  opacity: 0;
  transform: translateY(12px);
}
.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

/* Adaptabilidad Responsiva */
@media (max-width: 992px) {
  .syllabus-layout {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  .syllabus-sidebar {
    position: static;
  }
  .tabs-wrapper.mobile-scroll {
    flex-direction: row;
    overflow-x: auto;
    padding-bottom: 0.5rem;
    -webkit-overflow-scrolling: touch;
  }
  .tabs-wrapper.mobile-scroll .tab-btn {
    min-width: 200px;
    flex-shrink: 0;
  }
  .syllabus-content {
    padding: 2rem;
  }
}

@media (max-width: 640px) {
  .content-blocks-wrapper {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  .syllabus-content {
    padding: 1.5rem 1.25rem;
  }
  .filter-chips {
    gap: 0.5rem;
  }
  .filter-chip {
    font-size: 0.8rem;
    padding: 0.45rem 0.85rem;
  }
}

/* ==========================================================================
   SECCIÓN 5: CERTIFICADOS CURRICULARES (ESTILO LICENCIATURAS EJECUTIVAS)
   ========================================================================== */
.section-certificados {
  background: #ffffff;
  position: relative;
}

.certificados-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2.5rem;
  margin-top: 3.5rem;
  justify-content: center;
}

.certificado-card {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  padding: 2.5rem 2rem;
  display: flex;
  flex-direction: column;
  box-shadow: 0 10px 30px rgba(15, 60, 97, 0.05);
  transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
  position: relative;
  overflow: visible;
  cursor: pointer;
}

.card-glow-border {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: linear-gradient(90deg, #0f3c61 0%, #876d56 100%);
  transform: scaleX(0.15);
  transform-origin: left;
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  z-index: 11;
}

.certificado-card:hover {
  transform: translateY(-8px);
  border-color: rgba(135, 109, 86, 0.35);
  box-shadow: 0 20px 45px rgba(15, 60, 97, 0.12);
}

.certificado-card:hover .card-glow-border {
  transform: scaleX(1);
}

/* Elementos Flotantes e Íconos Dinámicos al Hover */
.float-shape {
  position: absolute;
  opacity: 0;
  pointer-events: none;
  z-index: -1;
  color: #cbd5e1;
  transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.float-icon-1 {
  top: 10px;
  right: 25%;
  transform: translateY(20px) scale(0.3) rotate(-30deg);
}

.float-icon-2 {
  top: 30%;
  right: 10px;
  transform: translateX(-20px) scale(0.3) rotate(20deg);
}

.float-icon-3 {
  bottom: 10px;
  right: 15%;
  transform: translateY(-20px) scale(0.3) rotate(-15deg);
}

.float-icon-4 {
  top: 45%;
  left: 10px;
  transform: translateX(20px) scale(0.3) rotate(-25deg);
}

/* Formas Geométricas */
.geom-shape {
  border: 2px solid #e2e8f0;
}

.geom-circle-1 {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  top: 15%;
  right: 10px;
  transform: scale(0);
}

.geom-circle-2 {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #e2e8f0;
  border: none;
  bottom: 15%;
  left: 10px;
  transform: scale(0);
}

.geom-circle-3 {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #cbd5e1;
  border: none;
  top: 40%;
  right: 0;
  transform: scale(0);
}

.geom-square-1 {
  width: 14px;
  height: 14px;
  border-radius: 3px;
  top: 10px;
  left: 20%;
  transform: scale(0) rotate(45deg);
}

.geom-square-2 {
  width: 10px;
  height: 10px;
  border-radius: 2px;
  bottom: 25%;
  right: 20px;
  transform: scale(0) rotate(15deg);
}

.geom-triangle-1 {
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-bottom: 10px solid #e2e8f0;
  border-top: none;
  background: transparent;
  border-radius: 0;
  bottom: 0px;
  left: 25%;
  transform: scale(0) rotate(-20deg);
}

/* Hover de Iconos Flotantes */
.certificado-card:hover .float-icon-1 {
  opacity: 0.65;
  transform: translateY(-35px) scale(1) rotate(10deg);
  transition-delay: 0.05s;
  color: #876d56;
}

.certificado-card:hover .float-icon-2 {
  opacity: 0.65;
  transform: translateX(35px) scale(1) rotate(-10deg);
  transition-delay: 0.1s;
  color: #876d56;
}

.certificado-card:hover .float-icon-3 {
  opacity: 0.65;
  transform: translateY(35px) scale(1) rotate(15deg);
  transition-delay: 0.15s;
  color: #876d56;
}

.certificado-card:hover .float-icon-4 {
  opacity: 0.65;
  transform: translateX(-35px) scale(1) rotate(20deg);
  transition-delay: 0.2s;
  color: #876d56;
}

/* Hover de Formas Geométricas */
.certificado-card:hover .geom-circle-1 {
  opacity: 1;
  transform: translate(25px, -20px) scale(1);
  transition-delay: 0.1s;
}

.certificado-card:hover .geom-circle-2 {
  opacity: 1;
  transform: translate(-25px, 20px) scale(1);
  transition-delay: 0.15s;
}

.certificado-card:hover .geom-circle-3 {
  opacity: 1;
  transform: translate(20px, 0px) scale(1);
  transition-delay: 0.05s;
}

.certificado-card:hover .geom-square-1 {
  opacity: 1;
  transform: translate(-20px, -25px) scale(1) rotate(60deg);
  transition-delay: 0.05s;
}

.certificado-card:hover .geom-square-2 {
  opacity: 1;
  transform: translate(15px, 25px) scale(1) rotate(45deg);
  transition-delay: 0.12s;
}

.certificado-card:hover .geom-triangle-1 {
  opacity: 1;
  transform: translate(-10px, 25px) scale(1) rotate(-60deg);
  transition-delay: 0.18s;
}

.cert-card-content {
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.cert-card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
}

.cert-badge {
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: #876d56;
  background: rgba(135, 109, 86, 0.1);
  padding: 0.35rem 0.85rem;
  border-radius: 999px;
}

.cert-icon-visual {
  width: 38px;
  height: 38px;
  border-radius: 10px;
  background: #fafaf9;
  border: 1px solid #e7e5e4;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;
}

.certificado-card:hover .cert-icon-visual {
  transform: scale(1.1) rotate(5deg);
}

.cert-info {
  flex-grow: 1;
  margin-bottom: 2rem;
}

.cert-name {
  font-family: var(--font-serif, "Playfair Display", Georgia, serif);
  font-size: 1.45rem;
  font-weight: 800;
  color: #0f3c61;
  margin: 0 0 0.85rem;
  line-height: 1.3;
}

.cert-desc {
  font-size: 0.95rem;
  line-height: 1.6;
  color: #475569;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.cert-footer {
  margin-top: auto;
}

.cert-btn {
  width: 100%;
  background: #0f3c61;
  color: #ffffff;
  border: none;
  padding: 0.95rem 1.25rem;
  border-radius: 12px;
  font-weight: 700;
  font-size: 0.92rem;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.cert-btn .btn-icon {
  color: #e2b980;
  transition: transform 0.3s ease;
}

.certificado-card:hover .cert-btn {
  background: #876d56;
}

.cert-btn:hover .btn-icon {
  transform: rotate(15deg) scale(1.15);
}

/* =========================================================
   MODAL DE CERTIFICACIÓN
   ========================================================= */
.modal-overlay {
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: rgba(15, 60, 97, 0.6);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
}

.modal-container {
  background: #ffffff;
  border-radius: 24px;
  border: 1px solid rgba(255, 255, 255, 0.8);
  box-shadow: 0 40px 80px -15px rgba(15, 60, 97, 0.35);
  max-width: 620px;
  width: 100%;
  padding: 2.75rem 2.5rem;
  position: relative;
  max-height: 90vh;
  overflow-y: auto;
}

.modal-close-btn {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  background: #f1f5f9;
  border: none;
  color: #64748b;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.25s ease;
}

.modal-close-btn:hover {
  background: #e2e8f0;
  color: #0f3c61;
  transform: rotate(90deg);
}

.modal-header {
  display: flex;
  align-items: center;
  gap: 1.25rem;
  margin-bottom: 1.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #f1f5f9;
}

.modal-cert-icon {
  width: 58px;
  height: 58px;
  background: #fbf9f6;
  border: 1px solid #e7e0d8;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  box-shadow: 0 4px 10px rgba(135, 109, 86, 0.08);
}

.modal-header-text {
  flex-grow: 1;
}

.modal-badge {
  font-size: 0.75rem;
  font-weight: 800;
  color: #876d56;
  background: rgba(135, 109, 86, 0.12);
  padding: 0.3rem 0.8rem;
  border-radius: 99px;
  display: inline-block;
  margin-bottom: 0.4rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.modal-header h3 {
  font-family: var(--font-serif, "Playfair Display", Georgia, serif);
  font-size: 1.45rem;
  font-weight: 800;
  color: #0f3c61;
  margin: 0;
  line-height: 1.3;
}

.modal-desc-wrap {
  margin-bottom: 1.75rem;
}

.modal-desc {
  font-size: 1rem;
  color: #475569;
  line-height: 1.65;
  margin: 0;
}

.modal-section-block h4 {
  font-size: 0.82rem;
  font-weight: 800;
  color: #876d56;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin: 0 0 1rem 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.heading-icon {
  color: #876d56;
}

.modal-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  background: #f8fafc;
  padding: 1.25rem 1.5rem;
  border-radius: 14px;
  border: 1px solid #e2e8f0;
}

.modal-list li {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-size: 0.95rem;
  color: #1e293b;
  font-weight: 500;
  line-height: 1.45;
}

.list-dot-icon {
  color: #876d56;
  flex-shrink: 0;
  margin-top: 2px;
}

.modal-actions {
  display: flex;
  justify-content: flex-end;
  margin-top: 2rem;
}

.modal-confirm-btn {
  background: #0f3c61;
  color: #ffffff;
  border: none;
  padding: 0.85rem 2.25rem;
  border-radius: 10px;
  font-weight: 700;
  cursor: pointer;
  font-size: 0.95rem;
  transition: all 0.25s ease;
}

.modal-confirm-btn:hover {
  background: #876d56;
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(135, 109, 86, 0.25);
}

/* Transición fade para el modal */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@media (max-width: 768px) {
  .certificados-grid {
    grid-template-columns: 1fr;
  }
  .modal-container {
    padding: 2rem 1.5rem;
  }
}

/* ==========================================================================
   SECCIÓN 6: LÍNEAS DE INVESTIGACIÓN
   ========================================================================== */
.section-research {
  background: #f8fafc;
}

.research-banner {
  background: linear-gradient(135deg, #07192e 0%, #0f3c61 100%);
  border-radius: 24px;
  padding: 4rem 3rem;
  border: 1px solid rgba(255, 255, 255, 0.12);
  box-shadow: 0 20px 40px rgba(15, 60, 97, 0.15);
}

.research-content {
  max-width: 920px;
  margin: 0 auto;
  text-align: center;
}

.research-desc {
  font-size: 1.1rem;
  line-height: 1.7;
  color: #e2e8f0;
  margin: 0 auto 3rem;
}

.research-tags-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
}

.research-tag-card {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 0.85rem 1.5rem;
  border-radius: 999px;
  color: #ffffff;
  font-weight: 700;
  font-size: 0.95rem;
  transition: all 0.25s ease;
}

.research-tag-card:hover {
  background: rgba(255, 255, 255, 0.16);
  border-color: #ffffff;
  transform: translateY(-2px);
}

.tag-icon {
  color: #d4b89e;
}

/* ==========================================================================
   SECCIÓN 7: ADMISIÓN & REGISTRO OFICIAL
   ========================================================================== */
.section-admission {
  background: #fbf9f6;
  padding: 5rem 0;
  border-top: 1px solid #ede4db;
}

.reg-card {
  background: #ffffff;
  border: 1px solid #ede4db;
  border-radius: 24px;
  box-shadow: 0 20px 50px rgba(105, 78, 57, 0.1);
  display: flex;
  min-height: 620px;
  overflow: hidden;
  max-width: 1050px;
  margin: 0 auto;
}

.reg-form-side {
  flex: 1.25;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2.25rem 2rem;
  background: #ffffff;
}

.reg-mascot-side {
  flex: 0.85;
  background: linear-gradient(145deg, #876D56 0%, #694E39 60%, #4e3827 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  padding: 2rem;
}

.reg-mascot-side::before {
  content: "";
  position: absolute;
  inset: 0;
  background: radial-gradient(
    circle at 40% 65%,
    rgba(255, 255, 255, 0.12) 0%,
    transparent 65%
  );
  pointer-events: none;
}

.mascot-wrap {
  max-width: 320px;
  width: 90%;
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.mascot-img {
  width: 100%;
  height: auto;
  object-fit: contain;
  filter: drop-shadow(0 15px 35px rgba(0, 0, 0, 0.25));
}

@media (max-width: 900px) {
  .reg-card {
    flex-direction: column;
    min-height: auto;
  }
  .reg-form-side {
    padding: 1.5rem 1rem;
  }
  .reg-mascot-side {
    padding: 3rem 1.5rem 2.5rem;
    min-height: 280px;
  }
  .mascot-wrap {
    max-width: 240px;
  }
}

/* ==========================================================================
   OTRAS LICENCIATURAS EJECUTIVAS
   ========================================================================== */
.section-other-careers {
  background: #f8fafc;
  border-top: 1px solid #e2e8f0;
}

.other-careers-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.5rem;
  margin-top: 2.5rem;
}

.other-career-card {
  display: flex;
  align-items: center;
  gap: 1.25rem;
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  padding: 1.5rem;
  text-decoration: none;
  transition: all 0.25s ease;
  box-shadow: 0 4px 16px rgba(15, 60, 97, 0.04);
}

.other-career-card:hover {
  border-color: #0f3c61;
  transform: translateY(-3px);
  box-shadow: 0 10px 24px rgba(15, 60, 97, 0.08);
}

.other-career-sigla {
  width: 50px;
  height: 50px;
  border-radius: 12px;
  background: #0f3c61;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  font-size: 1rem;
  flex-shrink: 0;
}

.other-career-info {
  flex: 1;
}

.other-career-info h4 {
  font-size: 1rem;
  font-weight: 700;
  color: #0f3c61;
  margin: 0 0 0.25rem;
  line-height: 1.35;
}

.other-career-info span {
  font-size: 0.8rem;
  color: #64748b;
}

.other-career-arrow {
  color: #94a3b8;
  transition: transform 0.2s ease;
}

.other-career-card:hover .other-career-arrow {
  color: #0f3c61;
  transform: translateX(4px);
}

/* ==========================================================================
   ANIMACIONES Y RESPONSIVE
   ========================================================================== */
.animate-fade {
  animation: fadeIn 0.35s cubic-bezier(0.16, 1, 0.3, 1);
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* ═══ RESPONSIVE HERO & STATS ═══ */
@media (max-width: 960px) {
  .degree-hero__stats-inner {
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem 0;
  }
  .degree-stat:nth-child(3n) {
    border-right: none;
  }
}

@media (max-width: 768px) {
  .degree-hero {
    height: auto;
    min-height: clamp(500px, 85vh, 800px);
    padding-top: 5.5rem;
    padding-bottom: 3rem;
  }
  .degree-hero__overlay2 {
    background: linear-gradient(
      180deg,
      rgba(7, 25, 46, 0.92) 0%,
      rgba(7, 25, 46, 0.8) 60%,
      rgba(7, 25, 46, 0.95) 100%
    );
    -webkit-mask-image: none;
    mask-image: none;
  }
  .degree-hero__stats-inner {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem 0;
  }
  .degree-stat:nth-child(2n) {
    border-right: none;
  }
  .degree-hero__ctas {
    gap: 0.75rem;
  }
  .degree-btn-card {
    flex: 1 1 calc(50% - 0.5rem);
    min-width: 110px;
    padding: 0.75rem 1rem;
  }
  .exec-section {
    padding: 3.75rem 0;
  }
  .research-banner {
    padding: 2.5rem 1.5rem;
  }
}
</style>
