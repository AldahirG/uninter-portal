const fs = require('fs');

let multi = fs.readFileSync('app/pages/secundaria/siu-multicultural.vue', 'utf8');

// Remove inline style overriding the gradient
multi = multi.replace(/style="background:\s*#b88a00;\s*color:\s*#fff"/g, '');

fs.writeFileSync('app/pages/secundaria/siu-multicultural.vue', multi);
