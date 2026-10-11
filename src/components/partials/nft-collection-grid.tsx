import { FC } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import Image from 'next/image';

type NFTCollectionGridProps = {
  collections: {
    id: number;
    imageLink: string;
    imageHeight: number;
    imageWidth: number;
    title: string;
    subtitle?: string;
    url: string;
    tags: string[];
  }[];
};

type NFTCollectionCardProps = {
  imageCard?: boolean;
};

const NFTCollectionCard = styled.li<NFTCollectionCardProps>`
  > div {
    display: block !important;
    max-height: 200px;
  }

  a:hover {
    text-decoration: underline;
  }
`;

const NFTCollectionGrid: FC<NFTCollectionGridProps> = ({ collections }) => {
  return (
    <ul className="grid grid-cols-1 gap-4 mb-6 md:gap-6 lg:gap-8 md:grid-cols-2 lg:grid-cols-3 list-none">
      {collections.map((collection) => (
        <NFTCollectionCard
          key={collection.id}
          className="block w-full col-span-1 mb-12 rounded-md sm:w-3/4 md:w-full shadow-card hover:-translate-y-0.5">
          <div className="rounded-tl-md rounded-tr-md object-cover h-48 overflow-hidden">
            <Image
              src={collection.imageLink}
              alt={collection.title}
              width={collection.imageWidth * 0.3}
              height={collection.imageHeight * 0.3}
              layout="intrinsic"
            />
          </div>
          <div className="p-6">
            <a href={collection.url} target="_blank" rel="noopener noreferrer">
              <h4 className="mb-2 text-sm font-semibold text-gray-800 capitalize sm:text-base">
                {collection.title}
              </h4>
            </a>
            <p className="mb-3 text-sm text-gray-700">{collection.subtitle}</p>
            <div className="flex flex-wrap items-center justify-start mb-3 text-gray-500 stack">
              {collection.tags.map((tag) => (
                <span className="mr-2 text-xs" key={`${collection.id}-${tag}`}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </NFTCollectionCard>
      ))}
    </ul>
  );
};

NFTCollectionGrid.propTypes = {
  collections: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default NFTCollectionGrid;
