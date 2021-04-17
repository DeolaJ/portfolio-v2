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
      title: listItem.fields.title,
      imageUrl: listItem.fields.imageUrl,
      description: listItem.fields.description,
      slug: listItem.fields.slug,
      tags: listItem.fields.tags,
    },
  }));
}

export function generateNotePosts(list: Entry<NotePropsFields>[]): NoteProps[] {
  return list.map((listItem) => ({
    sys: {
      id: listItem.sys.id,
    },
    fields: {
      title: listItem.fields.title,
      subtitle: listItem.fields.subtitle,
      slug: listItem.fields.slug,
      headerImage: listItem.fields.headerImage,
      tags: listItem.fields.tags,
      body: listItem.fields.body,
      backdropColor: listItem.fields.backdropColor,
      author: listItem.fields.author,
      headerImageWidth: listItem.fields.headerImageWidth,
      headerImageHeight: listItem.fields.headerImageHeight,
    },
  }));
}

export function generateProjectPosts(list: Entry<ProjectPropsFields>[]): ProjectProps[] {
  return list.map((listItem) => ({
    sys: {
      id: listItem.sys.id,
    },
    fields: {
      title: listItem.fields.title,
      subtitle: listItem.fields.subtitle,
      slug: listItem.fields.slug,
      imageLink: listItem.fields.imageLink,
      body: listItem.fields.body,
      stack: listItem.fields.stack,
      githubLink: listItem.fields.githubLink,
      liveLink: listItem.fields.liveLink,
      projectType: listItem.fields.projectType,
      descriptionImage: listItem.fields.descriptionImage,
    },
  }));
}
