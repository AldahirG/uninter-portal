const fs = require('fs');

// 1. OfertaEducativa.vue
let oferta = fs.readFileSync('app/components/secundaria/OfertaEducativa.vue', 'utf8');
oferta = oferta.replace(
  'linear-gradient(90deg, #FFCE52 0%, #00b6ec 100%)',
  'linear-gradient(90deg, #FFCE52 0%, #FFCE52 80%, #00b6ec 100%)'
);
fs.writeFileSync('app/components/secundaria/OfertaEducativa.vue', oferta);

// 2. Welcome.vue
let welcome = fs.readFileSync('app/components/secundaria/Welcome.vue', 'utf8');
welcome = welcome.replace(
  'linear-gradient(135deg, #FFCE52 0%, #00b6ec 100%)',
  'linear-gradient(135deg, #FFCE52 0%, #FFCE52 60%, #00b6ec 100%)'
);
fs.writeFileSync('app/components/secundaria/Welcome.vue', welcome);

// 3. HeroBanner.vue
let hero = fs.readFileSync('app/components/secundaria/HeroBanner.vue', 'utf8');
hero = hero.replace(
  /.siu-btn-card:hover {[\s\S]*?}/,
  `.siu-btn-card:hover {
  background: rgba(5, 173, 220, 0.15);
  border-color: #05addc;
  color: #05addc;
  transform: translateY(-2px);
}`
);
fs.writeFileSync('app/components/secundaria/HeroBanner.vue', hero);

console.log('All 3 files updated successfully.');
