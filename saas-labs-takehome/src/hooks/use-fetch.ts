import { useEffect, useState } from "react";

const fetchData = async (url: string) => {
    const response = await fetch(url);
    return await response.json();
};

type Args = {
    url: string;
    onError?: (e: unknown) => void;
};

export const useFetch = <T>({ url, onError }: Args) => {
    const [data, setData] = useState<T | undefined | null>(undefined);

    useEffect(() => {
        fetchData(url)
            .then((data) => setData(data))
            .catch((e) => {
                if (onError) {
                    onError(e);
                }
                setData(null);
            });
    }, [url]);

    return data;
};
