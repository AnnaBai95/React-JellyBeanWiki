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
    <>
      <div className="flex justify-end gap-1 md:gap-4">
        {pageNumbers.map((pageNumber, index) => (
          <div className="pagination hidden md:block" key={index}>
            <button
              className={`rounded-sm py-1 px-3 ${
                currentPage === pageNumber ? "pagination-active" : ""
              }`}
              onClick={() => onPageChange(pageNumber)}
            >
              {pageNumber}
            </button>
          </div>
        ))}
      </div>
      <div className="flex justify-center md:hidden">
        {currentPage !== 1 && (
          <button
            className="border-jelly-light-red border-2 rounded-md px-3 py-1 mr-3"
            onClick={() => onPageChange(currentPage - 1)}
          >
            Previous
          </button>
        )}
        {currentPage !== totalPages && (
          <button
            className="border-jelly-light-red border-2 rounded-md px-3 py-1"
            onClick={() => onPageChange(currentPage + 1)}
          >
            Next
          </button>
        )}
      </div>
      <div className="md:hidden text-center mt-3">
        <p>
          Page <span className="font-bold">{currentPage} </span> of {""}
          <span className="font-bold">{totalPages}</span>
        </p>
      </div>
    </>
  );
}

export default Pagination;
