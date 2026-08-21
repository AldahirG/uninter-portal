const fs = require('fs');
let html = fs.readFileSync('app/components/secundaria/HeroBanner.vue', 'utf8');

// Add overlay2 if not exists
if (!html.includes('siu-hero__overlay2')) {
  html = html.replace(
    '<div class="siu-hero__overlay"></div>',
    '<div class="siu-hero__overlay"></div>\n      <div class="siu-hero__overlay2"></div>'
  );
}

// Update overlay CSS and add overlay2 CSS
html = html.replace(
  /\.siu-hero__overlay \{[\s\S]*?\}/,
  `.siu-hero__overlay {
  position: absolute;
  inset: 0;
  background: transparent;
}
.siu-hero__overlay2 {
  -webkit-backdrop-filter: blur(16px);
  backdrop-filter: blur(16px);
  background: transparent;
  inset: 0;
  -webkit-mask-image: linear-gradient(90deg, #000, #000 45%, transparent 65%);
  mask-image: linear-gradient(90deg, #000, #000 45%, transparent 65%);
  position: absolute;
  will-change: transform;
  transform: translateZ(0);
}`
);

// Fix eyebrow margin
html = html.replace(
  '.siu-hero__eyebrow {\n  display: flex;\n  align-items: center;\n  gap: 0.625rem;\n  margin-bottom: 1rem;\n}',
  '.siu-hero__eyebrow {\n  display: flex;\n  align-items: center;\n  gap: 0.625rem;\n  margin-bottom: -1rem;\n}'
);

// Change sticker HELLO to light blue
html = html.replace(
  '.sticker-line--en {\n  background: var(--s);\n  color: #fff;\n}',
  '.sticker-line--en {\n  background: #00a8e8;\n  color: #fff;\n}'
);

// Stats strip changes
html = html.replace(
  'const stats = [',
  'const stats = [\n  { icon: "lucide:layers", title: "Modalidades", label: "Disponibles" },\n  { icon: "lucide:calendar", title: "Años de", label: "Duración" },\n  { icon: "", title: "Enfoque", label: "Bilingüe" },\n  { icon: "lucide:book-open", title: "Actividades", label: "Extracurriculares" }\n];\n//'
);

html = html.replace(
  '<span class="siu-stat__value">{{ stat.value }}</span>',
  '<div style="display: flex; align-items: center; justify-content: center; margin-bottom: 4px;"><Icon v-if="stat.icon" :name="stat.icon" size="24" class="siu-stat__icon" style="margin-right: 8px; color: var(--s);" /><span class="siu-stat__value" style="font-size: 1.2rem;">{{ stat.title }}</span></div>'
);

fs.writeFileSync('app/components/secundaria/HeroBanner.vue', html);
console.log('HeroBanner updated');
