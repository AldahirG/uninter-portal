const fs = require('fs');
const path = require('path');

const historyPath = path.join(process.env.APPDATA, 'Code', 'User', 'History');
const targetPrefix = 'file:///c%3A/Users/PC-1143/Desktop/Sites/uninter-portal/';
const cutoffTimestamp = 1787172400000; // 2026-08-19T20:46:40Z

const dirs = fs.readdirSync(historyPath);
let restoredCount = 0;

for (const dir of dirs) {
  const entriesPath = path.join(historyPath, dir, 'entries.json');
  if (!fs.existsSync(entriesPath)) continue;
  
  try {
    const data = JSON.parse(fs.readFileSync(entriesPath, 'utf8'));
    if (data.resource && data.resource.toLowerCase().startsWith(targetPrefix.toLowerCase())) {
      // Decode the file path
      const relativePath = decodeURIComponent(data.resource.slice(targetPrefix.length));
      const absolutePath = path.join('c:\\Users\\PC-1143\\Desktop\\Sites\\uninter-portal', relativePath);
      
      // Find the latest entry before the cutoff
      let latestEntry = null;
      for (const entry of data.entries) {
        if (entry.timestamp < cutoffTimestamp) {
          if (!latestEntry || entry.timestamp > latestEntry.timestamp) {
            latestEntry = entry;
          }
        }
      }
      
      if (latestEntry) {
        const sourceFile = path.join(historyPath, dir, latestEntry.id);
        if (fs.existsSync(sourceFile)) {
          // Ensure directory exists
          const targetDir = path.dirname(absolutePath);
          if (!fs.existsSync(targetDir)) {
            fs.mkdirSync(targetDir, { recursive: true });
          }
          
          // Copy file
          fs.copyFileSync(sourceFile, absolutePath);
          console.log(`Restored: ${relativePath}`);
          restoredCount++;
        }
      }
    }
  } catch(e) {
    console.error(`Error processing ${dir}:`, e);
  }
}

console.log(`Successfully restored ${restoredCount} files from VS Code Local History.`);
