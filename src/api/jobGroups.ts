import { JobGroup } from "../types/generated-types"
import { API_BASE_URL } from "./api"

export const fetchJobGroup = async (): Promise<JobGroup[]> => {
  try {
    const res = await fetch(`${API_BASE_URL}/api/jobGroups`, {
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