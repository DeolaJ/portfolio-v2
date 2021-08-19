import React, { ReactElement, FC } from 'react';
import PropTypes from 'prop-types';

import { SectionTitle, SectionTitleSub, SlicedListSection } from '../partials/section';
import NotesGrid from '../grids/notes-grid';

import { NoteProps } from '../../types';

type NotesSectionProps = {
  notes: NoteProps[];
};

const NotesSection: FC<NotesSectionProps> = ({ notes }): ReactElement => {
  if (notes.length === 0) {
    return null;
  }

  return (
    <SlicedListSection listLink="/notes" internal listType="View All Notes" complete>
      <SectionTitle>Notes</SectionTitle>

      <SectionTitleSub>Latest Notes.</SectionTitleSub>

      <NotesGrid notes={notes.slice(0, 3)} />
    </SlicedListSection>
  );
};

NotesSection.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default NotesSection;
