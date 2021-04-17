import React, { FC } from 'react';
import PropTypes from 'prop-types';

import { Section, SectionTitle, SectionTitleSub } from './partials/section';
import ProjectGrid from './grids/projects-grid';

import { ProjectProps } from '../types';

type ProjectsListProps = {
  featuredProjects: ProjectProps[];
  sideProjects: ProjectProps[];
  miniProjects: ProjectProps[];
};

const ProjectsList: FC<ProjectsListProps> = ({ featuredProjects, miniProjects, sideProjects }) => {
  return (
    <Section>
      <SectionTitle>All Projects</SectionTitle>

      <SectionTitleSub>Featured Projects.</SectionTitleSub>

      <ProjectGrid projects={featuredProjects} />

      <SectionTitleSub className="mt-16 md:mt-12">Side projects.</SectionTitleSub>

      <ProjectGrid projects={sideProjects} imageCard />

      <SectionTitleSub>Mini projects.</SectionTitleSub>

      <ProjectGrid projects={miniProjects} imageCard />
    </Section>
  );
};

ProjectsList.propTypes = {
  featuredProjects: PropTypes.arrayOf(PropTypes.any).isRequired,
  sideProjects: PropTypes.arrayOf(PropTypes.any).isRequired,
  miniProjects: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default ProjectsList;
