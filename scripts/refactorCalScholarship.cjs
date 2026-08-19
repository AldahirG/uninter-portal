const fs = require('fs');
let content = fs.readFileSync('c:/Users/PC-1143/Desktop/Sites/uninter-portal/app/components/LicPrese/CalScholarship.vue', 'utf8');

// Replace script setup
const newScript = `<script setup lang="ts">
import {
  Award,
  BookOpen,
  Globe,
  Clock,
  Check,
} from "lucide-vue-next";
import BecaWizard from "~/components/degree/shared/BecaWizard.vue";

const highlights = [
  { icon: Award, value: "Hasta 60%", label: "de beca disponible" },
  { icon: BookOpen, value: "23", label: "licenciaturas presenciales" },
  { icon: Globe, value: "71,000+", label: "egresados en México y el mundo" },
  { icon: Clock, value: "4 años", label: "duración promedio" },
];

const benefits = [
  "Colegiatura mensual con descuento garantizado",
  "Acceso a instalaciones de clase mundial",
  "Movilidad e intercambio internacional",
  "Bolsa de trabajo Enlace Profesional UNINTER",
  "Talleres deportivos y culturales incluidos",
];
</script>`;
content = content.replace(/<script setup lang="ts">[\s\S]*?<\/script>/, newScript);

// Replace form wrapper content with BecaWizard
const startForm = content.indexOf('<div class="beca-form-card">');
const endForm = content.indexOf('</div>\n      </div>\n\n    </div>');

if (startForm !== -1 && endForm !== -1) {
  content = content.substring(0, startForm) + '<BecaWizard />\n      ' + content.substring(endForm);
}

// Remove form CSS
const cssMatch = content.match(/<style scoped>([\s\S]*?)<\/style>/);
if (cssMatch) {
  const cssLines = cssMatch[1].split('\n');
  const cssFormStart = cssLines.findIndex(l => l.includes('/* -- Tarjeta del formulario ---------------------------------- */'));
  const cssAnimStart = cssLines.findIndex(l => l.includes('/* Animación */'));
  
  if (cssFormStart !== -1 && cssAnimStart !== -1) {
    const keepCss = [...cssLines.slice(0, cssFormStart), ...cssLines.slice(cssAnimStart + 8)];
    content = content.replace(/<style scoped>[\s\S]*?<\/style>/, `<style scoped>\n${keepCss.join('\n')}\n</style>`);
  }
}

fs.writeFileSync('c:/Users/PC-1143/Desktop/Sites/uninter-portal/app/components/LicPrese/CalScholarship.vue', content);
console.log('CalScholarship.vue updated');
