const fs = require('fs');
const content = fs.readFileSync('c:/Users/PC-1143/Desktop/Sites/uninter-portal/app/components/degree/shared/CareerAdmissionCTA.vue', 'utf8');

const styleMatch = content.match(/<style scoped>([\s\S]*?)<\/style>/);
const css = styleMatch[1];
const lines = css.split('\n');

const startIndex = lines.findIndex((l, i) => l.includes('/* =========================================================') && lines[i+1].includes('WIZARD Y FORMULARIO'));
const endIndex = lines.findIndex((l, i) => l.includes('/* =========================================================') && lines[i+1].includes('REDES SOCIALES ESTILO DIPLOMADOS AL FINAL'));

const modalStartIndex = lines.findIndex((l, i) => l.includes('/* =========================================================') && lines[i+1].includes('MODAL DE AVISO (PROMEDIO < 7.0)'));

const wizardCss = lines.slice(startIndex, endIndex).join('\n');
const modalCss = lines.slice(modalStartIndex).join('\n');

const styleBlock = `<style scoped>\n${wizardCss}\n${modalCss}\n</style>`;

let currentWizard = fs.readFileSync('c:/Users/PC-1143/Desktop/Sites/uninter-portal/app/components/degree/shared/BecaWizard.vue', 'utf8');
currentWizard = currentWizard.replace(/<style scoped>[\s\S]*?<\/style>/, styleBlock);
fs.writeFileSync('c:/Users/PC-1143/Desktop/Sites/uninter-portal/app/components/degree/shared/BecaWizard.vue', currentWizard);
console.log('CSS updated successfully');
