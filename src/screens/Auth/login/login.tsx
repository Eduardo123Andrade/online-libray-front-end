import React from 'react'
import { LoginForm } from '../../../forms/login/login-form'
import './login.css'


export const Login = () => {
    console.log("Login")
    return (
        <div className="Login">
            <LoginForm />
        </div>
    )
}