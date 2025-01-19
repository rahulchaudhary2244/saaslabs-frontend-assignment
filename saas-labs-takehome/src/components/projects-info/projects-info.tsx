import { useFetch } from "../../hooks/use-fetch";
import { PaginatedTable } from "../paginated-table/paginated-table";
import { Project } from "../paginated-table/types";
import { DATA_FETCHING_URL } from "./constants";

export const ProjectsInfo = () => {
    const data = useFetch<Project[]>({
        url: DATA_FETCHING_URL,
        onError: (e) => console.error(e),
    });

    if (data === undefined) return <div>Loading...</div>;

    if (data === null)
        return <div>Something went wrong!, check console for more detail</div>;

    return <PaginatedTable data={data} />;
};
