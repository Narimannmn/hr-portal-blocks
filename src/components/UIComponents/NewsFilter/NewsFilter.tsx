'use client'

import { Button } from '@/components/ui/button'
import { useLang } from '@/src/contexts/lang.context'
import { NewsGroup } from '@/src/types/generated-types'

interface NewsFilterProps {
	newsGroup: NewsGroup[]
	selectedGroup: string | null
	setSelectedGroup: (group: string | null) => void
	sortOrder: string
	setSortOrder: (order: string) => void
}

export const NewsFilter = ({
	newsGroup,
	selectedGroup,
	setSelectedGroup,
	sortOrder,
	setSortOrder,
}: NewsFilterProps) => {
	const { t } = useLang()

	const handleGroupChange = (group: string | null) => {
		setSelectedGroup(group)
	}

	const handleSortChange = (order: string) => {
		setSortOrder(order)
	}

	return (
		<div className='flex justify-between items-center flex-wrap gap-y-4'>
			<div className='flex gap-2 flex-wrap'>
				<Button
					variant='outline'
					className={`${
						!selectedGroup ? 'bg-white text-black' : 'bg-black text-white'
					}`}
					onClick={() => handleGroupChange(null)}
				>
					{t({
						labelEn: 'All news',
						labelKz: 'Барлық жаңалықтар',
						labelRu: 'Все новости',
					})}
				</Button>
				{newsGroup.map(group => (
					<Button
						key={group.id}
						variant='outline'
						className={`${
							selectedGroup === `${group.id}`
								? 'bg-white text-black'
								: 'bg-black text-white'
						}`}
						onClick={() => handleGroupChange(`${group.id}`)}
					>
						{t(group.name)}
					</Button>
				))}
			</div>
			<select
				className='w-80 bg-[#1D161B] text-white rounded-lg px-4 py-2'
				value={sortOrder}
				onChange={e => handleSortChange(e.target.value)}
			>
				<option value='asc'>
					{t({
						labelEn: 'Newest First',
						labelKz: 'Ең жаңа алдымен',
						labelRu: 'Сначала новые',
					})}
				</option>
				<option value='desc'>
					{t({
						labelEn: 'Oldest First',
						labelKz: 'Ең ескі алдымен',
						labelRu: 'Сначала старые',
					})}
				</option>
			</select>
		</div>
	)
}
