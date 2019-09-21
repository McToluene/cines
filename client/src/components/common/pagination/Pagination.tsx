import React from "react";
import _ from "lodash";

interface IPagination {
  itemsCount: number;
  pageSize: number;
  currentPage: number;
  onPageChange: (pageNumber: number) => void;
}

const Pagination: React.FC<IPagination> = props => {
  const { itemsCount, pageSize, onPageChange, currentPage } = props;

  const pagesCount = Math.ceil(itemsCount / pageSize);
  const pages = _.range(1, pagesCount + 1);

  if (pagesCount === 1) return null;

  return (
    <nav className="ui right floated blue pagination menu">
      <a href="#prev" className="icon item">
        <i className="left chevron icon"></i>
      </a>
      {pages.map(page => (
        <a
          key={page}
          href="#page"
          className={page === currentPage ? "item active" : "item"}
          onClick={() => onPageChange(page)}
        >
          {page}
        </a>
      ))}
      <a href="#next" className="icon item">
        <i className="right chevron icon"></i>
      </a>
    </nav>
  );
};

export default Pagination;
