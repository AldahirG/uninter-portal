const fs = require('fs');
let oferta = fs.readFileSync('app/components/secundaria/OfertaEducativa.vue', 'utf8');

oferta = oferta.replace(
  /.prog-card__cta {[\s\S]*?}/,
  `.prog-card__cta {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(90deg, #FFCE52 0%, #00b6ec 100%);
  color: #0f172a;
  border: 1px solid #FFCE52;
  font-size: 0.9rem;
  font-weight: 700;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  text-decoration: none;
  transition: opacity 0.2s, transform 0.2s;
  cursor: pointer;
}`
);

fs.writeFileSync('app/components/secundaria/OfertaEducativa.vue', oferta);
