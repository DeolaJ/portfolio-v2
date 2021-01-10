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
        <title>Portfolio of Adeola Adeyemo</title>
        <link rel="icon" href="/favicon.ico" />
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
