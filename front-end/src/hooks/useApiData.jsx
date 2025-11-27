// get API data

import { useState, useEffect } from 'react';

function useApiData(apiUrl) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!apiUrl) return;

        const controller = new AbortController();
        let mounted = true; 

        async function fetchData() {
            try {
                setLoading(true);
                setError(null);

                const res = await fetch(apiUrl, { signal: controller.signal });

                if (!res.ok) throw new Error('Failed to fetch data from API');
                const result = await res.json();

                if (mounted) setData(result);
            } catch (err) {
                if (err.name === 'AbortError') return;
                if (mounted) setError(err.message);
            } finally {
                if (mounted) setLoading(false);
            }
        }
        fetchData();

        return () => {
            mounted = false;
            controller.abort();
        };

    }, [apiUrl]);

    return { data, loading, error };

}

export default useApiData;