import { useState, useEffect} from 'react';

function useTownMail(postcode) {
    const [generalMailName, setGeneralMailName] = useState(null);
    const [depEnvironmentMailName, setDepEnvironmentMailName] = useState(null);
    const [mailDomain, setMailDomain] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!postcode) return;

        const controller = new AbortController();
        let mounted = true;

        async function fetchTownMailAddress() {
            try {
                setLoading(true);
                setError(null);

                const res = await fetch(`http://localhost:3000/townMailAddresses/${postcode}`, { 
                    signal: controller.signal });

                if (!res.ok) throw new Error('Failed to fetch town mail address');

                const data = await res.json();

                if (mounted) {
                    setGeneralMailName(data.townMailAddress.generalMailName);
                    setDepEnvironmentMailName(data.townMailAddress.depEnvironmentMailName);
                    setMailDomain(data.townMailAddress.mailDomain);
                };
            } catch (err) {
                if (err.name === 'AbortError') return;
                if (mounted) setError(err.message);
            } finally {
                if (mounted) setLoading(false);
            }

        }
        fetchTownMailAddress();

        return () => {
            mounted = false;
            controller.abort();
        };
    }, [postcode]);

    return ({
        generalMailName,
        depEnvironmentMailName,
        mailDomain,
        loading,
        error
    })
}

export default useTownMail;