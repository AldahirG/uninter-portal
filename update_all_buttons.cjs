const fs = require('fs');

function updatePage(path) {
  let content = fs.readFileSync(path, 'utf8');
  
  // 1. Update .siu-hcard__cta
  content = content.replace(
    /\.siu-hcard__cta\s*\{[\s\S]*?\}/g,
    `.siu-hcard__cta {
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #ffce52 0%, #ffce52 70%, #00b6ec 100%);
  color: #0f172a;
  border: 1px solid #ffce52;
  font-weight: 700;
  padding: 0.75rem;
  border-radius: 8px;
  text-decoration: none;
  transition: opacity 0.2s, transform 0.2s;
}
.siu-hcard__cta:hover {
  transform: translateY(-2px);
  background: linear-gradient(135deg, #ffce52 0%, #ffce52 30%, #00b6ec 100%);
}`
  );
  
  // 2. Update .siu-btn-card:hover
  content = content.replace(
    /\.siu-btn-card:hover\s*\{[\s\S]*?\}/g,
    `.siu-btn-card:hover {
  background: rgba(5, 173, 220, 0.15);
  border-color: #05addc;
  color: #05addc;
  transform: translateY(-2px);
}`
  );
  
  fs.writeFileSync(path, content);
}

// Update specific pages
updatePage('app/pages/secundaria/siu-bilingue.vue');
updatePage('app/pages/secundaria/siu-multicultural.vue');

// 3. Update OfertaEducativa.vue hover gradient
let oferta = fs.readFileSync('app/components/secundaria/OfertaEducativa.vue', 'utf8');
oferta = oferta.replace(
  /\.prog-card__cta:hover\s*\{[\s\S]*?\}/g,
  `.prog-card__cta:hover {
  transform: translateY(-2px);
  background: linear-gradient(135deg, #ffce52 0%, #ffce52 30%, #00b6ec 100%);
}`
);
fs.writeFileSync('app/components/secundaria/OfertaEducativa.vue', oferta);

console.log('Changes applied to OfertaEducativa, siu-bilingue, and siu-multicultural.');
