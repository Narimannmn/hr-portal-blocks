import { Employee } from "../types/generated-types"
import { API_BASE_URL } from "./api"


export const fetchEmployeeById = async (
	employeeId: string
): Promise<Employee | null> => {
	try {
		const url = `${API_BASE_URL}/api/employees/${employeeId}` // Assuming this endpoint works for your employee collection
		const res = await fetch(url, {
			cache: 'no-store',
			headers: {
				'Content-Type': 'application/json',
			},
			credentials: 'include', // Use if authentication is needed
		})

		if (!res.ok) {
			throw new Error(`HTTP error! Status: ${res.status}`)
		}

		const data = await res.json()
		console.log(data) // Log the data to see the full response
		return data?.doc[0] || null
	} catch (err) {
		console.error('Error fetching employee:', err)
		return null
	}
}
