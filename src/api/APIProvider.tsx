import Axios, { AxiosInstance, AxiosRequestConfig } from 'axios'
import React, { createContext, useMemo } from 'react'
import { EnvironmentKeys } from '../config'

export const APIContext = createContext({} as AxiosInstance)

interface Props {
    children?: JSX.Element | JSX.Element[];
}

export const APIProvider = ({ ...props }: Props) => {

    const API = useMemo(() => {
        const config: AxiosRequestConfig = {
            baseURL: EnvironmentKeys.BASE_URL
        }
        return Axios.create(config)
    }, [])

    return (
        <APIContext.Provider {...props} value={API} />
    )
}

APIProvider.Context = APIContext
