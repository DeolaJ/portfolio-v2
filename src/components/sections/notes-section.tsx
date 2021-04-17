import React, { ReactElement, FC } from 'react';
import PropTypes from 'prop-types';

import { SectionTitle, SectionTitleSub, SlicedListSection } from '../partials/section';
// import NotesGrid from '../partials/notes-grid';

import { NoteProps } from '../../types';

type NotesSectionProps = {
  notes: NoteProps[];
};

const NotesSection: FC<NotesSectionProps> = ({ notes }): ReactElement => {
  if (notes.length === 0) {
    return null;
  }

  return (
    <SlicedListSection
      listLink="/notes"
      internal
      listType="View All Notes"
      complete={notes.length > 3}>
      <SectionTitle>Notes</SectionTitle>

      <SectionTitleSub>Latest Notes.</SectionTitleSub>

      {/* <NotesGrid notes={notes} /> */}
    </SlicedListSection>
  );
};

NotesSection.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default NotesSection;
