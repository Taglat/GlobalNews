import { useTheme } from "../../context/theme-context";
import cl from "./styles.module.css";

const Pagination = ({
  totalPages,
  currentPage,
  handlePreviousPage,
  handleNextPage,
  handlePageClick,
}: {
  totalPages: number;
  currentPage: number;
  handlePreviousPage: () => void;
  handleNextPage: () => void;
  handlePageClick: (page: number) => void;
}) => {
  const { isDark } = useTheme();

  return (
    <div className={`${cl.pagination} ${isDark ? cl.dark : cl.light}`}>
      <button
        disabled={currentPage <= 1}
        onClick={handlePreviousPage}
        className={cl.arrow}
      >
        {"<"}
      </button>
      <div className={cl.list}>
        {[...Array(totalPages)].map((_, index) => {
          return (
            <button
              onClick={() => handlePageClick(index + 1)}
              className={cl.pageNumber}
              disabled={index + 1 === currentPage}
              key={index}
            >
              {index + 1}
            </button>
          );
        })}
      </div>
      <button
        className={cl.arrow}
        disabled={currentPage >= totalPages}
        onClick={handleNextPage}
      >
        {">"}
      </button>
    </div>
  );
};

export default Pagination;
