import React, { ReactElement } from 'react';
import Head from 'next/head';

import NamingCeremonyPage from '../../src/components/pages/naming-ceremony';
import { REVEAL_BOOT_SCRIPT } from '../../src/components/celebration/reveal';
import { NAMING_CEREMONY } from '../../src/constants/naming-ceremony';

const TITLE = 'Naming Ceremony | Adeola & Precious';
const SHARE_TITLE = 'You’re invited: our baby girl’s naming ceremony';
const DESCRIPTION = `Join Adeola Adeyemo and Precious Ikem on Zoom for the naming ceremony of their baby girl. ${NAMING_CEREMONY.date.long} at ${NAMING_CEREMONY.date.time} (${NAMING_CEREMONY.hostTimeZone} time).`;

function NamingCeremony(): ReactElement {
  return (
    <>
      <Head>
        <title>{TITLE}</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta name="description" content={DESCRIPTION} />
        <meta name="theme-color" content="#F5EFE7" />

        <meta property="og:title" content={SHARE_TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:url" content={NAMING_CEREMONY.pageUrl} />
        <meta property="og:site_name" content="Adeola Adeyemo" />
        <meta property="og:image" content={NAMING_CEREMONY.ogImageUrl} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="A floral invitation to the naming ceremony of Adeola and Precious's baby girl"
        />

        <meta name="twitter:title" content={SHARE_TITLE} />
        <meta name="twitter:description" content={DESCRIPTION} />
        <meta name="twitter:image" content={NAMING_CEREMONY.ogImageUrl} />

        <script dangerouslySetInnerHTML={{ __html: REVEAL_BOOT_SCRIPT }} />
      </Head>

      <NamingCeremonyPage />
    </>
  );
}

export default NamingCeremony;
