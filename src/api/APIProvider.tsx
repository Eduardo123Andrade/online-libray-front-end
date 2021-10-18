import Axios, { AxiosInstance, AxiosRequestConfig } from 'axios'
import React, { createContext, useMemo } from 'react'

export const APIContext = createContext({} as AxiosInstance)

interface Props {
    children?: JSX.Element | JSX.Element[];
    config?: AxiosRequestConfig
}

export const APIProvider = ({ config, ...props }: Props) => {
    const { baseURL } = config ?? {}

    const API = useMemo(() => Axios.create({
        baseURL: baseURL ?? 'http://localhost:3001/v1',
    }), [baseURL])

    return (
        <APIContext.Provider {...props} value={API} />
    )
}

APIProvider.Context = APIContext
