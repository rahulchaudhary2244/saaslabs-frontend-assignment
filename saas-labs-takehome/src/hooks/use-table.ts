import { type ReactNode } from "react";
import { usePagination } from "./use-pagination";

type ColumnDef<T> = {
    columnId: string;
    headerName: string;
    cellRenderer: ({ row }: { row: T }) => ReactNode;
};

type Args<T> = {
    data: T[];
    columns: ColumnDef<T>[];
    getRowId: (row: T) => number;
};

export const useTable = <T>({ columns, data, getRowId }: Args<T>) => {
    const pagination = usePagination({
        data,
        defaultPage: 1,
        defaultPerPage: 5,
        totalCount: data.length,
    });

    const getHeaders = () =>
        columns.map((col) => ({
            columnId: col.columnId,
            headerValue: col.headerName,
        }));

    const getRows = (data: T[]) =>
        data.map((item) => ({
            rowId: getRowId(item),
            columnsInRow: columns.map((col) => ({
                columnId: col.columnId,
                cellValue: col.cellRenderer({ row: item }),
            })),
        }));

    const getCurrentPageRows = () => {
        const currentPageData = pagination.getCurrentPageData();
        return getRows(currentPageData);
    };

    return {
        getHeaders,
        getCurrentPageRows,
        pagination,
    };
};
