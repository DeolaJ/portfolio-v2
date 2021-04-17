/* eslint-disable @typescript-eslint/no-explicit-any */
interface BlockContentType {
  content: BlockContentType;
  data: Record<string, unknown>;
  marks: any[];
  nodeType: string;
}

export type ImageProps = {
  sys: {
    id: string;
  };
  fields: {
    title: string;
    imageUrl: string;
    description: string;
    slug: string;
    tags: string[];
  };
};

export type ProjectProps = {
  sys: {
    id: string;
  };
  fields: {
    title: string;
    subtitle: BlockContentType;
    slug: string;
    imageLink: string;
    body: BlockContentType;
    stack: string[];
    githubLink: string;
    liveLink: string;
    projectType: 'featured' | 'side' | 'mini';
    descriptionImage: string;
  };
};

export type NoteProps = {
  sys: {
    id: string;
  };
  fields: {
    title: string;
    subtitle: BlockContentType;
    slug: string;
    headerImage: string;
    tags: string[];
    body: BlockContentType;
    backdropColor: string;
    author: string;
    headerImageWidth: number;
    headerImageHeight: number;
  };
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
