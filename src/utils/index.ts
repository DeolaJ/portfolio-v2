import {
  ImageProps,
  ImagePropsFields,
  NoteProps,
  NotePropsFields,
  ProjectProps,
  ProjectPropsFields,
} from '../types';
import { Entry } from 'contentful';

export function getNextAndPrevious<ListItemProps>(
  list: ListItemProps[],
  index: number
): { next: ListItemProps; previous: ListItemProps } {
  let next = 0,
    previous = list.length - 1;

  if (index !== 0) {
    previous = index - 1;
  }
  if (index !== list.length - 1) {
    next = index + 1;
  }

  return {
    next: list[next],
    previous: list[previous],
  };
}

export function generateArtPosts(list: Entry<ImagePropsFields>[]): ImageProps[] {
  return list.map((listItem) => ({
    sys: {
      id: listItem.sys.id,
    },
    fields: {
      title: listItem.fields.title || null,
      imageUrl: listItem.fields.imageUrl || null,
      description: listItem.fields.description || null,
      slug: listItem.fields.slug || null,
      tags: listItem.fields.tags || null,
    },
  }));
}

export function generateNotePosts(list: Entry<NotePropsFields>[]): NoteProps[] {
  return list.map((listItem) => ({
    sys: {
      id: listItem.sys.id,
    },
    fields: {
      title: listItem.fields.title || null,
      subtitle: listItem.fields.subtitle || null,
      slug: listItem.fields.slug || null,
      headerImage: listItem.fields.headerImage || null,
      tags: listItem.fields.tags || null,
      body: listItem.fields.body || null,
      backdropColor: listItem.fields.backdropColor || null,
      author: listItem.fields.author || null,
      headerImageWidth: listItem.fields.headerImageWidth || null,
      headerImageHeight: listItem.fields.headerImageHeight || null,
    },
  }));
}

export function generateProjectPosts(list: Entry<ProjectPropsFields>[]): ProjectProps[] {
  return list.map((listItem) => ({
    sys: {
      id: listItem.sys.id,
    },
    fields: {
      title: listItem.fields.title || null,
      subtitle: listItem.fields.subtitle || null,
      slug: listItem.fields.slug || null,
      imageLink: listItem.fields.imageLink || null,
      body: listItem.fields.body || null,
      stack: listItem.fields.stack || null,
      githubLink: listItem.fields.githubLink || null,
      liveLink: listItem.fields.liveLink || null,
      projectType: listItem.fields.projectType || null,
      descriptionImage: listItem.fields.descriptionImage || null,
    },
  }));
}
