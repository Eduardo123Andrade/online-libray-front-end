import { useContext } from "react"
import { APIContext } from "./APIProvider"


export const useApi = () => {
    const context = useContext(APIContext)

    if (!context) {
        throw new Error('This hook must be wrapped by APIProvider context')
    }

    return context
}