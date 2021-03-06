import React, { useCallback, useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { Card } from '../../components/card/card'
import { usePostRequest } from '../../hooks/usePostRequest'
import { useUser } from '../../hooks/useUser'
import './login-form.css'


export const LoginForm = () => {
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const history = useHistory()
	const [{ isLogged }, { setUserData }] = useUser()

	const goToHome = useCallback(() => {
		history.push('home')
	}, [history])

	useEffect(() => {
		if (isLogged)
			goToHome()
	}, [isLogged, goToHome])

	const { mutate } = usePostRequest('/auth/login', {
		onSuccess: (response) => {
			const { data: user } = response
			setUserData(user)
		},
		onError: console.log
	})

	const goToRegister = () => history.push('register')

	const onChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = event.target
		setEmail(value)
	}

	const onChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = event.target
		setPassword(value)
	}

	const onSubmit = () => mutate({ data: { email, password } })

	return (
		<div className="LoginFormContainer">
			<Card>
				<form onSubmit={onSubmit}>
					<div className="InputContainer">
						<label>
							Email:
							<input
								name="email"
								className="Input"
								placeholder="email"
								onChange={onChangeEmail}
							/>
						</label>
						<label>
							Senha:
							<input
								className="Input"
								name="password"
								placeholder="senha"
								type="password"
								onChange={onChangePassword}
							/>
						</label>

					</div>
					<div className="Button-Container">
						<button
							type="button"
							name="login"
							value="login"
							onClick={onSubmit}
						>Login</button>
						<button
							type="button"
							name="Cadastrar"
							value="Cadastro"
							onClick={goToRegister}
						>Cadastrar</button>
					</div>
				</form>
			</Card>
		</div>
	)
}