const fs = require('fs');

const js = fs.readFileSync('.output_backup/public/_nuxt/DECoEMXL.js', 'utf8');

// The file DECoEMXL.js has const Ce={ ... }; return ( ...
const match = js.match(/const Ce=({.*?}),ze=/);

if (match) {
  let jsonStr = match[1];
  
  // Try to safely extract keys without parsing the whole thing which might have JS syntax (like null instead of "null")
  const regex = /"([a-z0-9\-]+)":\{id:"/g;
  let matches;
  let keys = [];
  while ((matches = regex.exec(jsonStr)) !== null) {
      keys.push(matches[1]);
  }
  
  console.log('Posgrados in output backup: ' + keys.length);
  console.log(keys);
  
  const current = JSON.parse(fs.readFileSync('app/assets/data/posgrados.json', 'utf8'));
  const currentKeys = Object.keys(current);
  console.log('Posgrados in current posgrados.json: ' + currentKeys.length);
  
  const missing = keys.filter(k => !currentKeys.includes(k));
  console.log('Missing: ' + missing);
  
  // Since we know "maes-redes" is the only one I saw missing earlier, and I restored it. 
  // Let's just output the keys to see if anything is missing.
} else {
  console.log('Could not find Ce data');
}
