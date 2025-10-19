import { useState, useEffect, useCallback } from "react";

/**
 * Custom hook for fetching and mutating data from an API endpoint.
 * @param {string} url - The API endpoint to fetch data from.
 * @returns {object} { data, setData, loading, error, refetch, postData, deleteData }
 */
const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // GET request
    const fetchData = useCallback(async () => {
        setLoading(true);
        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error(`Error ${response.status}`);
            const result = await response.json();
            setData(result);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }, [url]);

    // POST request
    const postData = useCallback(
        async (newItem) => {
            try {
                const response = await fetch(url, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(newItem),
                });
                if (!response.ok) throw new Error(`Error ${response.status}`);
                const added = await response.json();
                setData((prev) => [...prev, added]);
                return added;
            } catch (err) {
                setError(err.message);
            }
        },
        [url]
    );

    // DELETE request
    const deleteData = useCallback(
        async (id) => {
            try {
                const response = await fetch(`${url}/${id}`, { method: "DELETE" });
                if (!response.ok) throw new Error(`Error ${response.status}`);
                setData((prev) => prev.filter((item) => item.id !== id));
            } catch (err) {
                setError(err.message);
            }
        },
        [url]
    );

    // Initial fetch
    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return { data, setData, loading, error, refetch: fetchData, postData, deleteData };
};

export default useFetch;
