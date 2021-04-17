// import React, { FC } from 'react';
// import PropTypes from 'prop-types';

// import { ContentTypeProps } from '../../types';

// type VerticalListProps = {
//   items: ContentTypeProps;
// };

// const VerticalList: FC<VerticalListProps> = ({ items }) => {
//   return (
//     <>
//       {items.map((post) => (
//         <article key={post.id}>
//           <a
//             href={post.link}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="block p-2.5 mb-6 text-gray-700 border border-gray-500 border-solid rounded-md sm:p-6 hover:text-blue-600 hover:border-blue-600">
//             <h4>{post.title}</h4>
//           </a>
//         </article>
//       ))}
//     </>
//   );
// };

// VerticalList.propTypes = {
//   items: PropTypes.arrayOf(PropTypes.any).isRequired,
// };

// export default VerticalList;
