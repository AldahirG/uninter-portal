
/* ═══ TOKENS ═══ */
.biu-page {
  --g: #6baf04;
  --gd: #4a7a02;
  --gl: #aad45a;
  --dark: #111a06;
}
.biu-wrap {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.5rem;
}
.biu-eyebrow {
  display: block;
  font-size: 0.7rem;
  font-weight: 800;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--g);
  margin: 0 0 0.6rem;
}
.biu-eyebrow--center {
  text-align: center;
}
.biu-eyebrow--light {
  color: var(--gl);
}
.biu-title {
  font-family: var(--font-serif, Georgia, serif);
  font-size: clamp(1.7rem, 3.5vw, 2.6rem);
  font-weight: 900;
  color: #1a2a0a;
  margin: 0 0 1.25rem;
  letter-spacing: 0.02em;
  line-height: 1.1;
}
.biu-title em {
  font-style: italic;
  color: var(--g);
}
.biu-title--center {
  text-align: center;
}
.biu-title--white {
  color: #fff;
}
.biu-body {
  font-size: 0.95rem;
  color: #475569;
  line-height: 1.75;
  margin: 0 0 1rem;
}

/* ═══ HERO ═══ */
.biu-hero {
  position: relative;
  min-height: 640px;
  display: flex;
  align-items: center;
  padding-top: 90px;
}
.biu-hero__bg {
  position: absolute;
  inset: 0;
}
.biu-hero__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 25%;
}
.biu-hero__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    110deg,
    rgba(10, 20, 4, 0.92) 0%,
    rgba(74, 122, 2, 0.65) 55%,
    rgba(10, 20, 4, 0.4) 100%
  );
}
.biu-hero__grain {
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
  pointer-events: none;
}

.biu-hero__inner {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 3rem;
  align-items: center;
  padding-top: 3rem;
  padding-bottom: 5rem;
}

/* Badge row */
.biu-hero__badge-row {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.25rem;
}
.biu-hero__badge {
  display: inline-block;
  background: var(--g);
  color: #fff;
  font-size: 0.68rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  padding: 0.3rem 0.9rem;
  border-radius: 4px;
}
.biu-hero__rvoe {
  font-size: 0.72rem;
  color: rgba(255, 255, 255, 0.45);
  font-weight: 500;
}

.biu-hero__title {
  font-family: var(--font-serif, Georgia, serif);
  font-size: clamp(2.8rem, 6vw, 5rem);
  font-weight: 900;
  color: #fff;
  line-height: 1.05;
  margin: 0 0 1rem;
  letter-spacing: -0.01em;
}
.biu-hero__title em {
  font-style: italic;
  color: var(--gl);
}

.biu-hero__tagline {
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.65);
  margin: 0 0 2rem;
  line-height: 1.6;
  max-width: 480px;
}

.biu-hero__ctas {
  display: flex;
  gap: 0.875rem;
  flex-wrap: wrap;
}
.biu-hero__cta {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  font-weight: 700;
  padding: 0.875rem 1.75rem;
  border-radius: 8px;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s;
}
.biu-hero__cta--primary {
  background: var(--g);
  color: #fff;
  border: 2px solid var(--g);
}
.biu-hero__cta--primary:hover {
  background: var(--gd);
  border-color: var(--gd);
  transform: translateY(-2px);
}
.biu-hero__cta--ghost {
  background: rgba(255, 255, 255, 0.08);
  color: #fff;
  border: 2px solid rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(6px);
}
.biu-hero__cta--ghost:hover {
  background: rgba(255, 255, 255, 0.14);
  transform: translateY(-2px);
}

/* Floating chips */
.biu-hero__chips {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}
.biu-hero__chip {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 12px;
  padding: 0.75rem 1rem;
  min-width: 200px;
}
.biu-hero__chip-icon {
  color: var(--gl);
  flex-shrink: 0;
}
.biu-hero__chip strong {
  display: block;
  font-size: 0.85rem;
  font-weight: 800;
  color: #fff;
  line-height: 1.1;
}
.biu-hero__chip span {
  display: block;
  font-size: 0.72rem;
  color: rgba(255, 255, 255, 0.55);
}

