import { watch } from "fs";
import { readFileSync, existsSync } from "fs";
import { join } from "path";

const PORT = 3000;
const EXAMPLES_DIR = join(import.meta.dir, "examples");

const LIVE_RELOAD_SCRIPT = `
<script>
  const es = new EventSource('/__reload');
  es.onmessage = () => location.reload();
</script>`;

const clients = new Set<ReadableStreamDefaultController>();

function injectReload(html: string): string {
  return html.replace("</body>", `${LIVE_RELOAD_SCRIPT}</body>`);
}

function serveIndex(): Response {
  const examples = require("fs")
    .readdirSync(EXAMPLES_DIR, { withFileTypes: true })
    .filter((d: any) => d.isDirectory())
    .map((d: any) => d.name);

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Design System Examples</title>
<style>
  body { font-family: -apple-system, sans-serif; background: #0D0D12; color: #E4E1E9; padding: 48px; margin: 0; }
  h1 { font-size: 28px; font-weight: 400; margin-bottom: 8px; color: #ADC6FF; }
  p { color: #908D9A; margin-bottom: 40px; font-size: 14px; }
  .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 16px; }
  a { display: block; background: #1B1B21; border: 1px solid #2A2A30; border-radius: 12px; padding: 20px 24px;
      text-decoration: none; color: inherit; transition: background 0.15s; }
  a:hover { background: #1F1F26; border-color: #ADC6FF44; }
  .name { font-size: 16px; font-weight: 500; color: #E4E1E9; margin-bottom: 4px; }
  .sub { font-size: 13px; color: #908D9A; }
</style>
</head>
<body>
<h1>design.md</h1>
<p>Design system examples — click to preview</p>
<div class="grid">
${examples.map((name: string) => `  <a href="/${name}/preview.html">
    <div class="name">${name}</div>
    <div class="sub">preview.html</div>
  </a>`).join("\n")}
</div>
${LIVE_RELOAD_SCRIPT}
</body>
</html>`;
  return new Response(html, { headers: { "Content-Type": "text/html" } });
}

const server = Bun.serve({
  port: PORT,
  fetch(req) {
    const url = new URL(req.url);
    const path = url.pathname;

    if (path === "/__reload") {
      let controller: ReadableStreamDefaultController;
      const stream = new ReadableStream({
        start(c) {
          controller = c;
          clients.add(c);
        },
        cancel() {
          clients.delete(controller);
        },
      });
      return new Response(stream, {
        headers: {
          "Content-Type": "text/event-stream",
          "Cache-Control": "no-cache",
          Connection: "keep-alive",
        },
      });
    }

    if (path === "/" || path === "") return serveIndex();

    const filePath = join(EXAMPLES_DIR, path);
    if (!existsSync(filePath)) {
      return new Response("Not found", { status: 404 });
    }

    const content = readFileSync(filePath);
    const isHtml = filePath.endsWith(".html");
    const contentType = isHtml
      ? "text/html"
      : filePath.endsWith(".json")
      ? "application/json"
      : filePath.endsWith(".js")
      ? "application/javascript"
      : filePath.endsWith(".md")
      ? "text/plain"
      : filePath.endsWith(".png")
      ? "image/png"
      : "application/octet-stream";

    const body = isHtml ? injectReload(content.toString()) : content;
    return new Response(body, { headers: { "Content-Type": contentType } });
  },
});

console.log(`\n  design.md dev server\n`);
console.log(`  ➜  Local:   http://localhost:${PORT}`);
console.log(`  ➜  Preview: http://localhost:${PORT}/jioframes-ai-notes/preview.html\n`);

watch(EXAMPLES_DIR, { recursive: true }, () => {
  for (const client of clients) {
    try {
      client.enqueue("data: reload\n\n");
    } catch {
      clients.delete(client);
    }
  }
});
