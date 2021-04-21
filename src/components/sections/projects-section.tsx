import React, { ReactElement, FC } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import { SectionTitle, SectionTitleSub, SlicedListSection } from '../partials/section';
import ProjectsGrid from '../grids/projects-grid';

import { ProjectProps } from '../../types';

type ProjectsSectionProps = {
  projects: ProjectProps[];
};

const ProjectSectionWrapper = styled(SlicedListSection)`
  background-repeat: no-repeat;
  background-position: -6% center;
  background-image: url(/pattern-three.png);
  background-size: 20%;
`;

const ProjectsSection: FC<ProjectsSectionProps> = ({ projects }): ReactElement => {
  if (projects.length === 0) {
    return null;
  }

  return (
    <ProjectSectionWrapper listLink="/projects" internal listType="View All Projects" complete>
      <SectionTitle>Projects</SectionTitle>

      <SectionTitleSub>Featured Projects.</SectionTitleSub>

      <ProjectsGrid projects={projects} />
    </ProjectSectionWrapper>
  );
};

ProjectsSection.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default ProjectsSection;
