import { usePagination } from "../../hooks/use-pagination";
import { useTable } from "../../hooks/use-table";
import { Pagination } from "../pagination/pagination";
import styles from "./paginated-table.module.css";
import { type Project } from "./types";
import { getColumns } from "./utils";

type Props = {
    data: Project[];
};

export const PaginatedTable = ({ data }: Props) => {
    const { getHeaders, getRows } = useTable({
        data: data,
        getRowId: (row) => row["s.no"],
        columns: getColumns(),
    });

    const {
        currentPage,
        totalPages,
        getCurrentPageData,
        handleFirstPage,
        handleLastPage,
        handleNextPage,
        handlePreviousPage,
    } = usePagination({
        data: data,
        defaultPage: 1,
        defaultPerPage: 5,
        totalCount: data.length,
    });

    const getCurrentPageRows = () => {
        const currentPageData = getCurrentPageData();
        return getRows(currentPageData);
    };

    return (
        <>
            <table className={styles["styled-table"]}>
                <thead>
                    <tr>
                        {getHeaders().map(({ columnId, headerValue }) => (
                            <th key={columnId}>{headerValue}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {getCurrentPageRows().map(({ rowId, columnsInRow }) => (
                        <tr key={rowId}>
                            {columnsInRow.map(({ columnId, cellValue }) => (
                                <td key={columnId}>{cellValue}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                handleFirstPage={handleFirstPage}
                handleLastPage={handleLastPage}
                handleNextPage={handleNextPage}
                handlePreviousPage={handlePreviousPage}
            />
        </>
    );
};
