const fs = require('fs');
const bilingue = fs.readFileSync('app/pages/secundaria/siu-bilingue.vue', 'utf8');
const multi = fs.readFileSync('app/pages/secundaria/siu-multicultural.vue', 'utf8');

console.log('--- bilingue css ---');
console.log(bilingue.match(/\.siu-btn-card[\s\S]*?\}/g));
console.log(bilingue.match(/\.siu-val-card__cta[\s\S]*?\}/g) || bilingue.match(/\.btn[\s\S]*?\}/g));

console.log('--- multi css ---');
console.log(multi.match(/\.siu-btn-card[\s\S]*?\}/g));
