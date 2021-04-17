import React, { FC } from 'react';
import PropTypes from 'prop-types';

import ProjectsList from '../projects-list';

import { ProjectProps } from '../../types';

type ProjectsPageProps = {
  featuredProjects: ProjectProps[];
  sideProjects: ProjectProps[];
  miniProjects: ProjectProps[];
};

const ProjectsPage: FC<ProjectsPageProps> = ({ featuredProjects, miniProjects, sideProjects }) => {
  return (
    <ProjectsList
      featuredProjects={featuredProjects}
      miniProjects={miniProjects}
      sideProjects={sideProjects}
    />
  );
};

ProjectsPage.propTypes = {
  featuredProjects: PropTypes.arrayOf(PropTypes.any).isRequired,
  sideProjects: PropTypes.arrayOf(PropTypes.any).isRequired,
  miniProjects: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default ProjectsPage;
