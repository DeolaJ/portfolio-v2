/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');
const globby = require('globby');
const { createClient } = require('contentful');

// const { generateArtPosts, generateNotePosts, generateProjectPosts } = require('./sitemapUtils');
const { generateNotePosts } = require('./sitemapUtils');

async function generateSiteMap() {
  const pages = await globby([
    'pages/**/*.tsx',
    '!pages/_*.tsx',
    '!pages/**/[slug].tsx',
    '!pages/api',
  ]);

  const currentDate = new Date().toISOString();

  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  // const artPosts = await client
  //   .getEntries({ content_type: 'art', order: 'sys.createdAt' })
  //   .then((response) => {
  //     const posts = generateArtPosts(response.items);
  //     return posts;
  //   });

  // const artPaths = artPosts.map(({ fields: { slug } }) => slug);

  const notePosts = await client
    .getEntries({ content_type: 'notes', order: 'sys.createdAt' })
    .then((response) => {
      const posts = generateNotePosts(response.items);
      return posts;
    });

  const notePaths = notePosts.map(({ fields: { slug } }) => slug);

  // const projectPosts = await client
  //   .getEntries({ content_type: 'projects', order: 'sys.createdAt' })
  //   .then((response) => {
  //     const posts = generateProjectPosts(response.items);
  //     return posts;
  //   });

  // const projectPaths = projectPosts.map(({ fields: { slug } }) => slug);

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
              <lastmod>${currentDate}</lastmod>
              <changefreq>monthly</changefreq>
              <priority>1.0</priority>
            </url>
          `;
        })
        .join('')}
      ${notePaths
        .map((route) => {
          return `
            <url>
              <loc>${`https://deolaj.com/notes/${route}`}</loc>
              <lastmod>${currentDate}</lastmod>
              <changefreq>monthly</changefreq>
              <priority>1.0</priority>
            </url>
          `;
        })
        .join('')}
    </urlset>
  `;

  // ${projectPaths
  //   .map((route) => {
  //     return `
  //       <url>
  //         <loc>${`https://deolaj.com/projects/${route}`}</loc>
  //         <lastmod>${currentDate}</lastmod>
  //         <changefreq>monthly</changefreq>
  //         <priority>1.0</priority>
  //       </url>
  //     `;
  //   })
  //   .join('')}

  // ${artPaths
  //   .map((route) => {
  //     return `
  //       <url>
  //         <loc>${`https://deolaj.com/art/${route}`}</loc>
  //         <lastmod>${currentDate}</lastmod>
  //         <changefreq>monthly</changefreq>
  //         <priority>1.0</priority>
  //       </url>
  //     `;
  //   })
  //   .join('')}

  fs.writeFileSync('public/sitemap.xml', sitemap);
}

generateSiteMap();
