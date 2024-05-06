import React, { useEffect, useState } from "react";
import "./Pagination.css";

function Pagination({ totalPages, onPageChange, isNew, setIsNew }) {
  console.log(isNew);
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    onPageChange(pageNumber);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <li key={i} className={i === currentPage ? "active-bar":""}>
          <button onClick={() => handlePageChange(i)}>{i}</button>
        </li>
      );
    }
    return pageNumbers;
  };
  useEffect(() => {
    if (isNew) {
      setCurrentPage(1);
      setIsNew(false);
    }
  }, [isNew]);
  return (
    <ul className="pagination">
      <li>
        <button
          onClick={() =>
            handlePageChange(currentPage > 1 ? currentPage - 1 : 1)
          }
          disabled={currentPage === 1}
        >
          &lt;
        </button>
      </li>
      {renderPageNumbers()}
      <li>
        <button
          onClick={() =>
            handlePageChange(
              currentPage < totalPages ? currentPage + 1 : totalPages
            )
          }
          disabled={currentPage === totalPages}
        >
          &gt;
        </button>
      </li>
    </ul>
  );
}

export default Pagination;
