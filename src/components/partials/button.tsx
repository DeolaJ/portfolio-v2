import React, { FC } from 'react';
import PropTypes from 'prop-types';

type ButtonProps = {
  link?: string;
  text: string;
  className?: string;
  sub?: boolean;
};

const Button: FC<ButtonProps> = ({ link, text, className, sub }) => {
  if (sub) {
    return (
      <>
        {link ? (
          <a href={link}>
            <button
              type="button"
              className={`border-none bg-indigo-50 font-semibold cursor-pointer text-xs sm:text-sm rounded-sm px-3 py-2 sm:px-4 sm:py-3 text-custom-purple hover:bg-indigo-100 ${className}`}
              aria-label={text}>
              {text}
            </button>
          </a>
        ) : (
          <button
            type="button"
            className={`border-none bg-indigo-50 font-semibold cursor-pointer text-xs sm:text-sm rounded-sm px-3 py-2 sm:px-4 sm:py-3 text-custom-purple hover:bg-indigo-100 ${className}`}
            aria-label={text}>
            {text}
          </button>
        )}
      </>
    );
  }

  return (
    <>
      {link ? (
        <a href={link}>
          <button
            type="button"
            className={`border border-solid font-semibold bg-transparent cursor-pointer rounded-sm px-5 py-3.5 text-custom-purple border-custom-purple hover:text-indigo-900 hover:border-indigo-900 ${className}`}
            aria-label={text}>
            {text}
          </button>
        </a>
      ) : (
        <button
          type="button"
          className={`border border-solid font-semibold bg-transparent cursor-pointer rounded-sm px-5 py-3.5 text-custom-purple border-custom-purple hover:text-indigo-900 hover:border-indigo-900 ${className}`}
          aria-label={text}>
          {text}
        </button>
      )}
    </>
  );
};

Button.defaultProps = {
  className: '',
  link: '',
  sub: false,
};

Button.propTypes = {
  className: PropTypes.string,
  link: PropTypes.string,
  text: PropTypes.string.isRequired,
  sub: PropTypes.bool,
};

export default Button;
