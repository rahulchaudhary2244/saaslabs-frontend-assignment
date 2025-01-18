import { useReducer } from "react";

type State = {
    perPage: number;
    currentPage: number;
};

type Args<T> = {
    totalCount: number;
    defaultPerPage: number;
    defaultPage: number;
    data: T[];
};

export const usePagination = <T>({
    totalCount,
    defaultPage,
    defaultPerPage,
    data,
}: Args<T>) => {
    const [{ currentPage, perPage }, setState] = useReducer(
        (state: State, action: Partial<State>) => ({ ...state, ...action }),
        {
            perPage: defaultPerPage,
            currentPage: defaultPage,
        }
    );
    const totalPages = Math.ceil(totalCount / perPage);

    const getDataByPage = (pageNo: number) =>
        data.slice(pageNo * perPage - perPage, pageNo * perPage);

    const getCurrentPageData = () => getDataByPage(currentPage);

    const handleNextPage = () => {
        if (currentPage >= totalPages) return;
        setState({ currentPage: currentPage + 1 });
    };
    const handlePreviousPage = () => {
        if (currentPage <= 1) return;
        setState({ currentPage: currentPage - 1 });
    };
    const handleFirstPage = () => setState({ currentPage: 1 });
    const handleLastPage = () => setState({ currentPage: totalPages });

    return {
        pageInfo: { currentPage, totalPages },
        getCurrentPageData,
        handleNextPage,
        handlePreviousPage,
        handleFirstPage,
        handleLastPage,
    };
};
