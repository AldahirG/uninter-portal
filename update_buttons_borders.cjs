const fs = require('fs');

// 1. Update OfertaEducativa.vue
let oferta = fs.readFileSync('app/components/secundaria/OfertaEducativa.vue', 'utf8');

oferta = oferta.replace(
  'background: var(--pc);',
  'background: linear-gradient(90deg, #FFCE52 0%, #00b6ec 100%);\n  border: 1px solid #FFCE52;\n  color: #0f172a;'
);
oferta = oferta.replace(
  'color: #fff;',
  ''
);

oferta = oferta.replace(
  /.prog-card__cta:hover {[\s\S]*?}/,
  '.prog-card__cta:hover {\n  transform: translateY(-2px);\n  opacity: 0.9;\n}'
);

fs.writeFileSync('app/components/secundaria/OfertaEducativa.vue', oferta);


// 2. Update Welcome.vue
let welcome = fs.readFileSync('app/components/secundaria/Welcome.vue', 'utf8');

welcome = welcome.replace(
  /.siu-val-card {[\s\S]*?}/,
  `.siu-val-card {
  background: #fff;
  border-radius: 14px;
  padding: 1.75rem 1.5rem;
  transition: transform 0.25s, box-shadow 0.25s;
  position: relative;
  z-index: 1;
}
.siu-val-card::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 14px;
  padding: 1px;
  background: rgba(236,171,0,0.15);
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
  transition: background 0.3s;
  z-index: -1;
}`
);

welcome = welcome.replace(
  /.siu-val-card:hover {[\s\S]*?}/,
  `.siu-val-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 32px rgba(236,171,0,0.12);
}
.siu-val-card:hover::before {
  background: linear-gradient(135deg, #FFCE52 0%, #00b6ec 100%);
}`
);

fs.writeFileSync('app/components/secundaria/Welcome.vue', welcome);
console.log('OfertaEducativa.vue and Welcome.vue updated.');
