import { FC } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import Image from 'next/image';

type NFTProfilesGridProps = {
  profiles: {
    id: number;
    imageLink: string;
    imageHeight: number;
    imageWidth: number;
    title: string;
    url: string;
  }[];
};

type NFTProfileCardProps = {
  imageCard?: boolean;
};

const NFTProfileCard = styled.li<NFTProfileCardProps>`
  > div {
    display: block !important;
    max-height: 200px;
  }

  a:hover {
    text-decoration: underline;
  }
`;

const NFTProfileGrid: FC<NFTProfilesGridProps> = ({ profiles }) => {
  return (
    <ul className="grid grid-cols-1 gap-4 mb-6 md:gap-6 lg:gap-8 md:grid-cols-2 lg:grid-cols-3 list-none">
      {profiles.map((profile) => (
        <NFTProfileCard
          key={profile.id}
          className="block w-full col-span-1 mb-12 rounded-md sm:w-3/4 md:w-full shadow-card hover:-translate-y-0.5">
          <div className="rounded-tl-md rounded-tr-md object-cover h-48 overflow-hidden">
            <Image
              src={profile.imageLink}
              alt={profile.title}
              width={profile.imageWidth * 0.3}
              height={profile.imageHeight * 0.3}
              layout="intrinsic"
            />
          </div>
          <div className="p-6">
            <a href={profile.url} target="_blank" rel="noopener noreferrer">
              <h4 className="mb-2 text-sm font-semibold text-gray-800 capitalize sm:text-base">
                {profile.title}
              </h4>
            </a>
          </div>
        </NFTProfileCard>
      ))}
    </ul>
  );
};

NFTProfileGrid.propTypes = {
  profiles: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default NFTProfileGrid;
