import { readFile, writeFile } from 'node:fs/promises'
import { createServer } from 'vite'

const dist = new URL('../dist/', import.meta.url)
const index = new URL('index.html', dist)
const html = await readFile(index, 'utf8')
const rootMarker = '<!--app-html-->'
const stylesheet = html.match(/<link rel="stylesheet"[^>]*href="\.\/([^"]+)"[^>]*>/)
if (!html.includes(rootMarker) || !stylesheet) {
  throw new Error('Faltan los marcadores o los recursos del HTML de producción.')
}

const css = await readFile(new URL(stylesheet[1], dist), 'utf8')
const vite = await createServer({
  server: { middlewareMode: true, watch: null, hmr: false },
  appType: 'custom',
})

try {
  const { render } = await vite.ssrLoadModule('/src/entry-server.tsx')
  await writeFile(index, html
    .replace(rootMarker, () => render())
    .replace(stylesheet[0], () => `<style>${css}</style>`))
} finally {
  await vite.close()
}
