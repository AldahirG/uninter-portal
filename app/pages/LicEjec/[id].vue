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
                  href="#"
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

      <!-- STICKY SUB-NAVBAR -->
      <nav class="sticky-subnav">
        <div class="uninter-container subnav-container">
          <a href="#descripcion" class="subnav-link">Descripción</a>
          <a href="#perfiles" class="subnav-link">Perfiles</a>
          <a href="#mercado-laboral" class="subnav-link">Mercado Laboral</a>
          <a href="#plan-estudios" class="subnav-link">Plan de Estudios</a>
          <a href="#certificados" class="subnav-link">Certificados</a>
          <a href="#lineas-investigacion" class="subnav-link"
            >Líneas de Investigación</a
          >
          <a href="#admision" class="subnav-link subnav-link--cta"
            >Solicitar Beca</a
          >
        </div>
      </nav>

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

      <!-- 2. PERFILES: EGRESO E INGRESO -->
      <section id="perfiles" class="exec-section section-profiles">
        <div class="uninter-container">
          <div class="section-header text-center">
            <span class="section-eyebrow">COMPETENCIAS & VOCACIÓN</span>
            <h2 class="section-title">Perfiles de <em>Ingreso y Egreso</em></h2>
            <p class="section-subtitle">
              Conoce las cualidades con las que comienzas tu camino y las
              competencias de alto liderazgo con las que egresarás.
            </p>
          </div>

          <!-- Pestañas de perfiles -->
          <div class="profiles-tabs">
            <button
              class="tab-btn"
              :class="{ active: activeProfileTab === 'egreso' }"
              @click="activeProfileTab = 'egreso'"
            >
              <Award :size="18" />
              <span>Perfil de Egreso (Competencias)</span>
            </button>
            <button
              class="tab-btn"
              :class="{ active: activeProfileTab === 'ingreso' }"
              @click="activeProfileTab = 'ingreso'"
            >
              <Target :size="18" />
              <span>Perfil de Ingreso (Aspirantes)</span>
            </button>
          </div>

          <!-- TAB PERFIL DE EGRESO -->
          <div
            v-show="activeProfileTab === 'egreso'"
            class="tab-content animate-fade"
          >
            <div class="profile-general-card">
              <div class="profile-general-badge">
                <Award :size="20" />
                <span>Misión del Egresado</span>
              </div>
              <p class="profile-general-text">
                {{ careerData.perfilEgreso?.general }}
              </p>
            </div>

            <!-- Desglose de Competencias 4 Cuadrantes -->
            <div class="competencies-grid">
              <!-- Conocimientos -->
              <div class="competency-card">
                <div class="comp-header">
                  <div class="comp-icon comp-icon--blue">
                    <BookOpen :size="20" />
                  </div>
                  <h3>Conocimientos</h3>
                </div>
                <ul class="comp-list">
                  <li
                    v-for="(item, idx) in careerData.perfilEgreso
                      ?.conocimientos || []"
                    :key="idx"
                  >
                    <CheckCircle2 :size="16" class="check-icon" />
                    <span>{{ item }}</span>
                  </li>
                </ul>
              </div>

              <!-- Habilidades -->
              <div class="competency-card">
                <div class="comp-header">
                  <div class="comp-icon comp-icon--sand">
                    <Sparkles :size="20" />
                  </div>
                  <h3>Habilidades</h3>
                </div>
                <ul class="comp-list">
                  <li
                    v-for="(item, idx) in careerData.perfilEgreso
                      ?.habilidades || []"
                    :key="idx"
                  >
                    <CheckCircle2 :size="16" class="check-icon" />
                    <span>{{ item }}</span>
                  </li>
                </ul>
              </div>

              <!-- Actitudes -->
              <div class="competency-card">
                <div class="comp-header">
                  <div class="comp-icon comp-icon--brown">
                    <ShieldCheck :size="20" />
                  </div>
                  <h3>Actitudes</h3>
                </div>
                <ul class="comp-list">
                  <li
                    v-for="(item, idx) in careerData.perfilEgreso?.actitudes ||
                    []"
                    :key="idx"
                  >
                    <CheckCircle2 :size="16" class="check-icon" />
                    <span>{{ item }}</span>
                  </li>
                </ul>
              </div>

              <!-- Destrezas -->
              <div class="competency-card">
                <div class="comp-header">
                  <div class="comp-icon comp-icon--dark">
                    <Target :size="20" />
                  </div>
                  <h3>Destrezas</h3>
                </div>
                <ul class="comp-list">
                  <li
                    v-for="(item, idx) in careerData.perfilEgreso?.destrezas ||
                    []"
                    :key="idx"
                  >
                    <CheckCircle2 :size="16" class="check-icon" />
                    <span>{{ item }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <!-- TAB PERFIL DE INGRESO -->
          <div
            v-show="activeProfileTab === 'ingreso'"
            class="tab-content animate-fade"
          >
            <div class="profile-general-card">
              <div class="profile-general-badge">
                <Target :size="20" />
                <span>Aspirante Ideal</span>
              </div>
              <p class="profile-general-text">
                {{ careerData.perfilIngreso?.general }}
              </p>
            </div>

            <div class="ingreso-split-grid">
              <div class="ingreso-card">
                <div class="ingreso-card__header">
                  <div class="comp-icon comp-icon--brown">
                    <GraduationCap :size="22" />
                  </div>
                  <h3>Requisitos de Ingreso</h3>
                </div>
                <ul class="comp-list">
                  <li
                    v-for="(req, idx) in careerData.perfilIngreso?.requisitos ||
                    []"
                    :key="idx"
                  >
                    <CheckCircle2 :size="16" class="check-icon" />
                    <span>{{ req }}</span>
                  </li>
                </ul>
              </div>

              <div class="ingreso-card">
                <div class="ingreso-card__header">
                  <div class="comp-icon comp-icon--sand">
                    <Sparkles :size="22" />
                  </div>
                  <h3>Aptitudes y Habilidades Deseadas</h3>
                </div>
                <ul class="comp-list">
                  <li
                    v-for="(hab, idx) in careerData.perfilIngreso
                      ?.habilidades || []"
                    :key="idx"
                  >
                    <CheckCircle2 :size="16" class="check-icon" />
                    <span>{{ hab }}</span>
                  </li>
                </ul>
              </div>
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

          <!-- Grid de Cuatrimestres -->
          <div class="syllabus-grid">
            <div
              v-for="(materias, cuatrimestre) in careerData.planEstudios"
              :key="cuatrimestre"
              class="cuatrimestre-card"
            >
              <div class="cuatrimestre-header">
                <span class="cuatrimestre-tag">Etapa Curricular</span>
                <h3 class="cuatrimestre-title">{{ cuatrimestre }}</h3>
              </div>
              <ul class="cuatrimestre-subjects">
                <li
                  v-for="(materia, mIdx) in materias"
                  :key="mIdx"
                  class="subject-row"
                >
                  <span class="subject-bullet"></span>
                  <span class="subject-title">{{ materia }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- 5. CERTIFICADOS CURRICULARES -->
      <section id="certificados" class="exec-section section-certificados">
        <div class="uninter-container">
          <div class="section-header text-center">
            <span class="section-eyebrow">VENTAJA COMPETITIVA UNINTER</span>
            <h2 class="section-title">Certificados <em>Curriculares</em></h2>
            <p class="section-subtitle">
              Un certificado valida los conocimientos, habilidades, destrezas y
              competencias adquiridos al acreditar las materias que lo integran,
              fortaleciendo tu perfil ante el mercado laboral nacional e
              internacional.
            </p>
          </div>

          <div class="certificados-grid">
            <div
              v-for="(cert, cIdx) in careerData.certificados || []"
              :key="cIdx"
              class="certificado-card"
            >
              <div class="cert-card-top">
                <div class="cert-badge">
                  <Trophy :size="16" />
                  <span>Certificación Incluida</span>
                </div>
                <h3 class="cert-name">{{ cert.nombre }}</h3>
                <p class="cert-desc">{{ cert.descripcion }}</p>
              </div>

              <div
                class="cert-subjects-block"
                v-if="cert.materias && cert.materias.length"
              >
                <h4 class="cert-subjects-title">
                  <BookOpen :size="14" /> Materias que integran el certificado:
                </h4>
                <ul class="cert-subjects-list">
                  <li v-for="(sub, sIdx) in cert.materias" :key="sIdx">
                    <CheckCircle2 :size="14" class="cert-check" />
                    <span>{{ sub }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
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

      <!-- 7. ADMISIÓN & CALCULADORA DE BECA -->
      <section id="admision" class="exec-section section-admission">
        <div class="uninter-container">
          <div class="section-header text-center">
            <span class="section-eyebrow">COMIENZA HOY</span>
            <h2 class="section-title">
              Inscripciones y <em>Calculadora de Beca</em>
            </h2>
            <p class="section-subtitle">
              Accede a becas por promedio, convenios empresariales y facilidades
              de pago cuatrimestrales. Da el siguiente paso en tu carrera
              profesional.
            </p>
          </div>

          <!-- Selector de opciones de contacto/beca -->
          <div class="admission-toggle">
            <button
              class="adm-btn"
              :class="{ active: activeAdmTab === 'calculadora' }"
              @click="activeAdmTab = 'calculadora'"
            >
              <Calculator :size="18" />
              <span>Calcula tu Beca</span>
            </button>
            <button
              class="adm-btn"
              :class="{ active: activeAdmTab === 'registro' }"
              @click="activeAdmTab = 'registro'"
            >
              <FileText :size="18" />
              <span>Registro de Admisión</span>
            </button>
          </div>

          <!-- TAB CALCULADORA -->
          <div
            v-show="activeAdmTab === 'calculadora'"
            class="adm-content-card animate-fade"
          >
            <ScholarshipCalculator
              defaultNivel="Licenciatura"
              :title="`Beca para ${careerData.shortName}`"
              highlightedTitle="Ejecutiva"
              description="Ingresa tus datos y promedio de bachillerato para conocer de forma inmediata el porcentaje de beca aplicable a tu colegiatura."
            />
          </div>

          <!-- TAB REGISTRO OFICIAL -->
          <div
            v-show="activeAdmTab === 'registro'"
            class="adm-content-card animate-fade"
          >
            <div class="direct-register-wrap">
              <div class="direct-register-info">
                <h3>Solicitud de Ingreso Ejecutivo</h3>
                <p>
                  Completa el formulario oficial para que un asesor educativo se
                  ponga en contacto contigo y valide tu documentación de
                  ingreso.
                </p>
                <div class="quick-contact-box">
                  <div class="contact-line">
                    <MessageCircle :size="18" />
                    <span
                      >WhatsApp directo:
                      <strong>+52 (777) 357 6937</strong></span
                    >
                  </div>
                  <div class="contact-line">
                    <Clock :size="18" />
                    <span
                      >Atención de Lunes a Viernes de 9:00 a 19:00 hrs y Sábados
                      de 9:00 a 14:00 hrs</span
                    >
                  </div>
                </div>
                <a
                  :href="whatsappUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="btn-whatsapp-large"
                >
                  <MessageCircle :size="20" />
                  <span>Chatear con un Asesor de Admisiones</span>
                </a>
              </div>

              <!-- Formulario Embebido Oficial -->
              <div class="direct-register-form">
                <iframe
                  src="https://link.superleads.mx/widget/form/4crDIop7ylztoeWZxtZ0"
                  style="
                    width: 100%;
                    height: 580px;
                    border: none;
                    border-radius: 12px;
                    overflow: hidden;
                  "
                  id="inline-4crDIop7ylztoeWZxtZ0"
                  data-layout="{'id':'INLINE'}"
                  data-trigger-type="alwaysShow"
                  data-activation-type="alwaysActivated"
                  data-deactivation-type="neverDeactivate"
                  data-form-name="FormEjecutivas"
                  data-height="580"
                  data-form-id="4crDIop7ylztoeWZxtZ0"
                  title="Formulario de Admisión Ejecutiva"
                ></iframe>
              </div>
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
import { ref, computed } from "vue";
import { useRoute } from "vue-router";
import {
  Clock,
  Calendar,
  Award,
  GraduationCap,
  Trophy,
  BookOpen,
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
} from "lucide-vue-next";

import NavbarIndex from "~/components/navbar/Index.vue";
import PortalFooter from "~/components/portal/Footer.vue";
import FloatingActions from "~/components/portal/FloatingActions.vue";
import ScholarshipCalculator from "~/components/shared/ScholarshipCalculator.vue";

// JSON Base de Datos de Carreras Ejecutivas
import carrerasEjecutivasDB from "~/assets/data/carrerasEjecutivas.json";

const route = useRoute();

// Pestañas de estado interactivo
const activeProfileTab = ref<"egreso" | "ingreso">("egreso");
const activeAdmTab = ref<"calculadora" | "registro">("calculadora");

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

// Asignación de imágenes fotográficas horizontales y verticales por carrera
const heroImages = computed(() => {
  const slug = (careerData.value?.slug || "").toLowerCase();
  if (slug.includes("derecho")) {
    return {
      h: encodeURI("/images/WebHorizontal/derrcho h.webp"),
      v: encodeURI("/images/WebVertical/derrcho v.webp"),
    };
  }
  if (slug.includes("comercio")) {
    return {
      h: encodeURI("/images/WebHorizontal/comercio h.webp"),
      v: encodeURI("/images/WebVertical/comercio v.webp"),
    };
  }
  if (slug.includes("internacional")) {
    return {
      h: encodeURI("/images/WebHorizontal/relaciones h.webp"),
      v: encodeURI("/images/WebVertical/relaciones v.webp"),
    };
  }
  if (slug.includes("publicidad")) {
    return {
      h: encodeURI("/images/WebHorizontal/comunica h.webp"),
      v: encodeURI("/images/WebVertical/comunica v.webp"),
    };
  }
  if (slug.includes("merca")) {
    return {
      h: encodeURI("/images/WebHorizontal/merca h.webp"),
      v: encodeURI("/images/WebVertical/merca v.webp"),
    };
  }
  if (slug.includes("gestion")) {
    return {
      h: encodeURI("/images/WebHorizontal/calidad h.webp"),
      v: encodeURI("/images/WebVertical/calidad v.webp"),
    };
  }
  // Default: Imagen de escritorio ejecutivo / profesional
  return {
    h: encodeURI("/images/posgrados/Web Horizontal/EAO copia.webp"),
    v: encodeURI("/images/WebVertical/admin v.webp"),
  };
});

// Número total de cuatrimestres
const countTerms = computed(() => {
  if (!careerData.value?.planEstudios) return 0;
  return Object.keys(careerData.value.planEstudios).length;
});

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
   STICKY SUBNAV
   ========================================================================== */
.sticky-subnav {
  position: sticky;
  top: 70px;
  z-index: 40;
  background: #ffffff;
  border-bottom: 1px solid rgba(105, 78, 57, 0.12);
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.04);
  overflow-x: auto;
  white-space: nowrap;
}

.subnav-container {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.subnav-link {
  display: inline-block;
  padding: 1rem 1.15rem;
  font-size: 0.85rem;
  font-weight: 700;
  color: #5c4d42;
  text-decoration: none;
  border-bottom: 2px solid transparent;
  transition: all 0.2s ease;
}

.subnav-link:hover {
  color: #694e39;
  border-bottom-color: #694e39;
}

.subnav-link--cta {
  color: #876d56;
  font-weight: 800;
}

/* ==========================================================================
   ESTILOS GENERALES DE SECCIONES
   ========================================================================== */
.exec-section {
  padding: 5.5rem 0;
  scroll-margin-top: 120px;
}

.section-eyebrow {
  display: block;
  font-size: 0.78rem;
  font-weight: 800;
  letter-spacing: 0.16em;
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
  color: #1f1812;
  margin: 0 0 1rem;
}

.section-title em {
  font-style: italic;
  color: #694e39;
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
  color: #665a50;
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
  color: #4a4038;
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
  background: #faf8f5;
  border: 1px solid rgba(105, 78, 57, 0.12);
  border-radius: 14px;
  padding: 1.6rem 1.4rem;
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease,
    border-color 0.25s ease;
}

.pillar-card:hover {
  transform: translateY(-4px);
  border-color: rgba(105, 78, 57, 0.3);
  box-shadow: 0 10px 24px rgba(105, 78, 57, 0.09);
}

.pillar-icon {
  width: 46px;
  height: 46px;
  border-radius: 12px;
  background: rgba(105, 78, 57, 0.1);
  color: #694e39;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
}

.pillar-card h3 {
  font-size: 1.05rem;
  font-weight: 700;
  color: #1f1812;
  margin-bottom: 0.5rem;
  line-height: 1.3;
}

.pillar-card p {
  font-size: 0.88rem;
  line-height: 1.55;
  color: #6b5d52;
  margin: 0;
}

/* ==========================================================================
   SECCIÓN 2: PERFILES
   ========================================================================== */
.section-profiles {
  background: #faf8f5;
  border-top: 1px solid rgba(105, 78, 57, 0.08);
  border-bottom: 1px solid rgba(105, 78, 57, 0.08);
}

.profiles-tabs {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin: 2.5rem 0 3rem;
  flex-wrap: wrap;
}

.tab-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  background: #ffffff;
  color: #665a50;
  border: 1px solid rgba(105, 78, 57, 0.18);
  padding: 0.85rem 1.75rem;
  border-radius: 999px;
  font-weight: 700;
  font-size: 0.95rem;
  cursor: pointer;
  transition: all 0.25s ease;
}

.tab-btn:hover {
  border-color: #694e39;
  color: #694e39;
}

.tab-btn.active {
  background: #694e39;
  color: #ffffff;
  border-color: #694e39;
  box-shadow: 0 4px 16px rgba(105, 78, 57, 0.25);
}

.profile-general-card {
  background: #ffffff;
  border-radius: 16px;
  padding: 2rem 2.25rem;
  border: 1px solid rgba(105, 78, 57, 0.12);
  margin-bottom: 2.5rem;
  box-shadow: 0 4px 16px rgba(105, 78, 57, 0.04);
}

.profile-general-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.8rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #876d56;
  margin-bottom: 0.85rem;
}

.profile-general-text {
  font-size: 1.12rem;
  line-height: 1.7;
  color: #3b322a;
  margin: 0;
}

/* Cuadrantes de Competencias */
.competencies-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
  gap: 1.75rem;
}

