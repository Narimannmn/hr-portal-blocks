import { FC } from 'react'
import { notFound } from 'next/navigation'
import { PageDocument } from '../types/page.type'
import { Skeleton } from '@/components/ui/skeleton'
import { RenderBlocks } from './RenderBlocks'

interface RenderPageProps {
	pageData?: PageDocument | null
	innerPage?: PageDocument | null
}

export const RenderPage: FC<RenderPageProps> = ({ pageData, innerPage }) => {
	if (!pageData) {
		return <Skeleton />
	}
	if (innerPage) {
		return <RenderBlocks layout={innerPage?.layout} />
	}
	if (pageData) {
		return <RenderBlocks layout={pageData?.layout} />
	}

	return notFound()
}
