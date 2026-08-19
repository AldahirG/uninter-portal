const fs = require('fs');
const path = require('path');

const dbPath = path.join(__dirname, 'app', 'assets', 'data', 'diplomados.json');
const db = JSON.parse(fs.readFileSync(dbPath, 'utf-8'));

const updates = {
  "diplomado-en-administracion-de-la-tecnologia-en-linea": {
    plan: {
      "Módulo I": ["Administración de Proyectos Tecnológicos"],
      "Módulo II": ["Propiedad Intelectual"],
      "Módulo III": ["Gestión de la Tecnología"],
      "Módulo IV": ["Responsabilidad Social"]
    },
    duracion: "1 semestre",
    description: "Formar profesionales capaces de administrar y gestionar proyectos tecnológicos de manera estratégica, integrando conocimientos de propiedad intelectual, gestión tecnológica y responsabilidad social, para fortalecer la competitividad y la innovación dentro de las organizaciones.",
    ingreso: "Profesionistas de cualquier área que participen o deseen participar en proyectos tecnológicos. Directivos, mandos medios y coordinadores que toman decisiones relacionadas con la implementación de tecnología. Emprendedores y dueños de negocio que buscan optimizar procesos mediante el uso estratégico de la tecnología. Docentes y consultores interesados en la gestión tecnológica y la innovación organizacional.",
    egreso: "Planear y administrar proyectos tecnológicos con enfoque estratégico. Gestionar la tecnología como un recurso clave para la competitividad organizacional. Aplicar principios básicos de propiedad intelectual en entornos digitales y tecnológicos. Integrar criterios de responsabilidad social en la toma de decisiones tecnológicas."
  },
  "diplomado-en-innovacion-y-transferencia-tecnologicas": {
    plan: {
      "Módulo I": ["Dirección Estratégica Financiera"],
      "Módulo II": ["Mercadotecnia Estratégica"],
      "Módulo III": ["Investigación y Administración de la Innovación Tecnológica"],
      "Módulo IV": ["Transferencia Tecnológica"]
    },
    duracion: "1 semestre",
    description: "Formar profesionales capaces de aplicar modelos estratégicos de innovación, gestionar procesos financieros y de mercadotecnia asociados a tecnología, y liderar procesos de transferencia tecnológica efectiva para maximizar el valor y la competitividad de organizaciones en entornos dinámicos.",
    ingreso: "Profesionistas que desean impulsar procesos de innovación dentro de su organización. Líderes, mandos medios o directivos que participan en la toma de decisiones estratégicas relacionadas con mercado, finanzas e innovación. Emprendedores interesados en desarrollar proyectos tecnológicos con enfoque de mercado y escalabilidad. Consultores y asesores que trabajan con innovación, tecnología y transferencia de conocimiento.",
    egreso: "Formular e implementar estrategias financieras alineadas con objetivos tecnológicos y de negocio. Desarrollar planes de mercadotecnia orientados al producto, servicio o innovación tecnológica. Gestionar procesos de innovación y evaluarlos para incrementar valor competitivo. Planear y ejecutar procesos de transferencia tecnológica que conecten investigación, empresa y mercado."
  },
  "diplomado-en-arquitectura-diseno-y-legislacion-de-redes-y-tecnologias-web": {
    plan: {
      "Módulo I": ["Arquitectura de Redes de Computadoras"],
      "Módulo II": ["Diseño de Interfaces Visuales"],
      "Módulo III": ["Legislación y Normalización de Telecomunicaciones"],
      "Módulo IV": ["Tecnologías y Aplicaciones Web"]
    },
    duracion: "1 semestre",
    description: "Desarrollar en los participantes una visión integral de las redes de computadoras y las tecnologías web, combinando arquitectura, diseño y legislación, que les permita crear, evaluar y gestionar soluciones digitales con alto impacto en entornos profesionales y organizacionales.",
    ingreso: "Profesionistas del área de tecnologías de la información interesados en redes y tecnologías web. Administradores de sistemas que buscan ampliar sus conocimientos en diseño de interfaces y legislación digital. Desarrolladores web y consultores tecnológicos que desean fortalecer su visión integral y estratégica. Estudiantes con interés en infraestructura de redes, entornos web y regulación de telecomunicaciones. Interés por redes de computadoras, tecnologías web y normatividad digital.",
    egreso: "Comprender y aplicar los principios de arquitectura y funcionamiento de redes de computadoras. Diseñar interfaces web funcionales y orientadas a la experiencia del usuario. Identificar y aplicar la legislación y normatividad vigente en telecomunicaciones y tecnologías digitales. Utilizar tecnologías web actuales para el desarrollo y evaluación de soluciones tecnológicas con estándares de calidad."
  },
  "diplomado-en-evaluacion-de-los-diversos-modelos-de-gestion-educativo": {
    plan: {
      "Contenido Temático": ["Administración de Instituciones Educativas", "Seminario de Tesis I", "Optativa III", "Optativa IV"]
    },
    duracion: "128 hrs.",
    description: "Formar profesionistas en el campo de la Educación en Formación Docente capaces de diseñar, implementar, estructurar y fundamentar los principios de planeación y evaluación educativa de los modelos actuales, así como las estrategias innovadoras, para crear situaciones de enseñanza-aprendizaje, a partir de la relación epistemológica y tecnológica, para alcanzar una integración entre los componentes pedagógicos y didácticos en la transformación de la realidad contextual de la práctica docente."
  },
  "diplomado-en-analisis-del-uso-del-espanol-como-segunda-lengua-para-la-planeacion-de-metodologias-didacticas": {
    plan: {
      "Contenido Temático": ["Seminario de Tesis", "La Pragmática y el Estudio del Español", "Optativa I", "Optativa II"]
    },
    duracion: "128 hrs.",
    description: "Formar Maestros en el campo de la Enseñanza de Lenguas Extranjeras con sólida preparación teórica y metodológica, a partir de la reflexión propositiva sobre los problemas de la enseñanza y del aprendizaje, capaces de comprender y saber utilizar las herramientas pedagógicas, didácticas, socio-culturales, de traducción y semióticas, asimismo; construir las estrategias de aprendizaje que contribuyan a la programación, desarrollo y evaluación de cursos ubicados en un marco metodológico, por medio de los actuales avances de la semiótica, pragmática, cognición, traducción y la comunicación, apoyándose en el uso de la tecnología educativa; logrando competencias profesionales, académicas y sociales en escenarios interdisciplinarios y multidisciplinarios para la enseñanza y el aprendizaje del español y del inglés como lengua extranjera y ocupaciones de traducción."
  },
  "diplomado-en-elaboracion-de-programas-de-estudio-para-espanol-e-ingles-como-segunda-lengua": {
    plan: {
      "Contenido Temático": ["Elaboración del Currículum de Lenguas", "Gramática Comparativa del Inglés y del Español", "Optativa III", "Optativa IV"]
    },
    duracion: "128 hrs.",
    description: "Formar Maestros en el campo de la Enseñanza de Lenguas Extranjeras con sólida preparación teórica y metodológica, a partir de la reflexión propositiva sobre los problemas de la enseñanza y del aprendizaje, capaces de comprender y saber utilizar las herramientas pedagógicas, didácticas, socio-culturales, de traducción y semióticas, asimismo; construir las estrategias de aprendizaje que contribuyan a la programación, desarrollo y evaluación de cursos ubicados en un marco metodológico, por medio de los actuales avances de la semiótica, pragmática, cognición, traducción y la comunicación, apoyándose en el uso de la tecnología educativa; logrando competencias profesionales, académicas y sociales en escenarios interdisciplinarios y multidisciplinarios para la enseñanza y el aprendizaje del español y del inglés como lengua extranjera y ocupaciones de traducción."
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

// Para los diplomados en línea, copiamos la estructura del offline:
const offlineGestion = db["diplomado-en-gestion-empresarial"];
if (db["diplomado-en-gestion-empresarial-en-linea"] && offlineGestion) {
  db["diplomado-en-gestion-empresarial-en-linea"].plan = offlineGestion.plan;
  db["diplomado-en-gestion-empresarial-en-linea"].duracion = offlineGestion.duracion;
  db["diplomado-en-gestion-empresarial-en-linea"].description = offlineGestion.description;
  db["diplomado-en-gestion-empresarial-en-linea"].ingreso = offlineGestion.ingreso;
  db["diplomado-en-gestion-empresarial-en-linea"].egreso = offlineGestion.egreso;
}

const offlineDireccion = db["diplomado-en-direccion-de-empresas"];
if (db["diplomado-en-direccion-de-empresas-en-linea"] && offlineDireccion) {
  db["diplomado-en-direccion-de-empresas-en-linea"].plan = offlineDireccion.plan;
  db["diplomado-en-direccion-de-empresas-en-linea"].duracion = offlineDireccion.duracion;
  db["diplomado-en-direccion-de-empresas-en-linea"].description = offlineDireccion.description;
  db["diplomado-en-direccion-de-empresas-en-linea"].ingreso = offlineDireccion.ingreso;
  db["diplomado-en-direccion-de-empresas-en-linea"].egreso = offlineDireccion.egreso;
}

fs.writeFileSync(dbPath, JSON.stringify(db, null, 2), 'utf-8');
console.log('Batch 4 updated successfully');
