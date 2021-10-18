import { useMutation, UseMutationOptions } from "react-query"
import { useApi } from "../api/useAPI"


export const usePostRequest = (url: string, options?: UseMutationOptions) => {
    const API = useApi()

    const mutation = useMutation((args: any) => {
        const {config = {}, ...data} = args

        return API.post(url, data, config)
    }, options ) 

    return mutation
}