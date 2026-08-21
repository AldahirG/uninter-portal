const fs = require('fs');

function fixDuplicates(path) {
  let content = fs.readFileSync(path, 'utf8');

  // Fix pills duplicate style
  content = content.replace(/class="siu-pill" style="color: #0f3c61; border-color: #0f3c61;"\s*style="[^"]*"/g, 'class="siu-pill" style="color: #0f3c61; border-color: #0f3c61;"');
  
  // Also check if any <Icon name="mdi:check" size="13" has a style already and replace it
  content = content.replace(/<Icon name="mdi:check" size="13"[^>]*\/>/g, '<Icon name="mdi:check" size="13" style="color: #ffce52;" />');

  fs.writeFileSync(path, content);
}

fixDuplicates('app/pages/secundaria/siu-bilingue.vue');
fixDuplicates('app/pages/secundaria/siu-multicultural.vue');

console.log('Fixed duplicates.');
