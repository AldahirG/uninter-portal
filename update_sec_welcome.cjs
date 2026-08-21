const fs = require('fs');
let html = fs.readFileSync('app/components/secundaria/Welcome.vue', 'utf8');

// Change top band background to white
html = html.replace('.siu-welcome__top {\n  background: var(--sbg);', '.siu-welcome__top {\n  background: #fff;');
// Change title color to dark
html = html.replace('color: #fff;\n  margin: 0;', 'color: #0f172a;\n  margin: 0;');
// Change desc color (already #475569, maybe leave it)
html = html.replace('color: #475569;\n  margin: 0;', 'color: #64748b;\n  margin: 0;');
// Change cards wrap background
html = html.replace('background: #212121;\n  padding: 3.5rem 0;', 'background: #fcf9f2;\n  padding: 3.5rem 0;');
// Change card text colors
html = html.replace('color: #fff;\n  margin: 0 0 0.6rem;', 'color: #0f172a;\n  margin: 0 0 0.6rem;');
html = html.replace('color: rgba(255,255,255,0.55);\n  line-height: 1.6;', 'color: #475569;\n  line-height: 1.6;');

fs.writeFileSync('app/components/secundaria/Welcome.vue', html);
console.log('Welcome updated');
