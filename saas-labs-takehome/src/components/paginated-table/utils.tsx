import { type ColumnDef } from "../../hooks/use-table";
import { type Project } from "./types";

export const getColumns = () => {
    return [
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
    ] satisfies ColumnDef<Project>[];
};
