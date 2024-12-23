'use client'
import React, {
	createContext,
	useContext,
	useEffect,
	useState,
	ReactNode,
	FC,
} from 'react'
import { CITIES } from '../consts/consts'

type UserInfoContextType = {
	location: {
		labelKz: string
		labelRu: string
		labelEn: string
	} | null
	setLocation: (location: {
		labelKz: string
		labelRu: string
		labelEn: string
	}) => void
}

const UserInfoContext = createContext<UserInfoContextType>({
	location: null,
	setLocation: () => {},
})

export const UserInfoProvider: FC<{ children: ReactNode }> = ({ children }) => {
	const [location, setLocation] = useState<{
		labelKz: string
		labelRu: string
		labelEn: string
	} | null>(null)

	useEffect(() => {
		// Ensure `localStorage` is accessed only on the client
		const savedLocation = localStorage.getItem('userCity')
		if (savedLocation) {
			setLocation(JSON.parse(savedLocation))
		} else {
			const fetchLocation = async () => {
				try {
					const response = await fetch('http://ip-api.com/json')
					const data = await response.json()
					const userCity = data.city
					const cityData = CITIES[userCity] || {
						labelKz: userCity,
						labelRu: userCity,
						labelEn: userCity,
					}
					setLocation(cityData)
					localStorage.setItem('userCity', JSON.stringify(cityData))
				} catch (error) {
					console.error(error)
				}
			}

			fetchLocation()
		}
	}, [])

	useEffect(() => {
		if (location) {
			localStorage.setItem('userCity', JSON.stringify(location))
		}
	}, [location])

	return (
		<UserInfoContext.Provider value={{ location, setLocation }}>
			{children}
		</UserInfoContext.Provider>
	)
}

export const useUserInfo = () => useContext(UserInfoContext)
