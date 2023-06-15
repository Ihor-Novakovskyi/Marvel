import { useState, useCallback } from "react";

export default function useHttp() {
    const [processLoad, setProcessLoad] = useState(true);
    const [error, setError] = useState({ status: false, errorInfo: '' });

    const request = useCallback(async (url, method = 'GET', body = null, headers = { 'Content-Type': 'application/json' }) => {
        try {
            const resp = await fetch(url);
            if (!resp.ok) {
                throw new Error(`Could not fetch ${url}, status ${resp.status}`);
            }
            return resp.json();


        } catch (error) {
            setProcessLoad(false);
            setError({status: true, errorInfo: error})
        }
    }, [])
    return { setProcessLoad, setError, processLoad, error, request }
}