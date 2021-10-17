import React, { useState } from 'react'
import { Card } from '../../components/card/card'
import './singin-form.css'


export const SingInForm = () => {
	const [name, setName] = useState("")
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

	const onChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = event.target
		setName(value)
	}

	const onSubmit = () => {
		console.log({ email, password, name })
	}

	return (
		<div className="Container">
			<Card>
				<form onSubmit={onSubmit}>
					<div className="Input-Container">
						<label>
							Nome:
							<input
								name="Name"
								className="Input"
								placeholder="nome"
								onChange={onChangeName}
							/>
						</label>

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
							value="Registrar"
							name="Registrar"
						>Registrar</button>
					</div>
				</form>
			</Card>
		</div>
	)
}