import { AxiosRequestConfig, AxiosResponse } from "axios"
import { useQuery } from "react-query"
import { useApi } from "../api/useAPI"


export const useGetRequest = (url: string, configs?: AxiosRequestConfig): any => {
    const API = useApi()

    const {data, ...rest} = useQuery({
        queryKey: [url, configs],
        queryFn: () => API.get(url, configs),
    })

    return {
        ...rest,
        data: data?.data
    }
}