/* Scroll indicator */
.biu-hero__scroll {
  position: absolute;
  bottom: 1.5rem;
  left: 50%;
  transform: translateX(-50%);
  color: rgba(255, 255, 255, 0.4);
  cursor: pointer;
  animation: scrollBounce 2s ease-in-out infinite;
  z-index: 1;
}
@keyframes scrollBounce {
  0%,
  100% {
    transform: translateX(-50%) translateY(0);
  }
  50% {
    transform: translateX(-50%) translateY(6px);
  }
}

/* ═══ QUICK NAV ═══ */
.biu-qnav {
  background: #fff;
  border-bottom: 1px solid #e2e8f0;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
  position: sticky;
  top: 80px;
  z-index: 200;
}
.biu-qnav__inner {
  display: flex;
  align-items: center;
  gap: 0;
  overflow-x: auto;
  scrollbar-width: none;
}
.biu-qnav__inner::-webkit-scrollbar {
  display: none;
}
.biu-qnav__link {
  background: none;
  border: none;
  padding: 1rem 1.25rem;
  font-size: 0.8rem;
  font-weight: 700;
  color: #64748b;
  cursor: pointer;
  white-space: nowrap;
  position: relative;
  transition: color 0.2s;
  letter-spacing: 0.02em;
}
.biu-qnav__link::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: var(--g);
  transform: scaleX(0);
  transition: transform 0.2s;
}
.biu-qnav__link:hover {
  color: var(--gd);
}
.biu-qnav__link:hover::after {
  transform: scaleX(1);
}

/* ═══ STATS ═══ */
.biu-stats {
  background: var(--dark);
  padding: 2.5rem 0;
}
.biu-stats__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
}
.biu-stats__item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 0.5rem;
}
.biu-stats__icon {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: rgba(107, 175, 4, 0.12);
  color: var(--g);
  display: flex;
  align-items: center;
  justify-content: center;
}
.biu-stats__num {
  font-family: var(--font-serif, Georgia, serif);
  font-size: 2.4rem;
  font-weight: 900;
  color: #fff;
  line-height: 1;
}
.biu-stats__label {
  font-size: 0.78rem;
  color: rgba(255, 255, 255, 0.5);
  font-weight: 600;
}

/* ═══ ¿POR QUÉ? ═══ */
.biu-porque-sec {
  background: #fff;
  padding: 6rem 0;
}
.biu-porque-sec__inner {
  display: grid;
  grid-template-columns: 1fr 380px;
  gap: 4rem;
  align-items: start;
}
.biu-porque-sec__pills {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1.75rem;
}
.biu-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  font-size: 0.76rem;
  font-weight: 700;
  background: rgba(107, 175, 4, 0.09);
  color: var(--gd);
  border: 1px solid rgba(107, 175, 4, 0.2);
  border-radius: 6px;
  padding: 0.3rem 0.75rem;
}

/* Highlight card */
.biu-hcard {
  background: linear-gradient(145deg, #0f1f06 0%, #1a3008 100%);
  border-radius: 20px;
  padding: 2rem;
  position: sticky;
  top: 130px;
}
.biu-hcard__header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: var(--gl);
  font-size: 0.85rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}
