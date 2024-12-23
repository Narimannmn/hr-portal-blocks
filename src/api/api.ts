export const API_BASE_URL =
	process.env.NODE_ENV === 'development'
		? process.env.NEXT_PUBLIC_API_BASE_URL
		: 'https://eub-web03-lt1.eub.kz'
