import { PageDocument } from "../types/page.type"
import { API_BASE_URL } from "./api"

export const fetchPageData = async (
	slug: string
): Promise<PageDocument | null> => {
	try {
		const url = `${API_BASE_URL}/api/pages?where[slug][equals]=${slug}&depth=3&limit=100`
		const res = await fetch(url, {
			cache: 'no-store',
			headers: {
				'Content-Type': 'application/json',
			},
			credentials: 'include',
		})
		const data: { docs: PageDocument[] } = await res.json()

		return data.docs?.[0] || null
	} catch (err) {
		console.error('Error fetching page data:', err)
		return null
	}
}


export const fetchMainPage = async (): Promise<PageDocument | null> => {
	try {
		// using fetch cuz axios doesn't work on server
		const res = await fetch(
			`${API_BASE_URL}/api/pages?where[index][equals]=${true}&depth=3&limit=100`,
			{
				cache: 'no-store',
				headers: {
					'Content-Type': 'application/json',
				},
				credentials: 'include',
			}
		)

		const data: { docs: PageDocument[] } = await res.json()

		return data.docs?.[0] || null
	} catch (err) {
		console.log(err)
		return null
	}
}

export const fetchInnerPage = async (
	section: string,
	cardId?: string
): Promise<PageDocument | null> => {
	try {
		const response = await fetch(
			`${API_BASE_URL}/api/inner?where[section_slug][equals]=${section}&cardId=${cardId}`,
			{
				cache: 'no-store',
				headers: {
					'Content-Type': 'application/json',
				},
				credentials: 'include',
			}
		)
		const data: { docs: PageDocument[] } = await response.json()

		return data.docs?.[0] || null
	} catch (error) {
		console.error('Ошибка при получении данных:', error)
		return null
	}
}