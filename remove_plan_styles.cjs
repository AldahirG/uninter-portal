const fs = require('fs');

let multi = fs.readFileSync('app/pages/secundaria/siu-multicultural.vue', 'utf8');

// Replace the inline style on the panel-tag
multi = multi.replace(/<div class="siu-plan__panel-tag" style="color: #b88a00">/g, '<div class="siu-plan__panel-tag">');

// Replace the inline style on the check icons
multi = multi.replace(/class="siu-plan__check"\s*style="color: #b88a00"/g, 'class="siu-plan__check"');

fs.writeFileSync('app/pages/secundaria/siu-multicultural.vue', multi);
