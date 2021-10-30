import { AxiosError, AxiosRequestConfig } from "axios"
import { useQuery } from "react-query"
import { useApi } from "../api/useAPI"


export const useGetRequest = (url: string, configs?: AxiosRequestConfig<any>) => {
    const API = useApi()

    const {data, ...rest} = useQuery<any, AxiosError, any, any>({
        queryKey: [url, configs],
        queryFn: () => API.get(url, configs),
        
    })

    return {
        ...rest,
        data: data?.data
    }
}