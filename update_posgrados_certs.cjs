const fs = require('fs');
const path = require('path');

const filepath = path.join(__dirname, 'app', 'assets', 'data', 'posgrados.json');
const data = JSON.parse(fs.readFileSync(filepath, 'utf8'));

for (const key in data) {
  if (!data[key].hasOwnProperty('power_skills')) {
    data[key].power_skills = [];
  }
  if (!data[key].hasOwnProperty('internationalization')) {
    data[key].internationalization = null; // As it's an object when present
  }
}

fs.writeFileSync(filepath, JSON.stringify(data, null, 2), 'utf8');
console.log('posgrados.json updated with power_skills and internationalization');
