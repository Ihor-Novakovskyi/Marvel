import { useState, useCallback } from "react";


export default function useHttp() {
    const [loadState, setLoadState] = useState(true);
    const [error, setError] = useState(false);

    const request = useCallback(async(url, method = 'GET', body= null, headers= {'Content-Type': 'application/json'}) => {
        
    },[])
}