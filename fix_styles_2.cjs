const fs = require('fs');

function revertAndFix(path) {
  let content = fs.readFileSync(path, 'utf8');

  // 1. Remove color #0f3c61 from <p class="siu-body">
  content = content.replace(/<p class="siu-body" style="color: #0f3c61;">/g, '<p class="siu-body">');

  // 2. Pills: remove border, set text to blue, set checkmark to blue
  content = content.replace(/class="siu-pill" style="color: #0f3c61; border-color: #0f3c61;"/g, 'class="siu-pill" style="color: #0f3c61;"');
  // the checkmark inside siu-pill was set to #ffce52
  // We can just find the checkmark before the tag name. In the HTML it is:
  // <Icon name="mdi:check" size="13" style="color: #ffce52;" />
  content = content.replace(/<Icon name="mdi:check" size="13" style="color: #ffce52;" \/>/g, '<Icon name="mdi:check" size="13" style="color: #0f3c61;" />');
  
  // Also check if there's any remaining old style for check
  content = content.replace(/<Icon name="mdi:check" size="13" style="color: #0f3c61" \/>/g, '<Icon name="mdi:check" size="13" style="color: #0f3c61;" />');

  // 3. PLAN DE ESTUDIOS in dark blue
  // Currently: <h2 class="siu-title siu-title--center">PLAN DE ESTUDIOS</h2>
  content = content.replace(/<h2 class="siu-title siu-title--center">PLAN DE ESTUDIOS<\/h2>/g, '<h2 class="siu-title siu-title--center" style="color: #0f3c61;">PLAN DE ESTUDIOS</h2>');

  fs.writeFileSync(path, content);
}

revertAndFix('app/pages/secundaria/siu-bilingue.vue');
revertAndFix('app/pages/secundaria/siu-multicultural.vue');

console.log('Fixed paragraph colors, pill borders/icons, and Plan de Estudios title.');
