import { useContext } from "react"
import { UserContext } from "../context/userContext"


export const useUser = () => {
    const context = useContext(UserContext)

    if (!context)
        throw new Error("This hook must be wrapped by UserProvider")

    return context
}