const fs = require('fs');
let html = fs.readFileSync('app/components/navbar/Index.vue', 'utf8');
// Fix email
html = html.replace('informes@uninter.edu.mx', 'admisiones@uninter.edu.mx');

// Remove TikTok
html = html.replace(/<a[^>]*href="https:\/\/www\.tiktok\.com\/@uninter_cuerna"[^>]*>[\s\S]*?<\/a>/, '');

// Reorder programs: Prepa Abierta should be before Spanish School
// Let's just find the indexes of both and swap them in the array, or use a script.
// Wait, I can just replace the whole text blocks? It's a huge array.
// Let's do it using regex.
const paRegex = /(\{\s*label:\s*"Prepa Abierta"[\s\S]*?children:\s*\[[\s\S]*?\]\s*\},)/;
const ssRegex = /(\{\s*label:\s*"Spanish School"[\s\S]*?children:\s*\[[\s\S]*?\]\s*\},)/;

let paMatch = html.match(paRegex);
let ssMatch = html.match(ssRegex);

if (paMatch && ssMatch) {
    if (html.indexOf(paMatch[0]) > html.indexOf(ssMatch[0])) {
        // Prepa Abierta is AFTER Spanish School, let's swap them
        html = html.replace(paMatch[0], '%%PA%%');
        html = html.replace(ssMatch[0], paMatch[0] + '\n  ' + ssMatch[0]);
        html = html.replace('%%PA%%', '');
        console.log('Swapped PA and SS');
    } else {
        console.log('Already in correct order');
    }
} else {
    console.log('Could not find PA or SS blocks');
}

fs.writeFileSync('app/components/navbar/Index.vue', html);
