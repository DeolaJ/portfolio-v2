import React, { FC } from 'react';
import PropTypes from 'prop-types';

import { Section, SectionTitle, SectionTitleSub } from './partials/section';
import NotesGrid from './grids/notes-grid';

import { NoteProps } from '../types';

type NotesListProps = {
  notes: NoteProps[];
};

const NotesList: FC<NotesListProps> = ({ notes }) => {
  return (
    <Section>
      <SectionTitle>All Notes</SectionTitle>

      <SectionTitleSub>Check out all my personal notes.</SectionTitleSub>

      <NotesGrid notes={notes} />
    </Section>
  );
};

NotesList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default NotesList;
