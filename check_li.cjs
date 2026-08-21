const fs = require('fs');
const multi = fs.readFileSync('app/pages/secundaria/siu-multicultural.vue', 'utf8');

// Print a list item
let liMatch = multi.match(/<li[\s\S]*?<\/li>/);
console.log('LI HTML:', liMatch ? liMatch[0] : 'not found');