.competency-card {
  background: #ffffff;
  border-radius: 14px;
  padding: 1.85rem;
  border: 1px solid rgba(105, 78, 57, 0.1);
  box-shadow: 0 4px 18px rgba(105, 78, 57, 0.04);
}

.comp-header {
  display: flex;
  align-items: center;
  gap: 0.85rem;
  margin-bottom: 1.25rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(105, 78, 57, 0.08);
}

.comp-icon {
  width: 42px;
  height: 42px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.comp-icon--blue {
  background: rgba(15, 60, 97, 0.1);
  color: #0f3c61;
}

.comp-icon--sand {
  background: rgba(167, 141, 117, 0.2);
  color: #876d56;
}

.comp-icon--brown {
  background: rgba(105, 78, 57, 0.12);
  color: #694e39;
}

.comp-icon--dark {
  background: rgba(31, 24, 18, 0.08);
  color: #1f1812;
}

.comp-header h3 {
  font-size: 1.2rem;
  font-weight: 700;
  color: #1f1812;
  margin: 0;
}

.comp-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
}

.comp-list li {
  display: flex;
  align-items: flex-start;
  gap: 0.65rem;
  font-size: 0.92rem;
  line-height: 1.5;
  color: #4a4038;
}

.check-icon {
  color: #876d56;
  flex-shrink: 0;
  margin-top: 0.2rem;
}

