import fs from 'node:fs'
import path from 'node:path'
import react from '@vitejs/plugin-react'
import { defineConfig, type Plugin } from 'vite'

// Só no servidor local (npm run dev): grava em public/imagens/ as imagens
// inseridas pela apresentação, para que possam ir para o GitHub.
//   PUT    /__imagens/<id>  corpo = imagem WEBP  -> public/imagens/<id>.webp
//   DELETE /__imagens/<id>                       -> apaga <id>.webp e <id>.png
function salvarImagens(): Plugin {
  const dir = path.resolve(__dirname, 'public/imagens')
  return {
    name: 'salvar-imagens',
    apply: 'serve',
    configureServer(server) {
      server.middlewares.use('/__imagens', (req, res) => {
        const id = decodeURIComponent((req.url ?? '').replace(/^\//, '').split('?')[0])
        if (!/^[a-z0-9-]{1,60}$/.test(id)) { res.statusCode = 400; res.end('id inválido'); return }
        fs.mkdirSync(dir, { recursive: true })
        if (req.method === 'PUT') {
          const chunks: Buffer[] = []
          let size = 0
          req.on('data', (c: Buffer) => {
            size += c.length
            if (size > 15 * 1024 * 1024) { res.statusCode = 413; res.end('imagem grande demais'); req.destroy(); return }
            chunks.push(c)
          })
          req.on('end', () => {
            if (res.writableEnded) return
            fs.writeFileSync(path.join(dir, `${id}.webp`), Buffer.concat(chunks))
            res.statusCode = 204; res.end()
          })
          return
        }
        if (req.method === 'DELETE') {
          for (const ext of ['webp', 'png']) fs.rmSync(path.join(dir, `${id}.${ext}`), { force: true })
          res.statusCode = 204; res.end()
          return
        }
        res.statusCode = 405; res.end()
      })
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), salvarImagens()],
})
