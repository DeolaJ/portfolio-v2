import React, { useRef, useState, FC } from 'react';
import Image from 'next/image';

// import Button from './button';

import { CloudinaryImageProps } from '../../types';

type ComicsTemplatesCardProps = {
  comicsTemplate: CloudinaryImageProps;
};

const ComicsTemplatesCard: FC<ComicsTemplatesCardProps> = ({ comicsTemplate }) => {
  const [visible, setVisible] = useState(false);
  const refPlaceholder = useRef(null);
  const refContentPlaceholder = useRef(null);

  const removePlaceholder = () => {
    if (refPlaceholder) {
      refPlaceholder.current.remove();
      refContentPlaceholder.current.remove();
    }
    setTimeout(() => setVisible(true), 500);
  };

  return (
    <article className="relative w-full rounded-lg shadow">
      <div className="w-full bg-gray-100 rounded-lg h-60 shadow-artcard" ref={refPlaceholder} />

      <div className="px-3 py-5" ref={refContentPlaceholder}>
        <div className="w-2/4 h-3 mb-3 bg-gray-200" />
      </div>

      <Image
        className={`absolute left-0 block object-cover w-full rounded-lg shadow-artcard ${
          visible ? 'visible' : 'invisible'
        }`}
        onLoad={removePlaceholder}
        onError={removePlaceholder}
        src={`https://res.cloudinary.com/dzpntisxj/image/${comicsTemplate.type}/v${comicsTemplate.version}/${comicsTemplate.public_id}.${comicsTemplate.format}`}
        alt="Comic template"
        width={640}
        height={640}
      />

      {/* <Button
        text="Download"
        sub
        link={`https://res.cloudinary.com/dzpntisxj/image/${comicsTemplate.type}/v${comicsTemplate.version}/${comicsTemplate.public_id}.${comicsTemplate.format}`}
      /> */}
    </article>
  );
};

export default ComicsTemplatesCard;
