import { useEffect, useState } from "react";

const fetchData = async ({
    url,
    onError,
}: {
    url: string;
    onError?: (e: unknown) => void;
}) => {
    try {
        const response = await fetch(url);
        return await response.json();
    } catch (e) {
        if (onError) {
            onError(e);
        }
    }
};

type Args<T> = {
    url: string;
    initialState: T;
    onError?: (e: unknown) => void;
};

export const useFetch = <T>({ url, initialState, onError }: Args<T>) => {
    const [data, setData] = useState(initialState);

    useEffect(() => {
        fetchData({ url, onError }).then((data) => setData(data));
    }, [url, onError]);

    return [data, setData] as const;
};