/* Ingreso Split Grid */
.ingreso-split-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
}

.ingreso-card {
  background: #ffffff;
  border-radius: 16px;
  padding: 2.25rem;
  border: 1px solid rgba(105, 78, 57, 0.12);
  box-shadow: 0 4px 20px rgba(105, 78, 57, 0.04);
}

.ingreso-card__header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
  padding-bottom: 1.25rem;
  border-bottom: 1px solid rgba(105, 78, 57, 0.08);
}

.ingreso-card__header h3 {
  font-size: 1.25rem;
  font-weight: 700;
  color: #1f1812;
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
  color: #55483d;
  margin: 0;
}

.job-sectors-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
}

.job-sector-card {
  position: relative;
  background: #faf8f5;
  border: 1px solid rgba(105, 78, 57, 0.1);
  border-radius: 14px;
  padding: 1.85rem 1.6rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: all 0.25s ease;
}

.job-sector-card:hover {
  background: #ffffff;
  transform: translateY(-4px);
  border-color: #876d56;
  box-shadow: 0 10px 28px rgba(105, 78, 57, 0.09);
}

.sector-badge-number {
  font-size: 0.78rem;
  font-weight: 800;
  color: #a78d75;
  margin-bottom: 1.25rem;
  letter-spacing: 0.08em;
}