.biu-hcard__list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.875rem;
  margin-bottom: 1.75rem;
}
.biu-hcard__list li {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.45;
}
.biu-hcard__item-icon {
  width: 28px;
  height: 28px;
  border-radius: 6px;
  background: rgba(107, 175, 4, 0.15);
  color: var(--g);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.biu-hcard__cta {
  display: block;
  text-align: center;
  background: var(--g);
  color: #fff;
  text-decoration: none;
  font-size: 0.88rem;
  font-weight: 700;
  padding: 0.875rem;
  border-radius: 10px;
  transition: background 0.2s;
}
.biu-hcard__cta:hover {
  background: var(--gd);
}

/* ═══ PLAN DE ESTUDIOS ═══ */
.biu-plan {
  background: #f8faf3;
  padding: 6rem 0;
}
.biu-plan__caption {
  text-align: center;
  font-size: 0.85rem;
  color: #94a3b8;
  margin: -0.5rem 0 2.5rem;
}

/* Timeline */
.biu-timeline {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 0;
  position: relative;
  margin-bottom: 2.5rem;
}
.biu-timeline__bar {
  position: absolute;
  bottom: 28px;
  left: calc(100% / 12);
  right: calc(100% / 12);
  height: 3px;
  background: #e2e8f0;
  border-radius: 2px;
  overflow: hidden;
}
.biu-timeline__bar-fill {
  height: 100%;
  background: var(--g);
  border-radius: 2px;
  transition: width 0.4s ease;
}
.biu-timeline__step {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  padding: 0.75rem 0.5rem 0;
  position: relative;
  z-index: 1;
  transition: transform 0.2s;
}
.biu-timeline__step:hover {
  transform: translateY(-2px);
}
.biu-timeline__num {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 2.5px solid #e2e8f0;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  font-weight: 800;
  color: #94a3b8;
  transition: all 0.25s;
  position: relative;
  z-index: 1;
}
.biu-timeline__label {
  font-size: 0.72rem;
  font-weight: 700;
  color: #94a3b8;
  text-align: center;
  white-space: nowrap;
  transition: color 0.25s;
}
.biu-timeline__badge-area {
  font-size: 0.6rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  color: var(--gd);
  background: rgba(107, 175, 4, 0.12);
  border-radius: 4px;
  padding: 0.1rem 0.4rem;
}

/* Active step */
.biu-timeline__step--active .biu-timeline__num {
  background: var(--g);
  border-color: var(--g);
  color: #fff;
  box-shadow: 0 0 0 4px rgba(107, 175, 4, 0.2);
}
.biu-timeline__step--active .biu-timeline__label {
  color: var(--gd);
}
.biu-timeline__step--area .biu-timeline__num {
  border-color: var(--g);
  color: var(--gd);
}
.biu-timeline__step--area.biu-timeline__step--active .biu-timeline__num {
  background: var(--gd);
  border-color: var(--gd);
}

/* Panel */
.biu-plan__panel {
  background: #fff;
  border-radius: 16px;
  padding: 2rem 2.5rem;
  border: 1.5px solid rgba(107, 175, 4, 0.15);
  max-width: 640px;
  margin: 0 auto;
  box-shadow: 0 4px 24px rgba(107, 175, 4, 0.07);
  transition: border-color 0.3s;
}
.biu-plan__panel--area {
  border-color: var(--g);
}
.biu-plan__panel-tag {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.65rem;
  font-weight: 800;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--gd);
  background: rgba(107, 175, 4, 0.1);
  border-radius: 4px;
  padding: 0.2rem 0.6rem;
  margin-bottom: 0.875rem;
}
.biu-plan__panel-sem {
  font-size: 1rem;
  font-weight: 800;
  color: #1e293b;
  margin: 0 0 1.25rem;
}
.biu-plan__list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem 1.5rem;
}
.biu-plan__list li {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.84rem;
  color: #334155;
}
.biu-plan__check {
  color: var(--g);
  flex-shrink: 0;
}
.biu-plan__area-msg {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  text-align: center;
  padding: 1rem 0;
}
.biu-plan__area-icon {
  color: var(--g);
}
.biu-plan__area-msg p {
  font-size: 0.9rem;
  color: #475569;
  margin: 0;
  line-height: 1.6;
}
.biu-plan__area-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  background: var(--g);
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 0.65rem 1.25rem;
  font-size: 0.85rem;
  font-weight: 700;
  cursor: pointer;
  transition: background 0.2s;
}
.biu-plan__area-btn:hover {
  background: var(--gd);
}

