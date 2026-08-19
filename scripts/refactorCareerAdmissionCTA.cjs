const fs = require('fs');
let content = fs.readFileSync('c:/Users/PC-1143/Desktop/Sites/uninter-portal/app/components/degree/shared/CareerAdmissionCTA.vue', 'utf8');

// Replace script
const newScript = `<script setup lang="ts">
import { Sparkles, CheckCircle2 } from "lucide-vue-next";
import BecaWizard from "./BecaWizard.vue";

const props = defineProps<{
  customCta?: {
    texto_boton: string;
    mensaje: string;
  };
}>();

const socials = [
  { icon: "mdi:facebook",  href: "https://www.facebook.com/uninteredu",            label: "Facebook"  },
  { icon: "mdi:instagram", href: "https://www.instagram.com/uninter_cuerna",        label: "Instagram" },
  { icon: "mdi:youtube",   href: "https://www.youtube.com/user/UniversidadUninter", label: "YouTube"   },
  { icon: "mdi:linkedin",  href: "https://www.linkedin.com/school/universidad-uninter/",  label: "LinkedIn"  },
];
</script>`;
content = content.replace(/<script setup lang="ts">[\s\S]*?<\/script>/, newScript);

// Replace form side and modal
const startForm = content.indexOf('<div class="cta-form-side">');
const endForm = content.indexOf('<!-- REDES SOCIALES AL FINAL DE LA CALCULADORA -->');
if (startForm !== -1 && endForm !== -1) {
  content = content.substring(0, startForm) + '<BecaWizard :customCta="customCta" />\n\n          ' + content.substring(endForm);
}

const startModal = content.indexOf('<Teleport to="body">');
const endModal = content.indexOf('</Teleport>') + '</Teleport>'.length;
if (startModal !== -1 && endModal !== -1) {
  content = content.substring(0, startModal) + content.substring(endModal);
}

// Keep only non-wizard styles
const styleMatch = content.match(/<style scoped>([\s\S]*?)<\/style>/);
const css = styleMatch[1];
const lines = css.split('\n');

const startIndex = lines.findIndex((l, i) => l.includes('/* =========================================================') && lines[i+1]?.includes('WIZARD Y FORMULARIO'));
const endIndex = lines.findIndex((l, i) => l.includes('/* =========================================================') && lines[i+1]?.includes('REDES SOCIALES ESTILO DIPLOMADOS AL FINAL'));
const modalStartIndex = lines.findIndex((l, i) => l.includes('/* =========================================================') && lines[i+1]?.includes('MODAL DE AVISO (PROMEDIO < 7.0)'));

let finalCssLines = [];
if (startIndex !== -1 && endIndex !== -1) {
    finalCssLines = [...lines.slice(0, startIndex), ...lines.slice(endIndex, modalStartIndex !== -1 ? modalStartIndex : undefined)];
} else {
    finalCssLines = lines;
}

const finalCss = `<style scoped>\n${finalCssLines.join('\n')}\n</style>`;
content = content.replace(/<style scoped>[\s\S]*?<\/style>/, finalCss);

fs.writeFileSync('c:/Users/PC-1143/Desktop/Sites/uninter-portal/app/components/degree/shared/CareerAdmissionCTA.vue', content);
console.log('CareerAdmissionCTA.vue updated');
