import React, { FC } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

import { NoteProps } from '../../types';
import { useInView } from '../../animation/use-in-view';

type NotesGridProps = {
  notes: NoteProps[];
};

const NoteShell = styled.li`
  a:hover {
    text-decoration: underline;
  }
`;

const ClipMask = styled(motion.div)`
  border-radius: 0.375rem;
  overflow: hidden;

  > div {
    display: block !important;
    max-height: 200px;
  }
`;

const CLIP_HIDDEN = 'inset(0% 100% 0% 0%)';
const CLIP_SHOWN = 'inset(0% 0% 0% 0%)';

type NoteItemProps = {
  note: NoteProps;
  index: number;
};

const NoteCardItem: FC<NoteItemProps> = ({ note, index }) => {
  const [ref, inView] = useInView<HTMLLIElement>({ rootMargin: '-10% 0px' });
  return (
    <NoteShell
      ref={ref}
      className="block w-full col-span-1 mb-12 rounded-md sm:w-3/4 md:w-full shadow-card hover:-translate-y-0.5"
    >
      <ClipMask
        initial={{ clipPath: CLIP_HIDDEN }}
        animate={{ clipPath: inView ? CLIP_SHOWN : CLIP_HIDDEN }}
        transition={{
          duration: 1.05,
          ease: [0.83, 0, 0.17, 1],
          delay: inView ? index * 0.12 : 0,
        }}
      >
        <div className="rounded-tl-md rounded-tr-md object-cover h-48 overflow-hidden">
          <Image
            src={note.fields.imageLink}
            alt={note.fields.title}
            width={note.fields.imageWidth * 0.45}
            height={note.fields.imageHeight * 0.45}
            layout="intrinsic"
          />
        </div>
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
      </ClipMask>
    </NoteShell>
  );
};

const NotesGrid: FC<NotesGridProps> = ({ notes }) => {
  if (!notes.length) {
    return <p>There are no notes at the moment</p>;
  }

  return (
    <ul className="grid grid-cols-1 gap-4 mb-6 md:gap-6 lg:gap-8 md:grid-cols-2 lg:grid-cols-3 list-none">
      {notes.map((note, i) => (
        <NoteCardItem key={note.sys.id} note={note} index={i} />
      ))}
    </ul>
  );
};

NotesGrid.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default NotesGrid;
