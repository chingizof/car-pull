import { useEffect } from "react"

export const NoPage = () => {
    useEffect(() => {
        window.location.replace('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
      }, [])
    return(
        <>
            We will finish this page soon:)))
        </>
    )
}