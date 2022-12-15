import React, { FC } from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import styled from '@emotion/styled';

import Header from '../header';
import AboutSection from '../sections/about-section';
import ProjectsSection from '../sections/projects-section';
import NotesSection from '../sections/notes-section';
import CommunitySection from '../sections/community-section';
import BlogpostsSection from '../sections/blogposts-section';

import { TalkProps, BlogPostProps, NoteProps, ProjectProps } from '../../types';
import { ImageWrapper } from '../styled';

const MidSectionWrapper = styled.section`
  background-image: url('timber-blob.svg'), url('burned-orange-blob.svg'), url('purple-blob.svg');
  background-position: 10% 35%, 85% 70%, 70% 0%;
  background-size: 25%, 20%, 16%;
  background-repeat: no-repeat;
`;

type HomePageProps = {
  notes: NoteProps[];
  projects: ProjectProps[];
  talks: TalkProps[];
  blogPosts: BlogPostProps[];
};

const HomePage: FC<HomePageProps> = ({ notes, projects, talks, blogPosts }) => {
  return (
    <section>
      <Header
        title="Hello, I'm Adeola Adeyemo"
        subtitle="I build Web Interfaces."
        roles="Senior Frontend / Founding Engineer"
        imageLink="https://res.cloudinary.com/dzpntisxj/image/upload/c_fill,ar_1:1,g_auto,r_max/v1618644680/portfolio/DSC_0516_xmjg3h.png"
        imgWidth={300}
        imgHeight={300}
      />
      <AboutSection />
      <ProjectsSection projects={projects} />
      <NotesSection notes={notes} />
      <MidSectionWrapper className="">
        <ImageWrapper className="w-3/4 p-5 mx-auto text-center sm:w-2/3">
          <Image
            src="https://res.cloudinary.com/dzpntisxj/image/upload/v1618660361/digital-art/IMG_4592_fg3oci.png"
            width={528}
            height={528}
            layout="intrinsic"
            alt="hero illustration"
          />
        </ImageWrapper>
      </MidSectionWrapper>
      <CommunitySection talks={talks} />
      <BlogpostsSection blogPosts={blogPosts} />
    </section>
  );
};

HomePage.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.any).isRequired,
  projects: PropTypes.arrayOf(PropTypes.any).isRequired,
  talks: PropTypes.arrayOf(PropTypes.any).isRequired,
  blogPosts: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default HomePage;
