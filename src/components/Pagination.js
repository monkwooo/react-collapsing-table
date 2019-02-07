//React
import React from 'react';
import { PaginationPropType } from '../utils/propTypes'
//Components
import { getIcon } from '../assets/icons/Icon';

const Pagination = ({ currentPage, totalRows, rowSize, nextPage, previousPage }) => {
    const totalPages = Math.ceil(totalRows / rowSize)

    const previousPageIcon = currentPage > 1 ?
        getIcon({ name: 'leftChevron', onClick: previousPage }) : null;
    const nextPageIcon = currentPage < totalPages ?
        getIcon({ name: 'rightChevron', onClick: nextPage }) : null;

    return (
      <span className="react-collapsible-page">
          { previousPageIcon }
          Page { currentPage } of { totalPages }
          { nextPageIcon }
      </span>
    );
};

Pagination.propTypes = PaginationPropType;

export default Pagination
