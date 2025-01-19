import {
    ChevronFirst,
    ChevronLast,
    ChevronLeft,
    ChevronRight,
} from "lucide-react";
import styles from "./pagination.module.css";

const ICON_SIZE = 20;

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
    handleNextPage,
    handleLastPage,
    currentPage,
    totalPages,
}: Props) => {
    const isFirstPage = currentPage === 1;
    const isLastPage = currentPage === totalPages;

    return (
        <nav
            className={styles.pagination}
            role="navigation"
            aria-label="Pagination navigation"
        >
            <button
                disabled={isFirstPage}
                onClick={handleFirstPage}
                aria-label="Go to first page"
                title="First Page"
                className={styles.navButton}
            >
                <ChevronFirst size={ICON_SIZE} aria-hidden="true" />
                <span className={styles.hiddenText}>First</span>
            </button>
            <button
                disabled={isFirstPage}
                onClick={handlePreviousPage}
                aria-label="Go to previous page"
                title="Previous Page"
                className={styles.navButton}
            >
                <ChevronLeft size={ICON_SIZE} aria-hidden="true" />
                <span className={styles.hiddenText}>Previous</span>
            </button>
            <span
                className={styles.pageInfo}
                aria-live="polite"
                aria-atomic="true"
            >
                Page {currentPage} of {totalPages}
            </span>
            <button
                disabled={isLastPage}
                onClick={handleNextPage}
                aria-label="Go to next page"
                title="Next Page"
                className={styles.navButton}
            >
                <ChevronRight size={ICON_SIZE} aria-hidden="true" />
                <span className={styles.hiddenText}>Next</span>
            </button>
            <button
                disabled={isLastPage}
                onClick={handleLastPage}
                aria-label="Go to last page"
                title="Last Page"
                className={styles.navButton}
            >
                <ChevronLast size={ICON_SIZE} aria-hidden="true" />
                <span className={styles.hiddenText}>Last</span>
            </button>
        </nav>
    );
};
