const fs = require('fs');
let content = fs.readFileSync('app/pages/bachillerato/biu-bilingue.vue', 'utf8');
const p = content.indexOf('<section class="biu-hero">');
console.log(content.substring(p, p + 1500));
