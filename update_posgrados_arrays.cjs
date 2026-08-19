const fs = require('fs');
const path = require('path');

const filepath = path.join(__dirname, 'app', 'assets', 'data', 'posgrados.json');
const data = JSON.parse(fs.readFileSync(filepath, 'utf8'));

for (const key in data) {
  if (!data[key].hasOwnProperty('lineas_investigacion')) {
    data[key].lineas_investigacion = [];
  }
  if (!data[key].hasOwnProperty('areas_enfoque')) {
    data[key].areas_enfoque = [];
  }
  if (!data[key].hasOwnProperty('areas_especializacion')) {
    data[key].areas_especializacion = [];
  }
}

fs.writeFileSync(filepath, JSON.stringify(data, null, 2), 'utf8');
console.log('posgrados.json updated successfully');
