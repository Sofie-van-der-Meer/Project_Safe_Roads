import React, { useState, useEffect} from 'react';

function useFragmentationMeasurements() {
    const [fragmentationMeasurements, setFragmentationMeasurements] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const controller = new AbortController();
        let mounted = true;

        async function fetchFragmentationMeasurements() {
            try {
                setLoading(true);
                setError(null);

                const res = await fetch('http://localhost:3000/fragmentationMeasurements', {
                    signal: controller.signal });
                
                if (!res.ok) throw new Error('Failed to fetch fragmentation measurements');

                const data = await res.json();

                if (mounted) {
                    setFragmentationMeasurements(data.fragmentationMeasurements);
                };
            } catch (err) {
                if (err.name === 'AbortError') return;
                if (mounted) setError(err.message);
            } finally {
                if (mounted) setLoading(false);
            }
        }
        fetchFragmentationMeasurements();

        return () => {
            mounted = false;
            controller.abort();
        };

    }, []);

    return ({
        fragmentationMeasurements,
        loading,
        error
    })
}

export default useFragmentationMeasurements;