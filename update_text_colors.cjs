const fs = require('fs');

function updateStyles(path) {
  let content = fs.readFileSync(path, 'utf8');

  const stylesToInject = `
.siu-eyebrow {
  color: #ffce52 !important;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 0.1em;
}
.siu-title {
  color: #0f3c61 !important;
}
.siu-title em {
  color: #ffce52 !important;
  font-style: italic;
}
.siu-body {
  color: #0f3c61 !important;
}
.siu-pill {
  color: #0f3c61 !important;
  border-color: #0f3c61 !important;
}
.siu-pill :deep(svg) {
  color: #ffce52 !important;
}
.siu-hcard__list li span {
  color: #0f3c61 !important;
}
.siu-egreso__item span {
  color: #0f3c61 !important;
}
.siu-egreso__item {
  color: #0f3c61 !important;
}
`;

  // Check if we already injected this before
  if (!content.includes('.siu-title em {')) {
    content = content.replace('<style scoped>', '<style scoped>\n' + stylesToInject);
    fs.writeFileSync(path, content);
  }
}

updateStyles('app/pages/secundaria/siu-bilingue.vue');
updateStyles('app/pages/secundaria/siu-multicultural.vue');

console.log('Styles updated.');
