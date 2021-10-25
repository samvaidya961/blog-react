import { useState, useEffect } from "react"

const useFetch = (url) => {

    const [data, setData] = useState(null)
    const [ispending, setIsPending] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {

        const abortCont = new AbortController();


        fetch(url, { signal: abortCont.signal })
            .then(res => {
                if (!res.ok) {
                    throw Error('Cannot fetch the data from this endpoint !!!')
                }
                return res.json()
            })
            .then(data => {
                setData(data)
                setIsPending(false)
            })
            .catch(e => {
                if (e.name === 'AbortError') {
                    console.log('Fetch Aborted !')
                } else {
                    setIsPending(false)
                    setError(e.message)
                }
            })

        return () => abortCont.abort();

    }, [url])

    return { data, ispending, error }

}

export default useFetch;