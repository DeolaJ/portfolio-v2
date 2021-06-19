/* eslint-disable @typescript-eslint/no-explicit-any */
import { MdxRemote } from 'next-mdx-remote/types';
// interface BlockContentType {
//   content: BlockContentType;
//   data: Record<string, unknown>;
//   marks: any[];
//   nodeType: string;
// }

export type ImagePropsFields = {
  title: string;
  imageUrl: string;
  description: string;
  slug: string;
  tags: string[];
};

export type ImageProps = {
  sys: {
    id: string;
    created: string;
    updated: string;
  };
  fields: ImagePropsFields;
};

export type ProjectPropsFields = {
  title: string;
  subtitle: string;
  slug: string;
  imageLink: string;
  body: string;
  stack: string[];
  githubLink: string;
  liveLink: string;
  projectType: 'featured' | 'side' | 'mini';
  descriptionImage: string;
};

export type ProjectProps = {
  sys: {
    id: string;
    created: string;
    updated: string;
  };
  fields: ProjectPropsFields;
};

export type NotePropsFields = {
  title: string;
  subtitle: string;
  slug: string;
  imageLink: string;
  tags: string[];
  body: string;
  backdropColor: string;
  author: string;
  imageWidth: number;
  imageHeight: number;
};

export type NoteProps = {
  sys: {
    id: string;
    created: string;
    updated: string;
  };
  fields: NotePropsFields;
};

export type TalkProps = {
  sys: {
    id: string;
  };
  fields: {
    title: string;
    slidesLink?: string;
    link: string;
    slug: string;
    videoLink?: string;
    bannerImage?: string;
  };
};

export type BlogPostProps = {
  sys: {
    id: string;
  };
  fields: {
    title: string;
    mediumLink: string;
  };
};

export type NotePostProps = {
  notePost: NoteProps;
  navigationPosts: {
    next: NoteProps | null;
    previous: NoteProps | null;
  };
  postContent: MdxRemote.Source;
};

export type ProjectPostProps = {
  projectPost: ProjectProps;
  navigationPosts: {
    next: ProjectProps | null;
    previous: ProjectProps | null;
  };
  postContent: MdxRemote.Source;
};

export type ArtPostProps = {
  artPost: ImageProps;
  navigationPosts: {
    next: ImageProps | null;
    previous: ImageProps | null;
  };
};
