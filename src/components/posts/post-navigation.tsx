import React, { FC } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import Button from '../partials/button';
import { getPostStyle } from '../../utils';
import { NoteProps, ProjectProps, ImageProps } from '../../types';

type PostProps = NoteProps | ProjectProps | ImageProps;

interface PostNavigationProps {
  pageType: 'art' | 'notes' | 'projects';
  navigationPosts: {
    next: PostProps;
    previous: PostProps;
  };
}

const PostNavigation: FC<PostNavigationProps> = ({ navigationPosts, pageType }) => {
  const { next, previous } = navigationPosts;

  return (
    <article className={`flex items-center w-full my-20 ${getPostStyle(next, previous)}`}>
      {previous && (
        <Link href={`/${pageType}/${previous.fields.slug}`}>
          <a>
            <Button className="max-w-xs" text={`<--- ${previous.fields.title}`} />
          </a>
        </Link>
      )}

      {next && previous.fields.title !== next.fields.title && (
        <Link href={`/${pageType}/${next.fields.slug}`}>
          <a>
            <Button className="max-w-xs" text={`${next.fields.title}  --->`} />
          </a>
        </Link>
      )}
    </article>
  );
};

PostNavigation.propTypes = {
  navigationPosts: PropTypes.any.isRequired,
  pageType: PropTypes.any.isRequired,
};

export default PostNavigation;
