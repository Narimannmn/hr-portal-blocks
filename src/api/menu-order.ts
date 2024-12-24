import { MenuItem, MenuOrder } from '../types/generated-types'
import { ICollection } from '../types/global.types'
import { API_BASE_URL } from './api'

export const fetchMenuOrder = async () => {
	const url = `${API_BASE_URL}/api/menu-order/`
	const res = await fetch(url, {
		cache: 'no-store',
		headers: {
			'Content-Type': 'application/json',
		},
		credentials: 'include',
	})

	const data: ICollection<MenuOrder> = await res.json() // Await the JSON parsing
  const extractedMenuItems: MenuItem[] | undefined =
		data.docs[0].menuItems?.map(({ menuItem }) => menuItem)
	return extractedMenuItems || []
}
