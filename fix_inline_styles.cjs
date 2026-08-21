const fs = require('fs');

function fixPage(path) {
  let content = fs.readFileSync(path, 'utf8');

  // Title in propuesta
  content = content.replace(
    /<h2 class="siu-title">¿Por qué elegir<br \/>\s*<em>(SIU Bilingüe|SIU Multicultural)<\/em>\?<\/h2>/g,
    '<h2 class="siu-title" style="color: #0f3c61;">¿Por qué elegir<br /><em style="color: #ffce52; font-style: italic;">$1</em><span style="color: #0f3c61;">?</span></h2>'
  );

  // Body text in propuesta and egreso
  content = content.replace(/<p class="siu-body">/g, '<p class="siu-body" style="color: #0f3c61;">');

  // Pills in propuesta
  content = content.replace(
    /class="siu-pill"/g,
    'class="siu-pill" style="color: #0f3c61; border-color: #0f3c61;"'
  );
  content = content.replace(
    /<Icon name="mdi:check" size="13" \/>/g,
    '<Icon name="mdi:check" size="13" style="color: #ffce52;" />'
  );

  // Text in 'Lo que te distinguirá'
  // It's a span inside siu-hcard__list
  // Look for: <span>{{ item.text }}</span>
  // But there are multiple instances of this.
  // We can just replace <span>{{ item.text }}</span> with <span style="color: #0f3c61;">{{ item.text }}</span> everywhere in the file since all item.texts are supposed to be blue in these sections.
  content = content.replace(/<span>\{\{\s*item\.text\s*\}\}<\/span>/g, '<span style="color: #0f3c61;">{{ item.text }}</span>');

  // Title in egreso
  content = content.replace(
    /<h2 class="siu-title">PERFIL<br \/>\s*<em>DE EGRESO<\/em><\/h2>/g,
    '<h2 class="siu-title" style="color: #0f3c61;">PERFIL<br /><em style="color: #ffce52; font-style: italic;">DE EGRESO</em></h2>'
  );

  fs.writeFileSync(path, content);
}

fixPage('app/pages/secundaria/siu-bilingue.vue');
fixPage('app/pages/secundaria/siu-multicultural.vue');

console.log('Fixed inline styles for blue and yellow texts.');
