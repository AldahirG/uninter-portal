const fs = require('fs');
const path = require('path');

const dbPath = path.join(__dirname, 'app', 'assets', 'data', 'diplomados.json');
const db = JSON.parse(fs.readFileSync(dbPath, 'utf-8'));

const updates = {
  "diplomado-en-produccion-creativa-y-posicionamiento-digital": {
    plan: {
      "Animación Tridimensional (3D) II": ["Animación 3D avanzada: creación de personajes, movimientos complejos y escenarios digitales."],
      "Producción y Ensamble de Audio Digital": ["Producción y ensamble de audio digital: diseño sonoro profesional para tus contenidos."],
      "Animación y Efectos Especiales": ["Efectos especiales: integración de VFX en proyectos audiovisuales."],
      "Marketing Digital": ["Marketing digital: posicionamiento de productos creativos en redes sociales y entornos digitales."]
    },
    duracion: "4 Módulos",
    description: "Formar creadores capaces de desarrollar proyectos audiovisuales complejos con animación, efectos visuales y diseño sonoro, combinando sus habilidades con estrategias de marketing digital para potenciar la visibilidad, el alcance y el posicionamiento de sus contenidos en medios y plataformas digitales.",
    ingreso: "Personas interesadas en la producción audiovisual, la animación y el marketing digital. Estudiantes, egresados o profesionales de áreas como animación, diseño, comunicación, publicidad, producción multimedia o afines. Creadores de contenido, emprendedores o artistas digitales que deseen frtalecer su presencia en medios digitales. Se recomienda contar con conocimientos básicos en animación o herramientas de diseño.",
    egreso: "Producir contenidos audiovisuales complejos con animación 3D, efectos especiales y diseño sonoro. Desarrollar campañas de posicionamiento digital para promocionar tus productos, marcas o servicios creativos. Integrar herramientas profesionales de producción audiovisual con estrategias de marketing digital. Diseñar propuestas visuales innovadoras adaptadas a diferentes medios y plataformas. Presentar un portafolio completo con proyectos listos para el mercado digital."
  },
  "diplomado-en-psicopedagogia-aplicada": {
    plan: {
      "Módulo I": ["Psicopedagogía aplicada de la Enseñanza (6 días)"],
      "Módulo II": ["Neuroeducación y estrategias en el aula (6 días)"],
      "Módulo III": ["Educativa: Enfoques y Aplicaciones (6 días)"],
      "Módulo IV": ["Diagnóstico y evaluación Psicoeducativa (6 días)"],
      "Módulo V": ["Seminario de la Práctica Profesional Psicopedagógica (6 días)"],
      "Módulo VI": ["Psicoexpresión Sensorial (6 días)"]
    },
    duracion: "36 días",
    description: "La Universidad Internacional ofrece este diplomado dirigido tanto, para alumnos egresados de licenciatura y/o posgrado, en áreas como Psicología, Educación, Pedagogía, como para profesores y profesionistas que trabajen en contextos educativos, clínicos o comunitarios, que busquen fortalecer sus habilidades para el diagnóstico, intervención y acompañamiento de procesos de aprendizaje. El diplomado cuenta con sólidos conocimientos teóricos y prácticos en psicopedagogía, que le permiten comprender y distinguir las principales teorías psicológicas del aprendizaje que, con fines diagnósticos integrará a los principios de la neuroeducación así como estrategias tecnológicas para los procesos del aprendizaje a la vez que, implementará técnicas de evaluación psicoeducativas basadas en diversos modelos de intervención, empleando recursos creativos y sensoriales para potenciar la expresión y el desarrollo artístico de los estudiantes, tomando en consideración su experiencia previa en docencia, la intervención educativa o trabajo con niños, adolescentes o poblaciones con necesidades educativas especiales.",
    ingreso: "Egresado de licenciatura y/o posgrado en psicología, educación y pedagogía. Profesionista con interés y/o experiencia en la psicopedagogía.",
    egreso: "Dominio de estrategias de aprendizaje para generar ambientes de aprendizaje aptos. Comprensión y fortalecimiento de la emoción y la memoria en los procesos de aprendizaje, a través de la creación de ambientes óptimos. Capacidad para incorporar estrategias psicopedagógicas adecuadas a las necesidades educativas especiales. Capacidad para proponer intervenciones psicoeducativias eficientes y éticas. Comprensión e intervención en situaciones educativas conflictivas. Promoción de habilidades artísitcas y plásticas en los infantes."
  },
  "diplomado-en-doblaje-profesional-para-cine-television-y-streaming": {
    plan: {
      "Módulo I": ["Técnicas de Locución para Doblaje"],
      "Módulo II": ["Producción y Post-Producción de Doblaje"],
      "Módulo III": ["Técnicas de Actuación e Interpretación para Doblaje"],
      "Módulo IV": ["Técnicas de Doblaje"]
    },
    duracion: "1 Semestre",
    description: "Formar profesionales capaces de realizar doblaje de manera integral —desde la interpretación y adaptación de guiones del idioma original al español hasta la locución, sincronía, producción y postproducción— dominando herramientas líderes como Pro Tools y construyendo un reel profesional; todo ello bajo estándares internacionales y con la guía de directores activos en la industria, para facilitar su inserción laboral en casas de doblaje y proyectos de cine, televisión y plataformas de streaming.",
    ingreso: "Interés genuino en el doblaje, la actuación y la locución (perfil abierto a cualquier persona interesada). Comunicación oral sólida en español: lectura en voz alta, dicción y buena ortografía. Sensibilidad auditiva para ritmo, entonación y sincronía labial (lip-sync). Disposición para interpretar, improvisar y trabajar en equipo bajo dirección. Disponibilidad de tiempo: viernes por la tarde y sábados por la mañana/mediodía durante un semestre (2 h semanales por módulo). Habilidades digitales básicas y apertura para aprender producción y postproducción con Pro Tools (no se requiere certificación previa). Recomendable para práctica en casa: computadora, conexión estable, audífonos cerrados y micrófono básico. Hábitos de cuidado de la voz y salud vocal básica. Deseable (no obligatorio): comprensión lectora de inglés u otros idiomas para apoyar la adaptación de guiones. Actitudes de disciplina, constancia, puntualidad y respeto a estándares profesionales.",
    egreso: "Profesionales capaces de interpretar y adaptar guiones y locución a partir de materiales audiovisuales, del idioma original al español. Actores que apliquen las técnicas específicas de la actuación para realizar un doblaje profesional, tanto de series de televisión o streaming como de material cinematográfico. Locutores que controlen su voz y la dominen tanto para doblaje, como para locución comercial. Producir su propio material de doblaje, generando un portafolio para poder mostrar al acudir a castings."
  },
  "diplomado-en-comercio-exterior-y-contratos-internacionales": {
    plan: {
      "Contenido Temático": [
        "Calidades Migratorias",
        "Contratos Mercantiles",
        "Legislación del Comercio Exterior",
        "Propiedad Intelectual"
      ]
    },
    duracion: "128 hrs.",
    description: "Formar especialistas en Relaciones Mercantiles Internacionales capaces de negociar en términos legales y económicos contratos mercantiles en los ámbitos público y/o privado a escala local, nacional e internacional. Asimismo, capaces de ofrecer soluciones a problemáticas mercantiles, a través de la investigación en áreas jurídicas y corporativas estratégicas haciendo uso de la tecnología educativa para crear mejores ambientes de enseñanza-aprendizaje en sus contextos pedagógicos, para favorecer la apertura de mercados de bienes y servicios comprometidos con la responsabilidad que tienen las empresas en la sociedad y el desarrollo sustentable.",
    ingreso: db["diplomado-en-comercio-exterior-y-contratos-internacionales"]?.ingreso || "",
    egreso: db["diplomado-en-comercio-exterior-y-contratos-internacionales"]?.egreso || ""
  },
  "diplomado-en-derecho-aduanero-y-marco-juridico-de-la-competencia-economica": {
    plan: {
      "Contenido Temático": [
        "Legislación Aduanera",
        "Marco Jurídico de la Competencia Económica",
        "Responsabilidad Social",
        "Tratados Comerciales Internacionales"
      ]
    },
    duracion: "128 hrs.",
    description: "Formar especialistas en Relaciones Mercantiles Internacionales capaces de negociar en términos legales y económicos contratos mercantiles en los ámbitos público y/o privado a escala local, nacional e internacional. Asimismo, capaces de ofrecer soluciones a problemáticas mercantiles, a través de la investigación en áreas jurídicas y corporativas estratégicas haciendo uso de la tecnología educativa para crear mejores ambientes de enseñanza-aprendizaje en sus contextos pedagógicos, para favorecer la apertura de mercados de bienes y servicios comprometidos con la responsabilidad que tienen las empresas en la sociedad y el desarrollo sustentable.",
    ingreso: db["diplomado-en-derecho-aduanero-y-marco-juridico-de-la-competencia-economica"]?.ingreso || "",
    egreso: db["diplomado-en-derecho-aduanero-y-marco-juridico-de-la-competencia-economica"]?.egreso || ""
  },
  "diplomado-en-paradigmas-en-la-ensenanza-y-aprendizaje-en-innovacion-educativa": {
    plan: {
      "Contenido Temático": [
        "Observación en el Aula",
        "Psicología Educativa",
        "Problemas de la Enseñanza en la Educación",
        "Paradigmas de Aprendizaje e Innovación Educativa"
      ]
    },
    duracion: "128 hrs.",
    description: "Formar profesionistas en el campo de la Educación en Formación Docente capaces de diseñar, implementar, estructurar y fundamentar los principios de planeación y evaluación educativa de los modelos actuales, así como las estrategias innovadoras, para crear situaciones de enseñanza-aprendizaje, a partir de la relación epistemológica y tecnológica, para alcanzar una integración entre los componentes pedagógicos y didácticos en la transformación de la realidad contextual de la práctica docente.",
    ingreso: db["diplomado-en-paradigmas-en-la-ensenanza-y-aprendizaje-en-innovacion-educativa"]?.ingreso || "",
    egreso: db["diplomado-en-paradigmas-en-la-ensenanza-y-aprendizaje-en-innovacion-educativa"]?.egreso || ""
  },
  "diplomado-en-elaboracion-y-planeacion-didactica-basado-en-el-modelo-de-competencias": {
    plan: {
      "Contenido Temático": [
        "Fundamentación y Planeación Didáctica",
        "Seminario de Tesis I",
        "Optativa I",
        "Optativa II"
      ]
    },
    duracion: "128 hrs.",
    description: "Formar profesionistas en el campo de la Educación en Formación Docente capaces de diseñar, implementar, estructurar y fundamentar los principios de planeación y evaluación educativa de los modelos actuales, así como las estrategias innovadoras, para crear situaciones de enseñanza-aprendizaje, a partir de la relación epistemológica y tecnológica, para alcanzar una integración entre los componentes pedagógicos y didácticos en la transformación de la realidad contextual de la práctica docente.",
    ingreso: db["diplomado-en-elaboracion-y-planeacion-didactica-basado-en-el-modelo-de-competencias"]?.ingreso || "",
    egreso: db["diplomado-en-elaboracion-y-planeacion-didactica-basado-en-el-modelo-de-competencias"]?.egreso || ""
  },
  "diplomado-en-metodologia-y-adquisicion-de-una-segunda-lengua": {
    plan: {
      "Contenido Temático": [
        "Adquisición de una Segunda Lengua / Lengua Extranjera",
        "Lingüística Histórica del Español",
        "Metodología de la Enseñanza de Lenguas Extranjeras",
        "Responsabilidad Social"
      ]
    },
    duracion: "128 hrs.",
    description: "Formar Maestros en el campo de la Enseñanza de Lenguas Extranjeras con sólida preparación teórica y metodológica, a partir de la reflexión propositiva sobre los problemas de la enseñanza y del aprendizaje, capaces de comprender y saber utilizar las herramientas pedagógicas, didácticas, socio-culturales, de traducción y semióticas, asimismo; construir las estrategias de aprendizaje que contribuyan a la programación, desarrollo y evaluación de cursos ubicados en un marco metodológico, por medio de los actuales avances de la semiótica, pragmática, cognición, traducción y la comunicación, apoyándose en el uso de la tecnología educativa; logrando competencias profesionales, académicas y sociales en escenarios interdisciplinarios y multidisciplinarios para la enseñanza y el aprendizaje del español y del inglés como lengua extranjera y ocupaciones de traducción.",
    ingreso: db["diplomado-en-metodologia-y-adquisicion-de-una-segunda-lengua"]?.ingreso || "",
    egreso: db["diplomado-en-metodologia-y-adquisicion-de-una-segunda-lengua"]?.egreso || ""
  },
  "diplomado-en-desarrollo-de-destrezas-linguisticas": {
    plan: {
      "Contenido Temático": [
        "Lenguaje, Sociedad y Cultura",
        "Metodología de la Investigación en la Adquisición de Lenguas",
        "Desarrollo de destrezas Lingüísticas",
        "Métodos Estadísticos Avanzados"
      ]
    },
    duracion: "128 hrs.",
    description: "Formar Maestros en el campo de la Enseñanza de Lenguas Extranjeras con sólida preparación teórica y metodológica, a partir de la reflexión propositiva sobre los problemas de la enseñanza y del aprendizaje, capaces de comprender y saber utilizar las herramientas pedagógicas, didácticas, socio-culturales, de traducción y semióticas, asimismo; construir las estrategias de aprendizaje que contribuyan a la programación, desarrollo y evaluación de cursos ubicados en un marco metodológico, por medio de los actuales avances de la semiótica, pragmática, cognición, traducción y la comunicación, apoyándose en el uso de la tecnología educativa; logrando competencias profesionales, académicas y sociales en escenarios interdisciplinarios y multidisciplinarios para la enseñanza y el aprendizaje del español y del inglés como lengua extranjera y ocupaciones de traducción.",
    ingreso: db["diplomado-en-desarrollo-de-destrezas-linguisticas"]?.ingreso || "",
    egreso: db["diplomado-en-desarrollo-de-destrezas-linguisticas"]?.egreso || ""
  },
  "diplomado-en-tecnologias-de-la-informacion-y-comunicacion-aplicadas-a-la-pedagogia": {
    plan: {
      "Contenido Temático": [
        "Español para Fines Específicos",
        "Desarrollo de Destrezas",
        "Tecnología de la Información y la Comunicación",
        "Gramática Comparativa del Inglés y del español"
      ]
    },
    duracion: "128 hrs.",
    description: "Formar especialistas con un alto dominio de la didáctica aplicada a la enseñanza del español como lengua extranjera, desarrollar conocimientos sólidos sobre sistemas de evaluación e implementación de programas de español haciendo énfasis en la evaluación de materiales, así como de la práctica docente.",
    ingreso: db["diplomado-en-tecnologias-de-la-informacion-y-comunicacion-aplicadas-a-la-pedagogia"]?.ingreso || "",
    egreso: db["diplomado-en-tecnologias-de-la-informacion-y-comunicacion-aplicadas-a-la-pedagogia"]?.egreso || ""
  }
};

for (const [slug, data] of Object.entries(updates)) {
  if (db[slug]) {
    db[slug].plan = data.plan;
    db[slug].duracion = data.duracion;
    db[slug].description = data.description;
    
    // Solo sobreescribir ingreso/egreso si hay información real, si no, conservar lo que ya tiene
    if (data.ingreso) db[slug].ingreso = data.ingreso;
    if (data.egreso) db[slug].egreso = data.egreso;
  }
}

fs.writeFileSync(dbPath, JSON.stringify(db, null, 2), 'utf-8');
console.log('Batch 2 updated successfully');