.sector-content {
  display: flex;
  align-items: flex-start;
  gap: 0.85rem;
}

.sector-icon {
  color: #694e39;
  flex-shrink: 0;
  margin-top: 0.15rem;
}

.sector-title {
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.45;
  color: #1f1812;
  margin: 0;
}

/* ==========================================================================
   SECCIÓN 4: PLAN DE ESTUDIOS
   ========================================================================== */
.section-syllabus {
  background: #faf8f5;
  border-top: 1px solid rgba(105, 78, 57, 0.08);
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
  border: 1px solid rgba(105, 78, 57, 0.2);
  padding: 0.45rem 1rem;
  border-radius: 999px;
  font-size: 0.85rem;
  font-weight: 700;
  color: #694e39;
}

.syllabus-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 2rem;
  margin-top: 3.5rem;
}

.cuatrimestre-card {
  background: #ffffff;
  border-radius: 16px;
  border: 1px solid rgba(105, 78, 57, 0.12);
  padding: 1.85rem;
  box-shadow: 0 4px 20px rgba(105, 78, 57, 0.04);
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;
}

.cuatrimestre-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 28px rgba(105, 78, 57, 0.08);
}

.cuatrimestre-header {
  margin-bottom: 1.25rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid rgba(105, 78, 57, 0.08);
}

