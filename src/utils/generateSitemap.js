/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');
const globby = require('globby');

async function generateSiteMap() {
  const pages = await globby([
    'pages/**/*.tsx',
    '!pages/_*.tsx',
    '!pages/**/[id].tsx',
    '!pages/api',
  ]);

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${pages
        .map((page) => {
          const path = page
            .replace('pages', '')
            .replace('.js', '')
            .replace('.tsx', '')
            .replace('.md', '');
          const route = path === '/index' ? '' : path;
          return `
            <url>
              <loc>${`https://deolaj.com${route}`}</loc>
              <changefreq>monthly</changefreq>
              <priority>1.0</priority>
            </url>
          `;
        })
        .join('')}
    </urlset>
  `;

  fs.writeFileSync('public/sitemap.xml', sitemap);
}

generateSiteMap();
