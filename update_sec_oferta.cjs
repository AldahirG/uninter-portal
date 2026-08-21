const fs = require('fs');
let html = fs.readFileSync('app/components/secundaria/OfertaEducativa.vue', 'utf8');

// Change card title color
html = html.replace('color: var(--pc);\n  margin: 0 0 0.75rem;', 'color: #0f172a;\n  margin: 0 0 0.75rem;');

// Change tag background to light blue
html = html.replace('background: var(--pc);\n  color: #fff;', 'background: #00a8e8;\n  color: #fff;');

// Change checkmark icon color to light blue
html = html.replace('color: var(--pc);\n  flex-shrink: 0;', 'color: #00a8e8;\n  flex-shrink: 0;');

// Change CTA to gradient
html = html.replace(
  'background: var(--pc);\n  color: #fff;',
  'background: linear-gradient(90deg, #FAD961 0%, #20BCD5 100%);\n  color: #0f172a;'
);
html = html.replace(
  '.prog-card__cta:hover {\n  background: var(--pcl);\n  color: #1a1500;\n  transform: translateY(-2px);\n}',
  '.prog-card__cta:hover {\n  transform: translateY(-2px);\n  opacity: 0.9;\n}'
);

fs.writeFileSync('app/components/secundaria/OfertaEducativa.vue', html);
console.log('OfertaEducativa updated');
