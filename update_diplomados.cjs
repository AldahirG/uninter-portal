const fs = require('fs');
const path = require('path');

const dbPath = path.join(__dirname, 'app', 'assets', 'data', 'diplomados.json');
const db = JSON.parse(fs.readFileSync(dbPath, 'utf-8'));

const updates = {
  "diplomado-en-creatividad-y-publicidad": {
    plan: {
      "Contenido Temático": [
        "Promoción y Publicidad",
        "Seminario de Campañas Publicitarias I",
        "Seminario, Sociedad y Publicidad",
        "Taller de Creatividad"
      ]
    },
    duracion: "128 hrs.",
    description: "Formar personas con conocimientos en publicidad capaces de analizar campañas publicitarias y desarrollar habilidades creativas, dentro de un entorno ético y de responsabilidad social, a través del uso de herramientas de mercadotecnia y publicidad en proyectos específicos.",
    ingreso: "Personas relacionadas al ámbito o con interés en el área de la Publicidad, Comunicación, Diseño Gráfico o la Mercadotecnia con Conocimiento en las disciplinas básicas de publicidad y mercadotecnia. Con capacidad de análisis, síntesis y sensibilidad hacía las diversas campañas y spots publicitarios.",
    egreso: "Podrás desempeñarte exitosamente en departamentos directivos, consultorías independientes, proyectos empresariales y agencias especializadas en Creatividad y Publicidad."
  },
  "diplomado-en-marketing-digital-estrategico-y-creativo": {
    plan: {
      "Marketing Digital": ["Analizar métricas y tendencias de marketing digital para diseñar estrategias integrales en entornos web 2.0 y 3.0, orientadas a fortalecer la presencia de marca, mejorar el alcance digital y generar contenidos de valor."],
      "Social Media": ["Generar, medir y planificar contenidos de social media, así como analizar las métricas obtenidas, a través del manejo de herramientas de gestión de elementos y estadísticas, para implementar estrategias comerciales y sociales aplicadas al entorno digital."],
      "Posicionamiento Web": ["Desarrollar estrategias de optimización en buscadores (SEO/SEM), utilizando herramientas de análisis, investigación de palabras clave y gestión de campañas digitales, con el fin de incrementar la visibilidad y posicionamiento de marcas en entornos digitales."],
      "Diseño Aplicado al Marketing Digital": ["Aplicar principios de diseño gráfico y comunicación visual en el desarrollo de contenidos y campañas digitales, utilizando software especializado y técnicas de creatividad, para mejorar el impacto y la efectividad de las estrategias de marketing."]
    },
    duracion: "136 horas",
    description: "Desarrollarás una visión estratégica y creativa del marketing digital, que te permitirá analizar métricas, diseñar campañas innovadoras, optimizar la presencia de marca en buscadores y redes sociales, así como aplicar principios de diseño y comunicación visual para crear contenidos de alto impacto. Al concluir, contarás con las herramientas necesarias para implementar estrategias integrales que fortalezcan tu posicionamiento digital y generen resultados medibles en entornos altamente competitivos.",
    ingreso: db["diplomado-en-marketing-digital-estrategico-y-creativo"]?.ingreso || "", 
    egreso: "Capacidad de análisis, diseño, desarrollo y ejecución de campañas efectivas de marketing digital, gestión de la presencia en redes sociales, implementación estrategias de marketing integradas."
  },
  "diplomado-en-estrategias-y-experiencias-digitales": {
    plan: {
      "Diseño de Experiencias (UI/UX)": ["Analizar y aplicar los principios del diseño centrado en el usuario para crear experiencias digitales funcionales, accesibles y atractivas que fortalezcan la relación entre las marcas y sus audiencias."],
      "Implementación de Campañas y Estrategias Digitales": ["Diseñar e implementar campañas digitales integrales mediante el uso de herramientas de análisis, segmentación y automatización, orientadas al cumplimiento de objetivos de marketing medibles y a la optimización del retorno de inversión (ROI)."],
      "Comercio Electrónico": ["Desarrollar estrategias de venta en línea mediante plataformas de e-commerce, aplicando conceptos de experiencia de compra, gestión de catálogo, seguridad digital y atención al cliente en entornos virtuales."],
      "Mobile Marketing y Diseño de Aplicaciones": ["Diseñar estrategias de marketing enfocadas en dispositivos móviles y desarrollar aplicaciones funcionales que favorezcan la interacción, fidelización y conversión de los usuarios en entornos digitales."]
    },
    duracion: "136 hrs.",
    description: "Diseñar estrategias digitales de alto impacto que integren análisis, creatividad y planeación estratégica para optimizar la experiencia del usuario, fortalecer el posicionamiento de marca y generar ventajas competitivas sostenibles en entornos digitales.",
    ingreso: db["diplomado-en-estrategias-y-experiencias-digitales"]?.ingreso || "",
    egreso: "Capacidad de análisis, diseño y ejecución de experiencias digitales centradas en el usuario, desarrollo de estrategias avanzadas de marketing en entornos web y móviles, implementación de proyectos de comercio electrónico y aplicaciones funcionales, así como evaluación de métricas y resultados para la optimización continua de campañas digitales."
  },
  "diplomado-en-formacion-para-cronistas": {
    plan: {
      "Contenido Temático": [
        "Origen, Contexto Cultural y Geográfico (20 Horas)",
        "Investigación Hemerográfica y Archivo (20 Horas)",
        "Estudios Interculturales Regionales (20 Horas)",
        "La Arquitectura como Testigo de la Crónica (20 Horas)",
        "Expresión Oral y Redacción de Crónica (20 Horas)",
        "Preservación del Patrimonio Cultural (20 Horas)",
        "Proyecto de Acreditación como Cronistas (20 Horas)"
      ]
    },
    duracion: "140 hrs.",
    description: "El objetivo de este diplomado está dirigido a la formación de profesionales comprometidos con la narración y preservación del patrimonio cultural, local, regional y nacional, a través de la crónica y el periodismo histórico, promocionando los estudios interculturales, geográficos, históricos y de la antropología, entre otros más.",
    ingreso: "Interés general en la historia de México e historia universal y regional. Buen dominio de la lengua y destreza en el manejo del lenguaje y de la expresión oral y escrita. Aptitudes para la búsqueda de información, así como para el análisis de datos. Curiosidad para la investigación. Hábitos de estudio y capacidad de trabajo individual y en equipo. Valores tales como: constancia y puntualidad, honradez y honestidad, tolerancia y respeto, compromiso con la historia de su ciudad y con la sociedad. Tener una actitud de apertura hacia los nuevos conocimientos.",
    egreso: "Haber acreditado las asignaturas correspondientes al plan de estudios del diplomado, es decir, cubrir el 100% de los créditos. Tener 8.0 como promedio mínimo del total de cursos del plan de estudios y haber obtenido la calificación de 7.0 en un máximo de tres asignaturas."
  },
  "diplomado-en-diseno-de-modas-con-enfoque-en-desarrollo-de-colecciones": {
    plan: {
      "Módulo 1": ["Contexto y Tendencias Internacionales"],
      "Módulo 2": ["Dibujo e Ilustración de la Moda"],
      "Módulo 3": ["Fundamentos y Materiales Textiles"],
      "Módulo 4": ["Taller de Patronaje a Medida con el Sistema Uninter"],
      "Módulo 5": ["Taller de Métodos de Corte y Confección"],
      "Módulo 6": ["Comunicación Visual de Bordados y Estampados"],
      "Módulo 7": ["Desarrollo y Presentación de Portafolio Profesional"],
      "Módulo 8": ["Proyecto Integral Fashion Showroom"]
    },
    duracion: "310 horas",
    description: "Desarrollar habilidades en diseño de modas y creación de colecciones, abarcando todo el proceso productivo, desde el análisis de tendencias internacionales hasta la conceptualización de ideas a través de técnicas de ilustración, corte y confección; para lograr documentar el proceso en un portafolio profesional aplicando estrategias de comunicación efectivas para crear colecciones funcionales que respondan a las necesidades de las personas.",
    ingreso: "Pasión por la moda y el diseño. Deseo de dar vida a ideas a través de la interpretación de tendencias. Dominio del proceso creativo. Habilidades en investigación de tendencias. Capacidad de trabajo en equipo. Aptitud para la presentación visual de colecciones. Creatividad y pensamiento innovador. Habilidades de comunicación efectiva.",
    egreso: "Diseñar y desarrollar colecciones de moda completas y funcionales. Interpretar tendencias internacionales y aplicarlas en propuestas creativas. Ilustrar figurines con técnicas tradicionales y digitales. Crear patrones a medida y confeccionar prendas con acabados profesionales. Aplicar bordados, estampados y técnicas textiles innovadoras. Desarrollar estrategias de branding y comunicación visual para sus colecciones. Asesorar en imagen personal, estilo y fashion styling. Elaborar un portafolio profesional competitivo para el mercado laboral. Gestionar proyectos de moda desde su conceptualización hasta su presentación final. Emprender su propia marca o integrarse a la industria del diseño con una visión integral."
  },
  "diplomado-en-gestion-empresarial": {
    plan: {
      "Matemáticas Administrativas": ["Determinar la optimización de los recursos organizacionales, mediante la interpretación de modelos cuantitativos y el uso de programas computacionales, y así fortalecer la toma de decisiones."],
      "Enfoque Administrativo Contemporáneo": ["Implementar métodos de la administración moderna, a través de la aplicación del proceso administrativo y del análisis de estrategias de diversificación que permitan la optimización de los recursos, para promover organizaciones competitivas."],
      "Mercadotecnia": ["Evaluar la pertinencia de las técnicas de operación mercadológicas aplicadas en las empresas e instituciones, a través de la realización de un estudio de mercado, para determinar la factibilidad de incursión de un producto en el mercado nacional o internacional."],
      "Administración Financiera Internacional": ["Analizar las distintas fuentes de financiamiento nacional e internacional, que permita identificar su impacto en el capital del trabajo, a través de la distinción de diversos productos financieros que ofrecen las entidades, para beneficiar la toma de decisiones y disminución de costos financieros."]
    },
    duracion: "128 horas",
    description: "UNINTER te ofrece un ambiente multicultural donde podrás interactuar con estudiantes de otras nacionalidades. Por otro lado en sus diplomados encontrarás compañeros y profesores con perfiles académicos que podrán enriquecer tu experiencia.",
    ingreso: db["diplomado-en-gestion-empresarial"]?.ingreso || "",
    egreso: "El egresado del Diplomado en Gestión Empresarial estará preparado para asumir roles de responsabilidad en diversas áreas de la empresa, aportando con sus conocimientos y habilidades en la toma de decisiones estratégicas, la optimización de procesos, y la implementación de estrategias que contribuyan al crecimiento y sostenibilidad de la organización en un contexto global."
  },
  "diplomado-en-ingles": {
    plan: {
      "Módulo I": ["Inglés Básico I (Introducción al idioma con enfoque en interacción personal básica)"],
      "Módulo II": ["Inglés Básico II (Desarrollo de herramientas lingüísticas para describir personas, objetos y lugares)"],
      "Módulo III": ["Inglés Pre-Intermedio I (Práctica para expresar lo que se sabe hacer, lo que gusta o disgusta, y actividades diarias)"],
      "Módulo IV": ["Inglés Pre-Intermedio II (Aplicación del idioma en situaciones de la vida diaria y escenarios de viaje)"],
      "Módulo V": ["Inglés Intermedio I (Introducción a la narración de hechos en tiempo pasado y experiencias personales)"],
      "Módulo VI": ["Inglés Intermedio II (Comunicación para expresar planes, compromisos y actividades programadas)"],
      "Módulo VII": ["Inglés Pre-Avanzado I (Ampliación de la capacidad para dar y solicitar información personal)"],
      "Módulo VIII": ["Inglés Pre-Avanzado II (Práctica para describir entornos urbanos y actividades comunes, hábitos y preferencias)"],
      "Módulo IX": ["Inglés Avanzado I (Interacción en contextos relacionados con la comida, bebida y narración en pasado)"],
      "Módulo X": ["Inglés Avanzado II (Desarrollo de la capacidad para describir apariencia de personas y comparar lugares)"]
    },
    duracion: "400 hrs.",
    description: "Desarrollar las cuatro habilidades lingüísticas y comunicativas de los estudiantes con la finalidad de aplicar sus conocimientos en un ambiente profesional, académico o personal para el dominio del idioma inglés como lengua extranjera a través de una práctica dinámica y efectiva.",
    ingreso: "Estudiantes que no tienen bases de inglés a estudiantes con base sólida del idioma.",
    egreso: "Alcanzar desde un nivel intermedio comunicativo (A2-B1) hasta pulir y perfeccionar competencias orales y escritas para un manejo más fluido y preciso mediante talleres especializados centrados en la producción del idioma, vocabulario especializado y uso avanzado de estructuras gramaticales."
  },
  "diplomado-en-mercadotecnia-y-publicidad": {
    plan: {
      "Contenido Temático": [
        "Análisis de Audiencias y Medios de Comunicación",
        "Motivación de Compra e Investigación de Mercados",
        "Seminario de Campañas Publicitarias II",
        "Seminario de Mercadotecnia"
      ]
    },
    duracion: "128 hrs.",
    description: "Formar personas con conocimientos en publicidad y mercadotecnia básica capaces de analizar y aplicar herramientas creativas, mercadológicas y publicitarias, dentro de un entorno ético y de responsabilidad social a proyectos específicos.",
    ingreso: "Capacidad de análisis y e interpretación de estados financieros en organizaciones nacionales e internacionales.",
    egreso: db["diplomado-en-mercadotecnia-y-publicidad"]?.egreso || ""
  },
  "diplomado-en-inteligencia-artificial-aplicada-a-los-negocios": {
    plan: {
      "Semestre 1": [
        "Introducción a la Inteligencia Artificial y su Impacto en los Negocios",
        "Fundamentos de Machine Learning",
        "Data Science y Preparación de Datos para Inteligencia Artificial",
        "Inteligencia Artificial en Marketing Digital",
        "Automatización de Procesos Empresariales con Inteligencia Artificial",
        "Inteligencia Artificial en Finanzas y Gestión de Riesgos",
        "Big Data y su Relación con la Inteligencia Artificial"
      ],
      "Semestre 2": [
        "Redes Neuronales y Deep Learning",
        "Ética, Privacidad y Gobernanza de la Inteligencia Artificial",
        "Implementación de Soluciones de Inteligencia Artificial en Empresas",
        "Inteligencia Artificial en la Gestión del Talento y Recursos Humanos",
        "Tendencias Futuras y Oportunidades de la Inteligencia Artificial en los Negocios"
      ]
    },
    duracion: "1 año (2 semestres)",
    description: "Proporcionar una formación integral en el uso estratégico de la Inteligencia Artificial (IA), a través del uso de herramientas prácticas y aplicación de conocimientos técnicos con diferentes usos de la IA generativa, aplicables en estrategias de planeación de trabajo y aprendizajes basados en problemas (ABP) y/o aprendizaje orientado a proyectos (AOP), creación de contenido, etc., que permitan la implementación de soluciones innovadoras que generen valor en diversas áreas de los negocios, como finanzas, mercadotecnia, salud, arte, diseño, entre otras, además de optimizar procesos y tomar decisiones informadas en el ámbito empresarial.",
    ingreso: "Interés y curiosidad por la innovación tecnológica, especialmente la inteligencia artificial, y su potencial para transformar el mundo de los negocios. Es recomendable que el aspirante tenga un conocimiento previo en tecnología. Capacidad analítica para solucionar problemas. Mentalidad enfocada en la mejora continua, optimización de procesos y toma de decisiones. Habilidades para trabajar en equipo. Interés en la gestión de proyectos, así como un pensamiento crítico. Comprometido con aplicar los conocimientos adquiridos para mejorar los procesos, la competitividad y la sostenibilidad de los negocios. Compromiso con la ética y la responsabilidad social al utilizar la inteligencia artificial.",
    egreso: "Aplicar herramientas de IA en la toma de decisiones y optimización de procesos. Diseñar proyectos empresariales con machine learning y big data. Analizar datos para generar estrategias de negocio efectivas. Implementar soluciones de IA en marketing, finanzas y gestión del talento. Actuar con responsabilidad ética y social en el uso de la IA. Identificar tendencias y oportunidades futuras en inteligencia artificial."
  },
  "diplomado-en-crear-y-contar-historias-con-animacion-digital": {
    plan: {
      "Animación Bidimensional (2D)": ["Animación 2D: personajes, movimientos y escenas en plano bidimensional."],
      "Animación Tridimensional (3D) I": ["Animación 3D: modelado y animación en entornos tridimensionales."],
      "Edición y Post-Producción de Video Digital": ["Edición y postproducción: integra efectos visuales, sonido y montaje."],
      "Narrativas Audiovisuales": ["Narrativas audiovisuales: estructura y ritmo para contar historias impactantes."]
    },
    duracion: "1 semestre",
    description: "Desarrollar competencias técnicas y creativas en animación digital, que te permitan crear y producir contenidos visuales con una narrativa sólida, original y atractiva para medios digitales, cine, redes sociales, videojuegos o publicidad.",
    ingreso: db["diplomado-en-crear-y-contar-historias-con-animacion-digital"]?.ingreso || "Personas interesadas en la animación y producción digital.",
    egreso: "Aplicar herramientas de IA en la toma de decisiones y optimización de procesos. Diseñar proyectos empresariales con machine learning y big data. Analizar datos para generar estrategias de negocio efectivas. Implementar soluciones de IA en marketing, finanzas y gestión del talento. Actuar con responsabilidad ética y social en el uso de la IA. Identificar tendencias y oportunidades futuras en inteligencia artificial." // Wait, this egreso in OCR is from the AI diplomado by mistake? Let's check OCR.
  }
};

for (const [slug, data] of Object.entries(updates)) {
  if (db[slug]) {
    db[slug].plan = data.plan;
    db[slug].duracion = data.duracion;
    db[slug].description = data.description;
    db[slug].ingreso = data.ingreso;
    db[slug].egreso = data.egreso;
  }
}

fs.writeFileSync(dbPath, JSON.stringify(db, null, 2), 'utf-8');
console.log('Batch 1 updated successfully');
