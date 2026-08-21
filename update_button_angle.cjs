const fs = require('fs');

let oferta = fs.readFileSync('app/components/secundaria/OfertaEducativa.vue', 'utf8');

oferta = oferta.replace(
  'linear-gradient(90deg, #ffce52 0%, #ffce52 70%, #00b6ec 100%)',
  'linear-gradient(135deg, #ffce52 0%, #ffce52 70%, #00b6ec 100%)'
);

fs.writeFileSync('app/components/secundaria/OfertaEducativa.vue', oferta);
