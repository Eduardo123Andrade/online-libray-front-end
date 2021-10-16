import React, { useState } from 'react'
import { Card } from '../../components/card/card'
import './login-form.css'


export const LoginForm = () => {
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")

	const onChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = event.target
		setEmail(value)
	}

	const onChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = event.target
		setPassword(value)
	}

	const onSubmit = () => {
		console.log({ email, password })
	}

	return (
		<div className="Container">
			<Card>
				<form onSubmit={onSubmit}>
					<div className="Input-Container">
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
						<input
							type="submit"
							name="login"
							value="login"
						/>
						<button
							type="button"
							value="cadastrar"
							name="Cadastrar"
						>cadastro</button>

					</div>
				</form>
			</Card>
		</div>
	)
}