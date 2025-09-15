// Usage
// const { data, loading, error } = useFetch("https://jsonplaceholder.typicode.com/posts");

import { useState, useEffect } from "react";

export function useFetch(url, options = {}) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!url) return;

        let isMounted = true;

        const fetchData = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await fetch(url, options);
                if (!response.ok) throw new Error("Network response was not ok");
                const result = await response.json();
                if (isMounted) setData(result);
            } catch (err) {
                if (isMounted) setError(err.message);
            } finally {
                if (isMounted) setLoading(false);
            }
        };

        fetchData();
        return () => {
            isMounted = false;
        };
    }, [url, options]);

    return { data, loading, error };
}
