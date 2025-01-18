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

type Args = {
    url: string;
    initialState: unknown;
    onError?: (e: unknown) => void;
};

export const useFetch = ({ url, initialState, onError }: Args) => {
    const [data, setData] = useState(initialState);

    useEffect(() => {
        fetchData({ url, onError }).then((data) => setData(data));
    }, [url, onError]);

    return [data, setData];
};
