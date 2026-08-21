const fs = require('fs');

function processPage(path, pageType) {
  let content = fs.readFileSync(path, 'utf8');
  
  // 1. Reorder HTML
  const pStart = content.indexOf('<section id="porque"');
  if (pStart === -1) {
    console.error('Could not find porque section in ' + path);
    return;
  }
  const pEnd = content.indexOf('</section>', pStart) + 10;
  
  const planStart = content.indexOf('<section id="plan"');
  const planEnd = content.indexOf('</section>', planStart) + 10;
  
  const egresoStart = content.indexOf('<section id="egreso"');
  const egresoEnd = content.indexOf('</section>', egresoStart) + 10;
  
  const propuestaHTML = content.substring(pStart, pEnd);
  const planHTML = content.substring(planStart, planEnd);
  const egresoHTML = content.substring(egresoStart, egresoEnd);
  
  // The combined block will be replacing from the lowest start index to highest end index.
  const blockStart = Math.min(pStart, planStart, egresoStart);
  const blockEnd = Math.max(pEnd, planEnd, egresoEnd);
  
  // The user wanted: Propuesta -> Egreso -> Plan
  const newBlock = `${propuestaHTML}\n\n    ${egresoHTML}\n\n    ${planHTML}`;
  
  content = content.substring(0, blockStart) + newBlock + content.substring(blockEnd);
  
  // 2. Update styles
  content = content.replace(
    /¿Por qué elegir SIU([^?]+)\?/g,
    '¿Por qué elegir <span style="color: #ffce52; font-style: italic;">SIU$1</span>?'
  );
  content = content.replace(
    /PERFIL DE EGRESO/g,
    'PERFIL <span style="color: #ffce52; font-style: italic;">DE EGRESO</span>'
  );

  content = content.replace(/\.siu-porque-sec \{[\s\S]*?\}/, '.siu-porque-sec { padding: 6rem 0; background: #ffffff; }');
  content = content.replace(/\.siu-porque-sec__title \{[\s\S]*?\}/, '.siu-porque-sec__title { font-family: var(--font-serif, Georgia, serif); font-size: clamp(2rem, 4vw, 3rem); font-weight: 800; color: #0f3c61; margin: 0 0 1.5rem; line-height: 1.1; }');
  content = content.replace(/\.siu-porque-sec__right \{[\s\S]*?\}/, '.siu-porque-sec__right { background: #fff; border: 1px solid #ffce52; border-radius: 16px; padding: 2.5rem; box-shadow: 0 8px 30px rgba(0,0,0,0.04); }');
  
  content = content.replace(/\.siu-plan \{[\s\S]*?\}/, '.siu-plan { background: #fdfaf4; padding: 6.5rem 0; }');
  content = content.replace(/\.siu-plan__title \{[\s\S]*?\}/, '.siu-plan__title { font-family: var(--font-serif, Georgia, serif); font-size: clamp(2rem, 4vw, 3rem); font-weight: 800; color: #0f3c61; text-align: center; margin: 0 0 0.5rem; }');
  content = content.replace(/\.siu-plan__panel-tag \{[\s\S]*?\}/, '.siu-plan__panel-tag { display: inline-flex; align-items: center; gap: 0.35rem; font-size: 0.72rem; font-weight: 800; letter-spacing: 0.05em; text-transform: uppercase; color: #ffce52; margin-bottom: 0.75rem; }');
  content = content.replace(/\.siu-plan__panel-sem \{[\s\S]*?\}/, '.siu-plan__panel-sem { font-size: 1.4rem; font-weight: 800; color: #0f3c61; margin-bottom: 1.5rem; }');
  content = content.replace(/\.siu-plan__list li \{[\s\S]*?\}/, '.siu-plan__list li { display: flex; align-items: center; gap: 0.5rem; font-size: 0.9rem; color: #0f3c61; }');
  content = content.replace(/\.siu-plan__check \{[\s\S]*?\}/, '.siu-plan__check { color: #ffce52; }');
  
  content = content.replace(/\.siu-timeline__num \{[\s\S]*?\}/, '.siu-timeline__num { width: 42px; height: 42px; border-radius: 50%; background: #ffffff; border: 2px solid #ddd; color: #0f3c61; display: flex; align-items: center; justify-content: center; font-size: 0.9rem; font-weight: 700; margin: 0 auto 0.5rem; transition: all 0.3s; }');
  content = content.replace(/\.siu-timeline__step--active \.siu-timeline__num \{[\s\S]*?\}/, '.siu-timeline__step--active .siu-timeline__num { background: #ffce52; border-color: #ffce52; color: #ffffff; box-shadow: 0 4px 12px rgba(255, 206, 82, 0.3); }');
  content = content.replace(/\.siu-timeline__label \{[\s\S]*?\}/, '.siu-timeline__label { font-size: 0.75rem; font-weight: 700; color: #0f3c61; }');

  content = content.replace(/\.siu-egreso \{[\s\S]*?\}/, '.siu-egreso { padding: 6rem 0; background: #ffffff; }');
  content = content.replace(/\.siu-egreso__title \{[\s\S]*?\}/, '.siu-egreso__title { font-family: var(--font-serif, Georgia, serif); font-size: clamp(2rem, 4vw, 3rem); font-weight: 800; color: #0f3c61; margin: 0 0 1.5rem; line-height: 1.1; }');
  content = content.replace(/\.siu-egreso__item \{[\s\S]*?\}/, '.siu-egreso__item { display: flex; gap: 0.75rem; font-size: 0.88rem; line-height: 1.5; color: #0f3c61; }');
  content = content.replace(/\.siu-egreso__icon \{[\s\S]*?\}/, '.siu-egreso__icon { width: 32px; height: 32px; background: #fdfaf4; border-radius: 6px; display: flex; align-items: center; justify-content: center; color: #ffce52; flex-shrink: 0; }');

  // Eyebrow CSS
  if (!content.includes('.siu-porque-sec__eyebrow')) {
    content = content.replace('<style scoped>', '<style scoped>\n.siu-porque-sec__eyebrow { font-size: 0.75rem; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; color: #ffce52; margin: 0 0 0.75rem; }');
  }
  if (!content.includes('.siu-plan__eyebrow')) {
    content = content.replace('<style scoped>', '<style scoped>\n.siu-plan__eyebrow { font-size: 0.75rem; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; color: #ffce52; text-align: center; margin: 0 0 0.5rem; }');
  }
  if (!content.includes('.siu-egreso__eyebrow')) {
    content = content.replace('<style scoped>', '<style scoped>\n.siu-egreso__eyebrow { font-size: 0.75rem; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; color: #ffce52; margin: 0 0 0.75rem; }');
  }

  // Inject Eyebrow HTML
  content = content.replace(
    /<h2 class="siu-porque-sec__title">/,
    '<p class="siu-porque-sec__eyebrow">NUESTRA PROPUESTA</p>\n          <h2 class="siu-porque-sec__title">'
  );
  content = content.replace(
    /<h2 class="siu-plan__title">/,
    '<p class="siu-plan__eyebrow">ESTRUCTURA CURRICULAR</p>\n        <h2 class="siu-plan__title">'
  );
  content = content.replace(
    /<h2 class="siu-egreso__title">/,
    '<p class="siu-egreso__eyebrow">AL TERMINAR EL PROGRAMA</p>\n          <h2 class="siu-egreso__title">'
  );

  content = content.replace(/(<p class="siu-porque-sec__eyebrow">NUESTRA PROPUESTA<\/p>\s*){2,}/g, '<p class="siu-porque-sec__eyebrow">NUESTRA PROPUESTA</p>\n          ');
  content = content.replace(/(<p class="siu-plan__eyebrow">ESTRUCTURA CURRICULAR<\/p>\s*){2,}/g, '<p class="siu-plan__eyebrow">ESTRUCTURA CURRICULAR</p>\n        ');
  content = content.replace(/(<p class="siu-egreso__eyebrow">AL TERMINAR EL PROGRAMA<\/p>\s*){2,}/g, '<p class="siu-egreso__eyebrow">AL TERMINAR EL PROGRAMA</p>\n          ');

  fs.writeFileSync(path, content);
}

processPage('app/pages/secundaria/siu-bilingue.vue', 'Bilingüe');
processPage('app/pages/secundaria/siu-multicultural.vue', 'Multicultural');

console.log('Pages updated successfully.');
