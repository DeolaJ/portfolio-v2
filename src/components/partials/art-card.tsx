import React, { FC, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import styled from '@emotion/styled';

import { ImageProps } from '../../types';

type ArtCardProps = {
  art: ImageProps;
};

const ImageWrapper = styled.div`
  > img {
    transition: visibility 0.5s ease;
  }
`;

const ArtCard: FC<ArtCardProps> = ({ art }) => {
  const [visible, setVisible] = useState(false);
  const refPlaceholder = useRef<null | HTMLDivElement>();
  const refContentPlaceholder = useRef<null | HTMLDivElement>();

  const removePlaceholder = () => {
    refPlaceholder.current.remove();
    refContentPlaceholder.current.remove();
    setTimeout(() => setVisible(true), 500);
  };

  return (
    <article className="relative w-full rounded-lg">
      <div className="w-full bg-gray-100 rounded-lg h-80 shadow-artcard" ref={refPlaceholder} />

      <div className="px-3 py-5" ref={refContentPlaceholder}>
        <div className="w-2/4 h-3 mb-3 bg-gray-200" />
        <div className="w-4/5 h-3 bg-gray-200" />
      </div>

      {art.sys.id && (
        <>
          <ImageWrapper>
            <Image
              className={`absolute top-0 left-0 block object-cover w-full rounded-lg shadow-artcard ${
                visible ? 'visible' : 'invisible'
              }`}
              onLoad={removePlaceholder}
              onError={removePlaceholder}
              src={art.fields.imageUrl}
              alt={art.fields.title}
              width={840}
              height={1015}
            />
          </ImageWrapper>

          <div className="py-2 mb-2">
            <a href={art.fields.imageUrl}>
              <h4 className="mb-1 text-lg font-medium text-gray-800 hover:text-gray-900 hover:underline">
                {art.fields.title}
              </h4>
            </a>
            <p className="m-0 text-sm text-gray-700">{art.fields.description}</p>
          </div>
        </>
      )}
    </article>
  );
};

ArtCard.propTypes = {
  art: PropTypes.any.isRequired,
};

export default ArtCard;
