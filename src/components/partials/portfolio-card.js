import React from 'react';
import PropTypes from 'prop-types';
import Button from './button';

const PortfolioCard = ({ projects, mini }) => {
  if (!mini) {
    return (
      <>
        {projects.map((project) => (
          <div
            className="grid grid-cols-1 mb-14 md:mb-6 gap-y-4 md:gap-y-16 gap-x-8 md:grid-cols-5"
            key={project.id}
          >
            <a
              href={project.link}
              rel="noopener noreferrer"
              target="_blank"
              className="hover:-translate-y-1.5 block rounded-lg shadow-card md:mb-16 md:col-start-1 md:col-end-4">
              <img src={project.img} alt={project.title} className="w-full rounded-lg" />
            </a>
            <div className="md:col-start-4 md:col-end-6">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 no-underline hover:underline"
              >
                <h4 className="mb-2 text-lg font-semibold text-gray-800 uppercase sm:text-xl md:text-2xl">
                  {project.title}
                </h4>
              </a>
              <p className="mb-4 text-base text-gray-700">{project.description}</p>
              <div className="flex flex-wrap items-center justify-start mb-4 text-gray-500">
                {project.stack.split(', ').map((stack) => (
                  <span className="mr-4 text-sm" key={`${project.id}-${stack}`}>
                    {stack}
                  </span>
                ))}
              </div>
              {project.github_link && (
                <Button text="View on Github" link={project.github_link} sub />
              )}
            </div>
          </div>
        ))}
      </>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-4 mb-6 md:gap-6 lg:gap-8 md:grid-cols-2 lg:grid-cols-3 ">
      {projects.map((project) => (
        <a
          key={project.id}
          href={project.link}
          rel="noopener noreferrer"
          target="_blank"
          className="block w-full col-span-1 mb-12 rounded-md sm:w-3/4 md:w-full shadow-card hover:-translate-y-0.5"
        >
          <img
            src={project.img}
            alt={project.title}
            className="shadow-under rounded-tl-md rounded-tr-md"
          />
          <div className="p-6">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 no-underline hover:underline"
            >
              <h4 className="mb-2 text-base font-semibold text-gray-800 uppercase sm:text-lg">
                {project.title}
              </h4>
            </a>
            <p className="mb-3 text-sm text-gray-700">{project.description}</p>
            <div className="flex flex-wrap items-center justify-start mb-3 text-gray-500">
              {project.stack.split(', ').map((stack) => (
                <span className="mr-2 text-xs" key={`${project.id}-${stack}`}>
                  {stack}
                </span>
              ))}
            </div>
            <Button text="View on Github" link={project.github_link} sub />
          </div>
        </a>
      ))}
    </div>
  );
};

PortfolioCard.defaultProps = {
  mini: false,
};

PortfolioCard.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.object).isRequired,
  mini: PropTypes.bool,
};

export default PortfolioCard;
