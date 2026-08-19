const fs = require('fs');
const path = require('path');

const dbPath = path.join(__dirname, 'app', 'assets', 'data', 'posgrados.json');
const db = JSON.parse(fs.readFileSync(dbPath, 'utf-8'));

const updates = {
  "esp-marketing-digital": {
    description: "Desarrollarás las habilidades necesarias para diseñar, implementar y dirigir estrategias de marketing digital que impulsen marcas y proyectos en entornos competitivos. Aprenderás a usar herramientas tecnológicas, analizar datos, crear contenido innovador y conectar con audiencias de manera efectiva, para posicionarte como un profesional capaz de liderar la transformación digital de cualquier organización.",
    mercado_laboral: [
      "Agencias de publicidad y marketing digital: diseño, implementación y análisis de campañas en medios digitales.",
      "Departamentos de comunicación, mercadotecnia y ventas: desarrollo de estrategias omnicanal, posicionamiento de marca y gestión de clientes.",
      "Consultorías especializadas en estrategia y transformación digital.",
      "Empresas de comercio electrónico, medios digitales y startups tecnológicas.",
      "Emprendimientos propios."
    ],
    ingreso: "Desarrollarás las habilidades necesarias para diseñar campañas efectivas, interpretar métricas digitales y liderar proyectos de marketing en entornos competitivos a nivel nacional e internacional.",
    egreso: "Serás un profesional capaz de liderar estrategias digitales innovadoras, orientadas a resultados y al fortalecimiento de marcas en un entorno global. Dominarás las principales herramientas y plataformas de marketing digital.",
    plan: {
      "Primer Semestre": ["Marketing Digital", "Social Media", "Posicionamiento Web", "Diseño Aplicado al Marketing Digital"],
      "Segundo Semestre": ["Comercio Electrónico", "Mobile Marketing y Diseño de Aplicaciones", "Implementación de Campañas y Estrategias Digitales", "Diseño de Experiencia del Usuario (UI y UX)"]
    },
    areas_conocimiento: ["Mercadotecnia y Estrategia Digital (40%)", "Tecnología y Analítica de Datos (30%)", "Diseño y Experiencia del Usuario (20%)", "Innovación y Emprendimiento Digital (10%)"],
    lineas_investigacion: ["Campañas Publicitarias en Redes Sociales", "Posicionamiento en Motores de Búsqueda", "Branding Digital", "Posicionamiento en Medios Electrónicos", "Comercio Electrónico", "Experiencias de usuario"]
  },
  "esp-publicidad": {
    description: "Formar especialistas en publicidad capaces de analizar y desarrollar campañas publicitarias, fundamentadas y creativas, en un entorno ético y de responsabilidad social, a través de la aplicación de la mercadotecnia y la publicidad en proyectos específicos.",
    mercado_laboral: [
      "Agencias de publicidad, mercadeo y de medios en áreas creativas, cuentas y mercadotecnia.",
      "Ser crítico de espectáculos, programas artísticos, culturales y periodísticos.",
      "Puestos directivos, gerenciales y administrativos en empresas, instituciones públicas y privadas."
    ],
    egreso: "Elaborará estrategias de promoción para servicios y productos. Aplicará la agilidad mental, expondrá ideas, negociará proyectos para presentar presupuestos y campañas publicitarias. Emprenderá, liderará y actuará con responsabilidad y ética.",
    plan: {
      "Primer Semestre": ["Promoción y Publicidad", "Seminario de Campañas Publicitarias", "Seminario", "Sociedad y Publicidad", "Taller de Creatividad"],
      "Segundo Semestre": ["Análisis de Audiencias y Medios de Comunicación", "Motivación de Compra e Investigación de Mercados", "Seminario de Campañas Publicitarias I", "Seminario de Mercadotecnia"]
    },
    areas_conocimiento: ["Seminario", "Sociedad y Publicidad", "Promoción y Publicidad Global", "Análisis de Audiencia y Medios de Comunicación", "Taller de Creatividad", "Seminario de Campañas Publicitarias I y II"],
    areas_especializacion: ["Publicidad", "Mercadotecnia"],
    lineas_investigacion: ["Alianzas estratégicas entre agencias de publicidad", "La publicidad en el marco de la globalización", "Estrategias publicitarias", "Estrategias creativas", "Investigación de mercados", "Mercadotecnia estratégica"]
  },
  "esp-relaciones-mercantiles": {
    description: "Formar especialistas en Relaciones Mercantiles Internacionales capaces de negociar en términos legales y económicos contratos mercantiles en los ámbitos público y/o privado a escala local, nacional e internacional. Capaces de ofrecer soluciones a problemáticas mercantiles, a través de la investigación en áreas jurídicas y corporativas estratégicas haciendo uso de la tecnología educativa para crear mejores ambientes de enseñanza-aprendizaje.",
    mercado_laboral: [
      "Desarrollo de empresas e instituciones de nivel internacional en dependencias de estado relacionadas con la actividad jurídica legislativa.",
      "Como diseñador de programas y procedimientos del proceso mercantil internacional.",
      "Planeador y negociador de compra y venta de productos y servicios en el mercado mundial.",
      "Empresas privadas y públicas."
    ],
    egreso: [
      "La especialidad forma profesionales en las disciplinas jurídicas que encuadran el derecho corporativo.",
      "Tendrás la habilidad para comprender, asesorar, negociar, y solucionar controversias del ámbito corporativo, o desempeñarte como asesor y mediador en negociaciones mercantiles internacionales.",
      "Serás comprometido con tu entorno bajo condiciones de liderazgo y emprendimiento, considerando la responsabilidad social como un eje sobre el que gira todo profesionista responsable de ejercer su profesión."
    ],
    plan: {
      "Primer Semestre": ["Calidades Migratorias", "Contratos Mercantiles", "Legislación del Comercio Exterior", "Propiedad Intelectual"],
      "Segundo Semestre": ["Legislación Aduanera", "Marco Jurídico de la Competencia Económica", "Responsabilidad Social", "Tratados Comerciales Internacionales"]
    },
    areas_conocimiento: ["Propiedad Intelectual", "Responsabilidad Social", "Legislación del Comercio Exterior", "Contratos Mercantiles", "Marco Jurídico de Competencia", "Economía", "Legislación Aduanera", "Cualidades Migratorias", "Tratados Comerciales Internacionales"],
    areas_especializacion: ["Administración", "Derecho Mercantil", "Derecho Internacional"],
    lineas_investigacion: ["Regulación del Comercio Exterior", "Derecho Internacional", "Propiedad Intelectual"]
  },
  "maes-admin-direc-en-linea": {
    description: "Ser especialista en la toma de decisiones considerando todos los escenarios posibles para el fortalecimiento de la competitividad en el ámbito nacional e internacional; Ser estratega capaz de optimizar los recursos disponibles de las organizaciones nacionales e internacionales; Ser profesional que domine las técnicas y métodos de vanguardia.",
    mercado_laboral: [
      "Gestión empresarial.",
      "Capacitación y consultoría estratégica.",
      "Dirección en organismos públicos, cámaras y asociaciones profesionales y empresariales.",
      "Desarrollo de negocio y/o corporativo.",
      "Servicios financieros (banca de inversión, fondos de inversión, seguros, etc.).",
      "Generador de estrategias de marketing.",
      "Diseñador de modelos de negocio.",
      "Docencia en instituciones educativas."
    ],
    ingreso: "Título de Licenciatura o certificado con la totalidad de créditos, si se cursa como opción de titulación. En ambos casos para Licenciaturas de: Administración de Empresas, Administración de Empresas Turísticas, Administración de Negocios Internacionales, Administración Pública, Administración y Mercadotecnia, Comercio Exterior, Contaduría, Economía y Finanzas, Ingeniería en Inteligencia de Mercados, Ingeniería Industrial y de Sistemas de Calidad, Mercadotecnia, Mercadotecnia y Publicidad, Relaciones Internacionales, Relaciones Internacionales y Ciencias Políticas, Relaciones Internacionales, Economía, Diseño Gráfico, Diseño de Modas y Tendencias Internacionales, Diseño Industrial, Animación y Diseño Digital o áreas afines.",
    egreso: "Seleccionará, utilizará y aplicará el conjunto técnicas, procesos y métodos de administración en el ámbito de los negocios internacionales. Establecerá estrategias administrativas, de acuerdo con las necesidades de las organizaciones e instituciones, determinado por el análisis integral en el contexto internacional.",
    plan: {
      "Primer Semestre": ["Matemáticas Administrativas", "Enfoque Administrativo Contemporáneo", "Mercadotecnia", "Administración Financiera Internacional"],
      "Segundo Semestre": ["Economía", "Administración Estratégica", "Plan de Negocios Internacionales", "Responsabilidad Social de las Organizaciones"],
      "Tercer Semestre": ["Seminario de Tesis I", "Análisis de Mercados Internacionales", "Optativa I", "Optativa II"],
      "Cuarto Semestre": ["Finanzas Internacionales", "Seminario de Tesis II", "Optativa III", "Optativa IV"]
    },
    areas_conocimiento: ["Gestión", "Finanzas", "Sociales", "Mercadotecnia", "Negocios"],
    areas_especializacion: ["Gestión del Factor Humano", "Alta Dirección", "Negocios Internacionales", "Finanzas Corporativas", "Especialización en Mercadotecnia", "Innovación y Diseño de Modelo de Negocios"],
    lineas_investigacion: ["Micro, pequeñas y medianas empresas (MPyME)", "Entorno económico internacional", "Responsabilidad social empresarial", "Negocios Internacionales", "Organismos y organizaciones internacionales"]
  },
  "maes-admin-direc": {
    description: "Ser especialista en la toma de decisiones considerando todos los escenarios posibles para el fortalecimiento de la competitividad en el ámbito nacional e internacional; Ser estratega capaz de optimizar los recursos disponibles de las organizaciones nacionales e internacionales; Ser profesional que domine las técnicas y métodos de vanguardia empresarial.",
    mercado_laboral: [
      "Gestión y dirección empresarial: liderazgo de equipos, toma de decisiones estratégicas y administración de recursos.",
      "Consultoría y capacitación estratégica: análisis organizacional, desarrollo de proyectos y asesoría a empresas en crecimiento.",
      "Organismos públicos y privados: dirección administrativa, coordinación de programas y gestión institucional.",
      "Servicios financieros: análisis de inversiones, banca, fondos de inversión, seguros y evaluación financiera.",
      "Comercio y negocios internacionales: operaciones globales, logística, expansión de mercados y estrategias internacionales.",
      "Desarrollo corporativo: creación, implementación y optimización de modelos de negocio.",
      "Docencia y formación profesional: enseñanza, capacitación ejecutiva y desarrollo de talento humano."
    ],
    egreso: "Seleccionará, utilizará y aplicará el conjunto técnicas, procesos y métodos de administración en el ámbito de los negocios internacionales. Establecerá estrategias administrativas, de acuerdo con las necesidades de las organizaciones e instituciones, determinado por el análisis integral en el contexto internacional.",
    plan: {
      "Primer Semestre": ["Matemáticas Administrativas", "Enfoque Administrativo Contemporáneo", "Mercadotecnia", "Administración Financiera Internacional"],
      "Segundo Semestre": ["Economía", "Administración Estratégica", "Plan de Negocios Internacionales", "Responsabilidad Social"],
      "Tercer Semestre": ["Seminario de Tesis I", "Análisis de Mercados Internacionales", "Optativa I", "Optativa II"],
      "Cuarto Semestre": ["Finanzas Internacionales", "Seminario de Tesis II", "Optativa III", "Optativa IV"]
    },
    areas_conocimiento: ["Gestión y Alta Dirección 35%", "Finanzas y Economía Global 30%", "Negocios Internacionales 20%", "Mercadotecnia y Desarrollo de Negocio 10%", "Ciencias Sociales y Responsabilidad Organizacional 5%"],
    lineas_investigacion: ["Micro, pequeñas y medianas empresas (MPyME)", "Entorno económico internacional", "Responsabilidad social empresarial", "Negocios Internacionales", "Organismos y organizaciones internacionales", "Evaluación financiera internacional", "Diseño y administración de planes de negocios", "Desarrollo sustentable", "Competencias laborales", "El conocimiento y las organizaciones", "Capital humano y recursos humanos", "Finanzas personales", "Alianzas Internacionales", "Gestión de la Calidad"]
  }
};

for (const [slug, data] of Object.entries(updates)) {
  if (db[slug]) {
    if (data.description) db[slug].description = data.description;
    if (data.mercado_laboral) db[slug].mercado_laboral = data.mercado_laboral;
    if (data.ingreso) db[slug].ingreso = data.ingreso;
    if (data.egreso) db[slug].egreso = data.egreso;
    if (data.plan) db[slug].plan = data.plan;
    if (data.areas_conocimiento) db[slug].areas_conocimiento = data.areas_conocimiento;
    if (data.areas_especializacion) db[slug].areas_especializacion = data.areas_especializacion;
    if (data.lineas_investigacion) db[slug].lineas_investigacion = data.lineas_investigacion;
    if (data.areas_enfoque) db[slug].areas_enfoque = data.areas_enfoque;
    if (data.certificaciones) db[slug].certificaciones = data.certificaciones;
  }
}

fs.writeFileSync(dbPath, JSON.stringify(db, null, 2), 'utf-8');
console.log('Posgrados batch 2 updated successfully');
