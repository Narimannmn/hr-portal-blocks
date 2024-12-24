import { FC } from 'react'
import { notFound } from 'next/navigation'
import { Inner, PageDocument } from '../types/page.type'
import { Skeleton } from '@/components/ui/skeleton'
import { RenderBlocks } from './RenderBlocks'

interface RenderPageProps {
	pageData?: PageDocument | null
	innerPage?: Inner | null
}

export const RenderPage: FC<RenderPageProps> = ({ pageData, innerPage }) => {
	if (!(pageData || innerPage)) {
		return <Skeleton />
	}
	if (innerPage) {
		return (
			<div className='flex flex-col gap-10 bg-[#1D161B] mt-16 p-5 rounded-xl'>
				<RenderBlocks layout={innerPage?.layout || []} />
			</div>
		)
	}else if (pageData) {
		return <RenderBlocks layout={pageData?.layout || []} />
	}

	return notFound()
}
