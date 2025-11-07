// Extract text from all PDFs in resume/ and write resume/_extracted.txt
const fs = require('fs');
const path = require('path');
const pdf = require('pdf-parse');

async function main() {
  const dir = path.join(process.cwd(), 'resume');
  const files = fs
    .readdirSync(dir)
    .filter((f) => f.toLowerCase().endsWith('.pdf'))
    .map((f) => path.join(dir, f));
  let out = '';
  for (const file of files) {
    const data = fs.readFileSync(file);
    const res = await pdf(data);
    out += `\n\n===== FILE: ${path.basename(file)} =====\n`;
    out += res.text.replace(/\r/g, '');
  }
  const outPath = path.join(dir, '_extracted.txt');
  fs.writeFileSync(outPath, out.trim(), 'utf8');
  console.log(`Extracted text written to ${outPath}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});

