const fs = require('fs');
const path = require('path');

const dbPath = path.join(__dirname, 'app', 'assets', 'data', 'posgrados.json');
const db = JSON.parse(fs.readFileSync(dbPath, 'utf-8'));

const updates = {
  "esp-administracion-obra": {
    description: "Formar especialistas de manera integral, que cuenten con el conocimiento administrativo y técnico suficiente, para desempeñarse de manera competitiva y eficaz en el ámbito de la construcción, con capacidades demostradas para la planeación, programación y control de todos los procesos que demanda un proyecto de edificación.",
    mercado_laboral: ["Centros de Investigación", "Sector Público", "Docencia"],
    ingreso: ["Estudios de licenciatura", "Conocer el desarrollo integral de un proyecto ejecutivo en edificación", "Conocer todo lo relacionado con la temática en edificación", "Contar con los conocimientos y habilidades matemáticas que la disciplina exige", "Conocer los elementos básicos de computación", "Disponer del tiempo para realizar sus estudios, prácticas e investigaciones"],
    egreso: "Como egresado en Administración de Obra resolverás la problemática de construir obras en edificación con un perfil empresarial, y podrás proyectarte como gerente de obras en edificación de alto nivel, contando como principal fortaleza el administrar alcanzando los niveles óptimos en economía y tiempo, y así adaptarte a la dinámica realidad económica para convertirte en un profesional altamente demandado.",
    plan: {
      "Primer Semestre": ["El Entorno de la Empresa Constructora en México", "Marco Legal de la Construcción", "Proyectos de Inversión en Edificación", "Sistemas de Información Aplicados a la Edificación"],
      "Segundo Semestre": ["Administración de Operaciones en Edificación", "Administración de Proyectos en Edificación", "Costos y presupuestos de Construcción", "Seminario de Administración de Proyectos de Obras en Edificación"]
    },
    areas_conocimiento: ["Administración", "Construcción", "El Entorno de la Empresa Constructora en México", "Administración de Proyectos en Edificación", "Sistemas de Información Aplicados a la Edificación", "Marco Legal de la Construcción", "Costos y Presupuestos de Construcción", "Proyectos de Inversión en Edificación", "Administración de Operaciones en Edificación"],
    areas_especializacion: ["Administración", "Construcción", "El Entorno de la Empresa Constructora en México", "Administración de Proyectos en Edificación", "Sistemas de Información Aplicados a la Edificación", "Marco Legal de la Construcción", "Costos y Presupuestos de Construcción", "Proyectos de Inversión en Edificación", "Administración de Operaciones en Edificación"],
    lineas_investigacion: ["Mejoramiento de los procedimientos de construcción", "Búsqueda de nuevos procedimientos de construcción", "Refinamientos administrativos para eficientar procesos", "Utilización óptima de recursos", "Incorporación e innovación tecnológica en el desarrollo de las obras en construcción", "Contribución al crecimiento del producto desde la trinchera de la industria de la construcción", "Administración de obra como satisfactor de necesidades y de requerimientos sociales"]
  },
  "esp-administracion-tecnologia-linea": {
    description: "Formar especialistas que contribuyan a desarrollar y optimizar las capacidades tecnológicas de las organizaciones y su gente, por medio del diseño, planeación y gestión de los proyectos que le permitan optimizar los recursos.",
    mercado_laboral: "La administración de nuevas tecnologías de proceso y producto, los cuales están dando lugar a nuevos mercados y sectores económicos, que, por consiguiente, están cambiando los patrones de competitividad. Dado que los ciclos de vida de los productos son cada vez más cortos por consumidores con preferencias cambiantes y más complejas, se requieren líderes para acortar los tiempos de desarrollo de los nuevos productos. Administradores de tecnología que consideren los cambios constantes en las estructuras de costos de producción, las justificaciones de las inversiones, y los criterios para priorizar las carteras de proyectos. El control de cambios significativos en las herramientas administrativas. Debido a que el porcentaje del PIB es muy bajo para la I+D+i en México, provoca la necesidad de líderes para coordinar la compra de tecnología extranjera; el desarrollo contra reloj de la capacidad propia de I+D+i; y la vinculación con universidades y centros de investigación para la realización de proyectos conjuntos.",
    ingreso: ["Capacidad de razonamiento, análisis y síntesis", "Capacidad de comprensión de lectura y expresión oral y escrita", "Nivel suficiente de comprensión de inglés", "Responsabilidad, capacidad de trabajo individual y en equipo", "Espíritu crítico y autocrítico", "Una base significativa de formación metodológica", "Interés en la tecnología y su administración", "Capacidad de mantener diálogo sobre características técnicas y de mercado de proyectos tecnológico", "Creativo para planeación y resolución de problemas"],
    egreso: "Aplicarás las herramientas de administración, contando con un conocimiento profundo de los conceptos e instrumentos administrativos de vanguardia. Contribuirás desde la optimización de los recursos, el desarrollo de investigación, aplicación y transferencia de la ciencia y la tecnología. Desarrollarás habilidades de pensamiento crítico estratégico al contar con herramientas de análisis y diagnóstico, para identificar problemas y oportunidades de la organización. Serás un especialista orientado a analizar, diseñar, desarrollar, innovar, integrar, administrar e implementar sistemas para el desarrollo empresarial, utilizando diversas herramientas con sentido de responsabilidad y calidad.",
    plan: {
      "Primer Semestre": ["Administración de Proyectos Tecnológicos", "Propiedad Intelectual", "Gestión de la Tecnología", "Responsabilidad Social"],
      "Segundo Semestre": ["Dirección Estratégica Financiera", "Mercadotecnia Estratégica", "Investigación y Administración de la Innovación Tecnológica", "Transferencia Tecnológica"]
    },
    areas_conocimiento: ["Responsabilidad Social", "Propiedad Intelectual", "Mercadotecnia Estratégica", "Dirección Estratégica Financiera", "Gestión de la Tecnología", "Administración de Proyectos Tecnológicos", "Investigación y Administración de la Innovación Tecnológica", "Transferencia Tecnológica"],
    areas_especializacion: ["Administración", "Tecnología"],
    lineas_investigacion: ["Administración de la tecnología", "Desarrollo e innovación de procesos y productos", "Modelos y mecanismos de transferencia de tecnología y conocimiento", "Administración de proyectos tecnológicos", "Propiedad industrial e intelectual", "Modelos de planeación tecnológica", "Vigilancia e inteligencia tecnológica", "Aplicación de las TIC's"]
  },
  "esp-animacion": {
    description: "Formar especialistas en la animación y post-producción digitales, con dominio de las herramientas y técnicas de vanguardia. Ser capaz de hacer producciones audiovisuales que incluyan objetos animados en segunda y tercera dimensión, para ser proyectados en los medios de comunicación, tales como televisión, cine, e internet.",
    mercado_laboral: "Contarás con un amplio campo de acción en agencias de publicidad, departamentos de producción audiovisual, creatividad digital y marketing digital. Tendrás la capacidad de crear efectos visuales de alto impacto, editar contenido multimedia y participar en campañas digitales integrales. Podrás desempeñarte en cargos estratégicos como director creativo, productor digital, coordinador de animación, ingeniero de sonido y especialista en mezcla de audio. Además, estarás preparado para incorporar en sitios web interactivos para medios digitales como periódicos y revistas, integrando animación digital y contenidos optimizados para redes sociales.",
    ingreso: ["Capacidad de observación, razonamiento, análisis y síntesis", "Disposición para trabajar en equipo", "Innovador, comprometido y disciplinado", "Interesado en las herramientas audiovisuales", "Pasión por el Arte, la Tecnología, el Diseño y la Animación", "Interés hacia los procesos tecnológicos", "Capacidad de Resolución de Problemas"],
    egreso: "El egresado de la Especialidad en Animación y Post-Producción Digital estará formado y capacitado para diseñar guiones, producir y post producir creativamente materiales audiovisuales patentados que incluyan audio, video con efectos digitales, así como animaciones en segunda y tercera dimensión, que podrán ser mostrados en distintas plataformas considerando los procesos tecnológicos y sociales de la actualidad. Podrá desempeñarse en organizaciones públicas y privadas, medios de comunicación y estudios de animación.",
    plan: {
      "Primer Ciclo": ["Animación Bidimensional (2D)", "Animación Tridimensional (3D) I", "Edición y Post-Producción de Video Digital", "Narrativas Audiovisuales"],
      "Segundo Ciclo": ["Animación Tridimensional (3D) II", "Producción y Ensamble de Audio Digital", "Animación y Efectos Especiales", "Marketing Digital"]
    },
    areas_conocimiento: ["Animación Digital", "Post-Producción"],
    areas_especializacion: ["Animación Digital", "Post-Producción"],
    lineas_investigacion: ["Animación Digital", "Post Producción Digital", "Efectos Especiales", "Lenguaje Audiovisual", "Marketing Digital"]
  },
  "esp-criminalistica": {
    description: "Ser profesional capaz de aplicar los métodos y técnicas de investigación científica para examinar el material sensible significativo que esté relacionado con un presunto hecho delictuoso. Ser experto en el análisis, interpretación, manejo y resolución de diversas cuestiones jurídicas dentro del ámbito penal nacional. Ser especialista en la reconstrucción de los hechos.",
    mercado_laboral: ["Dependencias de gobierno (Procuradurías Generales de Justicia, Procuraduría General de la República, Servicios Periciales, SEMEFO)", "Instituciones privadas", "Instituciones de investigación pública", "Investigación independiente", "Docencia", "Instituciones de Seguros"],
    ingreso: ["Licenciatura en Derecho, Medicina, Biología, Químico Fármaco Biólogo, Ingeniero Químico o Arquitectura. Profesionistas en áreas afines.", "Interés en la Investigación.", "Capacidad para aplicar los métodos, las técnicas e instrumentos utilizados en el trabajo de investigación criminalística orientada a los diversos casos e interrogantes que plantea el desempeño de sus funciones.", "Capacidad para elaborar informes y dictámenes periciales."],
    egreso: "Será un profesional capaz de interpretar y ejercer juicios con una visión multidisciplinaria acorde a las necesidades laborales que el entorno demande. Será un experto en la investigación y en la aplicación de elementos de la medicina, balística, psicología, hechos de tránsito, grafoscopía para la interpretación de los hechos y generación de juicios objetivos. Tendrá las competencias necesarias para adaptarse a los diferentes escenarios posibles y resolver las problemáticas que se le presenten de manera eficiente. Investigador multidisciplinario capaz de implementar nuevas estrategias de estudio y análisis que le permitirán visualizar de manera ordenada los escenarios que le plantee su entorno laboral. Capacidad de análisis con pensamiento lógico deductivo e inductivo que le concede asumir posturas y tomar decisiones fundamentadas.",
    plan: {
      "Primer Semestre": ["Criminalística", "Criminología", "Medicina Forense", "Criminalística de Campo"],
      "Segundo Semestre": ["Grafoscopia", "Hechos de Tránsito", "Metodología de la Investigación Forense", "Bases de Derecho Penal y Procesal Penal"]
    },
    areas_conocimiento: ["Criminalística", "Criminología", "Medicina Forense", "Criminalística de Campo", "Grafoscopía", "Hechos de Tránsito", "Metodología de la Investigación Forense", "Bases de Derecho Penal y Procesal Penal"],
    lineas_investigacion: ["Criminalística de Campo", "Criminología", "Medicina Forense", "Victimología", "Derecho Penal", "Grafoscopía", "Hechos de Tránsito"]
  },
  "esp-docencia-espanol": {
    description: "Formar especialistas con un alto dominio de la didáctica aplicada a la enseñanza del español como lengua extranjera, desarrollar conocimientos sólidos sobre sistemas de evaluación e implementación de programas de español haciendo énfasis en la evaluación de materiales, así como de la práctica docente.",
    mercado_laboral: ["Docentes del español como lengua extranjera", "Formación de instructores del español como lengua extranjera", "Diseño y evaluación de programas de estudio", "Coordinación de centros y departamentos dedicados a la enseñanza del español como lengua extranjera"],
    ingreso: [], // Not provided in PDF
    egreso: "Al terminar el programa el egresado será capaz de implementar la metodología adecuada a la enseñanza del español.",
    plan: {
      "Primer Semestre": ["Adquisición de Lengua", "Métodos de Enseñanza de Lenguas", "La Pragmática y el Estudio del Español", "Sociolingüística"],
      "Segundo Semestre": ["Español para Fines Específicos", "Desarrollo de Destrezas", "Tecnología de la Información y la Comunicación", "Gramática Comparativa del inglés y del español"]
    },
    areas_conocimiento: ["Metodología de la enseñanza de una Lengua Extranjera", "Desarrollo de Destrezas Lingüísticas", "Diseño y Evaluación de Material Didáctico", "Español para Fines específicos", "Estrategias Didácticas y Apoyo Tecnológico", "Adquisición de una Segunda Lengua o Lengua Extranjera", "Gramática Comparativa del Inglés y del Español", "La Pragmática y el estudio del español"],
    areas_especializacion: ["Docencia", "Lingüística"],
    lineas_investigacion: ["Lingüística aplicada a la enseñanza de segundas lenguas", "Adquisición de una segunda lengua o lengua extranjera", "Dialectología", "Procesos de aprendizaje"]
  }
};

for (const [slug, data] of Object.entries(updates)) {
  if (db[slug]) {
    // Actualizar campos si existen en los datos parseados
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
console.log('Posgrados batch 1 updated successfully');
