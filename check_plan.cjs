const fs = require('fs');
const multi = fs.readFileSync('app/pages/secundaria/siu-multicultural.vue', 'utf8');

// Find plan list
const planStart = multi.indexOf('<section id="plan"');
const planEnd = multi.indexOf('</section>', planStart);
const planBlock = multi.substring(planStart, planEnd);

let liMatch = planBlock.match(/<li[\s\S]*?<\/li>/);
console.log('PLAN LI HTML:', liMatch ? liMatch[0] : 'not found');
