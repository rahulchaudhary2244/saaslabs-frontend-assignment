import { useFetch } from "../../hooks/use-fetch";
import { useTable } from "../../hooks/use-table";

import { Button } from "../button/button";

type Project = {
    "s.no": number;
    "amt.pledged": number;
    "percentage.funded": number;
};

const URL =
    "https://raw.githubusercontent.com/saaslabsco/frontend-assignment/refs/heads/master/frontend-assignment.json";

export const PaginatedTable = () => {
    const [data] = useFetch({
        url: URL,
        initialState: [],
    });

    const table = useTable({
        data: data as Project[],
        getRowId: (row) => row["s.no"],
        columns: [
            {
                columnId: "1",
                headerName: "S.No.",
                cellRenderer: ({ row }) => row["s.no"],
            },
            {
                columnId: "2",
                headerName: "Percentage funded",
                cellRenderer: ({ row }) => row["percentage.funded"],
            },
            {
                columnId: "3",
                headerName: "Amount pledged",
                cellRenderer: ({ row }) => row["amt.pledged"],
            },
        ],
    });

    const {
        pageInfo: { currentPage, totalPages },
        handleFirstPage,
        handleLastPage,
        handleNextPage,
        handlePreviousPage,
    } = table.pagination;

    return (
        <>
            <table>
                <thead>
                    <tr>
                        {table.getHeaders().map(({ columnId, headerValue }) => (
                            <th key={columnId}>{headerValue}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {table
                        .getCurrentPageRows()
                        .map(({ rowId, columnsInRow }) => (
                            <tr key={rowId}>
                                {columnsInRow.map(({ columnId, cellValue }) => (
                                    <td key={columnId}>{cellValue}</td>
                                ))}
                            </tr>
                        ))}
                </tbody>
            </table>
            <div style={{ display: "flex" }}>
                <Button onClick={handleFirstPage}>fist page</Button>
                <Button onClick={handlePreviousPage}>previous</Button>
                {currentPage}/{totalPages}
                <Button onClick={handleNextPage}>next</Button>
                <Button onClick={handleLastPage}>last page</Button>
            </div>
        </>
    );
};
