import React, { useState, useEffect } from 'react';
import Admin from '../components/Admin.jsx';

function AdminContainer() {
  const [towns, setTowns] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const apiBase = 'http://localhost:3000';

  useEffect(() => {
    const controller = new AbortController();
    let mounted = true;

    async function fetchTowns() {
      try {
        setLoading(true);
        setError(null);

        const res = await fetch(`${apiBase}/towns`, { signal: controller.signal });
        if (!res.ok) throw new Error('Failed to fetch towns');
        const data = await res.json();

        if (mounted) setTowns(data.towns || []);
      } catch (err) {
        // ignore aborted requests
        if (err.name === 'AbortError') return;
        if (mounted) setError(err.message);
      } finally {
        if (mounted) setLoading(false);
      }
    }

    fetchTowns();

    return () => {
      mounted = false;
      controller.abort();
    };
  }, []);


  return (
    <>
        <Admin towns={towns} loading={loading} error={error}></Admin>
    </>
  );
}

export default AdminContainer;