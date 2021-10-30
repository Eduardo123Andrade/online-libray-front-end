import { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios"
import { MutationFunction, useMutation, UseMutationOptions } from "react-query"
import { useApi } from "../api/useAPI"

type Data = {
    data: any
    config?: AxiosRequestConfig
}


export const usePostRequest = (url: string, options?: UseMutationOptions<AxiosResponse<any, any>, AxiosError, Data, any>) => {
    const API = useApi()

    const mutationFunction: MutationFunction<AxiosResponse, Data> = ({data, config}: Data) => {
        return API.post(url, data, config)
    }

    const mutation = useMutation(mutationFunction, options)

    return mutation
}