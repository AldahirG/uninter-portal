const fs = require('fs');
const content = fs.readFileSync('app/pages/secundaria/siu-bilingue.vue', 'utf8');
const start = content.indexOf('<section id="porque"');
console.log(content.substring(start, start + 800));
