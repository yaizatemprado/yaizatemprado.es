// Runs after `next build` (npm "postbuild"). Both locales share one root layout, so the
// static HTML ships <html lang="es"> everywhere; the Header fixes it on the client, but
// Google and screen readers read the HTML first. This marks every page under out/en/ as English.
import { readdirSync, readFileSync, statSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

function htmlFiles(dir) {
  return readdirSync(dir).flatMap((name) => {
    const full = join(dir, name)
    if (statSync(full).isDirectory()) return htmlFiles(full)
    return name.endsWith('.html') ? [full] : []
  })
}

let changed = 0
for (const file of htmlFiles('out/en')) {
  const html = readFileSync(file, 'utf8')
  const fixed = html.replace('<html lang="es"', '<html lang="en"')
  if (fixed !== html) {
    writeFileSync(file, fixed)
    changed++
  }
}
console.log(`set-html-lang: ${changed} English pages marked lang="en"`)
