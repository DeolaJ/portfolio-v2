/* eslint-disable max-lines-per-function */
// import React, { useState, useMemo } from 'react';
// import PropTypes from 'prop-types';

// const resultsPerPage = 4;

// const generateTotalQuestions = (responseHeaders) => {
//   return responseHeaders.length - 4;
// };

// const generateTableBody = (partialResponses) => {
//   return partialResponses.map((response) => {
//     return {
//       entryId: response[4],
//       timeStamp: response[0],
//       questions: Object.keys(response).length - 3,
//     };
//   });
// };

// const SampleTable = () => {
//   // const [currentPage, changeCurrentPage] = useState(1);

//   // const filteredResponses = useMemo(() => {
//   //   const endIndex = currentPage * resultsPerPage;
//   //   const firstResultIndex = endIndex - resultsPerPage;
//   //   return responses.slice(firstResultIndex, endIndex);
//   // }, [responses, currentPage]);

//   // return null
// };

// export default SampleTable;
