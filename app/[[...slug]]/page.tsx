import { fetchPageData, fetchMainPage, fetchInnerPage } from '@/src/api/page'
import { Inner, PageDocument } from '@/src/types/page.type'
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
	let innerPage: Inner | null = null

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
	const { pageData, innerPage } = await fetchData(searchParams.slug || [''])
	console.log(innerPage)
	if (!(pageData || innerPage)) {
		return notFound()
	}
	if (searchParams.slug && pageData && searchParams.slug[0] !== pageData.slug) {
		redirect(pageData.slug)
	}
	if (
		searchParams.slug &&
		innerPage &&
		searchParams.slug[0] !== innerPage.section_slug
	) {
		redirect(`${innerPage.section}/${innerPage.section_slug}`)
	}
	return (
		<>
			<NextTopLoader color={'#e12972'} />
			<div className='px-20'>
				<RenderPage pageData={pageData} innerPage={innerPage} />
			</div>
		</>
	)
}
