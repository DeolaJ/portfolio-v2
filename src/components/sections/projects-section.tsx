import React, { ReactElement, FC } from 'react';
import PropTypes from 'prop-types';

import { SectionTitle, SectionTitleSub, SlicedListSection } from '../partials/section';
import ProjectsGrid from '../grids/projects-grid';

import { ProjectProps } from '../../types';

type ProjectsSectionProps = {
  projects: ProjectProps[];
};

const ProjectsSection: FC<ProjectsSectionProps> = ({ projects }): ReactElement => {
  if (projects.length === 0) {
    return null;
  }

  return (
    <SlicedListSection listLink="/projects" internal listType="View All Projects" complete>
      <SectionTitle>Projects</SectionTitle>

      <SectionTitleSub>Featured Projects.</SectionTitleSub>

      <ProjectsGrid projects={projects} />
    </SlicedListSection>
  );
};

ProjectsSection.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default ProjectsSection;
