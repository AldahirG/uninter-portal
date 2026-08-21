const fs = require('fs');
const content = fs.readFileSync('app/pages/secundaria/siu-bilingue.vue', 'utf8');
const start = content.indexOf('<section id="porque"');
const end = content.indexOf('</section>', start);
console.log(content.substring(start, end));
