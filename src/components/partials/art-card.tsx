import React, { FC, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

import { ImageProps } from '../../types';
import { fadeInUp, staggerMd } from '../../animation';

type ArtCardProps = {
  art: ImageProps;
  page?: boolean;
};

const ImageWrapper = styled(motion.div)`
  > img {
    transition: visibility 0.5s ease;
  }
`;

const ArtCard: FC<ArtCardProps> = ({ art, page }) => {
  const [visible, setVisible] = useState(false);
  const refPlaceholder = useRef<null | HTMLDivElement>();
  const refContentPlaceholder = useRef<null | HTMLDivElement>();

  const removePlaceholder = () => {
    refPlaceholder.current.remove();
    refContentPlaceholder.current.remove();
    setTimeout(() => setVisible(true), 500);
  };

  return (
    <motion.article
      variants={staggerMd}
      className="relative w-full rounded-lg"
      whileHover={{ scale: 1.025 }}
      whileTap={{ scale: 0.975 }}>
      <div
        className="w-full bg-gray-100 rounded-lg h-72 shadow-artcard absolute left-0 top-0 z-10"
        ref={refPlaceholder}
      />

      <div className="px-3 py-5" ref={refContentPlaceholder}>
        <div className="w-2/4 h-3 mb-3 bg-gray-200" />
        <div className="w-4/5 h-3 bg-gray-200" />
      </div>

      {art.sys.id && (
        <>
          <ImageWrapper variants={fadeInUp}>
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

          {!page && (
            <motion.div className="py-2 mb-2" variants={fadeInUp}>
              <a href={art.fields.imageUrl}>
                <h4 className="mb-1 text-lg font-medium text-gray-800 hover:text-gray-900 hover:underline">
                  {art.fields.title}
                </h4>
              </a>
              {art.fields.description && (
                <p className="m-0 text-sm text-gray-700">{art.fields.description}</p>
              )}
            </motion.div>
          )}
        </>
      )}
    </motion.article>
  );
};

ArtCard.defaultProps = {
  page: false,
};

ArtCard.propTypes = {
  art: PropTypes.any.isRequired,
  page: PropTypes.bool,
};

export default ArtCard;
