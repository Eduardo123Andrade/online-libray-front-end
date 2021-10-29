import React, { ReactNode, useState } from 'react'
import { UserContext } from '../context/userContext'
import { User } from '../types/user.type'


type UserProviderProps = {
	children: ReactNode
}

const INITIAL_STATE: User = {
	id: '',
	name: '',
	email: '',
}


export const UserProvider = ({ children }: UserProviderProps) => {
	const [user, setUser] = useState<User>(INITIAL_STATE)
	const [isLogged, setIsLogged] = useState(false)


	const setUserData = (user: User) => {
		setUser(user)
		setIsLogged(true)
	}

	const clearUserData = () => {
		setUser(INITIAL_STATE)
		setIsLogged(false)
	}

	return <UserContext.Provider children={children} value={[{
		user,
		isLogged
	},
	{
		setUserData,
		clearUserData
	}]} />
}