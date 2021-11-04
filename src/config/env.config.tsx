import env from "dotenv";

env.config({path: process.env.NODE_ENV === 'test'? '.env.test' : '.env'})

const BASE_URL = String(process.env.REACT_APP_BACKEND_BASE_URL || '')

export const EnvironmentKeys = {
    BASE_URL
}