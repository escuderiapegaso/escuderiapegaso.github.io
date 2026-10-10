/**
 * El panel /admin/ inserta las imágenes del texto como `/src/assets/news/foto.jpg`.
 * Astro solo optimiza las imágenes de Markdown con rutas relativas al archivo,
 * así que este plugin convierte esas rutas en relativas antes de procesarlas.
 */
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');

function walk(node, fn) {
  fn(node);
  if (node.children) for (const child of node.children) walk(child, fn);
}

export default function remarkSrcAssets() {
  return (tree, file) => {
    const from = file.path ? path.dirname(file.path) : undefined;
    if (!from) return;
    walk(tree, (node) => {
      if (node.type === 'image' && typeof node.url === 'string' && node.url.startsWith('/src/')) {
        let rel = path.relative(from, path.join(projectRoot, node.url)).split(path.sep).join('/');
        if (!rel.startsWith('.')) rel = `./${rel}`;
        node.url = rel;
      }
    });
  };
}
