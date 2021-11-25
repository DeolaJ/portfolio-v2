import React, { FC } from 'react';

type ButtonProps = {
  text: string;
  type?: 'submit' | 'reset' | 'button';
  link?: string;
  className?: string;
  sub?: boolean;
  onClick?: () => void;
};

const Button: FC<ButtonProps> = ({ link, text, className, sub, type, onClick }) => {
  if (sub) {
    return (
      <>
        {link ? (
          <a href={link}>
            <button
              type={type || 'button'}
              onClick={onClick}
              className={`border-none bg-indigo-50 font-semibold cursor-pointer text-xs sm:text-sm rounded-sm px-3 py-2 sm:px-4 sm:py-3 text-custom-purple hover:bg-indigo-100 ${className}`}
              aria-label={text}>
              {text}
            </button>
          </a>
        ) : (
          <button
            type={type || 'button'}
            onClick={onClick}
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
            type={type || 'button'}
            onClick={onClick}
            className={`border border-solid font-semibold bg-transparent cursor-pointer rounded-sm px-5 py-3.5 text-custom-purple border-custom-purple hover:text-indigo-900 hover:border-indigo-900 ${className}`}
            aria-label={text}>
            {text}
          </button>
        </a>
      ) : (
        <button
          type={type || 'button'}
          onClick={onClick}
          className={`border border-solid font-semibold bg-transparent cursor-pointer rounded-sm px-5 py-3.5 text-custom-purple border-custom-purple hover:text-indigo-900 hover:border-indigo-900 ${className}`}
          aria-label={text}>
          {text}
        </button>
      )}
    </>
  );
};

export default Button;