.cuatrimestre-tag {
  display: block;
  font-size: 0.72rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: #a78d75;
  margin-bottom: 0.35rem;
}

.cuatrimestre-title {
  font-family: var(--font-serif, "Playfair Display", Georgia, serif);
  font-size: 1.35rem;
  font-weight: 800;
  color: #1f1812;
  margin: 0;
}

.cuatrimestre-subjects {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
}

.subject-row {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
}

.subject-bullet {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #876d56;
  margin-top: 0.45rem;
  flex-shrink: 0;
}

.subject-title {
  font-size: 0.95rem;
  line-height: 1.45;
  color: #383028;
  font-weight: 500;
}

/* ==========================================================================
   SECCIÓN 5: CERTIFICADOS CURRICULARES
   ========================================================================== */
.section-certificados {
  background: #ffffff;
}

.certificados-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.certificado-card {
  background: linear-gradient(180deg, #ffffff 0%, #faf8f5 100%);
  border: 1px solid rgba(167, 141, 117, 0.3);
  border-radius: 18px;
  padding: 2.25rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 8px 30px rgba(105, 78, 57, 0.05);
  transition: all 0.25s ease;
}

.certificado-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 14px 36px rgba(105, 78, 57, 0.1);
  border-color: #876d56;
}

.cert-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(105, 78, 57, 0.1);
  color: #694e39;
  padding: 0.4rem 0.85rem;
  border-radius: 999px;
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: 1.25rem;
}

