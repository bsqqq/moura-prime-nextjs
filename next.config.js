/** @type {import('next').NextConfig} */
const nextConfig = {
  // Gera um site 100% estático (HTML/CSS/JS) em ./out no build,
  // pronto para publicar em qualquer hospedagem (Vercel, Netlify, cPanel, etc.)
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

module.exports = nextConfig;
