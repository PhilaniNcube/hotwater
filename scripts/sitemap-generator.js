const fs = require('fs');
const globby = require('globby');
function addPage(page) {
  const path = page
    .replace('pages', '')
    .replace('.jsx', '')
    .replace('.mdx', '');
  const route = path === '/index' ? '' : path;
  return `<url>
    <loc>${`${process.env.WEBSITE_URL}${route}`}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>`;
}

async function generateSitemap() {
  // excludes Nextjs files and API routes.
  const pages = await globby([
    'pages/**/*{.jsx,.mdx}',
    'pages/blog/**/*{.jsx,.mdx}',
    'pages/blog/*{.jsx,.mdx}',
    'admin/**/*{.jsx,.mdx}',
    'orders/**/*{.jsx,.mdx}',
    '/index/**/*{.jsx,.mdx}',
    '!pages/api/**/*{.jsx,.mdx}',
    '!pages/_app{.jsx,.mdx}',
    '!pages/_document{.jsx,.mdx}',
    '!pages/index{.jsx,.mdx}',
    '!pages/profile/**/*{.jsx,.mdx}',
    '!pages/admin/**/*{.jsx,.mdx}',
    '!pages/admin/products/index{.jsx,.mdx}',
    '!pages/orders/**/*{.jsx,.mdx}',
    '!pages/orders/[id]{.jsx,.mdx}',
  ]);
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(addPage).join('\n')}
</urlset>`;
  fs.writeFileSync('public/sitemap.xml', sitemap);
}
generateSitemap();
