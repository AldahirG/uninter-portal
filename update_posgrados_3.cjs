const fs = require('fs');
const path = require('path');

const dbPath = path.join(__dirname, 'app', 'assets', 'data', 'posgrados.json');
const db = JSON.parse(fs.readFileSync(dbPath, 'utf-8'));

const updates = {
  "maes-educacion-docente": {
    description: "Formar profesionistas en el campo de la Educación en Formación Docente capaces de diseñar, implementar, estructurar y fundamentar los principios de planeación y evaluación educativa de los modelos actuales, así como las estrategias innovadoras, para crear situaciones de enseñanza-aprendizaje, a partir de la relación epistemológica y tecnológica, para alcanzar una integración entre los componentes pedagógicos y didácticos en la transformación de la realidad contextual de la práctica docente.",
    mercado_laboral: ["Instituciones Educativas y Centros Escolares Públicos y Privados.", "Centros de Investigación.", "Sistema Educativo Federal, Estatal o Municipal."],
    ingreso: "Título de Licenciatura o Certificado con la totalidad de créditos, si se cursa como opción de titulación. En ambos casos para licenciaturas de Educación, Pedagogía, Ciencias de la Educación, Enseñanza del Español, Idiomas o áreas afines.",
    egreso: "El egresado de la Maestría en Educación en Formación Docente estará formado y será capacitado para impactar en los procesos de enseñanza y aprendizaje en todas sus modalidades escolares, por sus conocimientos teóricos, metodológicos y técnicos, podrá desarrollar sus funciones con enfoque innovador en el diseño, planeación, implementación y evaluación de planes y programas de estudios. También podrá desempeñarse en dependencias educativas y centros escolares, públicos y privados.",
    plan: {
      "Primer Semestre": ["Historia del Pensamiento Metodológico Universal", "Taller de Modelos de Enseñanza del Siglo XXI", "Evaluación de Programas Educativos", "Responsabilidad Social"],
      "Segundo Semestre": ["Observación en el Aula", "Psicología Educativa", "Problemas de la Enseñanza en la Educación", "Paradigmas de Aprendizaje e Innovación Educativa"],
      "Tercer Semestre": ["Fundamentación y Planeación Didáctica", "Seminario de Tesis I", "Optativa I", "Optativa II"],
      "Cuarto Semestre": ["Administración de Instituciones Educativas", "Seminario de Tesis II", "Optativa III", "Optativa IV"]
    },
    areas_conocimiento: ["Investigación", "Metodología", "Tecnología Educativa", "Pedagogía"],
    areas_especializacion: ["Pedagogía", "Investigación y Metodología", "Tecnología Educativa"],
    lineas_investigacion: ["Modelos de enseñanza aplicables a programas y asignaturas en instituciones de educación básica, medio superior y superior", "Evaluación de planes y programas docentes en instituciones de educación, medio superior y superior", "Estrategias de enseñanza aplicando Nuevas Tecnologías de Información y Comunicación (NTIC's)"]
  },
  "maes-gestion-calidad": {
    description: "Formar especialistas profesionales en la administración de sistemas de calidad con los conocimientos, habilidades, valores y las competencias técnico-gerenciales necesarias para la selección, aplicación y desarrollo de herramientas de vanguardia, que promuevan el diseño de estrategias en la implantación de modelos de aseguramiento y gestión de la calidad en empresas, tanto públicas como privadas, en un entorno globalizado; y que sean capaces de evaluar y mejorar los procesos productivos, con un enfoque de responsabilidad y compromiso sociales.",
    mercado_laboral: "Empresas Privadas nacionales e internacionales, instituciones Públicas y educativas. Empresas de consultoría: Cámaras y asociaciones empresariales. Organizaciones no gubernamentales.",
    ingreso: ["Capacidad de razonamiento, análisis y síntesis", "Capacidad de comprensión de lectura y expresión oral y escrita", "Nivel suficiente de comprensión de inglés", "Responsabilidad, capacidad de trabajo individual y en equipo", "Espíritu crítico y auto crítico", "Una base significativa de formación metodológica"],
    egreso: "El perfil del egresado de la Maestría en Finanzas Corporativas, se sustenta en tres aspectos profesionales fundamentales: habilidades y destrezas, actitudes y valores, que son representativos de una formación integral para alcanzar un desempeño eficaz en las diferentes funciones y responsabilidades de las organizaciones, privadas, públicas y sociales.",
    plan: {
      "Modulo I": ["Sistemas de Información", "Sistemas de Administración para la Calidad Total", "Control Estadístico", "Legislación de la Calidad Aplicada"],
      "Modulo II": ["Dirección de la Productividad", "Costos de Calidad", "Competencias Laborales", "Responsabilidad Social de las Organizaciones"],
      "Modulo III": ["Reingeniería de Procesos", "Gestión de la Calidad y Normas Técnicas", "Laboratorio de Calidad", "Seminario de Investigación"],
      "Modulo IV": ["Auditorías de Calidad", "Implantación de Sistemas de Gestión de la Calidad", "Seminario de Titulación", "Optativa"],
      "Optativa": ["Función Despliegue de la Calidad", "Estrategias Financieras", "Gestión de la Innovación y Desarrollo Tecnológico"]
    },
    areas_conocimiento: ["Administración", "Informática", "Derecho", "Economía y Finanzas", "Investigación"],
    areas_especializacion: ["Administración", "Informática", "Derecho", "Economía y Finanzas", "Investigación"],
    lineas_investigacion: ["MiPyMES", "Evaluación Financiera", "Finanzas Personales", "Afores", "Seguros", "Fondos de inversión", "Convergencia con la normatividad contable Internacional"]
  },
  "maes-lenguas": {
    description: "Formar Maestros en el campo de la Enseñanza de Lenguas Extranjeras con sólida preparación teórica y metodológica, a partir de la reflexión propositiva sobre los problemas de la enseñanza y del aprendizaje, capaces de comprender y saber utilizar las herramientas pedagógicas, didácticas, socio-culturales, de traducción y semióticas, asimismo; construir las estrategias de aprendizaje que contribuyan a la programación, desarrollo y evaluación de cursos ubicados en un marco metodológico, por medio de los actuales avances de la semiótica, pragmática, cognición, traducción y la comunicación, apoyándose en el uso de la tecnología educativa; logrando competencias profesionales, académicas y sociales en escenarios interdisciplinarios y multidisciplinarios para la enseñanza y el aprendizaje del español y del inglés como lengua extranjera y ocupaciones de traducción.",
    mercado_laboral: "El egresado de la Maestría en la Enseñanza de Lenguas Extranjeras de la Universidad Internacional contará con las herramientas para realizar su trabajo y servicio profesional a la altura de las necesidades del siglo XXI, siendo fundamental la competencia en multiculturalidad. La certificación en idiomas es una llave maestra que abre puertas en el ámbito profesional, académico y de negocios, además de facilitar la posibilidad de vivir en un país extranjero. Actualmente, la demanda global de especialistas en enseñanza de lenguas es creciente; naciones como China, Estados Unidos, Canadá, Alemania y Japón lideran la búsqueda de docentes altamente capacitados en este campo.",
    egreso: [
      "La maestría forma profesionales capaces de implementar la metodología adecuada a la enseñanza del español y del inglés como lengua extranjera y ocupaciones de traducción.",
      "Comprenderás y aplicarás los conocimientos adquiridos mediante estrategias de análisis, síntesis y evaluación.",
      "Formarás juicios de los procesos de adquisición de una lengua extranjera/una segunda lengua para implementar estrategias de enseñanza adecuadas.",
      "Demostrarás aptitudes de sensibilidad respecto a sus escalas de valores con el objetivo de lograr una comunicación intercultural asertiva.",
      "Implementarás estrategias docentes considerando los diferentes estilos de aprendizaje de los estudiantes.",
      "Diseñarás materiales didácticos para ser empleados como apoyo en el proceso enseñanza-aprendizaje.",
      "Serás autónomo para diseñar e implementar una investigación científica en el campo de las lenguas."
    ],
    plan: {
      "Primer Semestre": ["Adquisición de una Segunda Lengua / Lengua Extranjera", "Lingüística Histórica del Español", "Metodología de la Enseñanza de Lenguas Extranjeras", "Responsabilidad Social"],
      "Segundo Semestre": ["Lenguaje, Sociedad y Cultura", "Metodología de la Investigación en la Adquisición de Lenguas", "Desarrollo de destrezas Lingüísticas", "Métodos Estadísticos Avanzados"],
      "Tercer Semestre": ["Seminario de Tesis", "La Pragmática y el Estudio del Español", "Optativa I", "Optativa II"],
      "Cuarto Semestre": ["Elaboración del Currículum de Lenguas", "Gramática Comparativa del inglés y del español", "Optativa III", "Optativa IV"]
    },
    areas_conocimiento: ["Lengua y Cultura", "Literatura y Educación", "Comunicación", "Investigación"],
    areas_especializacion: ["Lengua y Cultura", "Literatura y Educación", "Comunicación", "Investigación"],
    lineas_investigacion: ["Problemáticas de La lengua en su entorno", "Metodología y programas para adquirir una lengua", "Transición en la lengua en contexto", "Procesos de traducción e interpretación"]
  },
  "doc-administracion": {
    description: "Formar investigadores, capaces de generar conocimiento original e innovador en el área de Finanzas, Mercadotecnia, Alta Dirección, Negocios Internacionales y Tecnología, con la finalidad de desarrollar modelos empresariales que promuevan el crecimiento de los diferentes sectores industriales, con una visión de impacto regional, nacional e internacional.",
    mercado_laboral: "Orienta la formación hacia la alta dirección, la innovación empresarial y la consultoría estratégica, preparando profesionales para liderar organizaciones complejas en entornos globales. Los egresados acceden a puestos como director general, consultor senior, director de planeación estratégica o asesor en competitividad, tanto en corporativos, firmas de consultoría, sector financiero y emprendimientos propios. Este perfil es altamente valorado por el sector privado, con sueldos altamente competitivos en cargos ejecutivos y en consultoría internacional.",
    ingreso: ["Capacidad de razonamiento, análisis y síntesis, de comprensión de lectura y expresión oral y escrita", "Comprensión de inglés", "Responsabilidad, capacidad de trabajo individual y en grupo", "Espíritu crítico y autocrítico", "Base significativa de formación metodológica", "Interés por la Investigación", "Interés por el trabajo académico de difusión y divulgación"],
    egreso: [
      "Capacidad para generar y transmitir el conocimiento para formar nuevos investigadores en las áreas de conocimiento de finanzas, mercadotecnia, negocios internacionales, alta dirección y tecnología.",
      "Capacidad de liderazgo intelectual para generar avances en la ciencia de la Administración, con una actitud ética, innovadora, crítica y de compromiso social.",
      "Capacidad para generar conocimiento a través de la investigación científica, y divulgarlo a través de la docencia y la publicación de sus trabajos.",
      "Competencia para asesorar organizaciones para lograr su desarrollo y crecimiento.",
      "Habilidad para liderar grupos de investigación.",
      "Habilidad para diagnosticar y solucionar problemas en las organizaciones y su entorno."
    ],
    plan: {
      "Primer Semestre": ["Proyecto Doctoral I", "Metodología de la Investigación", "Estrategia, Productividad y Competitividad"],
      "Segundo Semestre": ["Proyecto Doctoral II", "Seminario de Finanzas Internacionales", "Análisis Multivariante"],
      "Tercer Semestre": ["Proyecto Doctoral III", "Gestión del Conocimiento", "Optativa"],
      "Cuarto Semestre": ["Proyecto Doctoral IV", "Administración Estratégica", "Optativa"]
    },
    areas_especializacion: ["Administración", "Alta Dirección", "Finanzas Internacionales"],
    lineas_investigacion: ["Planeación Estratégica", "Desarrollo Empresarial", "Admón. de Procesos Educativos", "Admón. de Mercadotecnia", "Admón. de la Tecnología", "Admón. Factor Humano"],
    certificaciones: ["ISO 9001:2015 (institucional), acreditación FIMPES (institucional)", "Título de Doctorado: Al concluir satisfactoriamente todos los requisitos formales del programa", "Certificado de Estudios o Historial Académico"]
  },
  "doc-humanidades": {
    description: "Formar investigadores con una sólida formación teórica y metodológica en el campo de las humanidades con énfasis en la interculturalidad, que sean capaces de generar conocimientos causales y prácticos a partir de la aplicación de análisis interdisciplinarios de los fenómenos educativos que se le presenten; a través de lineamientos metodológicos del más alto nivel, ejerciendo el pensamiento crítico y análisis de diversas problemáticas educativas para el desarrollo y fortalecimiento del estado del arte en ámbitos internacionales.",
    mercado_laboral: "Forma investigadores y líderes académicos capaces de analizar, diseñar y dirigir proyectos culturales y educativos con enfoque crítico e interdisciplinario. Sus egresados se integran principalmente en universidades, centros de investigación, organismos culturales y agencias internacionales, desempeñando roles como profesor-investigador, gestor cultural, consultor en políticas educativas y analista de diversidad e interculturalidad.",
    ingreso: ["Vocación de servicio.", "Conocimientos básicos sobre los principales enfoques teóricos de las humanidades, principalmente en relación con la educación, el lenguaje y la psicología.", "Disposición para trabajar e interactuar con diversidad de personas.", "Disposición a la búsqueda permanente de conocimientos en problemas relacionados con la educación, el lenguaje y la psicología.", "Interés en promover el desarrollo de grupos e individuos desde una perspectiva humanística.", "Habilidad y manejo del pensamiento abstracto y verbal.", "Cualidades personales que permitan el contacto con poblaciones de diversas características."],
    egreso: "El egresado del Doctorado en Humanidades con opción terminal en Educación de la Universidad Internacional estará formado y capacitado para investigar procesos sociales complejos relacionados principalmente con la cultura nacional y regional, las estrategias de conocimientos de punta en la educación y el lenguaje. Sustentado por sus conocimientos teóricos, metodológicos y una perspectiva ética, podrá desarrollar sus funciones con enfoque innovador en el diseño, planeación, implementación y evaluación de planes y programas culturales; así como dirigir equipos de trabajo multidisciplinarios que realicen proyectos de investigación originales y de gran impacto en su entorno.",
    plan: {
      "Primer Semestre": ["Proyecto Doctoral I", "Metodología de la Investigación", "Sociedad del Conocimiento y Humanidades"],
      "Segundo Semestre": ["Proyecto Doctoral II", "Historia y Cultura", "Educación, Sociedad y Economía"],
      "Tercer Semestre": ["Proyecto Doctoral III", "Metodología para el Análisis del Discurso", "Optativa I"],
      "Cuarto Semestre": ["Proyecto Doctoral IV", "Metodología para el Análisis del Discurso", "Optativa II"],
      "Quinto Semestre": ["Proyecto Doctoral V", "Optativa III", "Optativa IV"]
    },
    areas_especializacion: ["Educación, Sociedad y Economía", "Temas Selectos de Educación y Psicología I", "Temas Selectos de Educación y Psicología II", "Seminario de Educación y Tecnología en Ambientes de Aprendizaje", "Seminario de Educación y Neurociencias", "Democracia y Gobernanza en Instituciones Educativas"],
    lineas_investigacion: ["Diseño curricular y desarrollo sostenible", "Multiculturalidad e interculturalidad", "Políticas, gestión e instituciones educativas", "Ciudadanía, ética y política", "Territorio, equidad y tecnología", "Tecnologías y modelos de aprendizaje", "Diseño y evaluación curricular", "Didáctica y comunicación", "Innovación educativa y capacitación docente", "Estudios de educación comparada", "Aprendizaje y evaluación"]
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
console.log('Posgrados batch 3 updated successfully');