/* ═══ PERFIL EGRESO ═══ */
.biu-egreso {
  background: #fff;
  padding: 6rem 0;
}
.biu-egreso__inner {
  display: grid;
  grid-template-columns: 340px 1fr;
  gap: 5rem;
  align-items: start;
}
.biu-egreso__left {
  position: sticky;
  top: 130px;
}
.biu-egreso__right {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.875rem;
}
.biu-egreso__item {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  background: #f8faf3;
  border-radius: 12px;
  padding: 1rem 1.125rem;
  border: 1px solid rgba(107, 175, 4, 0.1);
}
.biu-egreso__icon {
  width: 36px;
  height: 36px;
  border-radius: 8px;
  background: rgba(107, 175, 4, 0.12);
  color: var(--g);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.biu-egreso__item span {
  font-size: 0.83rem;
  color: #334155;
  line-height: 1.5;
  padding-top: 0.1rem;
}

/* ═══ MODELO ═══ */
.biu-modelo {
  background: var(--dark);
  padding: 6rem 0;
  position: relative;
  overflow: hidden;
}
.biu-modelo__noise {
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Ccircle cx='30' cy='30' r='1' fill='rgba(107,175,4,0.08)'/%3E%3C/svg%3E");
  background-size: 60px 60px;
}
.biu-modelo__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;
  position: relative;
}
.biu-modelo__pilar {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(107, 175, 4, 0.15);
  border-radius: 14px;
  padding: 1.75rem 1.5rem;
  transition:
    border-color 0.25s,
    background 0.25s;
}
.biu-modelo__pilar:hover {
  border-color: rgba(107, 175, 4, 0.4);
  background: rgba(107, 175, 4, 0.05);
}
.biu-modelo__pilar-icon {
  width: 52px;
  height: 52px;
  border-radius: 12px;
  background: rgba(107, 175, 4, 0.12);
  color: var(--g);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
}
.biu-modelo__pilar h3 {
  font-size: 0.92rem;
  font-weight: 800;
  color: #fff;
  margin: 0 0 0.4rem;
}
.biu-modelo__pilar p {
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.5);
  line-height: 1.55;
  margin: 0;
}

/* ═══ PROCESO ADMISIÓN ═══ */
.biu-proceso {
  background: #f8faf3;
  padding: 6rem 0;
}
.biu-proceso__steps {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0;
  position: relative;
  margin-bottom: 3rem;
}
.biu-proceso__step {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 0 1rem;
  position: relative;
}
.biu-proceso__step-num {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: var(--g);
  color: #fff;
  font-size: 0.8rem;
  font-weight: 900;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  flex-shrink: 0;
  position: relative;
  z-index: 1;
}
.biu-proceso__connector {
  position: absolute;
  top: 18px;
  left: calc(50% + 18px);
  right: calc(-50% + 18px);
  height: 2px;
  background: rgba(107, 175, 4, 0.25);
  z-index: 0;
}
.biu-proceso__step-icon {
  width: 70px;
  height: 70px;
  border-radius: 16px;
  background: #fff;
  border: 1.5px solid rgba(107, 175, 4, 0.15);
  color: var(--g);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.25rem;
  box-shadow: 0 4px 16px rgba(107, 175, 4, 0.08);
}
.biu-proceso__step h3 {
  font-size: 0.88rem;
  font-weight: 800;
  color: #1e293b;
  margin: 0 0 0.375rem;
}
.biu-proceso__step p {
  font-size: 0.8rem;
  color: #64748b;
  line-height: 1.55;
  margin: 0;
}
.biu-proceso__cta-wrap {
  display: flex;
  justify-content: center;
}
.biu-proceso__cta {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: var(--g);
  color: #fff;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 700;
  padding: 0.9rem 2rem;
  border-radius: 10px;
  transition:
    background 0.2s,
    transform 0.2s;
}
.biu-proceso__cta:hover {
  background: var(--gd);
  transform: translateY(-2px);
}

