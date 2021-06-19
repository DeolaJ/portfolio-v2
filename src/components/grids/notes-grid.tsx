import React, { FC } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import Image from 'next/image';
import Link from 'next/link';

import { NoteProps } from '../../types';

type NotesGridProps = {
  notes: NoteProps[];
};

type NoteCardProps = {
  imageCard?: boolean;
};

const NoteCard = styled.li<NoteCardProps>`
  > div {
    display: block !important;
    max-height: 200px;
  }

  > div:not(.portfolio-content) {
    box-shadow: 1px 1px 10px 1px rgba(0, 0, 0, 0.05);
  }

  a:hover {
    text-decoration: underline;
  }
`;

const NotesGrid: FC<NotesGridProps> = ({ notes }) => {
  if (!notes.length) {
    return <p>There are no notes at the moment</p>;
  }

  return (
    <ul className="grid grid-cols-1 gap-4 mb-6 md:gap-6 lg:gap-8 md:grid-cols-2 lg:grid-cols-3 list-none">
      {notes.map((note) => (
        <NoteCard
          key={note.sys.id}
          className="block w-full col-span-1 mb-12 rounded-md sm:w-3/4 md:w-full shadow-card hover:-translate-y-0.5">
          <Image
            src={note.fields.imageLink}
            alt={note.fields.title}
            width={note.fields.imageWidth * 0.3}
            height={note.fields.imageHeight * 0.3}
            className="rounded-tl-md rounded-tr-md object-cover"
            layout="intrinsic"
          />
          <div className="p-6">
            <Link href={`/notes/${note.fields.slug}`}>
              <a>
                <h4 className="mb-2 text-sm font-semibold text-gray-800 capitalize sm:text-base">
                  {note.fields.title}
                </h4>
              </a>
            </Link>
            <p className="mb-3 text-sm text-gray-700">{note.fields.subtitle}</p>
            <div className="flex flex-wrap items-center justify-start mb-3 text-gray-500 stack">
              {note.fields.tags.map((tag) => (
                <span className="mr-2 text-xs" key={`${note.sys.id}-${tag}`}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </NoteCard>
      ))}
    </ul>
  );
};

NotesGrid.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default NotesGrid;
