const fs = require('fs');
const content = fs.readFileSync('app/pages/secundaria/siu-bilingue.vue', 'utf8');
const p = content.indexOf('<div class="siu-hero__stats-bar">');
console.log(content.substring(p - 300, p + 500));
