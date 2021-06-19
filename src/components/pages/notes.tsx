import React, { FC } from 'react';
import PropTypes from 'prop-types';

import NotesList from '../notes-list';

import { NoteProps } from '../../types';

type NotesPageProps = {
  notes: NoteProps[];
};

const NotesPage: FC<NotesPageProps> = ({ notes }) => {
  return <NotesList notes={notes} />;
};

NotesPage.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default NotesPage;
