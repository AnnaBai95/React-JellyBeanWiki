import "../../scss/components/pagination.scss";

function Pagination({
  currentPage,
  pageSize,
  totalCount,
  totalPages,
  onPageChange,
}) {
  let pageNumbers = [];

  for (let num = 1; num <= totalPages; num++) {
    pageNumbers.push(num);
  }

  return (
    <div className="flex justify-end gap-1 md:gap-4">
      {pageNumbers.map((pageNumber, index) => (
        <div className="pagination" key={index}>
          <button
            className={`rounded-sm py-1 px-1 md:px-3 ${
              currentPage === pageNumber ? "pagination-active" : ""
            }`}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </button>
        </div>
      ))}
    </div>

  );
}

export default Pagination;
