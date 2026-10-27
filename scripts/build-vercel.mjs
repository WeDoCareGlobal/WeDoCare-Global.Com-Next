// Build the static WeDoCareGlobal website for Vercel.
// No framework or dependency installation is required.
import { readdir, mkdir, cp, stat } from 'node:fs/promises';
import { join } from 'node:path';

const root = process.cwd();
const output = join(root, 'dist');
const excluded = new Set(['.git', '.github', 'dist', 'node_modules', 'scripts', 'docs', 'website', 'collaboration', 'previews']);
await mkdir(output, { recursive: true });
for (const entry of await readdir(root)) {
  if (excluded.has(entry) || entry.startsWith('.') || entry.endsWith('.md')) continue;
  const from = join(root, entry);
  const to = join(output, entry);
  const info = await stat(from);
  if (info.isFile() || entry === 'fonts') {
    await cp(from, to, {recursive: true});
  }
}
console.log('Static website staged in dist/');
