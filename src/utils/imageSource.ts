export const imageSource = (url: string) => {
	return (process.env.NEXT_PUBLIC_API_BASE_URL + url).replace('/api', '')
}
