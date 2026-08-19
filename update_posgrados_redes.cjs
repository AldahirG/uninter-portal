const fs = require('fs');
const path = require('path');

const dbPath = path.join(__dirname, 'app', 'assets', 'data', 'posgrados.json');
const db = JSON.parse(fs.readFileSync(dbPath, 'utf-8'));

const updates = {
  "maes-redes": {
    description: "Formar Maestros con las competencias tecnológicas necesarias para la toma de decisiones sobre la infraestructura de las comunicaciones, indispensables para la transmisión de voz, datos e imágenes en tiempo real en un ámbito seguro y confiable, así como también en el área de las tecnologías web.",
    mercado_laboral: "Optimización y desempeño de las tecnologías de la información en organizaciones de diversos sectores, arquitectura de red, y administración de ecosistemas web. Optimizará el desempeño de las tecnologías de información en organizaciones, contribuyendo al desarrollo permanente de la investigación y la innovación tecnológica. Será un factor de calidad en el área de la docencia. Actuará como agente de cambios tecnológicos, planteando la reformulación de las relaciones laborales e interrogantes en la integración organizacional y el fortalecimiento de su cultura, visualizando el impacto en el factor humano de las nuevas tecnologías y, por lo tanto, hará necesaria la incorporación de nuevas estrategias en su gestión.",
    ingreso: "Criterio de razonamiento lógico. Interés por la tecnología orientada a la web, así como por las redes de computadoras. Capacidad de observación y análisis. Es deseable también que cuenten con una personalidad dinámica, creativa, con iniciativa y facilidad para el trabajo en equipos multidisciplinarios, capacidad de concentración por largos periodos de tiempo y crítica.",
    egreso: "El egresado contará con una formación integral basada en conocimientos y herramientas teóricas y metodológicas, que le posibilitarán tomar decisiones efectivas referidas a temas y problemas contemporáneos de las redes de computadoras y tecnologías web, mostrando su competencia en el análisis y valoración de los diferentes dispositivos de interconexión de redes e integración de sistemas vía web.",
    plan: {
      "Semestre I": ["Arquitectura de Redes de Computadoras", "Diseño de Interfaces Visuales", "Legislación y Normalización de Telecomunicaciones", "Tecnologías y Aplicaciones Web"],
      "Semestre II": ["Estrategias de Negociación", "Mercadotecnia Aplicada a las Nuevas Tecnologías", "Minería Web", "Protocolos de Enrutamiento"],
      "Semestre III": ["Negocio y Comercio Electrónico", "Seminario de Investigación", "Optativa", "Optativa"],
      "Semestre IV": ["Investigación y Administración de la Innovación Tecnológica", "Seminario de Titulación", "Optativa", "Optativa"],
      "Área de Optativas": ["Acceso a la WAN", "Aspectos Físicos de Voz y Datos", "Conmutación y Conexión Inalámbrica de LAN", "Implementación y Administración de Redes Inalámbricas", "Internet y Telefonía Móvil", "Mecanismos de Pago Electrónico y Aspectos de Seguridad", "Objetos Distribuidos y Componentes en la Web", "Programación Orientada a la Web", "Seguridad en Ambientes de Redes"]
    },
    areas_conocimiento: ["Arquitectura de Redes de Computadora", "Telecomunicaciones", "Implementación y Administración de Redes", "Mercadotecnia Aplicada a las Nuevas Tecnologías", "Investigación y Administración de la Innovación Tecnológica", "Estrategias de Negociación", "Tecnologías y Aplicaciones WEB", "Programación Orientada a la WEB: Mecanismos de Pago Electrónico y Aspectos de Seguridad"],
    areas_especializacion: ["Redes de Computadoras", "Metodología", "Tecnologías Web"],
    lineas_investigacion: ["Redes de Computadoras", "Tecnologías Web"]
  }
};

for (const [slug, data] of Object.entries(updates)) {
  if (db[slug]) {
    db[slug].description = data.description;
    db[slug].mercado_laboral = data.mercado_laboral;
    db[slug].ingreso = data.ingreso;
    db[slug].egreso = data.egreso;
    db[slug].plan = data.plan;
    db[slug].areas_conocimiento = data.areas_conocimiento;
    db[slug].areas_especializacion = data.areas_especializacion;
    db[slug].lineas_investigacion = data.lineas_investigacion;
  }
}

fs.writeFileSync(dbPath, JSON.stringify(db, null, 2), 'utf-8');
console.log('Maestria en redes updated successfully');
