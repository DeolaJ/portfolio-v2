/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React, { ReactNode, useEffect } from 'react';
import '../styles/globals.css';
import Head from 'next/head';
import { AnimatePresence } from 'framer-motion';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import * as gtag from '../src/lib/gtag';

function MyApp({ Component, pageProps }: AppProps): ReactNode {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600&display=swap"
          rel="stylesheet"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="twitter:creator" content="deo_joe" />
        <meta property="twitter:card" content="summary_large_image" />

        <meta property="og:image:type" content="image/png" />
        <meta property="og:type" content="profile" />
        <meta name="theme-color" content="#0e1526" />
      </Head>

      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} />
      </AnimatePresence>
    </>
  );
}

export default MyApp;
