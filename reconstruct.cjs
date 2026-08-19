const fs = require('fs');

function reconstruct(type, titleMain, titleSub, titleTag, descMeta, subtitle, headline, bodyText, jsonFile) {
  let tpl = fs.readFileSync('app/pages/posgrados/especialidades.vue', 'utf8');
  
  // Replace JSON
  const data = fs.readFileSync(jsonFile, 'utf8');
  tpl = tpl.replace(/const especialidades = \[.*?\];/s, `const data = ${data};`);
  
  // Replace references to especialidades data array
  tpl = tpl.replace(/especialidades/g, 'data');
  
  // Replace Head
  tpl = tpl.replace(/Especialidades de Posgrado \| UNINTER/g, titleTag);
  tpl = tpl.replace(/Especialidades de Posgrado UNINTER.*?"/g, descMeta + '"');
  
  // Replace Hero
  tpl = tpl.replace(/ESPECIALIDADES/g, titleMain);
  tpl = tpl.replace(/Profundización Profesional/g, titleSub);
  tpl = tpl.replace(/Programas cortos y de alta especialización técnica orientados a la práctica inmediata en el sector empresarial e industrial\./g, subtitle);
  
  // Replace Listado
  tpl = tpl.replace(/Explora nuestras <em>Especialidades<\/em>/g, headline);
  tpl = tpl.replace(/Encuentra el programa ideal para especializarte y adquirir ventajas competitivas inmediatas en tu campo profesional\./g, bodyText);
  
  fs.writeFileSync('app/pages/posgrados/' + type + '.vue', tpl);
}

reconstruct(
  'maestrias', 
  'MAESTRÍAS', 
  'Liderazgo y Gestión', 
  'Maestrías | UNINTER', 
  'Maestrías de Posgrado UNINTER - programas de alto nivel académico en administración, dirección de empresas (MADE), gestión de calidad, educación y redes web.', 
  'Adquiere un perfil estratégico de liderazgo global con especializaciones teóricas y proyectos prácticos aplicados a la industria actual.', 
  'Explora nuestras <em>Maestrías</em>', 
  'Adquiere un perfil estratégico de liderazgo global con especializaciones teóricas y proyectos prácticos aplicados a la industria actual.', 
  'maestrias_data.js'
);

reconstruct(
  'doctorados', 
  'DOCTORADOS', 
  'Investigación de Alto Nivel', 
  'Doctorados | UNINTER', 
  'Doctorados de Posgrado UNINTER - programas de investigación avanzada y excelencia académica. Doctorado en Administración (DA) y Doctorado en Humanidades (DH).', 
  'Programas del más alto nivel académico enfocados en la investigación aplicada y la generación de nuevo conocimiento.', 
  'Explora nuestros <em>Doctorados</em>', 
  'Nuestros programas doctorales cuentan con un claustro de investigadores distinguidos y líneas de generación de conocimiento altamente vigentes.', 
  'doctorados_data.js'
);
