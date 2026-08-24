const fs = require('fs');
const path = 'c:/Users/PC-1143/Desktop/Sites/uninter-portal/app/assets/data/carreras.json';
const data = JSON.parse(fs.readFileSync(path, 'utf8'));

if (data['derecho']) {
  data['derecho'].internationalization = {
    title: "Experiencia Internacional en Derecho",
    description: "Expande tus horizontes legales y profesionales. Estudia o realiza prácticas en el extranjero con nuestras prestigiosas instituciones en convenio alrededor del mundo.",
    program_details: "Nuestro programa de movilidad internacional te permite cursar desde un verano intensivo hasta un año completo en el extranjero, homologando el 100% de tus créditos curriculares. Además, tendrás la oportunidad de perfeccionar un segundo idioma y generar una red de contactos jurídicos a nivel global.",
    benefits: [
      "Homologación directa de materias y créditos curriculares.",
      "Oportunidad de realizar prácticas en despachos y cortes internacionales.",
      "Perfeccionamiento avanzado del idioma inglés, francés o alemán técnico legal.",
      "Networking global y un diferencial de peso en tu currículum."
    ],
    destinations: [
      {
        country: "España",
        image: "https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&w=600&q=80",
        activities: "Cursa un semestre académico con homologación de materias y asiste como observador a juicios orales en el sector europeo.",
        universities: [
          { name: "Universidad Complutense de Madrid", url: "https://www.ucm.es/" },
          { name: "Universidad Rey Juan Carlos", url: "https://www.urjc.es/" }
        ]
      },
      {
        country: "Canadá",
        image: "https://images.unsplash.com/photo-1517935706615-2717063c2225?auto=format&fit=crop&w=600&q=80",
        activities: "Perfecciona el inglés jurídico participando en programas intensivos de verano enfocados en Common Law y Derecho Internacional.",
        universities: [
          { name: "University of Toronto", url: "https://www.utoronto.ca/" },
          { name: "McGill University", url: "https://www.mcgill.ca/" }
        ]
      },
      {
        country: "Argentina",
        image: "https://images.unsplash.com/photo-1589909202802-8f4aadce1849?auto=format&fit=crop&w=600&q=80",
        activities: "Intercambio anual para especializarte en Derechos Humanos y Derecho Civil latinoamericano con enfoque comparado.",
        universities: [
          { name: "Universidad de Buenos Aires (UBA)", url: "https://www.uba.ar/" }
        ]
      },
      {
        country: "Francia",
        image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=600&q=80",
        activities: "Obtén perspectiva sobre la cuna del sistema civil y especialízate en Derecho Europeo con seminarios bilingües.",
        universities: [
          { name: "Université Paris 1 Panthéon-Sorbonne", url: "https://www.pantheonsorbonne.fr/" }
        ]
      }
    ]
  };
  fs.writeFileSync(path, JSON.stringify(data, null, 2), 'utf8');
  console.log('Internationalization data injected for "derecho".');
} else {
  console.log('Error: "derecho" key not found in carreras.json.');
}
