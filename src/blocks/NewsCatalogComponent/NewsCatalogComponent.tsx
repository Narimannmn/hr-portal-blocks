'use client'

import { NewsCard } from '@/src/components/UIComponents/NewsCard/NewsCard'
import { useLang } from '@/src/contexts/lang.context'
import { NewsCatalogLayout } from '@/src/types/page.type'
import { useState, useEffect } from 'react'
import { NewsGroup } from '@/src/types/generated-types'
import { fetchNewsGroup } from '@/src/api/newsGroup'
import { NewsFilter } from '@/src/components/UIComponents/NewsFilter/NewsFilter'

export const NewsCatalogComponent = ({ news, title }: NewsCatalogLayout) => {
	const { t } = useLang()

	// State for news groups and other filters
	const [newsGroup, setNewsGroup] = useState<NewsGroup[]>([])
	const [selectedGroup, setSelectedGroup] = useState<string | null>(null)
	const [sortOrder, setSortOrder] = useState<string>('asc')

	// Fetch news groups on mount
	useEffect(() => {
		const fetchGroups = async () => {
			const groups = await fetchNewsGroup()
			setNewsGroup(groups)
		}
		fetchGroups()
	}, [])

	// Filter and sort news based on selected filters
	const filteredNews = news
		.filter(item =>
			selectedGroup ? `${item.newsGroups.id}` === selectedGroup : true
		)
		.sort((a, b) => {
			const dateA = new Date(a.createdAt).getTime()
			const dateB = new Date(b.createdAt).getTime()
			return sortOrder === 'asc' ? dateB - dateA : dateA - dateB
		})

	return (
		<div className='pb-24 pt-8 space-y-8'>
			<h2 className='text-2xl font-bold mb-6'>{t(title)}</h2>
			{/* Pass the fetched newsGroup data to NewsFilter */}
			<NewsFilter
				newsGroup={newsGroup}
				selectedGroup={selectedGroup}
				setSelectedGroup={setSelectedGroup}
				sortOrder={sortOrder}
				setSortOrder={setSortOrder}
			/>
			<div className='grid grid-cols-[repeat(auto-fill,_minmax(405px,_1fr))] gap-x-8 gap-y-12'>
				{filteredNews.length === 0 && (
					<p className='text-white'>Новостей нет</p>
				)}
				{filteredNews.map(item => (
					<NewsCard newItem={item} key={item.id} />
				))}
			</div>
		</div>
	)
}
