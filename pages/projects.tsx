import React, { ReactElement } from 'react';
import Head from 'next/head';
import { GetStaticProps } from 'next';
import { createClient } from 'contentful';
import ProjectsPage from '../src/components/pages/projects';
import Layout from '../src/components/layout';

import { ProjectProps } from '../src/types';

type ProjectsProps = {
  featuredProjects: ProjectProps[];
  sideProjects: ProjectProps[];
  miniProjects: ProjectProps[];
};

function Projects({ featuredProjects, miniProjects, sideProjects }: ProjectsProps): ReactElement {
  return (
    <>
      <Head>
        <title>Projects | Adeola J. Adeyemo</title>
        <meta
          name="keywords"
          content="Adeola, Adeyemo, Joseph, Adeola Adeyemo, Adeola Adeyemo J., front end, frontend, developer, react, ui engineer, frontend engineer, lagos, nigeria, front end developer, developer, dejoe, dejoe art, de.joe, dejoe_art, deola art, deolaj, deola, balloon comics, balloon_comics, ballooon comics, comics"
        />

        <meta name="description" content="Developer Projects of Adeola Adeyemo" />

        <meta
          name="twitter:image:src"
          content="https://res.cloudinary.com/dzpntisxj/image/upload/v1619022408/portfolio/portfolio_zw5ozm.png"
        />

        <meta name="twitter:site" content="Projects | Adeola J. Adeyemo" />

        <meta name="twitter:title" content="Projects | Adeola J. Adeyemo" />
        <meta name="twitter:description" content="Developer Projects of Adeola Adeyemo" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dzpntisxj/image/upload/v1619022408/portfolio/portfolio_zw5ozm.png"
        />
        <meta property="og:site_name" content="Adeola J. Adeyemo" />

        <meta property="og:title" content="Projects | Adeola J. Adeyemo" />

        <meta property="og:url" content="www.deolaj.com/projects" />

        <meta property="og:description" content="Developer Projects of Adeola Adeyemo" />
      </Head>

      <Layout>
        <ProjectsPage
          featuredProjects={featuredProjects}
          miniProjects={miniProjects}
          sideProjects={sideProjects}
        />
      </Layout>
    </>
  );
}

export default Projects;

export const getStaticProps: GetStaticProps = async () => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  const featuredProjects = await client
    .getEntries({
      content_type: 'projects',
      'fields.projectType': 'featured',
    })
    .then((response) => response.items);

  const miniProjects = await client
    .getEntries({
      content_type: 'projects',
      'fields.projectType': 'mini',
      order: '-sys.createdAt',
    })
    .then((response) => response.items);

  const sideProjects = await client
    .getEntries({
      content_type: 'projects',
      'fields.projectType': 'side',
      order: '-sys.createdAt',
    })
    .then((response) => response.items);

  return {
    props: {
      featuredProjects,
      miniProjects,
      sideProjects,
    },
    revalidate: 300,
  };
};
