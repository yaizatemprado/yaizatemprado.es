/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  // GitHub Pages sirve /ruta desde ruta.html, pero /ruta/ lo busca en
  // ruta/index.html. Sin esto, TODA la web daba 404 al compartir un enlace con
  // barra final. Con trailingSlash el export genera ruta/index.html y Pages
  // redirige /ruta -> /ruta/, así que las dos formas funcionan.
  trailingSlash: true,
}

export default nextConfig
