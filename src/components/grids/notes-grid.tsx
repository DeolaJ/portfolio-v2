import React, { FC } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import Image from 'next/image';
import Link from 'next/link';

import { NoteProps } from '../../types';

type NotesGridProps = {
  notes: NoteProps[];
};

type CardLinkProps = {
  imageCard?: boolean;
};

const CardLink = styled.a<CardLinkProps>`
  > div {
    display: block !important;
  }

  > div:not(.portfolio-content) {
    box-shadow: 1px 1px 10px 1px rgba(0, 0, 0, 0.05);
  }
`;

const NotesGrid: FC<NotesGridProps> = ({ notes }) => {
  if (!notes.length) {
    return <p>There are no notes at the moment</p>;
  }

  return (
    <ul className="grid grid-cols-1 gap-4 mb-6 md:gap-6 lg:gap-8 md:grid-cols-2 lg:grid-cols-3">
      {notes.map((note) => (
        <Link href={`/notes/${note.fields.slug}`} key={note.sys.id}>
          <CardLink
            imageCard
            rel="noopener noreferrer"
            target="_blank"
            className="block w-full col-span-1 mb-12 rounded-md sm:w-3/4 md:w-full shadow-card hover:-translate-y-0.5">
            <Image
              src={note.fields.headerImage}
              alt={note.fields.title}
              width={note.fields.headerImageWidth * 0.7}
              height={note.fields.headerImageHeight * 0.7}
              className="rounded-tl-md rounded-tr-md"
              layout="intrinsic"
            />
            <div className="p-6">
              <h4 className="mb-2 text-base font-semibold text-gray-800 uppercase sm:text-lg">
                {note.fields.title}
              </h4>
              {/* <p className="mb-3 text-sm text-gray-700">{note.fields.subtitle}</p> */}
              <div className="flex flex-wrap items-center justify-start mb-3 text-gray-500 stack">
                {note.fields.tags.map((tag) => (
                  <span className="mr-2 text-xs" key={`${note.sys.id}-${tag}`}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </CardLink>
        </Link>
      ))}
    </ul>
  );
};

NotesGrid.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default NotesGrid;
