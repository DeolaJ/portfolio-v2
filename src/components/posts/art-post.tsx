import React, { FC } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import { Section } from '../partials/section';
import ArtCard from '../partials/art-card';
import PostNavigation from './post-navigation';
import { ArtPostProps } from '../../types';

const ArtPostWrapper = styled(Section)`
  background-repeat: no-repeat;
  background-position: left bottom, right top;
  background-image: url(/pattern-three-sm.png), url(/pattern-two-sm.png);
  background-size: 12%, 12%;
`;

const ArtPostPage: FC<ArtPostProps> = ({ navigationPosts, artPost }) => {
  return (
    <>
      <ArtPostWrapper className="text-center text-custom-purple">
        <h1 className="mb-5 text-3xl">{artPost.fields.title}</h1>
        <h1 className="max-w-3xl mx-auto mb-5 text-lg">{artPost.fields.description}</h1>
        <div className="max-w-4xl mx-auto">
          <ArtCard art={artPost} page />
          <PostNavigation navigationPosts={navigationPosts} pageType="art" />
        </div>
      </ArtPostWrapper>
    </>
  );
};

ArtPostPage.propTypes = {
  navigationPosts: PropTypes.any.isRequired,
  artPost: PropTypes.any.isRequired,
};

export default ArtPostPage;
