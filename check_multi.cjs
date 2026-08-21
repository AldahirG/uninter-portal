const fs = require('fs');

const multi = fs.readFileSync('app/pages/secundaria/siu-multicultural.vue', 'utf8');

// Check the tag style
let tagMatch = multi.match(/<div class="siu-plan__panel-tag"[\s\S]*?<\/div>/);
console.log('Tag HTML:', tagMatch ? tagMatch[0] : 'not found');

// Check the check icons
let iconMatch = multi.match(/<Icon name="mdi:check-circle-outline"[\s\S]*?\/>/);
console.log('Icon HTML:', iconMatch ? iconMatch[0] : 'not found');
