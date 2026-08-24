# Graph Report - app  (2026-08-07)

## Corpus Check
- 222 files · ~166,152 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 607 nodes · 493 edges · 142 communities (80 shown, 62 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS · INFERRED: 1 edges (avg confidence: 0.5)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- Ui
- Ui
- Degree
- Ui
- Ui
- Ui
- Degree
- Navbar
- Portal
- Diplomados
- Layout
- Layout
- Portal
- Degree
- Bachillerato
- Bachillerato
- Secundaria
- Secundaria
- Ui
- Posgrados
- Licprese
- Licprese
- Portal
- Portal
- Carreras
- Posgrados
- Posgrados
- Posgrados
- Bachillerato
- Degree
- Footer
- Licprese
- Portal
- Secundaria
- Bachillerato
- Bachillerato
- Diplomados
- Portal
- Portal
- Portal
- Shared
- Ui
- Ui
- Ui
- Diplomados
- Contact
- Degree
- Degree
- Ui
- Ui
- Bachillerato
- Bachillerato
- Degree
- Degree
- Degree
- Diplomados
- Diplomados
- Diplomados
- Layout
- Licprese
- Portal
- Posgrados
- Posgrados
- Posgrados
- Posgrados
- Secundaria
- Bachillerato
- Bachillerato
- Bachillerato
- Bachillerato
- Bachillerato
- Clients
- Degree
- Diplomados
- Diplomados
- Diplomados
- Diplomados
- Diplomados
- Diplomados
- Hero
- Licprese
- Licprese
- Licprese
- Licprese
- Ourwork
- Portal
- Portal
- Portal
- Portal
- Portal
- Posgrados
- Posgrados
- Posgrados
- Posgrados
- Posgrados
- Posgrados
- Secundaria
- Secundaria
- Secundaria
- Secundaria
- Secundaria
- Services
- Team
- Admisiones
- Bachillerato
- Secundaria

## God Nodes (most connected - your core abstractions)
1. `useFormField()` - 5 edges
2. `goTo()` - 4 edges
3. `FORM_ITEM_INJECTION_KEY` - 4 edges
4. `next()` - 3 edges
5. `resetTimer()` - 3 edges
6. `ButtonVariants` - 3 edges
7. `prev()` - 2 edges
8. `BadgeVariants` - 2 edges
9. `Props` - 2 edges
10. `inputGroupAddonVariants` - 2 edges

## Surprising Connections (you probably didn't know these)
- `Props` --references--> `ButtonVariants`  [EXTRACTED]
  components/ui/button/Button.vue → components/ui/button/index.ts

## Import Cycles
- None detected.

## Communities (142 total, 62 thin omitted)

### Community 0 - "Ui"
Cohesion: 0.06
Nodes (27): navigationMenuTriggerStyle, delegatedProps, emits, forwarded, props, delegatedProps, emits, forwarded (+19 more)

### Community 1 - "Ui"
Cohesion: 0.07
Nodes (18): emits, forwarded, props, props, delegatedProps, emits, forwarded, props (+10 more)

### Community 2 - "Degree"
Cohesion: 0.10
Nodes (16): academicData, basePrice, carrerasPorNivel, currentStep, discountAmount, finalPrice, isStep1Valid, isStep2Valid (+8 more)

### Community 3 - "Ui"
Cohesion: 0.18
Nodes (11): { error, formItemId, formDescriptionId, formMessageId }, { formDescriptionId }, props, id, props, { error, formItemId }, props, { name, formMessageId } (+3 more)

### Community 4 - "Ui"
Cohesion: 0.14
Nodes (10): inputGroupAddonVariants, InputGroupButtonProps, InputGroupButtonVariants, InputGroupVariants, props, props, props, props (+2 more)

### Community 5 - "Ui"
Cohesion: 0.13
Nodes (7): props, props, props, props, props, props, props

### Community 6 - "Degree"
Cohesion: 0.15
Nodes (9): activeTabBlocks, activeTabIndex, categories, currentSyllabus, optativas, props, selectedCategory, syllabusData (+1 more)

### Community 7 - "Navbar"
Cohesion: 0.15
Nodes (11): activeDropdown, Child, leftPrograms, MegaData, MegaItem, mobileOpen, Program, programs (+3 more)

### Community 8 - "Portal"
Cohesion: 0.17
Nodes (9): activeArea, activeModalidad, areaIcons, areas, filtered, Licenciatura, licenciaturas, modalidadLabel (+1 more)

### Community 9 - "Diplomados"
Cohesion: 0.20
Nodes (6): activeProgram, categorias, filter, isDrawerOpen, programList, tabs

### Community 10 - "Layout"
Cohesion: 0.20
Nodes (8): canGoBack, crumbs, HREF_OVERRIDES, isHome, LABELS, parentHref, route, router

### Community 11 - "Layout"
Cohesion: 0.20
Nodes (5): chatDismissed, chatOpen, PARTICLES, redesOpen, showButtons

### Community 12 - "Portal"
Cohesion: 0.29
Nodes (9): activeIndex, animating, goTo(), next(), prev(), prevIndex, resetTimer(), slides (+1 more)

### Community 13 - "Degree"
Cohesion: 0.22
Nodes (6): activeFaq, activeIndex, generalFaq, isOpen, props, showNotification

### Community 14 - "Bachillerato"
Cohesion: 0.22
Nodes (7): animatedStats, navLinks, pasoActivo, semestres, stats, statsEl, statsVisible

### Community 15 - "Bachillerato"
Cohesion: 0.22
Nodes (7): animatedStats, navLinks, pasoActivo, semestres, stats, statsEl, statsVisible

### Community 16 - "Secundaria"
Cohesion: 0.22
Nodes (7): animatedStats, navLinks, pasoActivo, semestres, stats, statsEl, statsVisible

### Community 17 - "Secundaria"
Cohesion: 0.22
Nodes (7): animatedStats, navLinks, pasoActivo, semestres, stats, statsEl, statsVisible

### Community 18 - "Ui"
Cohesion: 0.25
Nodes (4): props, delegatedProps, props, props

### Community 19 - "Posgrados"
Cohesion: 0.25
Nodes (7): careerData, careerSlug, customCssVars, durationText, programTypeName, route, semestersCount

### Community 20 - "Licprese"
Cohesion: 0.29
Nodes (4): benefits, form, highlights, step

### Community 21 - "Licprese"
Cohesion: 0.29
Nodes (4): form, isSubmitting, programas, submitted

### Community 22 - "Portal"
Cohesion: 0.29
Nodes (4): form, isSubmitting, programas, submitted

### Community 23 - "Portal"
Cohesion: 0.29
Nodes (6): activeTab, Actividad, actividades, stats, tabColors, tabs

### Community 24 - "Carreras"
Cohesion: 0.29
Nodes (6): careerData, careerSlug, comparisonData, customCssVars, planDescription, route

### Community 25 - "Posgrados"
Cohesion: 0.33
Nodes (5): activeProgram, closeDrawer(), doctorados, isDrawerOpen, scrollToContacto()

### Community 26 - "Posgrados"
Cohesion: 0.33
Nodes (5): activeProgram, closeDrawer(), especialidades, isDrawerOpen, scrollToContacto()

### Community 27 - "Posgrados"
Cohesion: 0.33
Nodes (5): activeProgram, closeDrawer(), isDrawerOpen, maestrias, scrollToContacto()

### Community 28 - "Bachillerato"
Cohesion: 0.33
Nodes (3): form, isSubmitting, submitted

### Community 29 - "Degree"
Cohesion: 0.33
Nodes (3): activeCertIndex, currentCert, props

### Community 30 - "Footer"
Cohesion: 0.33
Nodes (5): columns, contact, currentYear, legalLinks, social

### Community 31 - "Licprese"
Cohesion: 0.33
Nodes (3): activeBachelor, DataCard, isDrawerOpen

### Community 32 - "Portal"
Cohesion: 0.33
Nodes (4): form, loading, programas, submitted

### Community 33 - "Secundaria"
Cohesion: 0.33
Nodes (3): form, loading, submitted

### Community 35 - "Bachillerato"
Cohesion: 0.40
Nodes (4): actividades, currentIndex, modeloPilares, source

### Community 36 - "Diplomados"
Cohesion: 0.40
Nodes (3): form, programas, sent

### Community 37 - "Portal"
Cohesion: 0.40
Nodes (4): blogs, otrosSitios, social, year

### Community 39 - "Portal"
Cohesion: 0.40
Nodes (4): noticiaPrincipal, noticias, tagBg, tagColor

### Community 40 - "Shared"
Cohesion: 0.40
Nodes (4): ComparisonData, ComparisonPoint, Competitor, props

### Community 41 - "Ui"
Cohesion: 0.50
Nodes (3): delegatedProps, props, BadgeVariants

### Community 42 - "Ui"
Cohesion: 0.40
Nodes (3): emits, modelValue, props

### Community 43 - "Ui"
Cohesion: 0.40
Nodes (3): emits, modelValue, props

### Community 44 - "Diplomados"
Cohesion: 0.40
Nodes (4): careerData, careerSlug, route, semestersCount

### Community 45 - "Contact"
Cohesion: 0.50
Nodes (3): form, formSchema, onSubmit

## Knowledge Gaps
- **348 isolated node(s):** `clientsLogos`, `formSchema`, `form`, `onSubmit`, `currentYear` (+343 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **62 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **What connects `clientsLogos`, `formSchema`, `form` to the rest of the system?**
  _348 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Ui` be split into smaller, more focused modules?**
  _Cohesion score 0.05873015873015873 - nodes in this community are weakly interconnected._
- **Should `Ui` be split into smaller, more focused modules?**
  _Cohesion score 0.07142857142857142 - nodes in this community are weakly interconnected._
- **Should `Degree` be split into smaller, more focused modules?**
  _Cohesion score 0.1 - nodes in this community are weakly interconnected._
- **Should `Ui` be split into smaller, more focused modules?**
  _Cohesion score 0.13725490196078433 - nodes in this community are weakly interconnected._
- **Should `Ui` be split into smaller, more focused modules?**
  _Cohesion score 0.13333333333333333 - nodes in this community are weakly interconnected._