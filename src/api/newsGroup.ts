import { NewsGroup } from '../types/generated-types'
import { API_BASE_URL } from './api'

export const fetchNewsGroup = async (): Promise<NewsGroup[]> => {
	try {
		const res = await fetch(`${API_BASE_URL}/api/newsGroups`, {
			cache: 'no-store',
			headers: {
				'Content-Type': 'application/json',
			},
		})
		const data = await res.json()
		return data.docs || []
	} catch (err) {
		console.log(err)
		return []
	}
}
