import { useFetch } from "../../hooks/use-fetch";
import { PaginatedTable } from "../paginated-table/paginated-table";
import { Project } from "../paginated-table/types";
import { DATA_FETCHING_URL } from "./constants";
import styles from "./projects-info.module.css";

export const ProjectsInfo = () => {
    const data = useFetch<Project[]>({
        url: DATA_FETCHING_URL,
        onError: (e) => console.error(e),
    });

    if (data === undefined)
        return <div className={styles.textStyle}>Loading...</div>;

    if (data === null)
        return (
            <div className={styles.textStyle}>
                An error occurred! Please check the console for more details.
            </div>
        );

    return (
        <>
            <h1 className={styles.textStyle}>
                Overview of Projects Info Table
            </h1>
            <PaginatedTable data={data} />
        </>
    );
};
