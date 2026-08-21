const fs = require('fs');
let html = fs.readFileSync('app/components/secundaria/VidaAcademica.vue', 'utf8');

// Update title color
html = html.replace('color: #1a1500;\n  margin: 0 0 1.5rem;', 'color: #0f172a;\n  margin: 0 0 1.5rem;');

// Update quote box
html = html.replace('background: #fffbf0;', 'background: #fcf9f2;');
html = html.replace('color: #444;\n  line-height: 1.7;\n  font-style: italic;', 'color: #1e3a8a;\n  line-height: 1.7;\n  font-style: italic;');

// Update badge text color
html = html.replace('color: #1a1500;\n  border-radius: 12px;', 'color: #0f172a;\n  border-radius: 12px;');

fs.writeFileSync('app/components/secundaria/VidaAcademica.vue', html);
console.log('VidaAcademica updated');
