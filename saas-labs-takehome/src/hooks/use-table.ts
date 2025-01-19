import { type ReactNode } from "react";

export type ColumnDef<T> = {
    columnId: string;
    headerName: string;
    cellRenderer: ({ row }: { row: T }) => ReactNode;
};

type Args<T> = {
    data: T[];
    columns: ColumnDef<T>[];
    getRowId: (row: T) => number;
};

export const useTable = <T>({ columns, getRowId }: Args<T>) => {
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

    return {
        getHeaders,
        getRows,
    };
};
