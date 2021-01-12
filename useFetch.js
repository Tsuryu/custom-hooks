import { useEffect, useRef, useState } from "react"

export const useFetch = (url) => {
    const isMounted = useRef(true);
    const [state, setState] = useState({data: null, loading: true, error: null});

    useEffect(() => {
        return () => {
            isMounted.current = false;
        }
    }, []);

    useEffect(() => {
        const asyncFetch = async () => {
            try {
                setState({loading: true, error: null, data: null});
                
                const response = await fetch(url);
                const data = await response.json();

                isMounted.current && setState({
                    loading: false,
                    error: null,
                    data
                }); 
            } catch (error) {
                console.log(error);
                isMounted.current && setState({
                    loading: false,
                    error: 'No se pudo obtener la data',
                    data: null,
                });
            }
        }
        asyncFetch();
    }, [url]);

    return state;
}
