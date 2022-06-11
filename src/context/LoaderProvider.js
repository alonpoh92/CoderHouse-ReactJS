import { useState } from "react"
import { LoaderContext } from "./LoaderContext"

const LoaderProvider = ({children}) => {

    const [loader, setLoader] = useState(true);

    function stopLoader(){
        setTimeout(() => {
            setLoader(false)
        }, 0);
    }

    function runLoader(){
        setLoader(true);
    }

    const context = {
        loader,
        stopLoader,
        runLoader
    }

    return (
        <LoaderContext.Provider value={context}>
            {children}
        </LoaderContext.Provider>
    )
}
export default LoaderProvider