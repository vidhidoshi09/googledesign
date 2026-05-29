import { readdirSync, readFileSync, writeFileSync, mkdirSync, cpSync, existsSync } from "fs";
import { join } from "path";

const ROOT = import.meta.dir;
const EXAMPLES_DIR = join(ROOT, "examples");
const OUT_DIR = join(ROOT, "public");

mkdirSync(OUT_DIR, { recursive: true });

const examples = readdirSync(EXAMPLES_DIR, { withFileTypes: true })
  .filter((d) => d.isDirectory())
  .map((d) => d.name);

// Copy each example directory into public/
for (const name of examples) {
  cpSync(join(EXAMPLES_DIR, name), join(OUT_DIR, name), { recursive: true });
}

// Generate index.html
const cards = examples.map((name) => {
  const hasPreview = existsSync(join(EXAMPLES_DIR, name, "preview.html"));
  const href = hasPreview ? `/${name}/preview.html` : `/${name}/DESIGN.md`;
  const sub = hasPreview ? "preview.html" : "DESIGN.md";
  return `  <a href="${href}">
    <div class="name">${name}</div>
    <div class="sub">${sub}</div>
  </a>`;
}).join("\n");

const index = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>design.md — Examples</title>
<style>
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
         background: #0D0D12; color: #E4E1E9; padding: 48px 32px; min-height: 100vh; }
  header { max-width: 800px; margin: 0 auto 48px; }
  h1 { font-size: 28px; font-weight: 400; color: #ADC6FF; margin-bottom: 8px; }
  p { font-size: 14px; color: #908D9A; line-height: 1.6; }
  .grid { max-width: 800px; margin: 0 auto;
          display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 12px; }
  a { display: block; background: #1B1B21; border: 1px solid #2A2A30; border-radius: 12px;
      padding: 20px 24px; text-decoration: none; color: inherit; transition: all 0.15s ease; }
  a:hover { background: #1F1F26; border-color: #ADC6FF55; transform: translateY(-1px); }
  .name { font-size: 15px; font-weight: 500; color: #E4E1E9; margin-bottom: 4px; }
  .sub { font-size: 12px; color: #908D9A; }
</style>
</head>
<body>
<header>
  <h1>design.md</h1>
  <p>Design system examples. Each entry is a complete DESIGN.md design system<br>with token exports and a live mobile preview.</p>
</header>
<div class="grid">
${cards}
</div>
</body>
</html>`;

writeFileSync(join(OUT_DIR, "index.html"), index);

console.log(`Built ${examples.length} example(s) → public/`);
for (const name of examples) {
  console.log(`  • ${name}`);
}
