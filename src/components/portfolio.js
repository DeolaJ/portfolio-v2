import React from 'react';
import { Section, SectionTitle, SectionTitleSub } from './partials/section';
import PortfolioCard from './partials/portfolio-card';

const Portfolio = () => {
  const featuredProjects = [
    {
      id: 1,
      title: 'PDF Builder',
      link: 'https://pdf.formpl.us',
      description: 'Drag and Drop Builder for creating PDF Forms online',
      stack: 'React JS, React PDF, Redux, React Beautiful DND, Node JS, Gulp, Webpack, Emotion',
      img: '/pdf-builder.png',
    },
    {
      id: 2,
      title: 'Image Gallery',
      link: 'https://deolaj-image-gallery.netlify.app/',
      github_link: 'https://github.com/DeolaJ/image-gallery',
      description: "Mini Image Search interface built with Unsplash' API",
      stack: 'React JS, Unsplash, Redux, Netlify',
      img: '/image-gallery.png',
    },
  ];

  const sideProjects = [
    {
      id: 1,
      title: 'Firstresumeaid',
      link: 'https://firstresumeaid.netlify.app/',
      github_link: 'https://github.com/DeolaJ/firstresumeaid',
      description: 'Landing page for Firstresumeaid with service payment processing',
      stack: 'React JS, Firebase, Cloud Functions, Semantic UI, Paystack',
      img: '/fra.png',
    },
    {
      id: 2,
      title: 'Fitsbydee',
      link: 'https://fitsbydee.netlify.app/',
      github_link: 'https://github.com/DeolaJ/fitsbydee_',
      description: "This is the Landing page for Fitsbydee's clothing line",
      stack: 'React JS, Firebase, Cloud Functions, Semantic UI',
      img: '/fbd.png',
    },
    {
      id: 3,
      title: 'Nielles Backyard Cookout',
      link: 'https://nielle-19.web.app/',
      github_link: 'https://github.com/DeolaJ/nielle',
      description: 'Event website for information, polls, and reservation of tickets',
      stack: 'React JS, Firebase, Cloud Functions, Semantic UI, Flutterwave',
      img: '/nielles.png',
    },
    {
      id: 4,
      title: 'Better and Stronger (Firebase)',
      link: 'https://betterandstronger.web.app',
      github_link: 'https://github.com/DeolaJ/connect2',
      description: 'SPA for generating a post COVID optimism message',
      stack: 'React JS, Firebase, Redux, Cloud Functions, Cloudinary',
      img: '/bas.png',
    },
    {
      id: 5,
      title: 'Better and Stronger (Netlify)',
      link: 'https://betterandstronger.netlify.app',
      github_link: 'https://github.com/DeolaJ/connect',
      description: 'SPA for generating a post COVID optimism message',
      stack: 'React JS, Netlify, Redux, Lambda Functions, Cloudinary',
      img: '/bas.png',
    },
    {
      id: 6,
      title: 'Star Wars',
      link: 'https://starwars-deolaj.netlify.app',
      github_link: 'https://github.com/DeolaJ/star-wars',
      description: 'SPA built on the Star wars API for characters, starships, and planets',
      stack: 'React JS, Netlify, Redux',
      img: '/starwars.png',
    },
    {
      id: 7,
      title: 'Portfolio - V1',
      link: 'deolaj.xyz',
      github_link: 'https://github.com/DeolaJ/deola-j',
      description: 'First version of my portfolio site',
      stack: 'Gatsby JS, Netlify, Emotion',
      img: '/portfolio-v1.png',
    },
    {
      id: 8,
      title: 'Portfolio - V2',
      link: 'https://deolaj.vercel.app',
      github_link: 'https://github.com/DeolaJ/portfolio-v2',
      description: 'Second version of my portfolio site. Work in progress',
      stack: 'Next JS, Vercel, Tailwind CSS, Styled Components',
      img: '/portfolio-v2.png',
    },
  ];

  const miniProjects = [
    {
      id: 1,
      title: 'React Firebase',
      link: 'https://react-firebase-19.web.app/',
      github_link: 'https://github.com/DeolaJ/react-firebase',
      description: 'SPA to upload an image to Cloudinary using Cloud functions',
      stack: 'React JS, Cloudinary, Redux, Firebase',
      img: '/react-firebase.png',
    },
    {
      id: 2,
      title: 'Nested Drag and Drop',
      link: 'https://nested-dnd-deolaj.netlify.app/',
      github_link: 'https://github.com/DeolaJ/nested-dnd',
      description: 'A simple Drag and Drop interface for nested lists',
      stack: 'React JS, Netlify, Redux, React Beautiful DND',
      img: '/nested-dnd.png',
    },
    {
      id: 3,
      title: 'Github Replica',
      link: 'https://deolaj-github-repo.netlify.app/',
      github_link: 'https://github.com/DeolaJ/github-replica',
      description: 'Replica of my Github repository page with no framework',
      stack: 'HTML, CSS, JavaScript',
      img: '/github-replica.png',
    },
  ];

  const reverseArray = (array) => {
    return array.reverse();
  };

  return (
    <Section>
      <SectionTitle>Portfolio</SectionTitle>

      <SectionTitleSub>Featured Projects.</SectionTitleSub>

      <PortfolioCard projects={featuredProjects} />

      <SectionTitleSub className="mt-16 md:mt-12">Side projects.</SectionTitleSub>

      <PortfolioCard mini projects={reverseArray(sideProjects)} />

      <SectionTitleSub>Mini projects.</SectionTitleSub>

      <PortfolioCard mini projects={reverseArray(miniProjects)} />
    </Section>
  );
};

export default Portfolio;
