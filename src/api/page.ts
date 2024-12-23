import { PageDocument } from "../types/page.type"
import { API_BASE_URL } from "./api"

export const fetchPageData = async (
	slug: string
): Promise<PageDocument | null> => {
	try {
		const url = `${API_BASE_URL}/api/pages?where[slug][equals]=${slug}&limit=100`
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
			`${API_BASE_URL}/api/pages?where[index][equals]=${true}&limit=100`,
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