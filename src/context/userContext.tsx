import { createContext } from "react";
import { User } from "../types/user.type";


type UserContextData = [
	{
		user: User,
		isLogged: boolean,
	},
	{
		setUserData: (user: User) => void
		clearUserData: () => void
	}
]

export const UserContext = createContext({} as UserContextData)
