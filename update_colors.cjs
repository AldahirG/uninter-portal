const fs = require('fs');
let html = fs.readFileSync('app/components/navbar/Index.vue', 'utf8');

const replacements = [
  { label: 'Universidad', old: '#196ec2', new: '#1565C0' },
  { label: 'Bachillerato', old: '#378627', new: '#6BAF04' },
  { label: 'Secundaria', old: '#eb6200', new: '#ECAB00' },
  { label: 'Posgrados', old: '#546e7a', new: '#6F7423' },
  { label: 'Diplomados', old: '#795548', new: '#E47323' },
  { label: 'Prepa Abierta', old: '#007b5a', new: '#00695C' },
  { label: 'Spanish School', old: '#c13b10', new: '#BF360C' }, // using BF360C from my parsing above
  { label: 'Verano Kids', old: '#8027a0', new: '#6A1B9A' },
  { label: 'Eventos', old: '#283593', new: '#1A237E' },
  { label: 'Internacionalización', old: '#db3236', new: '#C62828' },
  { label: 'Centro de Idiomas', old: '#0b81c2', new: '#0277BD' },
];

replacements.forEach(r => {
  const regex = new RegExp(`label:\\s*"${r.label}",[\\s\\S]*?color:\\s*"${r.old}"`);
  const match = html.match(regex);
  if (match) {
    html = html.replace(match[0], match[0].replace(r.old, r.new));
  } else {
    console.log(`Could not find old color for ${r.label}`);
  }
});

fs.writeFileSync('app/components/navbar/Index.vue', html);
console.log('Colors updated');
