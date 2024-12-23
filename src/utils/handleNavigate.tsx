import { useRouter } from 'next/navigation'
import { TLabel } from '../types/global.types'

export const handleNavigate = (
	router: ReturnType<typeof useRouter>,
	link: {
		linkLabels?: TLabel
		pageSlug?: { slug: string } | string
		customLink?: string | undefined
		linkType?: 'page' | 'custom'
	},
	callback?: () => void,
	baseUrl?: string | undefined,
	params?: boolean
) => {
	const { push } = router

	if (params) {
		const pageSlug =
			typeof link.pageSlug === 'object' ? link.pageSlug.slug : link.pageSlug
		const urlWithParams = new URLSearchParams()
		if (pageSlug) {
			urlWithParams.append('link', pageSlug)
		}
		const fullUrl = baseUrl
			? `${baseUrl}?${urlWithParams.toString()}`
			: `/?${urlWithParams.toString()}`
		push(fullUrl)
		return
	}

	if (link.linkType === 'page') {
		if (baseUrl) {
			if (link.pageSlug) {
				const slug =
					typeof link.pageSlug === 'object' ? link.pageSlug.slug : link.pageSlug
				push(`${baseUrl}/${slug}`)
			}
			callback?.()
		} else {
			if (link.pageSlug) {
				const slug =
					typeof link.pageSlug === 'object' ? link.pageSlug.slug : link.pageSlug
				push(`/${slug}`)
			}
			callback?.()
		}
	}

	if (link.linkType === 'custom' && link.customLink) {
		window.open(link.customLink, '_blank')
		callback?.()
	}
}
