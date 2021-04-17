import React, { FC } from 'react';
import PropTypes from 'prop-types';

import { ProjectProps } from '../../types';
import ProjectsCard from '../partials/projects-card';

type ProjectsGridProps = {
  projects: ProjectProps[];
  imageCard?: boolean;
};

const ProjectsGrid: FC<ProjectsGridProps> = ({ projects, imageCard }) => {
  if (!projects.length) {
    return <p>There are no projects available at the moment</p>;
  }

  if (!imageCard) {
    return <ProjectsCard projects={projects} />;
  }

  return (
    <ul className="grid grid-cols-1 gap-4 mb-6 md:gap-6 lg:gap-8 md:grid-cols-2 lg:grid-cols-3">
      <ProjectsCard projects={projects} imageCard />
    </ul>
  );
};

ProjectsGrid.defaultProps = {
  imageCard: false,
};

ProjectsGrid.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.any).isRequired,
  imageCard: PropTypes.bool,
};

export default ProjectsGrid;
