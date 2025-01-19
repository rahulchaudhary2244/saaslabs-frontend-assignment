import styles from "./pagination.module.css";

type Props = {
    handleFirstPage: VoidFunction;
    handlePreviousPage: VoidFunction;
    handleNextPage: VoidFunction;
    handleLastPage: VoidFunction;
    currentPage: number;
    totalPages: number;
};

export const Pagination = ({
    handleFirstPage,
    handlePreviousPage,
    handleLastPage,
    handleNextPage,
    currentPage,
    totalPages,
}: Props) => {
    const isFirstPage = currentPage === 1;
    const isLastPage = currentPage === totalPages;

    return (
        <div className={styles["pagination"]}>
            <button disabled={isFirstPage} onClick={handleFirstPage}>
                First
            </button>
            <button disabled={isFirstPage} onClick={handlePreviousPage}>
                Previous
            </button>
            <span className={styles["page-info"]}>
                {`${currentPage} / ${totalPages}`}
            </span>
            <button disabled={isLastPage} onClick={handleNextPage}>
                Next
            </button>
            <button disabled={isLastPage} onClick={handleLastPage}>
                Last
            </button>
        </div>
    );
};