.cert-name {
  font-family: var(--font-serif, "Playfair Display", Georgia, serif);
  font-size: 1.55rem;
  font-weight: 800;
  color: #1f1812;
  margin: 0 0 1rem;
}

.cert-desc {
  font-size: 0.98rem;
  line-height: 1.6;
  color: #55483d;
  margin: 0 0 1.75rem;
}

.cert-subjects-block {
  border-top: 1px dashed rgba(105, 78, 57, 0.2);
  padding-top: 1.25rem;
}

.cert-subjects-title {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.85rem;
  font-weight: 700;
  color: #694e39;
  margin: 0 0 0.85rem;
}

.cert-subjects-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.cert-subjects-list li {
  display: flex;
  align-items: flex-start;
  gap: 0.6rem;
  font-size: 0.88rem;
  color: #4a4038;
}

.cert-check {
  color: #876d56;
  flex-shrink: 0;
  margin-top: 0.15rem;
}

/* ==========================================================================
   SECCIÓN 6: LÍNEAS DE INVESTIGACIÓN
   ========================================================================== */
.section-research {
  background: #faf8f5;
}

.research-banner {
  background: linear-gradient(135deg, #1f1812 0%, #2e2218 100%);
  border-radius: 24px;
  padding: 4rem 3rem;
  border: 1px solid rgba(212, 184, 158, 0.2);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.research-content {
  max-width: 920px;
  margin: 0 auto;
  text-align: center;
}

.research-desc {
  font-size: 1.1rem;
  line-height: 1.7;
  color: #d4b89e;
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
  border: 1px solid rgba(212, 184, 158, 0.3);
  padding: 0.85rem 1.5rem;
  border-radius: 999px;
  color: #ffffff;
  font-weight: 700;
  font-size: 0.95rem;
  transition: all 0.25s ease;
}

.research-tag-card:hover {
  background: rgba(212, 184, 158, 0.2);
  border-color: #d4b89e;
  transform: translateY(-2px);
}

.tag-icon {
  color: #d4b89e;
}

/* ==========================================================================
   SECCIÓN 7: ADMISIÓN Y CALCULADORA
   ========================================================================== */
.section-admission {
  background: #ffffff;
}

.admission-toggle {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin: 2.5rem 0 3rem;
  flex-wrap: wrap;
}

.adm-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  background: #faf8f5;
  color: #665a50;
  border: 1px solid rgba(105, 78, 57, 0.18);
  padding: 0.85rem 1.75rem;
  border-radius: 999px;
  font-weight: 700;
  font-size: 0.95rem;
  cursor: pointer;
  transition: all 0.25s ease;
}

.adm-btn:hover {
  border-color: #694e39;
  color: #694e39;
}

.adm-btn.active {
  background: #694e39;
  color: #ffffff;
  border-color: #694e39;
  box-shadow: 0 4px 16px rgba(105, 78, 57, 0.25);
}

.adm-content-card {
  max-width: 1100px;
  margin: 0 auto;
}

/* Registro directo split */
.direct-register-wrap {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  background: #faf8f5;
  border: 1px solid rgba(105, 78, 57, 0.12);
  border-radius: 20px;
  padding: 2.5rem;
}

@media (min-width: 900px) {
  .direct-register-wrap {
    grid-template-columns: 1fr 1.25fr;
  }
}

.direct-register-info h3 {
  font-family: var(--font-serif, "Playfair Display", Georgia, serif);
  font-size: 1.85rem;
  color: #1f1812;
  margin-bottom: 1rem;
}

.direct-register-info p {
  color: #5c4d42;
  line-height: 1.6;
  margin-bottom: 2rem;
}

.quick-contact-box {
  background: #ffffff;
  border-radius: 12px;
  padding: 1.5rem;
  border: 1px solid rgba(105, 78, 57, 0.1);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
}

.contact-line {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  font-size: 0.9rem;
  color: #4a4038;
}

.contact-line svg {
  color: #876d56;
  flex-shrink: 0;
  margin-top: 0.15rem;
}

.btn-whatsapp-large {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  width: 100%;
  background: #25d366;
  color: #ffffff;
  padding: 1rem;
  border-radius: 12px;
  font-weight: 700;
  text-decoration: none;
  font-size: 1rem;
  transition: all 0.25s ease;
  box-shadow: 0 4px 16px rgba(37, 211, 102, 0.25);
}

.btn-whatsapp-large:hover {
  background: #1eb956;
  transform: translateY(-2px);
}

/* ==========================================================================
   OTRAS LICENCIATURAS EJECUTIVAS
   ========================================================================== */
.section-other-careers {
  background: #faf8f5;
  border-top: 1px solid rgba(105, 78, 57, 0.08);
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
  border: 1px solid rgba(105, 78, 57, 0.1);
  border-radius: 14px;
  padding: 1.5rem;
  text-decoration: none;
  transition: all 0.25s ease;
}

.other-career-card:hover {
  border-color: #694e39;
  transform: translateY(-3px);
  box-shadow: 0 8px 24px rgba(105, 78, 57, 0.08);
}

.other-career-sigla {
  width: 50px;
  height: 50px;
  border-radius: 12px;
  background: #694e39;
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
  font-size: 0.98rem;
  font-weight: 700;
  color: #1f1812;
  margin: 0 0 0.25rem;
  line-height: 1.35;
}

.other-career-info span {
  font-size: 0.8rem;
  color: #7a6b5f;
}

.other-career-arrow {
  color: #a78d75;
  transition: transform 0.2s ease;
}

.other-career-card:hover .other-career-arrow {
  color: #694e39;
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
  .direct-register-wrap {
    padding: 1.5rem;
  }
}
</style>
