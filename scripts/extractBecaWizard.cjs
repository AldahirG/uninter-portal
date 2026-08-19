const fs = require('fs');
const content = fs.readFileSync('c:/Users/PC-1143/Desktop/Sites/uninter-portal/app/components/degree/shared/CareerAdmissionCTA.vue', 'utf8');

// Extract script
const scriptMatch = content.match(/<script setup lang="ts">([\s\S]*?)<\/script>/);
let script = scriptMatch[1];
script = script.replace(/const socials = \[[\s\S]*?\];/, '');
const newScript = `<script setup lang="ts">` + script + `</script>`;

// Extract form side
const formSideMatch = content.match(/(<div class="cta-form-side">[\s\S]*?<!-- REDES SOCIALES AL FINAL DE LA CALCULADORA -->)/);
const formSide = formSideMatch[1].replace('<!-- REDES SOCIALES AL FINAL DE LA CALCULADORA -->', '');

// Extract modal
const modalMatch = content.match(/(<Teleport to="body">[\s\S]*?<\/Teleport>)/);
const modal = modalMatch[1];

const template = `<template>
  ${formSide}
  ${modal}
</template>`;

// Extract styles
const styleMatch = content.match(/<style scoped>([\s\S]*?)<\/style>/);
const styleLines = styleMatch[1].split('\n');

const startIndex = styleLines.findIndex(l => l.includes('/* =========================================================') && styleLines[styleLines.indexOf(l)+1].includes('WIZARD Y FORMULARIO'));
const endIndex = styleLines.findIndex(l => l.includes('/* =========================================================') && styleLines[styleLines.indexOf(l)+1].includes('REDES SOCIALES ESTILO DIPLOMADOS AL FINAL'));

const modalStartIndex = styleLines.findIndex(l => l.includes('/* =========================================================') && styleLines[styleLines.indexOf(l)+1].includes('MODAL DE AVISO (PROMEDIO < 7.0)'));

const wizardStyles = styleLines.slice(startIndex, endIndex).join('\n');
const modalStyles = styleLines.slice(modalStartIndex).join('\n');

const styles = `<style scoped>
${wizardStyles}
${modalStyles}
</style>`;

const wizardComponent = [newScript, template, styles].join('\n\n');
fs.writeFileSync('c:/Users/PC-1143/Desktop/Sites/uninter-portal/app/components/degree/shared/BecaWizard.vue', wizardComponent);
console.log('BecaWizard created!');
