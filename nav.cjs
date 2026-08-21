const fs = require('fs');
let html = fs.readFileSync('app/components/navbar/Index.vue', 'utf8');

const regex = /\{\s*label:\s*"([^"]+)"/g;
let match;
while ((match = regex.exec(html)) !== null) {
  if (['Prepa Abierta', 'Spanish School'].includes(match[1])) console.log(match[1], match.index);
}
