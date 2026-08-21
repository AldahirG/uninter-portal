const fs = require('fs');

let oferta = fs.readFileSync('app/components/secundaria/OfertaEducativa.vue', 'utf8');

oferta = oferta.replace(
  /.prog-card__cta {[\s\S]*?}/,
  `.prog-card__cta {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(90deg, #ffce52 0%, #ffce52 70%, #00b6ec 100%);
  color: #0f172a;
  border: 1px solid #ffce52;
  font-size: 0.9rem;
  font-weight: 700;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  text-decoration: none;
  transition: opacity 0.2s, transform 0.2s;
  cursor: pointer;
}`
);

oferta = oferta.replace(
  /.prog-card__tag {[\s\S]*?}/,
  `.prog-card__tag {
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  background: #0091d7;
  border: 1px solid #0091d7;
  color: #ffffff;
  font-size: 0.7rem;
  font-weight: 800;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding: 0.35rem 0.9rem;
  border-radius: 6px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.25);
}`
);

fs.writeFileSync('app/components/secundaria/OfertaEducativa.vue', oferta);
