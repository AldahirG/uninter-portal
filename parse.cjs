const fs = require('fs');
let html = fs.readFileSync('header_dump.txt', 'utf8');
const regex = /style="background:(#[a-fA-F0-9]+)"[^>]*>([\s\S]*?)<\/button>/g;
let match;
while ((match = regex.exec(html)) !== null) {
  let name = match[2].replace(/<[^>]*>/g, '').trim();
  console.log(name, match[1]);
}
