import { fetchPageData, fetchMainPage, fetchInnerPage } from '@/src/api/page'
import { PageDocument } from '@/src/types/page.type'
import { RenderPage } from '@/src/utils/RenderPage'
import { notFound, redirect } from 'next/navigation'
import NextTopLoader from 'nextjs-toploader'

async function fetchData(slug: string[]) {
	const pagesRoute: string[] = slug?.slice(0, 2)
	const pagesArray = {
		pageName: pagesRoute?.[0],
		innerPageName: pagesRoute?.[1],
	}
	let pageData: PageDocument | null = null
	let innerPage: PageDocument | null = null

	try {
		if (pagesArray.innerPageName) {
			innerPage = await fetchInnerPage(
				pagesArray.pageName,
				pagesArray.innerPageName
			)
		} else {
			const fetchedPage = pagesArray.pageName
				? await fetchPageData(pagesArray.pageName)
				: await fetchMainPage()
			pageData = fetchedPage
		}
	} catch (error) {
		console.error('Error fetching page data:', error)
	}
	return { pageData, innerPage }
}

export default async function Page({ params }: { params: { slug: string[] } }) {
	const searchParams = await params
	const { pageData } = await fetchData(searchParams.slug || [''])

	if (!pageData) {
		return notFound()
	}
	if (searchParams.slug && searchParams.slug[0] !== pageData.slug) {
		redirect(pageData.slug)
	}
	console.log(pageData)
	return (
		<>
			<NextTopLoader color={'#e12972'} />
			<div className='px-20'>
				<RenderPage pageData={pageData}/>
			</div>
		</>
	)
}
