const fs = require('fs');
const path = require('path');

const dbPath = path.join(__dirname, 'app', 'assets', 'data', 'diplomados.json');
const db = JSON.parse(fs.readFileSync(dbPath, 'utf-8'));

const updates = {
  "diplomado-en-diseno-de-interiores": {
    plan: {
      "Módulo I": ["Proyección Arquitectónica (36 Horas)"],
      "Módulo II": ["Teoría del Color (24 Horas)"],
      "Módulo III": ["Taller Experimental de Mobiliario (24 Horas)"],
      "Módulo IV": ["Diseño y Morfología del Espacio (36 Horas)"],
      "Módulo V": ["Taller de Diseño Interior y Modelado 3D"]
    },
    duracion: "5 Módulos",
    description: "Generar habilidades metodológicas, técnicas y del pensamiento; a través de la adaptación de entornos, para formar especialistas en la creación y transformación de espacios útiles, funcionales y armónicos.",
  },
  "diplomado-en-fotografia": {
    plan: {
      "Módulo 1: Fundamentos y Composición": [
        "Introducción al diplomado y qué es fotografía",
        "Historia de la fotografía y principios básicos del laboratorio fotográfico",
        "Lenguaje de la imagen, regla de tercios y encuadres",
        "Ángulos, iluminación, sintaxis visual y perspectiva",
        "Fotógrafos reconocidos mundiales y apreciación estética"
      ],
      "Módulo 2: La Cámara Fotográfica y Lente": [
        "La cámara, sus partes y tipos de cámaras",
        "Diferencias entre la cámara análoga y digital",
        "Las partes de un lente, longitud focal y tipos",
        "La sensibilidad de la película y medición de luz",
        "Enfoque, velocidades de obturación y aberturas de diafragma"
      ],
      "Módulo 3: Fotografía en Blanco y Negro": [
        "Escala de grises y contraste",
        "El uso de los filtros",
        "Uso del laboratorio para la fotografía análoga"
      ],
      "Módulo 4: El Color y Temperatura": [
        "Qué es el color y colores luz",
        "Psicología, simbología y características del color",
        "Construcción del color en la fotografía digital",
        "Temperatura del color y filtros de corrección"
      ],
      "Módulo 5: Luz Artificial": [
        "El flash",
        "Fotografía de estudio"
      ],
      "Módulo 6: Fotografía Digital y Laboratorio": [
        "Estructura de la imagen digital y archivos",
        "Laboratorio digital (Photoshop)",
        "Fotografía y ética (derechos de autor y propiedad)"
      ]
    },
    duracion: "173 hrs.",
    description: "Desarrollar las habilidades técnicas y comunicativas que se requieren para el correcto manejo de una cámara profesional de 35mm a través de la identificación de sus elementos, uso de materiales y equipo, reconocimiento de características fotográficas, así como del análisis de las condiciones de luz y otros aspectos que construyen una buena imagen, logrando así diversos resultados fotográficos mediante distintos métodos de trabajo y la aplicación de la fotografía en sus distintas áreas de trabajo."
  },
  "diplomado-en-diseno-y-desarrollo-de-proyectos-academicos-de-investigacion": {
    plan: {
      "Módulo I": ["Evaluación y elaboración del protocolo de investigación (Título, Justificación, Planteamiento, Objetivos, Metodología, etc.)"],
      "Módulo II": ["Desarrollo del proyecto de investigación del capítulo I (Introducción, Justificación, Planteamiento, Hipótesis, Objetivos, Instrumentos)"],
      "Módulo III": ["Desarrollo del proyecto de investigación del capítulo II (Marco de referencia, teórico, conceptual y legal)"],
      "Módulo IV": ["Desarrollo del proyecto de investigación del capítulo III (Resultados, Discusión, Conclusiones, Recomendaciones, Anexos, Referencias)"]
    },
    duracion: "96 hrs. (4 Módulos)",
    description: "Desarrollar un proyecto de investigación en las diferentes áreas disciplinarias que contemplen los elementos teóricos y metodológicos establecidos por la División de Posgrado e Investigación para la obtención del título.",
    egreso: "Tendrá una base significativa de formación metodológica. Habrá desarrollado interés por la investigación. Poseerá una actitud crítica y de autocrítica."
  },
  "diplomado-en-frances": {
    plan: {
      "Bloque 1 – Iniciación al francés": ["Reconocer y usar expresiones básicas para saludar, presentarse y deletrear palabras.", "El alfabeto, la francofonía, saludos y despedidas, los números (1–20), los días, meses y estaciones.", "El verbo avoir, la edad, il y a, la sala de clase."],
      "Bloque 2 – Identidad y nacionalidad": ["Presentarse formal e informalmente, hablar de origen y nacionalidad, describir personas y profesiones.", "Los números hasta 100, el verbo être, países y nacionalidades, profesiones.", "Artículos definidos e indefinidos, masculino y femenino, preposiciones en / au / aux / du / de."],
      "Bloque 3 – Vida cotidiana y rutinas": ["Describir actividades diarias, horarios y costumbres personales. Preguntar y responder sobre acciones habituales.", "Verbos regulares terminados en -ER, verbos pronominales, negaciones, pronombres tónicos.", "La hora, momentos del día, adverbios de frecuencia, actividades cotidianas."],
      "Bloque 4 – Entorno y descripción": ["Describir lugares, objetos y personas, expresar ubicación y posesión.", "Léxico de la casa, animales, familia, adjetivos calificativos, posesivos, preposiciones de lugar (sur, sous, devant, derrière, entre)."],
      "Bloque 5 – Narrar hechos y experiencias": ["Hablar de experiencias pasadas y acciones terminadas. Comprender la diferencia entre pasado y presente.", "Passé composé con avoir y être, participios pasados, expresiones temporales, verbos reflexivos en pasado, conectores cronológicos."],
      "Bloque 6 – Planes y proyectos": ["Expresar intenciones, deseos y acciones futuras. Formular peticiones y expresar gustos.", "Futur proche, vouloir / pouvoir / devoir, venir de + infinitif, expresiones de intención."],
      "Bloque 7 – Opiniones y comparaciones": ["Expresar opiniones, acuerdos y desacuerdos. Comparar personas, lugares y objetos.", "Comparativos y superlativos, conectores lógicos, vocabulario de pasatiempos, estudios, trabajo y viajes."],
      "Bloque 8 – Relaciones y situaciones cotidianas": ["Hablar de la salud, el trabajo, la vida social y el carácter de las personas.", "Pronombres de objeto directo e indirecto, y / en, adjetivos de carácter y descripción física, léxico de salud y profesiones."],
      "Bloque 9 – Contar historias y expresar hipótesis": ["Narrar experiencias completas, formular hipótesis y expresar deseos.", "Imparfait y contraste con passé composé, oraciones condicionales, conectores de causa y consecuencia."],
      "Bloque 10 – Consolidación A2": ["Redactar textos breves y coherentes, mantener una conversación simple.", "Redacción de correos y mensajes, descripción de experiencias, simulacros DELF A2."],
      "Bloque 11 – Materias de especialidad I": ["Fortalecer la pronunciación, entonación y comprensión auditiva; desarrollar confianza en la expresión oral.", "Conversación y mediación: debates, exposiciones, simulaciones reales.", "Francés para negocios / turismo y restauración (DFP)."],
      "Bloque 12 – Materias de especialidad II": ["Aplicar el francés en contextos profesionales y preparar la presentación a certificaciones internacionales.", "Preparación a los exámenes DELF y DFP: estrategias, simulacros, expresión oral y escrita avanzada."]
    },
    duracion: "400 hrs. (10 Bloques)",
    description: "Desarrollar las cuatro habilidades lingüísticas y comunicativas de los estudiantes con la finalidad de aplicar sus conocimientos en un ambiente profesional, académico o personal, y proporcionar al alumno habilidades y destrezas para la adquisición y manejo del idioma francés como lengua extranjera a través de una práctica dinámica y efectiva.",
    ingreso: "Personas interesadas en adquirir competencias profesionales en francés, con motivación por la comunicación internacional y el desarrollo de habilidades prácticas en entornos laborales.",
    egreso: "Profesionales capaces de interactuar con seguridad en situaciones cotidianas y de negocio, expresar ideas, opiniones y planes, comprender textos y conversaciones, y aplicar el francés en su especialidad profesional, respaldado por certificaciones internacionales reconocidas."
  },
  "diplomado-en-ingles-profesional": {
    plan: {
      "Unidad 1: Cultura e identidad": ["Uso del presente simple y continuo, verbos de estado, preguntas directas e indirectas.", "Vocabulario: sentimientos, identidad y expresiones culturales."],
      "Unidad 2: El arte de la interpretación": ["Presente perfecto (already, just, yet) y pasado simple.", "Vocabulario: estilos musicales, emociones, descripciones de espectáculos."],
      "Unidad 3: Experiencias y relatos": ["Pasado simple, continuo y perfecto.", "Vocabulario: adverbios terminados en -ly, conectores narrativos."],
      "Unidad 4: Oportunidades y desarrollo profesional": ["Futuro (will, going to, present continuous), predicciones.", "Vocabulario: empleo, educación, condiciones laborales."],
      "Unidad 5: Bienestar y hábitos saludables": ["Verbos modales y primer condicional.", "Vocabulario: estilo de vida saludable, alimentación, hábitos."],
      "Unidad 6: Comunicación empresarial esencial": ["Presentaciones profesionales, descripciones de empresas y funciones laborales, etiqueta telefónica y redacción de correos formales."],
      "Unidad 7: Inglés para correos electrónicos (E-mail English)": ["Redacción de correos claros y formales para solicitudes, quejas, confirmaciones y seguimiento."],
      "Unidad 8: Inglés telefónico (Telephone English)": ["Atención y realización de llamadas, concertación de citas, manejo de reclamos y reservaciones."],
      "Unidad 9: Reportes y correspondencia empresarial": ["Redacción de informes, cartas de presentación y currículums en inglés.", "Vocabulario: lenguaje financiero, estadístico y corporativo."],
      "Unidad 10: Inglés legal internacional": ["Términos y expresiones del derecho y los negocios internacionales.", "Vocabulario: contratos, acuerdos, compensaciones, responsabilidades."],
      "Unidad 11: Negociaciones internacionales": ["Estrategias de negociación y persuasión; acuerdos laborales, compensaciones y reembolsos."],
      "Unidad 12: Presentaciones profesionales": ["Estructura de presentaciones efectivas, manejo de apoyos visuales, lenguaje persuasivo y conclusiones ejecutivas."]
    },
    duracion: "400 hrs. (12 Unidades)",
    description: "Desarrollar en el participante las competencias lingüísticas y comunicativas necesarias para interactuar con fluidez y precisión en contextos internacionales, aplicando el idioma inglés de manera efectiva en situaciones de comunicación empresarial, negociación, correspondencia, presentaciones y redacción profesional.",
    ingreso: "Estudiantes de licenciatura o posgrado en áreas de negocios, comercio, administración, turismo, derecho o afines. Profesionales que deseen mejorar su comunicación en inglés dentro de entornos empresariales o corporativos. Personas con nivel intermedio de inglés (B1) comprobable o equivalente.",
    egreso: "Comunicarse con fluidez y corrección en inglés en contextos laborales y académicos internacionales. Redactar correos, informes, cartas y documentos empresariales con estructura, vocabulario y tono formal adecuados. Participar activamente en reuniones, llamadas, negociaciones y presentaciones en inglés con seguridad y profesionalismo. Emplear terminología técnica relacionada con los negocios, el derecho comercial y la comunicación corporativa."
  },
  "diplomado-en-administracion-de-obra-i": {
    plan: {
      "Contenido Temático": [
        "Administración de Operaciones en Edificación",
        "Administración de Proyectos en Edificación",
        "Costos y presupuestos de Construcción",
        "Seminario de Administración de Proyectos de Obras en Edificación"
      ]
    },
    duracion: "128 hrs.",
    description: "Formar especialistas de manera integral, que cuenten con el conocimiento administrativo y técnico suficiente, para desempeñarse de manera competitiva y eficaz en el ámbito de la construcción, con capacidades demostradas para la planeación, programación y control de todos los procesos que demanda un proyecto de edificación.",
  },
  "diplomado-en-administracion-de-obra-ii": {
    plan: {
      "Contenido Temático": [
        "El Entorno de la Empresa Constructora en México",
        "Marco Legal de la Construcción",
        "Proyectos de Inversión en Edificación",
        "Sistemas de Información Aplicados a la Edificación"
      ]
    },
    duracion: "128 hrs.",
    description: "Formar especialistas de manera integral, que cuenten con el conocimiento administrativo y técnico suficiente, para desempeñarse de manera competitiva y eficaz en el ámbito de la construcción, con capacidades demostradas para la planeación, programación y control de todos los procesos que demanda un proyecto de edificación.",
  },
  "diplomado-en-direccion-de-empresas": {
    plan: {
      "Economía": ["Establecer la asignación de los recursos, a través de la evaluación de los indicadores económicos que son aplicados a la administración pública o privada, logrando así una mayor competitividad de la organización en el ámbito global."],
      "Administración Estratégica": ["Elaborar estrategias dentro de una organización, a través de la aplicación de los elementos del proceso administrativo, para la consecución de los objetivos considerados en la planeación estratégica de las unidades económicas y el fortalecimiento de sus procesos."],
      "Plan de Negocios Internacionales": ["Analizar la viabilidad y factibilidad de un plan de negocios, mediante la ejecución de las distintas fases que lo componen, considerando los aspectos técnicos de mercado, financieros y legales, para determinar su implementación dentro de un contexto internacional."],
      "Responsabilidad Social": ["Crear indicadores de responsabilidad social, a través del análisis de modelos, herramientas, normas y certificaciones, comprometiendo la transparencia y valores éticos, para generar óptimas condiciones de competitividad en el marco de la responsabilidad que tienen las empresas con la sociedad y el desarrollo sustentable."]
    },
    duracion: "128 hrs.",
    description: "UNINTER te ofrece un ambiente multicultural donde podrás interactuar con estudiantes de otras nacionalidades. Por otro lado en sus diplomados encontrarás compañeros y profesores con perfiles académicos que podrán enriquecer tu experiencia",
    egreso: "El egresado del Diplomado en Dirección Empresarial estará preparado para asumir roles de liderazgo y responsabilidad en diversas áreas de la empresa, aportando sus conocimientos y habilidades en la toma de decisiones estratégicas, la creación de planes de negocios internacionales, y la implementación de estrategias de responsabilidad social que contribuyan al crecimiento y sostenibilidad de la organización en un contexto global."
  },
  "diplomado-en-modelos-de-ensenanza-y-evaluacion-de-programas": {
    plan: {
      "Contenido Temático": [
        "Historia del Pensamiento Metodológico Universal",
        "Taller de Modelos de Enseñanza del Siglo XXI",
        "Evaluación de Programas Educativos",
        "Responsabilidad Social"
      ]
    },
    duracion: "128 hrs.",
    description: "Formar profesionistas en el campo de la Educación en Formación Docente capaces de diseñar, implementar, estructurar y fundamentar los principios de planeación y evaluación educativa de los modelos actuales, así como las estrategias innovadoras, para crear situaciones de enseñanza-aprendizaje, a partir de la relación epistemológica y tecnológica, para alcanzar una integración entre los componentes pedagógicos y didácticos en la transformación de la realidad contextual de la práctica docente.",
  },
  "diplomado-en-estrategias-didacticas-y-metodos-de-ensenanza": {
    plan: {
      "Contenido Temático": [
        "Adquisición de Lengua",
        "Métodos de Enseñanza de Lenguas",
        "La Pragmática y el Estudio del Español",
        "Sociolingüística"
      ]
    },
    duracion: "128 hrs.",
    description: "Formar especialistas con un alto dominio de la didáctica aplicada a la enseñanza del español como lengua extranjera, desarrollar conocimientos sólidos sobre sistemas de evaluación e implementación de programas de español haciendo énfasis en la evaluación de materiales, así como de la práctica docente.",
  }
};

for (const [slug, data] of Object.entries(updates)) {
  if (db[slug]) {
    db[slug].plan = data.plan;
    db[slug].duracion = data.duracion;
    db[slug].description = data.description;
    
    if (data.ingreso) db[slug].ingreso = data.ingreso;
    if (data.egreso) db[slug].egreso = data.egreso;
  }
}

fs.writeFileSync(dbPath, JSON.stringify(db, null, 2), 'utf-8');
console.log('Batch 3 updated successfully');
