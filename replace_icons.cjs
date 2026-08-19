const fs = require('fs');
const path = require('path');

function replaceInDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      replaceInDir(fullPath);
    } else if (fullPath.endsWith('.vue')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      if (content.includes('mdi:tiktok') || content.includes('mdi:home-heart-outline')) {
        content = content.replace(/mdi:tiktok/g, 'bi:tiktok');
        content = content.replace(/mdi:home-heart-outline/g, 'mdi:heart-outline');
        fs.writeFileSync(fullPath, content, 'utf8');
      }
    }
  }
}

replaceInDir(path.join(__dirname, 'app'));
console.log('Icons replaced safely');
