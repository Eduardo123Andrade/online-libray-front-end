import React from 'react'
import { useUser } from '../../hooks/useUser'
import { Card } from '../card/card'


export const Hello = () => {
	const [{ user }] = useUser()

	return (
		<div>
			<Card>
				<h1>Olá, {user.name}</h1>
				<label>Contribua com nosso arcervo e adicione mais um titulo a lista</label>
			</Card>
		</div>
	)
}