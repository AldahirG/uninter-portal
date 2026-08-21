const fs = require('fs');
let html = fs.readFileSync('app/pages/bachillerato/biu-bilingue.vue', 'utf8');
const heroStart = html.indexOf('<section class="biu-hero">');
const heroEnd = html.indexOf('</section>', heroStart);
console.log(html.substring(heroStart, heroEnd + 10));
