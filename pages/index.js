import React from 'react';
import Head from 'next/head';
import Global from '../src/components/global';
import Header from '../src/components/header';
import About from '../src/components/about';
import Portfolio from '../src/components/portfolio';
import Blogposts from '../src/components/blogposts';
import Layout from '../src/components/layout';

export default function Home() {
  return (
    <>
      <Head>
        <title>Adeola J. Adeyemo</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="Adeola, Adeyemo, Joseph, Adeola Adeyemo, Adeola Adeyemo J., front end, frontend, developer, react, ui engineer, frontend engineer, lagos, nigeria, front end developer, developer, dejoe, dejoe art, de.joe, dejoe_art, deola art, deolaj, deola, balloon comics, balloon_comics, ballooon comics, comics"
        />
        <meta name="description" content="Developer portfolio of Adeola Adeyemo" />
        <meta name="twitter:image:src" content="www.deolaj.com/portfolio-v2.png" />
        <meta name="twitter:site" content="Adeola J. Adeyemo" />
        <meta property="twitter:creator" content="deo_joe" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Adeola J. Adeyemo" />
        <meta name="twitter:description" content="Developer portfolio of Adeola Adeyemo" />
        <meta property="og:image" content="www.deolaj.com/portfolio-v2.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:site_name" content="Adeola J. Adeyemo" />
        <meta property="og:type" content="profile" />
        <meta property="og:title" content="Adeola J. Adeyemo" />
        <meta property="og:url" content="www.deolaj.com" />
        <meta property="og:description" content="Developer portfolio of Adeola Adeyemo" />
        <meta name="theme-color" content="#43359B" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Layout>
        <Global />
        <Header />
        <About />
        <Portfolio />
        <Blogposts />
      </Layout>
    </>
  );
}
