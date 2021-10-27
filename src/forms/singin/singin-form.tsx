import React, { useState } from 'react'
import { useHistory } from 'react-router'
import { Card } from '../../components/card/card'
import { usePostRequest } from '../../hooks/usePostRequest'
import './singin-form.css'


export const SingInForm = () => {
	const [name, setName] = useState("")
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const history = useHistory()

	const { mutate } = usePostRequest('/auth/create-user', {
		onSuccess: () => {
			goToHome()
		},
		onError: console.log
	})

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

	const goToHome = () => {
		history.push('home')
	}

	const onSubmit = () => {
		mutate({email, password, name} as any)
		goToHome()
	}

	return (
		<div className="SingInFormContainer">
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
							onClick={onSubmit}
						>Registrar</button>
					</div>
				</form>
			</Card>
		</div>
	)
}