/* ═══ MÁS SOBRE ═══ */
.biu-mas {
  background: #fff;
  padding: 5.5rem 0;
}
.biu-mas__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2.5rem;
}
.biu-mas__col {
  background: #f8faf3;
  border-radius: 16px;
  padding: 2rem;
  border: 1px solid rgba(107, 175, 4, 0.12);
}
.biu-mas__col-head {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid rgba(107, 175, 4, 0.12);
  color: var(--g);
}
.biu-mas__col-head h3 {
  font-size: 0.8rem;
  font-weight: 900;
  letter-spacing: 0.06em;
  color: #334155;
  margin: 0;
}
.biu-mas__list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}
.biu-mas__list--2col {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem 1rem;
}
.biu-mas__list li {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.84rem;
  color: #475569;
}
.biu-mas__check {
  color: var(--g);
  flex-shrink: 0;
}

/* ═══ ¿POR QUÉ ESTUDIAR? ═══ */
.biu-razones {
  background: #111a06;
  padding: 6rem 0;
  text-align: center;
}
.biu-razones__head-icon {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: rgba(107, 175, 4, 0.12);
  color: var(--g);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.25rem;
}
.biu-razones__title {
  font-family: var(--font-serif, Georgia, serif);
  font-size: clamp(1.4rem, 2.5vw, 2rem);
  font-weight: 900;
  color: #fff;
  letter-spacing: 0.05em;
  margin: 0 0 3rem;
}
.biu-razones__grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1rem;
  text-align: left;
}
.biu-razones__item {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(107, 175, 4, 0.12);
  border-radius: 12px;
  padding: 1.125rem;
  display: flex;
  gap: 0.75rem;
  align-items: flex-start;
  transition:
    border-color 0.2s,
    background 0.2s;
}
.biu-razones__item:hover {
  border-color: rgba(107, 175, 4, 0.35);
  background: rgba(107, 175, 4, 0.05);
}
.biu-razones__item-icon {
  color: var(--g);
  flex-shrink: 0;
  margin-top: 2px;
}
.biu-razones__item span {
  font-size: 0.81rem;
  color: rgba(255, 255, 255, 0.68);
  line-height: 1.55;
}

/* ═══ RESPONSIVE ═══ */
@media (max-width: 1200px) {
  .biu-razones__grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
@media (max-width: 1024px) {
  .biu-hero__inner {
    grid-template-columns: 1fr;
  }
  .biu-hero__chips {
    flex-direction: row;
    flex-wrap: wrap;
  }
  .biu-porque-sec__inner {
    grid-template-columns: 1fr;
  }
  .biu-hcard {
    position: static;
  }
  .biu-egreso__inner {
    grid-template-columns: 1fr;
  }
  .biu-egreso__left {
    position: static;
  }
  .biu-modelo__grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .biu-proceso__steps {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
  .biu-proceso__connector {
    display: none;
  }
  .biu-proceso__step-num {
    margin-bottom: 0.75rem;
  }
}
@media (max-width: 768px) {
  .biu-stats__grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .biu-egreso__right {
    grid-template-columns: 1fr;
  }
  .biu-timeline {
    grid-template-columns: repeat(3, 1fr);
  }
  .biu-mas__grid {
    grid-template-columns: 1fr;
  }
  .biu-razones__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 540px) {
  .biu-hero__chips {
    flex-direction: column;
  }
  .biu-stats__grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .biu-modelo__grid {
    grid-template-columns: 1fr;
  }
  .biu-proceso__steps {
    grid-template-columns: 1fr;
  }
  .biu-timeline {
    grid-template-columns: repeat(2, 1fr);
  }
  .biu-plan__list {
    grid-template-columns: 1fr;
  }
  .biu-razones__grid {
    grid-template-columns: 1fr;
  }
  .biu-mas__list--2col {
    grid-template-columns: 1fr;
  }
}
