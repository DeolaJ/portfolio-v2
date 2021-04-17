import React, { FC } from 'react';
import PropTypes from 'prop-types';

import { NoteProps } from '../../types';

type NotesPageProps = {
  notes: NoteProps[];
};

const NotesPage: FC<NotesPageProps> = ({ notes }) => {
  return <section>Notes</section>;
};

NotesPage.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default NotesPage;
