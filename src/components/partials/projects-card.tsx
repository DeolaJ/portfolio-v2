import React, { FC } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import Image from 'next/image';
import Button from './button';

import { ProjectProps } from '../../types';

type ProjectsCardProps = {
  projects: ProjectProps[];
  imageCard?: boolean;
};

type CardLinkProps = {
  imageCard?: boolean;
};

const FeaturedWrapper = styled.div`
  + div {
    margin-top: 3.5rem;
  }

  @media (min-width: 768px) {
    + div {
      margin-top: 2rem;
    }
  }
`;

const CardLink = styled.a<CardLinkProps>`
  > div {
    display: block !important;
  }

  > div:not(.portfolio-content) {
    box-shadow: ${({ imageCard }) => !imageCard && '1px 1px 10px 1px rgba(0, 0, 0, 0.05)'};
  }
`;

const ProjectsCard: FC<ProjectsCardProps> = ({ projects, imageCard }) => {
  if (!imageCard) {
    return (
      <>
        {projects.map((project) => (
          <FeaturedWrapper
            className="grid grid-cols-1 mb-10 md:mb-6 gap-y-4 md:gap-y-16 gap-x-8 md:grid-cols-5"
            key={project.sys.id}>
            <CardLink
              href={project.fields.liveLink}
              rel="noopener noreferrer"
              target="_blank"
              className="hover:-translate-y-1.5 flex rounded-lg shadow-card md:mb-16 md:col-start-1 md:col-end-4">
              <Image
                src={project.fields.imageLink}
                alt={project.fields.title}
                width={640}
                height={345}
                className="object-cover object-top w-full rounded-lg"
                layout="intrinsic"
              />
            </CardLink>
            <div className="md:col-start-4 md:col-end-6">
              <a
                href={project.fields.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 no-underline hover:underline">
                <h4 className="mb-2 text-lg font-semibold text-gray-800 uppercase sm:text-xl md:text-2xl">
                  {project.fields.title}
                </h4>
              </a>
              {/* <p className="mb-4 text-base text-gray-700">{project.fields.subtitle}</p> */}
              <div className="flex flex-wrap items-center justify-start mb-4 text-gray-500">
                {project.fields.stack.map((stack) => (
                  <span className="mr-4 text-sm" key={`${project.sys.id}-${stack}`}>
                    {stack}
                  </span>
                ))}
              </div>
              {project.fields.githubLink && (
                <Button text="View on Github" link={project.fields.githubLink} sub />
              )}
            </div>
          </FeaturedWrapper>
        ))}
      </>
    );
  }

  return (
    <>
      {projects.map((project) => (
        <CardLink
          key={project.sys.id}
          imageCard
          href={project.fields.liveLink}
          rel="noopener noreferrer"
          target="_blank"
          className="block w-full col-span-1 mb-12 rounded-md sm:w-3/4 md:w-full shadow-card hover:-translate-y-0.5">
          <Image
            src={project.fields.imageLink}
            alt={project.fields.title}
            width={640}
            height={345}
            className="rounded-tl-md rounded-tr-md"
            layout="intrinsic"
          />
          <div className="p-6 portfolio-content">
            <a
              href={project.fields.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 no-underline hover:underline">
              <h4 className="mb-2 text-base font-semibold text-gray-800 uppercase sm:text-lg">
                {project.fields.title}
              </h4>
            </a>
            {/* <p className="mb-3 text-sm text-gray-700">{project.fields.subtitle}</p> */}
            <div className="flex flex-wrap items-center justify-start mb-3 text-gray-500 stack">
              {project.fields.stack.map((stack) => (
                <span className="mr-2 text-xs" key={`${project.sys.id}-${stack}`}>
                  {stack}
                </span>
              ))}
            </div>
            <Button text="View on Github" link={project.fields.githubLink} sub />
          </div>
        </CardLink>
      ))}
    </>
  );
};

ProjectsCard.defaultProps = {
  imageCard: false,
};

ProjectsCard.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.any).isRequired,
  imageCard: PropTypes.bool,
};

export default ProjectsCard;
